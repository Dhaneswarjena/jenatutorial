"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";

export default function LikeCommentSection({ pageId }) {
  const { user } = useAuth();
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [ratings, setRatings] = useState([]);

  // Load data
  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem(`likes-${pageId}`)) || 0;
    const savedComments =
      JSON.parse(localStorage.getItem(`comments-${pageId}`)) || [];
    const savedRatings =
      JSON.parse(localStorage.getItem(`ratings-${pageId}`)) || [];
    setLikes(savedLikes);
    setComments(savedComments);
    setRatings(savedRatings);
  }, [pageId]);

  // Like handler
  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`likes-${pageId}`, JSON.stringify(newLikes));
  };
  const handleRating = (value) => {
    if (!user) {
      toast.error("Please login to rate");
      return;
    }

    const updatedRatings = [...ratings, value];
    setRatings(updatedRatings);
    localStorage.setItem(`ratings-${pageId}`, JSON.stringify(updatedRatings));

    toast.success(`You rated ${value} star${value > 1 ? "s" : ""} ⭐`);
  };

  // Comment handler
  const handleComment = () => {
    if (!text.trim()) return;

    if (!user) {
      toast.error("Please login to comment");
      return;
    }

    const newComment = {
      name: user.name,
      message: text,
      time: new Date().toLocaleString(),
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem(`comments-${pageId}`, JSON.stringify(updated));
    setText("");
  };
  const averageRating =
    ratings.length > 0
      ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1)
      : null;
  return (
    <div className=" bg-white rounded-2xl p-6 shadow">
      {/* Like */}
      {/* ⭐ Rating */}
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-2">
          Rate this content
        </p>

        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRating(star)}
              className="text-2xl transition hover:scale-110"
            >
              ⭐
            </button>
          ))}

          {averageRating && (
            <span className="ml-2 text-sm text-gray-500">
              {averageRating} / 5 ({ratings.length})
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={handleLike}
          className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          👍 Like
        </button>
        <span className="text-gray-600">{likes} likes</span>
      </div>

      {/* Comment input */}
      <div className="mb-6">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
          className="w-full border rounded-xl p-3 mb-3"
        />
        <button
          onClick={handleComment}
          className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition"
        >
          Post Comment
        </button>
      </div>

      {/* Comments list */}
      <div className="space-y-4">
        {comments.length === 0 && (
          <p className="text-gray-500 text-sm">No comments yet.</p>
        )}

        {comments.map((c, i) => (
          <div key={i} className="border rounded-xl p-4">
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-sm">{c.name}</span>
              <span className="text-xs text-gray-400">{c.time}</span>
            </div>
            <p className="text-gray-700">{c.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

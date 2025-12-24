"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";

const COURSES = [
  "HTML / HTML5",
  "CSS / CSS3",
  "SASS",
  "Tailwind CSS",
  "JavaScript",
  "jQuery",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Backend Architecture",
  "Web Applications",
  "Fullstack Development",
  "Accessibility",
  "Coding Practice",
  "Interview Questions",
];

export default function CoursesPage() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [hydrated, setHydrated] = useState(false); // 🔑 KEY FIX

  /* ✅ Load ONCE from localStorage */
  useEffect(() => {
    const registeredUser = localStorage.getItem("registeredUser");
    if (registeredUser) {
      setUser(JSON.parse(registeredUser));
    }
    const saved = localStorage.getItem("selectedCourses");
    if (saved) {
      setSelectedCourses(JSON.parse(saved));
    }
    setHydrated(true); // 🔑 allow saving AFTER load
  }, []);

  /* ❌ DO NOT save until hydration is done */
  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem("selectedCourses", JSON.stringify(selectedCourses));
  }, [selectedCourses, hydrated]);

  const addCourse = (course) => {
    if (!selectedCourses.includes(course)) {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const removeCourse = (course) => {
    setSelectedCourses(selectedCourses.filter((c) => c !== course));
  };

  return (
    <ProtectedRoute>
      <section className="max-w-6xl mx-auto py-16 px-4">
        {/* 🔙 Back Button */}
        <button
          onClick={() => router.push("/")}
          className="mb-6 inline-flex items-center text-blue-600 hover:underline"
        >
          ← Back to Home
        </button>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <h1 className="text-3xl font-bold">
            Hi, {user?.name || "Learner"} 👋 <br />
            <span className="text-blue-600">
              Choose the courses you want to learn
            </span>
          </h1>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">
              Selected: {selectedCourses.length}
            </span>

            <button
              onClick={() => {
                localStorage.setItem("startLearningFrom", "courses");
                router.push("/startlearning");
              }}
              disabled={!selectedCourses.length}
              className={`px-6 py-2 rounded-xl text-white transition ${
                selectedCourses.length
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Start Learning
            </button>
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {COURSES.map((course) => {
            const isAdded = selectedCourses.includes(course);

            return (
              <div
                key={course}
                className="border rounded-xl p-4 flex justify-between items-center hover:shadow transition"
              >
                <p className="font-medium">{course}</p>

                {!isAdded ? (
                  <button
                    onClick={() => addCourse(course)}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm"
                  >
                    + Add
                  </button>
                ) : (
                  <button
                    onClick={() => removeCourse(course)}
                    className="bg-red-100 text-red-700 px-3 py-1 rounded-lg text-sm"
                  >
                    Remove
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </ProtectedRoute>
  );
}

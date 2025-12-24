"use client";

import Image from "next/image";
import ProtectedRoute from "@/components/ProtectedRoute";
import toast from "react-hot-toast";

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const res = await fetch("https://formspree.io/f/mqezokrw", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(form),
      });

      if (res.ok) {
        toast.success("Message sent successfully ✅");
        form.reset();
      } else {
        toast.error("Failed to send message ❌");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error ❌");
    }
  };

  return (
    <ProtectedRoute>
      <section className="max-w-6xl mx-auto py-20 grid md:grid-cols-2 gap-12 items-center">
        <Image
          src="/assets/contact.png"
          width={420}
          height={420}
          alt="Contact"
          className="rounded-2xl"
        />

        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-3xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-2 text-blue-600">
            Contact SkillStream
          </h2>
          <p className="text-gray-500 mb-6">
            Have a question? Send us a message.
          </p>

          <input
            name="name"
            required
            className="w-full mb-4 px-4 py-3 rounded-xl border"
            placeholder="Name"
          />

          <input
            name="email"
            type="email"
            required
            className="w-full mb-4 px-4 py-3 rounded-xl border"
            placeholder="Email"
          />

          <textarea
            name="message"
            required
            className="w-full mb-6 px-4 py-3 rounded-xl border"
            placeholder="Message"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:scale-[1.02] transition"
          >
            Send Message
          </button>

          <p className="mt-4 text-xs text-gray-500">
            📩 Messages are securely delivered to SkillStream inbox
          </p>
        </form>
      </section>
    </ProtectedRoute>
  );
}

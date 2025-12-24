"use client";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = (e) => {
    e.preventDefault();
    localStorage.setItem("registeredUser", JSON.stringify(form));
    toast.success(
      `Success! Your Skill Stream account is ready. Let’s start learning! 🎉`,
      {
        style: {
          fontSize: "20px",
        },
      }
    );
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full grid md:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="hidden md:flex items-center justify-center bg-indigo-100">
          <Image
            src="/assets/register.png"
            width={350}
            height={350}
            alt="Register"
          />
        </div>

        <form onSubmit={submit} className="p-10">
          <h2 className="text-3xl font-bold mb-2">Create your account</h2>
          <p className="text-gray-500 mb-8">Start learning with SkillStream</p>

          <input
            className="w-full mb-4 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Full Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="w-full mb-4 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            className="w-full mb-6 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition">
            Register
          </button>
          <p className="mt-6 text-sm text-center text-gray-500">
            Already a user?{" "}
            <span
              className="text-blue-600 font-semibold cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

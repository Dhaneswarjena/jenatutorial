"use client";
import Image from "next/image";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("registeredUser"));

    if (user && user.email === email && user.password === password) {
      login(user.name, user.email);
      toast.success(`Welcome back to SkillStream, ${user.name} 👋`, {
        style: {
          fontSize: "20px",
        },
      });
      router.push("/");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full grid md:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Image */}
        <div className="hidden md:flex items-center justify-center bg-blue-100">
          <Image src="/assets/Login.png" width={350} height={600} alt="Login" />
        </div>

        {/* Form */}
        <form onSubmit={submit} className="p-10">
          <h2 className="text-3xl font-bold mb-2">Login to SkillStream</h2>
          <p className="text-gray-500 mb-8">Learn frontend the smart way</p>

          <input
            className="w-full mb-4 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full mb-6 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p
            className="text-right text-sm text-blue-600 cursor-pointer hover:underline mb-6"
            onClick={() => router.push("/forgot-password")}
          >
            Forgot password?
          </p>
          <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition">
            Login
          </button>

          <p className="mt-6 text-sm text-center text-gray-500">
            Don’t have an account?{" "}
            <span
              className="text-blue-600 font-semibold cursor-pointer"
              onClick={() => router.push("/register")}
            >
              Register
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailCheck = () => {
    const user = JSON.parse(localStorage.getItem("registeredUser"));

    if (!user || user.email !== email) {
      toast.error("Email not found ❌");
      return;
    }

    toast.success("Email verified ✅");
    setStep(2);
  };

  const handleResetPassword = () => {
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const user = JSON.parse(localStorage.getItem("registeredUser"));
    user.password = newPassword;

    localStorage.setItem("registeredUser", JSON.stringify(user));

    toast.success("Password updated successfully 🎉");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bold mb-2 text-center">Forgot Password</h2>
        <p className="text-gray-500 text-center mb-6">
          Reset your SkillStream password
        </p>

        {/* STEP 1: EMAIL */}
        {step === 1 && (
          <>
            <input
              className="w-full mb-4 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your registered email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              onClick={handleEmailCheck}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
            >
              Verify Email
            </button>
          </>
        )}

        {/* STEP 2: RESET PASSWORD */}
        {step === 2 && (
          <>
            <input
              type="password"
              className="w-full mb-4 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="New password"
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <input
              type="password"
              className="w-full mb-6 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Confirm new password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              onClick={handleResetPassword}
              className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
            >
              Reset Password
            </button>
          </>
        )}

        <p
          className="mt-6 text-sm text-center text-blue-600 cursor-pointer hover:underline"
          onClick={() => router.push("/login")}
        >
          Back to Login
        </p>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-6">
      <div className="max-w-xl text-center bg-white p-10 rounded-3xl shadow-lg">
        {/* Error Code */}
        <h1 className="text-7xl font-extrabold text-blue-600 mb-4">404</h1>

        {/* Message */}
        <h2 className="text-2xl font-bold mb-3">Page not found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Go to Home
          </Link>

          <button
            onClick={() => router.back()}
            className="px-6 py-3 rounded-xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
          >
            Go Back
          </button>
        </div>

        {/* Footer text */}
        <p className="mt-8 text-xs text-gray-400">
          © {new Date().getFullYear()} SkillStream
        </p>
      </div>
    </section>
  );
}

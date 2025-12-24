"use client";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />

        {/* Text */}
        <p className="text-md text-gray-500">Loading SkillStream...</p>
      </div>
    </div>
  );
}

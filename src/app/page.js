"use client";
import Image from "next/image";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <ProtectedRoute>
      <section className="grid md:grid-cols-2 gap-12 items-center py-20 max-w-7xl mx-auto px-4">
        {/* IMAGE → first on mobile, second on desktop */}
        <div className="order-1 md:order-2">
          <Image
            src="/assets/hero.png"
            width={550}
            height={450}
            alt="SkillStream Hero"
            className="rounded-2xl shadow-xl mx-auto"
          />
        </div>

        {/* TEXT → second on mobile, first on desktop */}
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Learn Frontend with{" "}
            <span className="text-blue-600">SkillStream</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Master React, Next.js, Node.js, Express.js, Tailwind CSS and modern
            UI development with real-world tutorials and projects.
          </p>

          <div className="mt-6 flex flex-row items-center gap-4">
            <button
              className="
        bg-blue-600 text-white
      h-12 px-6 text-[15px]
      rounded-md shadow-sm
      transition
      w-fit
    "
              onClick={() => {
                localStorage.setItem("startLearningFrom", "home");
                router.push("/startlearning");
              }}
            >
              Start Learning
            </button>

            <button
              className="
      border
      h-12 px-6 text-[15px]
      rounded-md
      transition
      w-fit
    "
              onClick={() => router.push("/courses")}
            >
              View Courses
            </button>
          </div>
        </div>
      </section>
    </ProtectedRoute>
  );
}

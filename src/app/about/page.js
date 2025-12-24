import Image from "next/image";
import ProtectedRoute from "@/components/ProtectedRoute";
export const metadata = {
  title: "About",
};
export default function About() {
  return (
    <ProtectedRoute>
      <section className="max-w-6xl mx-auto py-20 grid md:grid-cols-2 gap-12 items-center">
        <Image
          src="/assets/about.png"
          width={450}
          height={450}
          alt="About SkillStream"
          className="rounded-2xl shadow"
        />

        <div>
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            About SkillStream
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Hi, I’m <strong>Dhaneswar Jena</strong>, a Frontend Developer
            passionate about building clean, scalable, and user-friendly web
            applications. SkillStream was created with a clear goal: to help
            developers learn frontend technologies in a simple, practical, and
            professional way.
          </p>

          <p className="mt-4 text-gray-600">
            This platform is designed for learners who want more than just
            theory. SkillStream focuses on hands-on learning, real-world
            projects, and industry-level best practices that prepare you for
            real development work. Every concept is explained step by step, with
            a strong emphasis on clarity, performance, and maintainable code.
          </p>
          <p className="mt-4 text-gray-600">
            At SkillStream, you’ll learn how to build modern, responsive UIs,
            write clean and reusable components, and follow workflows used by
            professional frontend teams. Whether you are a beginner starting
            your journey or a developer looking to upgrade your skills,
            SkillStream aims to guide you with clear explanations, practical
            examples, and production-ready techniques.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "HTML/HTML5",
              "CSS/CSS3",
              "SASS",
              "Shadcn UI",
              "Tailwind",
              "JavaScript",
              "JQuery",
              "React",
              "Next.js",
              "Node Js",
              "Expressjs",
              "Python",
              "MongoDB",
              "Backend Architecture",
              "Web Applications",
              "UI Development",
              "Accessbility",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </ProtectedRoute>
  );
}

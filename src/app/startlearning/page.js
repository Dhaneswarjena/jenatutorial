"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";

/**
 * Map each course to its English & Hindi links
 * (Replace URLs with your real links)
 */
const COURSE_LINKS = {
  "HTML / HTML5": {
    en: "https://www.youtube.com/watch?v=kUMe1FH4CHE",
    hi: "https://www.youtube.com/watch?v=rklidcZ-aLU",
  },
  "CSS / CSS3": {
    en: "https://www.youtube.com/watch?v=OXGznpKZ_sA",
    hi: "https://www.youtube.com/watch?v=OpWjt_wbV4E",
  },
  SASS: {
    en: "https://www.youtube.com/watch?v=_a5j7KoflTs",
    hi: "https://www.youtube.com/watch?v=BugQ_t5akCw",
  },
  "Tailwind CSS": {
    en: "https://www.youtube.com/watch?v=pYaamz6AyvU&list=PL0Zuz27SZ-6M8znNpim8dRiICRrP5HPft",
    hi: "https://www.youtube.com/watch?v=AGbrsuWcwiE&list=PL8p2I9GklV471sLqkGuf0eKAu9sVNmKFV",
  },
  Javascript: {
    en: "https://www.youtube.com/watch?v=jSeI6OfifCI&list=PLU83Ru7iGtAtTlQ8MRGHCBu4tzATiRfmY",
    hi: "https://www.youtube.com/watch?v=ER9SspLe4Hg&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
  },
  jQuery: {
    en: "https://www.youtube.com/watch?v=BaIgTKj1iCQ&list=PL0eyrZgxdwhy7byLHsVkuhtRV_IpoJU7n",
    hi: "https://www.youtube.com/watch?v=YFlx1C8XwR0",
  },
  React: {
    en: "https://www.youtube.com/watch?v=NV80nqwIIwM&list=PLLGlmW7jT-nROpfmMFDj7ccjCujXOLIey",
    hi: "https://www.youtube.com/watch?v=-mJFZp84TIY&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt",
  },
  "Next.js": {
    en: "https://www.youtube.com/watch?v=b4ba60j_4o8&list=PLC3y8-rFHvwhIEc4I4YsRz5C7GOBnxSJY",
    hi: "https://www.youtube.com/watch?v=YIqLzP0sVdc&list=PL8p2I9GklV44sj_Ikp8jQSvwD-m9htnHT",
  },
  "Node.js": {
    en: "https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU",
    hi: "https://www.youtube.com/watch?v=_P4hnzTnK64&list=PL8p2I9GklV47KZEsbFEfRcM0sUsOMe5Sp",
  },
  "Express.js": {
    en: "https://www.youtube.com/watch?v=nH9E25nkk3I",
    hi: "https://www.youtube.com/watch?v=pKJ4GGyDgJo",
  },
  MongoDB: {
    en: "https://www.youtube.com/watch?v=ExcRbA7fy_A&list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA",
    hi: "https://www.youtube.com/watch?v=M1dKYQ7GsTg&t=130s",
  },
  "Backend Architecture": {
    en: "https://www.youtube.com/watch?v=rOpEN1JDaD0",
    hi: "https://www.youtube.com/watch?v=EH3vGeqeIAo&list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW",
  },
  "Web Applications": {
    en: "http://youtube.com/watch?v=8vIDZO_w7lY",
    hi: "https://www.youtube.com/watch?v=tVzUXW6siu0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w",
  },
  "Fullstack Development": {
    en: "https://www.youtube.com/watch?v=YLpCPo0FDtE&list=PL9ooVrP1hQOGTHk2auXsk3cyqRBbbsQ6l",
    hi: "https://www.youtube.com/watch?v=HVjjoMvutj4",
  },
  Accessbility: {
    en: "https://www.youtube.com/watch?v=UaRAXFT_rwk",
    hi: "https://www.youtube.com/watch?v=UaRAXFT_rwk",
  },
};
const SPECIAL_COURSE_LINKS = {
  "Coding Practice": {
    label: "Start Coding Practice",
    url: "https://www.interviewbit.com/",
  },
  "Interview Questions": {
    label: "View Interview Questions",
    url: "https://www.interviewbit.com/",
  },
};
const NO_LANGUAGE_COURSES = new Set(["Interview Questions", "Coding Practice"]);
export default function StartLearningPage() {
  const router = useRouter();
  const [courses, setCourses] = useState([]);
  const [backTarget, setBackTarget] = useState({
    text: "Back",
    path: "/",
  });
  useEffect(() => {
    const from = localStorage.getItem("startLearningFrom");

    if (from === "courses") {
      setBackTarget({
        text: "← Back to Courses",
        path: "/courses",
      });
    } else {
      setBackTarget({
        text: "← Back to Home",
        path: "/",
      });
    }
  }, []);
  useEffect(() => {
    const saved = localStorage.getItem("selectedCourses");
    if (saved && saved !== "[]") {
      setCourses(JSON.parse(saved));
    }
  }, []);

  return (
    <ProtectedRoute>
      <section className="max-w-7xl mx-auto py-16 px-4">
        {/* 🔙 Back */}
        <button
          onClick={() => router.push(backTarget.path)}
          className="mb-6 inline-flex items-center text-blue-600 hover:underline"
        >
          {backTarget.text}
        </button>

        <h1 className="text-3xl font-bold mb-10">Start Learning 🚀</h1>

        {courses.length === 0 ? (
          <p className="text-gray-500">No courses selected yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {courses.map((course) => {
              const links = COURSE_LINKS[course];

              return (
                <div
                  key={course}
                  className="rounded-2xl border shadow hover:shadow-lg transition"
                >
                  {/* Card Header */}
                  <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-2xl flex items-center justify-center text-white text-lg font-bold text-center px-3">
                    {course}
                  </div>

                  {/* Card Body */}
                  <div className="p-4">
                    <p className="font-semibold mb-3">{course}</p>

                    {/* 🌐 Language Buttons (Conditional) */}
                    {NO_LANGUAGE_COURSES.has(course) ? (
                      <a
                        href={SPECIAL_COURSE_LINKS[course]?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-purple-600 text-white py-2 rounded-lg text-sm hover:bg-purple-700 transition mb-4"
                      >
                        {SPECIAL_COURSE_LINKS[course]?.label}
                      </a>
                    ) : (
                      links && (
                        <div className="flex gap-3 mb-4">
                          <a href={links.en}>English</a>
                          <a href={links.hi}>Hindi</a>
                        </div>
                      )
                    )}

                    <span className="inline-block text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      🎓 Certificate Available
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </ProtectedRoute>
  );
}

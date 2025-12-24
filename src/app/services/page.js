import Image from "next/image";
import ProtectedRoute from "@/components/ProtectedRoute";
export const metadata = {
  title: "Services",
};
const services = [
  {
    title: "UI – Fullstack Development",
    img: "/assets/Uifull.png",
  },
  {
    title: "Frontend Architect",
    img: "/assets/frontendtech.png",
  },
  {
    title: "Backend Architect",
    img: "/assets/backend.png",
  },
  {
    title: "Web Applications",
    img: "/assets/Web.png",
  },
  {
    title: "Responsive Design",
    img: "/assets/RSD.png",
  },
  {
    title: "Certification",
    img: "/assets/Cert.png",
  },
  {
    title: "Accessibility Standards",
    img: "/assets/Access.png",
  },
];

export default function Services() {
  return (
    <ProtectedRoute>
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative h-[340px] rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Background Image */}
              <Image
                src={s.img}
                alt={s.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              {/* <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm opacity-90">{s.desc}</p>
              </div> */}
            </div>
          ))}
        </div>
      </section>
    </ProtectedRoute>
  );
}

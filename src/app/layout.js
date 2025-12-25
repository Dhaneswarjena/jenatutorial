import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
import RouteLoader from "@/components/RouteLoader";
// Commented out due to Google Fonts connection issues in production builds
// import { Geist, Geist_Mono } from "next/font/google";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: {
    template: "%s | SkillStream",
    default: "SkillStream",
  },
  description: "SkillStream is an online training website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AuthProvider>
          <RouteLoader>
            <Navbar />

            <main className="min-h-screen p-6">{children}</main>

            <Footer />
          </RouteLoader>

          {/* ✅ GLOBAL TOASTER (correct place) */}
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "#333",
                color: "#fff",
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}

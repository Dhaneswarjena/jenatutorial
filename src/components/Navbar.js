"use client";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { LogOut, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-2xl font-extrabold text-blue-600">
          SkillStream
        </Link>

        {/* Desktop Menu */}
        {user && (
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link href="/services" className="hover:text-blue-600">
              Services
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>

            <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full">
              <User size={18} />
              <span className="text-sm font-medium">Hi, {user.name}</span>
              <button
                onClick={logout}
                className="text-sm text-blue-600 hover:underline flex items-center gap-1"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu Button */}
        {user && (
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {open && user && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link onClick={() => setOpen(false)} href="/">
              Home
            </Link>
            <Link onClick={() => setOpen(false)} href="/about">
              About
            </Link>
            <Link onClick={() => setOpen(false)} href="/services">
              Services
            </Link>
            <Link onClick={() => setOpen(false)} href="/contact">
              Contact
            </Link>

            <div className="border-t pt-4 flex items-center justify-between">
              <span className="text-sm font-medium flex items-center gap-2">
                <User size={16} /> {user.name}
              </span>
              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="text-sm text-blue-600 flex items-center gap-1"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

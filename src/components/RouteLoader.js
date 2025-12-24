"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PageLoader from "./PageLoader";

export default function RouteLoader({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // smooth transition

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="relative">
      {children}

      {/* Loader OVERLAY (does not change children tree) */}
      {loading && (
        <div className="absolute inset-0 z-[9999]">
          <PageLoader />
        </div>
      )}
    </div>
  );
}

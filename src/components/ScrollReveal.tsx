"use client";

import { useRef, useEffect, useState } from "react";

export default function ScrollReveal({ children, delay = "0ms" }: { children: React.ReactNode; delay?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}`,
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}

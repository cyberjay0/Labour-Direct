"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Initial theme check
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Vision", href: "/vision" },
    { label: "Plan", href: "/plan" },
    { label: "Blog", href: "/blog" },
    { label: "Get Involved", href: "/get-involved" }
  ];

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: "16px",
          zIndex: 50,
          margin: "0 auto",
          width: "calc(100% - 32px)",
          maxWidth: "1200px",
          background: "var(--navbar-bg)",
          border: "1px solid var(--navbar-border)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
          transition: "background-color 0.3s, border-color 0.3s",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 24px",
            height: "72px",
          }}
        >
          {/* Logo Branding */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src="/logo.png"
              alt="Labour Direct Logo"
              style={{
                height: "42px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "24px",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-jakarta), sans-serif",
                    fontSize: "14px",
                    fontWeight: isActive ? 600 : 500,
                    textDecoration: "none",
                    color: isActive ? "var(--primary)" : "var(--text-secondary)",
                    transition: "color 0.2s",
                    position: "relative",
                    padding: "4px 0",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--primary)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: "-2px",
                        left: 0,
                        width: "100%",
                        height: "2px",
                        backgroundColor: "var(--primary)",
                        borderRadius: "1px",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: "16px",
            }}
            className="desktop-actions"
          >
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* CTA Join Movement */}
            <Link href="/get-involved" className="btn-accent" style={{ padding: "10px 18px", fontSize: "14px" }}>
              Join the Movement <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Actions and Hamburger */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
            className="mobile-controls"
          >
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              style={{ display: "flex" }}
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "var(--text-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
              }}
              className="hamburger-btn"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sliding Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "var(--bg-primary)",
            zIndex: 49,
            display: "flex",
            flexDirection: "column",
            padding: "96px 32px 32px 32px",
            gap: "24px",
            animation: "slideIn 0.3s ease-out",
          }}
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontFamily: "var(--font-playfair), sans-serif",
                    fontSize: "24px",
                    fontWeight: 700,
                    textDecoration: "none",
                    color: isActive ? "var(--primary)" : "var(--text-primary)",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          
          <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "16px" }}>
            <Link
              href="/get-involved"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-accent"
              style={{ width: "100%", padding: "14px" }}
            >
              Join the Movement <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      )}

      {/* Embedded CSS for media queries and mobile displays */}
      <style jsx global>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .hamburger-btn {
            display: none !important;
          }
        }
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--navbar-border)",
        padding: "64px 24px 32px 24px",
        marginTop: "auto",
        transition: "background-color 0.3s, border-color 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "48px",
          marginBottom: "48px",
        }}
      >
        {/* Platform Info */}
        <div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
            <img
              src="/logo.png"
              alt="Labour Direct Logo"
              style={{
                height: "48px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </div>
          <p
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: "14px",
              color: "var(--text-secondary)",
              marginBottom: "24px",
              maxWidth: "320px",
            }}
          >
            Labour Direct is a cross-sector digital platform that integrates policy and infrastructure planning for every sector of the Nigerian economy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "16px",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "20px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Platform Navigation
          </h3>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "About Labour Direct", href: "/about" },
              { label: "The Platform", href: "/platform" },
              { label: "Sectors Overview", href: "/sectors" },
              { label: "Platform Updates", href: "/blog" },
              { label: "Request Access", href: "/get-involved" }
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-jakarta), sans-serif",
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "16px",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "20px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Get Platform Updates
          </h3>
          <p
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: "14px",
              color: "var(--text-secondary)",
              marginBottom: "16px",
            }}
          >
            Receive our latest policy papers and system updates directly in your inbox.
          </p>

          {submitted ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#16a34a",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              <CheckCircle2 size={18} />
              <span>Subscription successful! Welcome to the platform.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                gap: "8px",
                width: "100%",
                maxWidth: "360px",
              }}
            >
              <input
                type="email"
                required
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flexGrow: 1,
                  padding: "10px 14px",
                  borderRadius: "8px",
                  border: "1px solid var(--card-border)",
                  background: "var(--bg-tertiary)",
                  color: "var(--text-primary)",
                  fontSize: "14px",
                  fontFamily: "var(--font-jakarta), sans-serif",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  background: "var(--primary)",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "8px",
                  width: "42px",
                  height: "42px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <ArrowRight size={18} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          borderTop: "1px solid var(--navbar-border)",
          paddingTop: "24px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-jakarta), sans-serif",
            fontSize: "12px",
            color: "var(--text-muted)",
          }}
        >
          &copy; 2026 Labour Institute of Nigeria. All rights reserved.
        </span>
        <span
          style={{
            fontFamily: "var(--font-jakarta), sans-serif",
            fontSize: "12px",
            color: "var(--text-muted)",
          }}
        >
          Governed by the NLC and TUC Governing Board.
        </span>
      </div>
    </footer>
  );
}

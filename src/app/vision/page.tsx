"use client";

import { Eye, Sun, DollarSign, UserCheck, HeartHandshake, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function VisionPage() {
  const visionPillars = [
    {
      icon: <DollarSign size={24} style={{ color: "#eab308" }} />,
      title: "Shared Wealth Creation",
      headline: "Equal Opportunities for All Workers",
      description: "Restructuring business tax regulations to assist startups, providing grants to digital hubs, and encouraging regional export capabilities."
    },
    {
      icon: <Eye size={24} style={{ color: "#eab308" }} />,
      title: "Skills for the Future",
      headline: "Transforming the Classroom",
      description: "Integrating programming, analytics, and environmental sciences into schools while upgrading career benefits for teachers."
    },
    {
      icon: <Sun size={24} style={{ color: "#eab308" }} />,
      title: "Clean Hydro and Solar Power",
      headline: "Stable Energy for Factories",
      description: "Harnessing renewable solar and hydro assets through decentralized local mini grids to power manufacturing zones."
    },
    {
      icon: <ShieldCheck size={24} style={{ color: "#eab308" }} />,
      title: "Security and Trust",
      headline: "Community Oriented Safety Systems",
      description: "Empowering local neighborhood security, applying smart drone tracking at trading routes, and building civic trust boards."
    },
    {
      icon: <UserCheck size={24} style={{ color: "#eab308" }} />,
      title: "Administrative Reforms",
      headline: "Modern Government Services",
      description: "Moving public filings and citizen registrations to secure digital cloud systems to reduce processing times."
    },
    {
      icon: <HeartHandshake size={24} style={{ color: "#eab308" }} />,
      title: "Universal Healthcare Schemes",
      headline: " subsidies for Life Saving Care",
      description: "Upgrading local ward clinics with constant solar power, essential medicines, and introducing basic subsidization plans."
    }
  ];

  return (
    <div className="container" style={{ padding: "40px 0 80px 0", display: "flex", flexDirection: "column", gap: "64px" }}>
      {/* Page Header */}
      <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "16px" }}>
        <span
          style={{
            fontSize: "12px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "var(--primary)",
            fontFamily: "var(--font-jakarta), sans-serif",
          }}
        >
          Our Agenda
        </span>
        <h1
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 900,
            color: "var(--text-primary)",
            lineHeight: 1.1,
          }}
        >
          The Manifesto: <span style={{ color: "var(--primary)" }}>Our Vision for Nigeria</span>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-jakarta), sans-serif",
            fontSize: "16px",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Six strategic pillars designed to catalyze industrialization, foster human capital growth, and secure the welfare of all citizens.
        </p>
      </div>

      {/* Pillars Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
          gap: "24px",
        }}
      >
        {visionPillars.map((p, idx) => (
          <div
            key={idx}
            className="glass-card"
            style={{
              padding: "36px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "10px",
                backgroundColor: "rgba(10, 77, 47, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {p.icon}
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "18px",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                }}
              >
                {p.title}
              </h3>
              <h4
                style={{
                  fontFamily: "var(--font-jakarta), sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--primary-light)",
                  marginTop: "2px",
                }}
              >
                {p.headline}
              </h4>
            </div>
            <p
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: "14px",
                color: "var(--text-secondary)",
                lineHeight: 1.5,
              }}
            >
              {p.description}
            </p>
          </div>
        ))}
      </div>

      {/* Secondary manifesto note */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "24px",
            fontWeight: 800,
            color: "var(--text-primary)",
          }}
        >
          Regional Implementation
        </h3>
        <p
          style={{
            fontFamily: "var(--font-jakarta), sans-serif",
            fontSize: "15px",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
          }}
        >
          We recognize that a single blueprint cannot fit all thirty six states. Our plans are adjusted to fit local strengths: from eastern industrial manufacturing hubs to northern agricultural corridors and southern gas to power networks.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "8px" }}>
          <Link href="/plan" className="btn-primary">
            Explore Sector Blueprints
          </Link>
          <Link href="/" className="btn-secondary">
            View Interactive State Map
          </Link>
        </div>
      </div>
    </div>
  );
}

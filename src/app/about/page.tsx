"use client";

import { Award, ShieldAlert, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const leadershipValues = [
    {
      icon: <Award size={24} style={{ color: "#eab308" }} />,
      title: "Integrity and Accountability",
      description: "Believing that true governance is founded on direct transparency and accountability to all citizens."
    },
    {
      icon: <Heart size={24} style={{ color: "#eab308" }} />,
      title: "Inclusive Prosperity",
      description: "Ensuring that industrial growth reaches from urban tech startup spaces to rural crop processing cooperatives."
    },
    {
      icon: <ShieldAlert size={24} style={{ color: "#eab308" }} />,
      title: "Decentralized Service",
      description: "Advocating that local challenges are best resolved by empowering communities with skills and resources."
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
          }}
        >
          Meet the Candidate
        </span>
        <h1
          style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 900,
            color: "var(--text-primary)",
            lineHeight: 1.1,
          }}
        >
          Visionary Leadership <span style={{ color: "var(--primary)" }}>for a New Era</span>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "16px",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          A dedicated leader with over twenty years of experience in administrative service, industrial manufacturing, and community development.
        </p>
      </div>

      {/* Main Biography Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "48px",
          alignItems: "center",
        }}
        className="bio-grid"
      >
        {/* Visual Frame */}
        <div
          style={{
            width: "100%",
            maxWidth: "480px",
            justifySelf: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "-20px",
              left: "-20px",
              width: "100%",
              height: "100%",
              border: "3px solid var(--primary-light)",
              borderRadius: "24px",
              zIndex: 1,
            }}
          />
          <div
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "var(--card-shadow)",
              border: "4px solid var(--bg-secondary)",
              position: "relative",
              zIndex: 2,
              height: "450px",
            }}
          >
            <img
              src="/candidate.png"
              alt="Tunde Abiola Portrait"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Narrative Copy */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h2
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: "28px",
              fontWeight: 800,
              color: "var(--text-primary)",
            }}
          >
            The Story of Tunde Abiola
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "15px",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            Born and raised in Nigeria, Tunde Abiola began his career in logistics operations and manufacturing
            systems. Over two decades, he successfully spearheaded major industrial revivals that created
            sustainable employment for thousands of young graduates.
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "15px",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            His public service record is marked by transparent project execution. Having served as a senior advisor
            on state infrastructure networks, he designed and co implemented solar energy micro grids that currently
            power remote community health outposts and schools.
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "15px",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            Tunde believes that public office is a trust. His decision to run for President in 2027 is driven
            by a commitment to restore inclusive growth, modernize education, secure communities, and ensure every
            region participates in the national industrial renaissance.
          </p>
        </div>
      </div>

      {/* Leadership Values */}
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <h3
          style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontSize: "24px",
            fontWeight: 800,
            color: "var(--text-primary)",
            textAlign: "center",
          }}
        >
          Core Values Guide Our Campaign
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {leadershipValues.map((val, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(10, 77, 47, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {val.icon}
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                {val.title}
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.5,
                }}
              >
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div
        className="glass-card"
        style={{
          background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)",
          padding: "48px",
          borderRadius: "24px",
          textAlign: "center",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontSize: "28px",
            fontWeight: 800,
          }}
        >
          Be Part of the Nationwide Plan
        </h3>
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "15px",
            color: "rgba(255, 255, 255, 0.8)",
            maxWidth: "540px",
            lineHeight: 1.6,
          }}
        >
          We are recruiting local coordinators, tech innovators, and civic volunteers across all thirty six states.
        </p>
        <Link href="/get-involved" className="btn-accent">
          Join the Movement <ArrowRight size={18} />
        </Link>
      </div>

      <style jsx global>{`
        @media (min-width: 768px) {
          .bio-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

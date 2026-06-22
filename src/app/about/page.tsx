"use client";

import { Award, ShieldAlert, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const coreValues = [
    {
      icon: <Award size={24} style={{ color: "var(--primary)" }} />,
      title: "Worker Centered Governance",
      description: "Governed directly by the NLC and TUC to ensure the platform is used for public wealth and policy coordination, not personal political campaigning."
    },
    {
      icon: <Heart size={24} style={{ color: "var(--primary)" }} />,
      title: "Data Driven Transparency",
      description: "Providing public access to cost databases, mapping coordinates, and contract life cycles so citizens can independently verify state claims."
    },
    {
      icon: <ShieldAlert size={24} style={{ color: "var(--primary)" }} />,
      title: "Cross-Sector Coordination",
      description: "Breaking down ministerial silos so education, health, agriculture, and road plans talk to each other in one system automatically."
    }
  ];

  return (
    <div className="container" style={{ padding: "40px 24px 80px 24px", display: "flex", flexDirection: "column", gap: "64px" }}>
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
          About the Platform
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
          The Operating System <span style={{ color: "var(--primary)" }}>for Nigerian Government</span>
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
          Developed by the Labour Institute of Nigeria as a cross sector planning system ready for adoption on Day One.
        </p>
      </div>

      {/* Main Narrative Section */}
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
              height: "380px",
              background: "linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "32px",
              textAlign: "center"
            }}
          >
            <div>
              <div style={{ fontSize: "64px", marginBottom: "16px" }}>🇳🇬</div>
              <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)" }}>
                Labour Institute of Nigeria
              </h3>
              <p style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "13px", color: "var(--text-secondary)", marginTop: "8px" }}>
                Established to promote social democracy, economic sovereignty, and policy research for Nigerian workers.
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Copy */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "28px",
              fontWeight: 800,
              color: "var(--text-primary)",
            }}
          >
            Why Labour Direct Was Built
          </h2>
          <p
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: "15px",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            Right now, government ministries in Nigeria work separately. Health plans hospitals, Works plans roads, and Education plans schools. Because they do not coordinate, we get a new hospital with no access road to reach it, or a school with no power line to teach in.
          </p>
          <p
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: "15px",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            Labour Direct fixes this. It provides a single digital system where every sector health, education, power, agriculture, water, works is mapped, costed, and linked.
          </p>
          <p
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: "15px",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            Governed by a joint board of the Nigeria Labour Congress (NLC) and Trade Union Congress (TUC), the platform serves as a public-interest tool owned by the Nigerian people to drive economic stability and worker welfare.
          </p>
        </div>
      </div>

      {/* Leadership Values */}
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <h3
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "24px",
            fontWeight: 800,
            color: "var(--text-primary)",
            textAlign: "center",
          }}
        >
          Our Governing Principles
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {coreValues.map((val, idx) => (
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
                border: "1px solid var(--card-border)",
                borderRadius: "20px"
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
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                {val.title}
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-jakarta), sans-serif",
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

      {/* Who is it for */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "24px",
            fontWeight: 800,
            color: "var(--text-primary)",
            textAlign: "center"
          }}
        >
          Built for All Stakeholders
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="stakeholder-grid">
          <div className="glass-card" style={{ padding: "24px", borderRadius: "16px", border: "1px solid var(--card-border)" }}>
            <h4 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "16px", fontWeight: 700, margin: "0 0 8px 0" }}>For Governments</h4>
            <p style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "13.5px", color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>
              A ready to use governance system pre loaded with data, budget engines, and sector policies for immediate swearing in day deployment.
            </p>
          </div>
          <div className="glass-card" style={{ padding: "24px", borderRadius: "16px", border: "1px solid var(--card-border)" }}>
            <h4 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "16px", fontWeight: 700, margin: "0 0 8px 0" }}>For Citizens</h4>
            <p style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "13.5px", color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>
              A portal to track physical project delivery, verify cost estimates, and alert authorities of abandoned infrastructure sites.
            </p>
          </div>
          <div className="glass-card" style={{ padding: "24px", borderRadius: "16px", border: "1px solid var(--card-border)" }}>
            <h4 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "16px", fontWeight: 700, margin: "0 0 8px 0" }}>For Unions & Groups</h4>
            <p style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "13.5px", color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>
              An analytical policy framework to verify wage proposals, track national budget allocations, and defend worker rights.
            </p>
          </div>
          <div className="glass-card" style={{ padding: "24px", borderRadius: "16px", border: "1px solid var(--card-border)" }}>
            <h4 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "16px", fontWeight: 700, margin: "0 0 8px 0" }}>For Researchers & Press</h4>
            <p style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "13.5px", color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>
              An open database of Nigeria's laws, LGA metrics, and sector indicators for accurate, evidence based reporting.
            </p>
          </div>
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
            fontFamily: "var(--font-playfair), serif",
            fontSize: "28px",
            fontWeight: 800,
          }}
        >
          Explore the Planning System
        </h3>
        <p
          style={{
            fontFamily: "var(--font-jakarta), sans-serif",
            fontSize: "15px",
            color: "rgba(255, 255, 255, 0.8)",
            maxWidth: "540px",
            lineHeight: 1.6,
          }}
        >
          See how the 36 states and 774 LGAs are mapped, and how individual sector policies are integrated into the budget engine.
        </p>
        <Link href="/get-involved" className="btn-accent">
          Request Access Credentials <ArrowRight size={18} />
        </Link>
      </div>

      <style jsx global>{`
        @media (min-width: 768px) {
          .bio-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
        @media (max-width: 576px) {
          .stakeholder-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

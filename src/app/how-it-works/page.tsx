import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, LogIn, LayoutGrid, CheckSquare, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works | Labour Direct",
  description: "Learn how the Labour Direct platform integrates Nigeria's policy, budget, and infrastructure planning into a Day One ready system.",
};

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: <LogIn size={28} style={{ color: "var(--brand-red)" }} />,
      title: "Log in on Swearing-In Day",
      description: "Pre-loaded with all 774 LGAs, 8,809 wards, existing infrastructure networks, Nigeria's laws, and sector budget histories. No installation delays. No expensive external management consultants."
    },
    {
      step: "02",
      icon: <LayoutGrid size={28} style={{ color: "var(--primary)" }} />,
      title: "Pick a Sector or LGA",
      description: "Every sector automatically communicates with all other sectors. When you plan a new hospital, the platform instantly cross-references infrastructure datasets to warn: Is there an access road? Is power connected? Are teachers or medical staffs allocated?"
    },
    {
      step: "03",
      icon: <CheckSquare size={28} style={{ color: "var(--primary)" }} />,
      title: "Set a Promise. See the Cost.",
      description: "Pledge to build new classrooms or create one million jobs. The budget engine calculates the exact cost, matching it against specific budget lines, state allocations, and revenue streams. Live. Before you hold a press conference."
    },
    {
      step: "04",
      icon: <ShieldCheck size={28} style={{ color: "var(--brand-red)" }} />,
      title: "Citizens Track Execution",
      description: "Every planned project is placed on a public map. Citizens verify and upload photographic updates from the site. If a contractor stops work or abandons a site, the system automatically routes alerts to the EFCC and Bureau of Public Procurement."
    }
  ];

  return (
    <div className="container" style={{ padding: "40px 24px 80px 24px", display: "flex", flexDirection: "column", gap: "64px" }}>
      {/* Hero Section */}
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
          Platform Walkthrough
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
          Governing Nigeria Has Never Had a GPS. <br />
          <span style={{ color: "var(--brand-red)" }}>Until Now.</span>
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
          A step by step walkthrough of how the Labour Direct platform coordinates policy, finances, and civic monitoring across Nigeria.
        </p>
      </div>

      {/* Grid of Steps */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
          gap: "24px",
        }}
      >
        {steps.map((s, idx) => (
          <div
            key={idx}
            className="glass-card"
            style={{
              padding: "36px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              position: "relative",
              border: "1px solid var(--card-border)",
              borderRadius: "20px"
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "24px",
                right: "32px",
                fontFamily: "var(--font-playfair), serif",
                fontSize: "32px",
                fontWeight: 900,
                color: "rgba(var(--primary-rgb), 0.15)",
              }}
            >
              {s.step}
            </div>

            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                backgroundColor: "rgba(10, 77, 47, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {s.icon}
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "20px",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  margin: "0 0 10px 0",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-jakarta), sans-serif",
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {s.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Block */}
      <div
        className="glass-card"
        style={{
          background: "linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)",
          padding: "48px 32px",
          borderRadius: "24px",
          border: "1px solid var(--card-border)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          maxWidth: "800px",
          margin: "20px auto 0 auto",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "28px",
            fontWeight: 800,
            color: "var(--text-primary)",
            margin: 0
          }}
        >
          Your Government. Your GPS.
        </h3>
        <p
          style={{
            fontFamily: "var(--font-jakarta), sans-serif",
            fontSize: "15px",
            color: "var(--text-secondary)",
            maxWidth: "540px",
            lineHeight: 1.6,
            margin: 0
          }}
        >
          Join public officials, union representatives, and researchers using the system to build Nigeria. Request your access credentials today.
        </p>
        <Link href="/get-involved" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          Request Access <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}

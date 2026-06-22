"use client";

import { Eye, Sun, DollarSign, UserCheck, HeartHandshake, ShieldCheck } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function PlatformPage() {
  const visionPillars = [
    {
      icon: <DollarSign size={24} style={{ color: "#eab308" }} />,
      title: "Economic Integration",
      headline: "Cross-Sector Financial Tracking",
      description: "Restructuring business tax models, monitoring small business grants, and updating regional export data dynamically to prevent duplicate budgeting."
    },
    {
      icon: <Eye size={24} style={{ color: "#eab308" }} />,
      title: "Education Infrastructure",
      headline: "Smart Resource Mapping",
      description: "Cross-referencing educational statistics, school locations, power grids, and teacher deployment automatically to ensure schools are built with operational infrastructure."
    },
    {
      icon: <Sun size={24} style={{ color: "#eab308" }} />,
      title: "Power Grid Coordination",
      headline: "Decentralized Resource Tracking",
      description: "Mapping solar, hydro, and gas assets to local industrial zones, tracking micro-grid capacity, and flagging energy supply deficits in real time."
    },
    {
      icon: <ShieldCheck size={24} style={{ color: "#eab308" }} />,
      title: "Security Operations",
      headline: "Community Safety Monitoring",
      description: "Coordinating ward-level safety reports, monitoring transport route datasets, and integrating community security feedback boards into an active map."
    },
    {
      icon: <UserCheck size={24} style={{ color: "#eab308" }} />,
      title: "Digital Governance Engine",
      headline: "Unified Cloud Operations",
      description: "Streamlining public registrations, land registries, sector statistics, and policy databases into a single searchable, secure cloud platform."
    },
    {
      icon: <HeartHandshake size={24} style={{ color: "#eab308" }} />,
      title: "Healthcare Access Network",
      headline: "State-Wide Clinic Tracking",
      description: "Tracking ward-health center equipment, scheduling drug supply chains, and automating basic healthcare subsidy plans to ensure medical access reaches citizens."
    }
  ];

  return (
    <div className="container" style={{ padding: "40px 24px 80px 24px", display: "flex", flexDirection: "column", gap: "64px" }}>
      {/* Page Header */}
      <ScrollReveal>
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
          Core Architecture
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
          The Platform: <span style={{ color: "var(--primary)" }}>Integrated Governance</span>
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
          Six integration pillars designed to coordinate economic planning, resource deployment, and civic monitoring across Nigeria.
        </p>
      </div>
      </ScrollReveal>

      {/* Pillars Grid */}
      <ScrollReveal delay="100ms">
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
              border: "1px solid var(--card-border)",
              borderRadius: "20px"
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
      </ScrollReveal>

      {/* Secondary note */}
      <ScrollReveal delay="200ms">
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
          Regional Deployments
        </h3>
        <p
          style={{
            fontFamily: "var(--font-jakarta), sans-serif",
            fontSize: "15px",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
          }}
        >
          We recognize that a single blueprint cannot fit all thirty six states. Our system is adjusted to fit regional strengths: from eastern industrial manufacturing hubs to northern agricultural corridors and southern gas to power networks.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "8px" }}>
          <Link href="/sectors" className="btn-primary">
            Explore Sector Modules
          </Link>
          <Link href="/" className="btn-secondary">
            View Interactive State Map
          </Link>
        </div>
      </div>
      </ScrollReveal>
    </div>
  );
}

"use client";

import { useState } from "react";
import { TrendingUp, BookOpen, Shield, Server, Leaf, Heart, CheckCircle2 } from "lucide-react";
import { policyDatabase } from "@/data/policyData";

export default function SectorsPage() {
  const [selectedSlug, setSelectedSlug] = useState("economy");

  const activeSector = policyDatabase.find((p) => p.slug === selectedSlug) || policyDatabase[0];

  // Resolve Lucide icons dynamically
  const renderIcon = (iconName: string, size = 20) => {
    switch (iconName) {
      case "TrendingUp":
        return <TrendingUp size={size} />;
      case "BookOpen":
        return <BookOpen size={size} />;
      case "Shield":
        return <Shield size={size} />;
      case "Server":
        return <Server size={size} />;
      case "Leaf":
        return <Leaf size={size} />;
      case "Heart":
        return <Heart size={size} />;
      default:
        return <TrendingUp size={size} />;
    }
  };

  return (
    <div className="container" style={{ padding: "40px 24px 80px 24px", display: "flex", flexDirection: "column", gap: "48px" }}>
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
          Integrated Sectors
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
          National Sector Planning <span style={{ color: "var(--primary)" }}>Engines</span>
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
          Explore the detailed policy frameworks, milestones, and resource mappings for each sector integrated within the Labour Direct platform.
        </p>
      </div>

      {/* Explorer Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "32px",
          alignItems: "start",
        }}
        className="plan-explorer-layout"
      >
        {/* Left Side: Sector Selector Tabs */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "10px",
          }}
          className="plan-tabs-container"
        >
          {policyDatabase.map((policy) => {
            const isSelected = selectedSlug === policy.slug;
            return (
              <button
                key={policy.slug}
                onClick={() => setSelectedSlug(policy.slug)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  width: "100%",
                  padding: "16px 20px",
                  borderRadius: "12px",
                  border: "1px solid var(--card-border)",
                  background: isSelected ? "var(--primary)" : "var(--bg-secondary)",
                  color: isSelected ? "#ffffff" : "var(--text-primary)",
                  cursor: "pointer",
                  fontFamily: "var(--font-playfair), serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  textAlign: "left",
                  transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: isSelected ? "0 4px 15px rgba(10, 77, 47, 0.2)" : "none",
                }}
                className="plan-tab-button"
              >
                <span
                  style={{
                    color: isSelected ? "#ffffff" : "var(--primary)",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {renderIcon(policy.iconName, 18)}
                </span>
                {policy.title}
              </button>
            );
          })}
        </div>

        {/* Right Side: Main Detail Pane */}
        <div
          className="glass-card"
          style={{
            padding: "40px",
            minHeight: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            animation: "fadeIn 0.4s ease-out",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "10px",
                backgroundColor: "rgba(10, 77, 47, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--primary)",
              }}
            >
              {renderIcon(activeSector.iconName, 24)}
            </div>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "24px",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                }}
              >
                {activeSector.title} Integration Module
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-jakarta), sans-serif",
                  fontSize: "13px",
                  color: "var(--primary-light)",
                  fontWeight: 600,
                  marginTop: "2px",
                }}
              >
                {activeSector.headline}
              </p>
            </div>
          </div>

          <p
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: "15px",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              borderBottom: "1px solid var(--card-border)",
              paddingBottom: "24px",
              marginBottom: "12px",
            }}
          >
            {activeSector.summary}
          </p>

          {/* Pillars and sub points */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {activeSector.pillars.map((pillar, idx) => (
              <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  {pillar.title}
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {pillar.points.map((pt, pIdx) => (
                    <li
                      key={pIdx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        fontFamily: "var(--font-jakarta), sans-serif",
                        fontSize: "14px",
                        color: "var(--text-secondary)",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--primary-light)",
                          display: "inline-flex",
                          marginTop: "2px",
                        }}
                      >
                        <CheckCircle2 size={16} />
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Embedded CSS styles for responsive side tab alignments */}
      <style jsx global>{`
        @media (min-width: 768px) {
          .plan-explorer-layout {
            grid-template-columns: 280px 1fr !important;
          }
          .plan-tabs-container {
            flex-direction: column !important;
            flex-wrap: nowrap !important;
          }
        }
        @media (max-width: 767px) {
          .plan-tab-button {
            width: auto !important;
            flex-grow: 1 !important;
            padding: 10px 14px !important;
            font-size: 13px !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

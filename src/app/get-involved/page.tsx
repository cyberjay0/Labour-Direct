"use client";

import { useState } from "react";
import { CheckCircle2, ShieldCheck, Key, Eye } from "lucide-react";
import { stateDatabase } from "@/data/stateData";

export default function RequestAccessPage() {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [userState, setUserState] = useState("abia");
  const [usage, setUsage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && role && organisation && usage) {
      setSubmitted(true);
    }
  };

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
          Secure Access
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
          Request System <span style={{ color: "var(--primary)" }}>Access</span>
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
          Submit your application to receive administrative, analytical, or public monitoring credentials for the Labour Direct platform.
        </p>
      </div>

      {/* Main Grid: Form Left, Security Info Right */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "48px",
          alignItems: "start",
        }}
        className="request-grid"
      >
        {/* Left Side: Access Request Form */}
        <div
          className="glass-card"
          style={{
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            border: "1px solid var(--card-border)",
            borderRadius: "24px"
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "22px",
                fontWeight: 800,
                color: "var(--text-primary)",
              }}
            >
              Access Request Form
            </h2>
            <p
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: "13.5px",
                color: "var(--text-secondary)",
                marginTop: "4px",
              }}
            >
              All fields are required. Please provide valid organizational credentials where applicable.
            </p>
          </div>

          {submitted ? (
            <div
              style={{
                textAlign: "center",
                padding: "40px 0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(22, 163, 74, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#16a34a",
                }}
              >
                <CheckCircle2 size={36} />
              </div>
              <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "20px", fontWeight: 700 }}>
                Request Submitted!
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-jakarta), sans-serif",
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  maxWidth: "360px",
                  lineHeight: 1.5,
                }}
              >
                Thank you, {name}. Your access request is being reviewed by the Labour Institute of Nigeria board. You will receive an email response with login instructions at {email} within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Name */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, fontFamily: "var(--font-jakarta), sans-serif" }}>Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Chinedu Okafor"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "8px",
                    border: "1px solid var(--card-border)",
                    background: "var(--bg-tertiary)",
                    color: "var(--text-primary)",
                    fontSize: "14px",
                    outline: "none",
                    fontFamily: "var(--font-jakarta), sans-serif",
                  }}
                />
              </div>

              {/* Role */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, fontFamily: "var(--font-jakarta), sans-serif" }}>Role / Title label</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior Planner, Union Secretary, Researcher"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "8px",
                    border: "1px solid var(--card-border)",
                    background: "var(--bg-tertiary)",
                    color: "var(--text-primary)",
                    fontSize: "14px",
                    outline: "none",
                    fontFamily: "var(--font-jakarta), sans-serif",
                  }}
                />
              </div>

              {/* Organisation */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, fontFamily: "var(--font-jakarta), sans-serif" }}>Organisation / Institution</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ministry of Budget, NLC Edo Chapter, University of Lagos"
                  value={organisation}
                  onChange={(e) => setOrganisation(e.target.value)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "8px",
                    border: "1px solid var(--card-border)",
                    background: "var(--bg-tertiary)",
                    color: "var(--text-primary)",
                    fontSize: "14px",
                    outline: "none",
                    fontFamily: "var(--font-jakarta), sans-serif",
                  }}
                />
              </div>

              {/* State */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, fontFamily: "var(--font-jakarta), sans-serif" }}>State / LGA Coverage</label>
                <select
                  value={userState}
                  onChange={(e) => setUserState(e.target.value)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "8px",
                    border: "1px solid var(--card-border)",
                    background: "var(--bg-tertiary)",
                    color: "var(--text-primary)",
                    fontSize: "14px",
                    outline: "none",
                    fontFamily: "var(--font-jakarta), sans-serif",
                  }}
                >
                  {Object.values(stateDatabase).map((state) => (
                    <option key={state.id} value={state.id}>
                      {state.name} State
                    </option>
                  ))}
                </select>
              </div>

              {/* Email */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, fontFamily: "var(--font-jakarta), sans-serif" }}>Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. chinedu@org.ng"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "8px",
                    border: "1px solid var(--card-border)",
                    background: "var(--bg-tertiary)",
                    color: "var(--text-primary)",
                    fontSize: "14px",
                    outline: "none",
                    fontFamily: "var(--font-jakarta), sans-serif",
                  }}
                />
              </div>

              {/* Usage */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, fontFamily: "var(--font-jakarta), sans-serif" }}>How will you use Labour Direct?</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your intended use (e.g. tracking school infrastructure in local government wards, calculating national minimum wage budget impacts, regional research)"
                  value={usage}
                  onChange={(e) => setUsage(e.target.value)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "8px",
                    border: "1px solid var(--card-border)",
                    background: "var(--bg-tertiary)",
                    color: "var(--text-primary)",
                    fontSize: "14px",
                    outline: "none",
                    fontFamily: "var(--font-jakarta), sans-serif",
                    resize: "vertical"
                  }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: "8px" }}>
                Submit Access Request
              </button>
            </form>
          )}
        </div>

        {/* Right Side: Security & Credentials Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Policy Card */}
          <div
            className="glass-card"
            style={{
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              border: "1px solid var(--card-border)",
              borderRadius: "24px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--primary)" }}>
              <ShieldCheck size={28} />
              <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "20px", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>
                Credential Policy
              </h3>
            </div>
            <p style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
              Labour Direct is a public interest governance platform. System access is categorized into different security rings:
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              <li style={{ display: "flex", gap: "12px" }}>
                <Key size={18} style={{ color: "var(--brand-red)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <strong style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "14px", color: "var(--text-primary)" }}>
                    Administrative Access
                  </strong>
                  <p style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "13px", color: "var(--text-secondary)", margin: "2px 0 0 0" }}>
                    Granted to state planning officers, ministry directors, and verification personnel. Permits entry and updates of cost estimates and coordinates.
                  </p>
                </div>
              </li>
              <li style={{ display: "flex", gap: "12px" }}>
                <Key size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <strong style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "14px", color: "var(--text-primary)" }}>
                    Analytical Access
                  </strong>
                  <p style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "13px", color: "var(--text-secondary)", margin: "2px 0 0 0" }}>
                    Granted to union representatives, economic researchers, and journalists. Permits query of wage engines, state comparison metrics, and history logs.
                  </p>
                </div>
              </li>
              <li style={{ display: "flex", gap: "12px" }}>
                <Eye size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <strong style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "14px", color: "var(--text-primary)" }}>
                    Public Monitoring
                  </strong>
                  <p style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "13px", color: "var(--text-secondary)", margin: "2px 0 0 0" }}>
                    Open access for citizens to verify infrastructure progress, check budgets, and report project abandonment.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Audit Alert */}
          <div
            style={{
              padding: "20px 24px",
              borderRadius: "16px",
              backgroundColor: "rgba(var(--primary-rgb), 0.05)",
              border: "1px solid var(--navbar-border)",
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: "13px",
              color: "var(--text-secondary)",
              lineHeight: 1.5
            }}
          >
            <strong>Security Notice:</strong> All data entries, wage calculations, and citizen reports on the platform are cryptographically logged to ensure tamper-proof records.
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 992px) {
          .request-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </div>
  );
}

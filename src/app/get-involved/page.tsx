"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { stateDatabase } from "@/data/stateData";

export default function GetInvolvedPage() {
  // Volunteer Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [volunteerState, setVolunteerState] = useState("abia");
  const [volunteerArea, setVolunteerArea] = useState("Tech & Innovation");
  const [volSubmitted, setVolSubmitted] = useState(false);

  // Donation Simulator state
  const [donationPreset, setDonationPreset] = useState("10000");
  const [customDonation, setCustomDonation] = useState("");

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setVolSubmitted(true);
    }
  };

  const currentDonationAmount = customDonation ? parseInt(customDonation) || 0 : parseInt(donationPreset);

  // Resolve what a contribution supports
  const getImpactDescription = (amount: number) => {
    if (amount <= 0) return "Please choose or slide to a contribution amount.";
    if (amount < 5000) return "Supports digital communications hosting fees and volunteer team logistics.";
    if (amount < 15000) return `Funds printing of approximately ${Math.floor(amount / 100)} campaign brochures for local door to door outreach.`;
    if (amount < 40000) return `Enables local community organizers to host a neighborhood listening dialogue with clean water refreshments.`;
    if (amount < 80000) return `Supports hiring a town hall hall utility venue and audio setup in a local government area.`;
    return `Co-funds regional volunteer coordinator training sessions and digital technology hubs setup.`;
  };

  const volunteerAreas = [
    "Tech & Innovation Support",
    "Local Organizing & Townhalls",
    "Media & Writing Communications",
    "Voter Registration Awareness"
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
          Join the Movement
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
          Shape the Future <span style={{ color: "var(--primary)" }}>of Nigeria</span>
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
          Whether by volunteering your skills or making a financial contribution, your participation powers our grassroots campaign.
        </p>
      </div>

      {/* Main Grid: Volunteer Left, Donation Right */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "48px",
          alignItems: "start",
        }}
        className="get-involved-grid"
      >
        {/* Left Side: Volunteer registration */}
        <div
          className="glass-card"
          style={{
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
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
              Register as a Volunteer
            </h2>
            <p
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: "13.5px",
                color: "var(--text-secondary)",
                marginTop: "4px",
              }}
            >
              Sign up to represent our campaign in your local ward or state.
            </p>
          </div>

          {volSubmitted ? (
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
                Registration Received!
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-jakarta), sans-serif",
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  maxWidth: "320px",
                  lineHeight: 1.5,
                }}
              >
                Thank you, {name}. A local campaign coordinator will contact you regarding volunteer hubs in your state.
              </p>
            </div>
          ) : (
            <form onSubmit={handleVolunteerSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Name */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, fontFamily: "var(--font-jakarta), sans-serif" }}>Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter name"
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

              {/* Email */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, fontFamily: "var(--font-jakarta), sans-serif" }}>Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="Enter email"
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

              {/* State */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, fontFamily: "var(--font-jakarta), sans-serif" }}>State of Residence</label>
                <select
                  value={volunteerState}
                  onChange={(e) => setVolunteerState(e.target.value)}
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

              {/* Volunteer Area */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, fontFamily: "var(--font-jakarta), sans-serif" }}>Volunteering Area</label>
                <select
                  value={volunteerArea}
                  onChange={(e) => setVolunteerArea(e.target.value)}
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
                  {volunteerAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: "8px" }}>
                Submit Volunteer Application
              </button>
            </form>
          )}
        </div>

        {/* Right Side: Donation Simulator */}
        <div
          className="glass-card"
          style={{
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
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
              Donation Impact Simulator
            </h2>
            <p
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: "13.5px",
                color: "var(--text-secondary)",
                marginTop: "4px",
              }}
            >
              Choose a contribution level to see how it directly supports our local campaigns.
            </p>
          </div>

          {/* Preset Buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <span style={{ fontSize: "13px", fontWeight: 600, fontFamily: "var(--font-jakarta), sans-serif" }}>Choose Preset Contribution:</span>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "8px",
              }}
            >
              {[
                { label: "₦5,000", value: "5000" },
                { label: "₦10,000", value: "10000" },
                { label: "₦25,000", value: "25000" },
                { label: "₦50,000", value: "50000" },
                { label: "₦100,000", value: "100000" },
              ].map((preset) => {
                const isActive = donationPreset === preset.value && !customDonation;
                return (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => {
                      setDonationPreset(preset.value);
                      setCustomDonation(""); // Clear custom amount
                    }}
                    style={{
                      padding: "10px 0",
                      borderRadius: "8px",
                      border: "1px solid var(--card-border)",
                      background: isActive ? "var(--primary)" : "var(--bg-tertiary)",
                      color: isActive ? "#ffffff" : "var(--text-primary)",
                      fontFamily: "var(--font-jakarta), sans-serif",
                      fontWeight: 700,
                      fontSize: "14px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {preset.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Custom Slider Input */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "13px", fontWeight: 600, fontFamily: "var(--font-jakarta), sans-serif" }}>Or Specify Custom Amount (₦):</span>
              {customDonation && (
                <span style={{ fontSize: "14px", fontWeight: "bold", color: "var(--primary-light)", fontFamily: "var(--font-jakarta), sans-serif" }}>
                  Custom Amount
                </span>
              )}
            </div>
            <input
              type="number"
              min="100"
              max="10000000"
              placeholder="Enter amount (e.g. 15000)"
              value={customDonation}
              onChange={(e) => {
                setCustomDonation(e.target.value);
                setDonationPreset(""); // Clear preset
              }}
              style={{
                padding: "12px 14px",
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

          {/* Impact Feedback Box */}
          <div
            style={{
              padding: "20px",
              borderRadius: "12px",
              backgroundColor: "rgba(10, 77, 47, 0.08)",
              border: "1px solid var(--navbar-border)",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontWeight: 700,
                color: "var(--primary)",
                fontFamily: "var(--font-jakarta), sans-serif",
              }}
            >
              Donation Impact
            </span>
            <div
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "24px",
                fontWeight: 800,
                color: "var(--text-primary)",
              }}
            >
              ₦{currentDonationAmount.toLocaleString()}
            </div>
            <p
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: "13.5px",
                color: "var(--text-secondary)",
                lineHeight: 1.4,
              }}
            >
              {getImpactDescription(currentDonationAmount)}
            </p>
          </div>

          <button
            type="button"
            className="btn-accent"
            onClick={() => alert(`This simulator represents a mock payment of ₦${currentDonationAmount.toLocaleString()} for the campaign movement. In production, this would route to a secure Paystack/Flutterwave portal.`)}
          >
            Simulate Campaign Contribution
          </button>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 992px) {
          .get-involved-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

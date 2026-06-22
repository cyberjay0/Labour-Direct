"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [isFadeOut, setIsFadeOut] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Check if user has already seen the preloader in this session
    const hasLoaded = sessionStorage.getItem("campaign_preloader_seen");
    
    if (hasLoaded) {
      setIsHidden(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsFadeOut(true);
      sessionStorage.setItem("campaign_preloader_seen", "true");
      
      const hideTimer = setTimeout(() => {
        setIsHidden(true);
      }, 600); // Wait for CSS opacity animation to finish
      
      return () => clearTimeout(hideTimer);
    }, 2000); // Show preloader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isHidden) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff", // Pure white background
        color: "var(--text-primary)",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), visibility 0.6s",
        opacity: isFadeOut ? 0 : 1,
        visibility: isFadeOut ? "hidden" : "visible",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "400px",
          width: "80%",
          textAlign: "center",
        }}
      >
        {/* Labour Direct Brand Logo */}
        <div
          style={{
            position: "relative",
            width: "120px",
            height: "120px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "32px",
            animation: "logoFloat 3s ease-in-out infinite",
          }}
        >
          {/* Glowing background behind logo */}
          <div
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: "rgba(10, 77, 47, 0.06)",
              filter: "blur(20px)",
              animation: "logoGlow 3s ease-in-out infinite",
            }}
          />
          <img
            src="/logo.png"
            alt="Labour Direct Logo"
            style={{
              height: "100px",
              width: "auto",
              objectFit: "contain",
              position: "relative",
              zIndex: 1,
            }}
          />
        </div>

        {/* Loading Progress Bar */}
        <div
          style={{
            width: "100%",
            height: "5px",
            backgroundColor: "rgba(10, 77, 47, 0.08)", // Light green track
            borderRadius: "3px",
            overflow: "hidden",
            marginBottom: "16px",
            position: "relative",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundImage: "repeating-linear-gradient(90deg, var(--primary-light) 0px, var(--primary-light) 20px, #ffffff 20px, #ffffff 40px)",
              backgroundSize: "40px 100%",
              borderRadius: "3px",
              animation: "loadingInfinite 1.2s linear infinite",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            fontFamily: "var(--font-jakarta), sans-serif",
            fontSize: "12px",
            color: "var(--text-muted)",
            fontWeight: 500,
          }}
        >
          <span>Building a Nigeria for All</span>
          <span style={{ color: "var(--primary-light)", fontWeight: "bold" }}>Connecting...</span>
        </div>
      </div>

      <style jsx global>{`
        @keyframes logoFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.04);
          }
        }
        @keyframes logoGlow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.9);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.1);
          }
        }
        @keyframes loadingInfinite {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 40px 0;
          }
        }
      `}</style>
    </div>
  );
}

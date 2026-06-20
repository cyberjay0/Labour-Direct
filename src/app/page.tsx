"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, TrendingUp, Shield, Server, User, Compass, HelpCircle } from "lucide-react";
import Map3D from "@/components/Map3D";
import { blogDatabase } from "@/data/blogData";

export default function Home() {
  // Get the first 3 blog posts for the homepage grid
  const recentPosts = blogDatabase.slice(0, 3);

  const pillars = [
    {
      icon: <User size={24} style={{ color: "#eab308" }} />,
      title: "People First",
      description: "Putting the dignity and wellbeing of every Nigerian at the center."
    },
    {
      icon: <TrendingUp size={24} style={{ color: "#eab308" }} />,
      title: "Prosperity for All",
      description: "Creating opportunities that unlock potential and drive shared wealth."
    },
    {
      icon: <Shield size={24} style={{ color: "#eab308" }} />,
      title: "Security & Justice",
      description: "Building a nation where every citizen feels safe and protected."
    },
    {
      icon: <Server size={24} style={{ color: "#eab308" }} />,
      title: "Sustainable Nigeria",
      description: "Protecting our resources and securing a better future for generations."
    }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
      {/* Hero Section */}
      <section className="container" style={{ position: "relative", overflow: "visible" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "center",
            padding: "40px 0",
          }}
          className="hero-grid"
        >
          {/* Hero Copy */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "var(--primary)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--accent)" }}
              />
              Latest From The Journey
            </span>
            <h1
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 900,
                lineHeight: 1.1,
                color: "var(--text-primary)",
              }}
            >
              Building a Nigeria <br />
              <span style={{ color: "var(--primary)" }}>That Works for All</span>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "clamp(16px, 2vw, 18px)",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                maxWidth: "520px",
              }}
            >
              Ideas, updates, and reflections on our journey to a stronger, united and prosperous Nigeria.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "8px" }}>
              <Link href="/blog" className="btn-primary">
                Read Our Latest Posts <ArrowRight size={18} />
              </Link>
              <Link href="/vision" className="btn-secondary">
                View Our Vision Manifesto
              </Link>
            </div>
          </div>

          {/* Hero Image Profile */}
          <div
            style={{
              position: "relative",
              justifySelf: "center",
              width: "100%",
              maxWidth: "460px",
              height: "440px",
            }}
          >
            {/* Background Decorative Rings */}
            <div
              style={{
                position: "absolute",
                top: "-10%",
                right: "-10%",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(234,179,8,0.1) 0%, transparent 70%)",
                zIndex: 0,
              }}
            />
            {/* Main Portrait Frame */}
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "24px",
                overflow: "hidden",
                border: "4px solid var(--primary-dark)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                position: "relative",
                zIndex: 2,
              }}
            >
              <img
                src="/candidate.png"
                alt="Tunde Abiola"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />
              {/* Overlay Gradient */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "40%",
                  background: "linear-gradient(to top, rgba(10,77,47,0.7) 0%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Overlapping Pillars Banner */}
        <div
          className="glass-card"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
            padding: "32px",
            marginTop: "40px",
            position: "relative",
            zIndex: 3,
          }}
        >
          {pillars.map((p, idx) => (
            <div key={idx} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <div
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(10, 77, 47, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {p.icon}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "12px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.4,
                  }}
                >
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Articles Section */}
      <section style={{ backgroundColor: "var(--bg-tertiary)", padding: "80px 0", transition: "background-color 0.3s" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {/* Header row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  color: "var(--primary)",
                }}
              >
                From The Blog
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: "clamp(28px, 3.5vw, 36px)",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  marginTop: "4px",
                }}
              >
                Latest Articles & Updates
              </h2>
            </div>
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--primary)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              View All Posts <ArrowRight size={16} />
            </Link>
          </div>

          {/* Grid list */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {recentPosts.map((post) => {
              // Custom gradient color mapping based on category
              let gradient = "linear-gradient(135deg, #10b981 0%, #059669 100%)";
              if (post.category === "Education") {
                gradient = "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)";
              } else if (post.category === "Infrastructure") {
                gradient = "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)";
              }

              return (
                <article
                  key={post.slug}
                  className="glass-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  {/* Card Media Area (Fallback design gradient box) */}
                  <div
                    style={{
                      height: "200px",
                      background: gradient,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      padding: "20px",
                      position: "relative",
                      color: "#ffffff",
                    }}
                  >
                    {/* Floating pill tags */}
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: 700,
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                          padding: "4px 10px",
                          borderRadius: "20px",
                          backdropFilter: "blur(4px)",
                          textTransform: "uppercase",
                        }}
                      >
                        {post.category}
                      </span>
                      <span style={{ fontSize: "11px", fontWeight: 500 }}>{post.readTime}</span>
                    </div>

                    {/* Central Icon representation */}
                    <div style={{ opacity: 0.15, position: "absolute", right: "20px", bottom: "10px" }}>
                      {post.category === "Education" ? (
                        <BookOpen size={96} />
                      ) : post.category === "Infrastructure" ? (
                        <Server size={96} />
                      ) : (
                        <TrendingUp size={96} />
                      )}
                    </div>

                    <span style={{ fontSize: "12px", fontWeight: 600, opacity: 0.9 }}>{post.date}</span>
                  </div>

                  {/* Card Content Area */}
                  <div
                    style={{
                      padding: "24px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      flexGrow: 1,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-outfit), sans-serif",
                        fontSize: "20px",
                        fontWeight: 700,
                        lineHeight: 1.3,
                        color: "var(--text-primary)",
                      }}
                    >
                      {post.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "14px",
                        color: "var(--text-secondary)",
                        lineHeight: 1.5,
                        flexGrow: 1,
                      }}
                    >
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "var(--primary)",
                        textDecoration: "none",
                        marginTop: "8px",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary-light)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--primary)")}
                    >
                      Read More <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container" style={{ padding: "40px 0 80px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="map-grid"
        >
          {/* Instructions Left Side */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "var(--primary)",
              }}
            >
              Our Nigeria, Our Priority
            </span>
            <h2
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 900,
                color: "var(--text-primary)",
                lineHeight: 1.1,
              }}
            >
              A Nationwide Movement <br />
              <span style={{ color: "var(--primary)" }}>for Real Change</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "15px",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              From every state to every community, this journey is about all of us. Explore our plans and updates
              across Nigeria.
            </p>

            {/* Instruction Steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "8px" }}>
              <div style={{ display: "flex", gap: "16px" }}>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(10, 77, 47, 0.08)",
                    color: "var(--primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "12px",
                    flexShrink: 0,
                  }}
                >
                  1
                </div>
                <div>
                  <h4 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "15px", fontWeight: 700 }}>
                    Hover over a state
                  </h4>
                  <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", color: "var(--text-secondary)" }}>
                    View focus areas and recent updates in that region.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px" }}>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(10, 77, 47, 0.08)",
                    color: "var(--primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "12px",
                    flexShrink: 0,
                  }}
                >
                  2
                </div>
                <div>
                  <h4 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "15px", fontWeight: 700 }}>
                    Click to read stories
                  </h4>
                  <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", color: "var(--text-secondary)" }}>
                    Learn what projects are actively planned or listening sessions held.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px" }}>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(10, 77, 47, 0.08)",
                    color: "var(--primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "12px",
                    flexShrink: 0,
                  }}
                >
                  3
                </div>
                <div>
                  <h4 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "15px", fontWeight: 700 }}>
                    Filter by Categories
                  </h4>
                  <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", color: "var(--text-secondary)" }}>
                    Toggle projects, high impact plans, or listening posts using the legend.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
              <Link href="/plan" className="btn-primary">
                Explore Policies
              </Link>
            </div>
          </div>

          {/* Map display */}
          <div style={{ display: "flex", width: "100%", overflow: "visible" }}>
            <Map3D />
          </div>
        </div>
      </section>

      {/* Media Queries Layout adjustments */}
      <style jsx global>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
          .map-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

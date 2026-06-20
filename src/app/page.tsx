"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, TrendingUp, Shield, Server, User } from "lucide-react";
import Map3D from "@/components/Map3D";
import { blogDatabase } from "@/data/blogData";

export default function Home() {
  // Get the first 3 blog posts for the homepage grid
  const recentPosts = blogDatabase.slice(0, 3);

  const pillars = [
    {
      icon: <User size={22} style={{ color: "#eab308" }} />,
      title: "People First",
      description: "Putting the dignity and wellbeing of every Nigerian at the center."
    },
    {
      icon: <TrendingUp size={22} style={{ color: "#eab308" }} />,
      title: "Prosperity for All",
      description: "Creating opportunities that unlock potential and drive shared wealth."
    },
    {
      icon: <Shield size={22} style={{ color: "#eab308" }} />,
      title: "Security & Justice",
      description: "Building a nation where every citizen feels safe and protected."
    },
    {
      icon: <Server size={22} style={{ color: "#eab308" }} />,
      title: "Sustainable Nigeria",
      description: "Protecting our resources and securing a better future for generations."
    }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
      {/* Hero Section */}
      <section
        className="container"
        style={{
          position: "relative",
          overflow: "visible",
          background: "radial-gradient(circle at 10% 20%, rgba(10, 77, 47, 0.04) 0%, transparent 60%), radial-gradient(circle at 90% 80%, rgba(234, 179, 8, 0.03) 0%, transparent 60%)",
          borderRadius: "24px",
        }}
      >
        {/* Large Decorative Gear Logo Watermark */}
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "-60px",
            width: "480px",
            height: "480px",
            opacity: 0.02,
            pointerEvents: "none",
            color: "var(--primary)",
            zIndex: 0,
          }}
        >
          <svg viewBox="0 0 100 100" fill="currentColor" width="100%" height="100%">
            <path d="M50 34c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm0 28c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12zm37.2-16.7l-7.6-1.3c-.6-2.5-1.7-4.9-3.2-7.1l4.5-6.2c.4-.6.3-1.4-.2-1.9l-5.7-5.7c-.5-.5-1.3-.6-1.9-.2l-6.2 4.5c-2.2-1.5-4.6-2.6-7.1-3.2v-7.6c0-.8-.6-1.4-1.4-1.4H44.1c-.8 0-1.4.6-1.4 1.4v7.6c-2.5.6-4.9 1.7-7.1 3.2l-6.2-4.5c-.6-.4-1.4-.3-1.9.2l-5.7 5.7c-.5.5-.6 1.3-.2 1.9l4.5 6.2c-1.5 2.2-2.6 4.6-3.2 7.1l-7.6 1.3c-.8.1-1.4.8-1.4 1.6v8.1c0 .8.6 1.4 1.4 1.4h7.6c.6 2.5 1.7 4.9 3.2 7.1l-4.5 6.2c-.4.6-.3 1.4.2 1.9l5.7 5.7c.5.5 1.3.6 1.9.2l6.2-4.5c2.2 1.5 4.6 2.6 7.1 3.2v7.6c0 .8.6 1.4 1.4 1.4h8.1c.8 0 1.4-.6 1.4-1.4v-7.6c2.5-.6 4.9-1.7 7.1-3.2l6.2 4.5c.6.4 1.4.3 1.9-.2l5.7-5.7c.5-.5.6-1.3.2-1.9l-4.5-6.2c1.5-2.2 2.6-4.6 3.2-7.1l7.6-1.3c.8-.1 1.4-.8 1.4-1.6v-8.1c0-.8-.6-1.4-1.4-1.4z" />
          </svg>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "center",
            padding: "48px 24px",
            position: "relative",
            zIndex: 1,
          }}
          className="hero-grid"
        >
          {/* Hero Copy */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
                fontFamily: "var(--font-jakarta), sans-serif",
              }}
            >
              <span
                style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--accent)" }}
              />
              Latest from Labour Direct
            </span>
            <h1
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 900,
                lineHeight: 1.1,
                color: "var(--text-primary)",
              }}
            >
              Building a Nigeria <br />
              <span style={{ color: "var(--primary)", display: "inline-block", position: "relative" }}>
                That Works for All
                <span
                  style={{
                    position: "absolute",
                    bottom: "4px",
                    left: 0,
                    width: "100%",
                    height: "4px",
                    backgroundColor: "rgba(234, 179, 8, 0.3)",
                    borderRadius: "2px",
                    zIndex: -1,
                  }}
                />
              </span>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: "clamp(15px, 2vw, 17px)",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                maxWidth: "520px",
              }}
            >
              Ideas, updates, and reflections on our journey to a stronger, united and prosperous Nigeria.
            </p>

            {/* Premium Stat Panel */}
            <div
              style={{
                display: "flex",
                gap: "32px",
                marginTop: "12px",
                marginBottom: "12px",
                borderTop: "1px solid var(--card-border)",
                paddingTop: "24px",
                maxWidth: "500px",
              }}
            >
              <div>
                <div style={{ fontSize: "24px", fontWeight: 800, fontFamily: "var(--font-playfair), serif", color: "var(--primary)" }}>36</div>
                <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>States Engaged</div>
              </div>
              <div style={{ borderLeft: "1px solid var(--card-border)", paddingLeft: "32px" }}>
                <div style={{ fontSize: "24px", fontWeight: 800, fontFamily: "var(--font-playfair), serif", color: "var(--primary)" }}>100+</div>
                <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>Planned Initiatives</div>
              </div>
              <div style={{ borderLeft: "1px solid var(--card-border)", paddingLeft: "32px" }}>
                <div style={{ fontSize: "24px", fontWeight: 800, fontFamily: "var(--font-playfair), serif", color: "var(--primary)" }}>1</div>
                <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>Unified Movement</div>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "8px" }}>
              <Link href="/blog" className="btn-primary">
                Read Our Latest Posts <ArrowRight size={18} />
              </Link>
              <Link href="/vision" className="btn-secondary">
                View Our Vision Manifesto
              </Link>
            </div>
          </div>

          {/* Hero Image Profile — Staggered Double Frame */}
          <div
            style={{
              position: "relative",
              justifySelf: "center",
              width: "100%",
              maxWidth: "400px",
              height: "420px",
            }}
          >
            {/* Offset Gold Backdrop Frame */}
            <div
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                width: "100%",
                height: "100%",
                borderRadius: "24px",
                border: "2.5px solid var(--accent)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
            {/* Top Primary Portrait Frame */}
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "24px",
                overflow: "hidden",
                border: "4px solid var(--primary-dark)",
                boxShadow: "var(--card-shadow)",
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
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "40%",
                  background: "linear-gradient(to top, rgba(10,77,47,0.85) 0%, transparent 100%)",
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
            marginTop: "20px",
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
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-jakarta), sans-serif",
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
                  fontFamily: "var(--font-jakarta), sans-serif",
                }}
              >
                From The Blog
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), serif",
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
                fontFamily: "var(--font-jakarta), sans-serif",
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
                          fontFamily: "var(--font-jakarta), sans-serif",
                        }}
                      >
                        {post.category}
                      </span>
                      <span style={{ fontSize: "11px", fontWeight: 500, fontFamily: "var(--font-jakarta), sans-serif" }}>{post.readTime}</span>
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

                    <span style={{ fontSize: "12px", fontWeight: 600, opacity: 0.9, fontFamily: "var(--font-jakarta), sans-serif" }}>{post.date}</span>
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
                        fontFamily: "var(--font-playfair), serif",
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
                        fontFamily: "var(--font-jakarta), sans-serif",
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
                        fontFamily: "var(--font-jakarta), sans-serif",
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
                fontFamily: "var(--font-jakarta), sans-serif",
              }}
            >
              Our Nigeria, Our Priority
            </span>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
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
                fontFamily: "var(--font-jakarta), sans-serif",
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
                  <h4 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "15px", fontWeight: 700 }}>
                    Hover over a state
                  </h4>
                  <p style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "13px", color: "var(--text-secondary)" }}>
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
                  <h4 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "15px", fontWeight: 700 }}>
                    Click to read stories
                  </h4>
                  <p style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "13px", color: "var(--text-secondary)" }}>
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
                  <h4 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "15px", fontWeight: 700 }}>
                    Filter by Categories
                  </h4>
                  <p style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "13px", color: "var(--text-secondary)" }}>
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

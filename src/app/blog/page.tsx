"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, BookOpen, TrendingUp, Shield, Server, Filter } from "lucide-react";
import { blogDatabase } from "@/data/blogData";
import { stateDatabase } from "@/data/stateData";

function BlogListContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedStateId, setSelectedStateId] = useState<string>("All");

  // Read search parameters on mount or when they change
  useEffect(() => {
    const stateParam = searchParams.get("state");
    if (stateParam) {
      setSelectedStateId(stateParam);
    }
  }, [searchParams]);

  // Handler to clear all filters
  const handleClearFilters = () => {
    setActiveCategory("All");
    setSelectedStateId("All");
    router.push("/blog");
  };

  // Unique categories list
  const categories = ["All", "Education", "Economy", "Infrastructure"];

  // Filter logic
  const filteredPosts = blogDatabase.filter((post) => {
    const matchCat = activeCategory === "All" || post.category === activeCategory;
    const matchState = selectedStateId === "All" || post.stateId === selectedStateId;
    return matchCat && matchState;
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      {/* Search and Filters panel */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "24px",
          padding: "24px",
          background: "var(--bg-secondary)",
          border: "1px solid var(--navbar-border)",
          borderRadius: "16px",
        }}
      >
        {/* Category Filters */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                border: "1px solid var(--card-border)",
                background: activeCategory === cat ? "var(--primary)" : "var(--bg-tertiary)",
                color: activeCategory === cat ? "#ffffff" : "var(--text-primary)",
                cursor: "pointer",
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* State Filter Selector */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              color: "var(--text-secondary)",
            }}
          >
            <Filter size={16} /> Filter by State:
          </span>
          <select
            value={selectedStateId}
            onChange={(e) => setSelectedStateId(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              border: "1px solid var(--card-border)",
              background: "var(--bg-tertiary)",
              color: "var(--text-primary)",
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: "13px",
              outline: "none",
              cursor: "pointer",
            }}
          >
            <option value="All">All States</option>
            {Object.values(stateDatabase).map((state) => (
              <option key={state.id} value={state.id}>
                {state.name}
              </option>
            ))}
          </select>

          {(activeCategory !== "All" || selectedStateId !== "All") && (
            <button
              onClick={handleClearFilters}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--primary-light)",
                fontSize: "12px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Grid list of filtered blogs */}
      {filteredPosts.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
            gap: "24px",
          }}
        >
          {filteredPosts.map((post) => {
            // Custom card color mappings based on category
            let gradient = "linear-gradient(135deg, #10b981 0%, #059669 100%)";
            if (post.category === "Education") {
              gradient = "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)";
            } else if (post.category === "Infrastructure") {
              gradient = "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)";
            }

            // Resolve focus state name if set
            const focusState = post.stateId ? stateDatabase[post.stateId]?.name : null;

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
                {/* Fallback visual gradient box */}
                <div
                  style={{
                    height: "180px",
                    background: gradient,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "20px",
                    position: "relative",
                    color: "#ffffff",
                  }}
                >
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

                  <div style={{ opacity: 0.15, position: "absolute", right: "20px", bottom: "10px" }}>
                    {post.category === "Education" ? (
                      <BookOpen size={80} />
                    ) : post.category === "Infrastructure" ? (
                      <Server size={80} />
                    ) : (
                      <TrendingUp size={80} />
                    )}
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <span style={{ fontSize: "12px", fontWeight: 600, opacity: 0.9, fontFamily: "var(--font-jakarta), sans-serif" }}>{post.date}</span>
                    {focusState && (
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: 700,
                          backgroundColor: "#eab308",
                          color: "#0f172a",
                          padding: "2px 8px",
                          borderRadius: "4px",
                        }}
                      >
                        {focusState} Focus
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content details */}
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
                      fontSize: "18px",
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
                      fontSize: "13.5px",
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
                  >
                    Read Full Story <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div
          className="glass-card"
          style={{
            padding: "48px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "20px", fontWeight: 700 }}>
            No Articles Found
          </h3>
          <p style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "14px", color: "var(--text-secondary)", maxWidth: "360px" }}>
            We could not find any updates matching the selected category and state filters.
          </p>
          <button onClick={handleClearFilters} className="btn-primary" style={{ padding: "10px 18px", fontSize: "13px" }}>
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function BlogPage() {
  return (
    <div className="container" style={{ padding: "40px 0 80px 0", display: "flex", flexDirection: "column", gap: "48px" }}>
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
          Campaign Hub
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
          Articles, News <span style={{ color: "var(--primary)" }}>& State Updates</span>
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
          Stay informed on our regional campaigns, manifesto launches, and localized initiatives across thirty six states.
        </p>
      </div>

      {/* Suspense boundary for searchParams hook hook */}
      <Suspense fallback={<div style={{ textAlign: "center", padding: "40px" }}>Loading filter data...</div>}>
        <BlogListContent />
      </Suspense>
    </div>
  );
}

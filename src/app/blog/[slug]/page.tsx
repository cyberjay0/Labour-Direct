import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { blogDatabase } from "@/data/blogData";
import { stateDatabase } from "@/data/stateData";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogDatabase.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container" style={{ padding: "80px 24px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "36px", fontWeight: 800, marginBottom: "16px" }}>
          Article Not Found
        </h1>
        <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "16px", color: "var(--text-secondary)", marginBottom: "32px" }}>
          We could not find the blog post you are looking for.
        </p>
        <Link href="/blog" className="btn-primary">
          Back to Blog directory
        </Link>
      </div>
    );
  }

  // Resolve state focus name if set
  const focusState = post.stateId ? stateDatabase[post.stateId]?.name : null;

  // Custom gradient styles based on category
  let headerGradient = "linear-gradient(135deg, #10b981 0%, #0a4d2f 100%)";
  if (post.category === "Education") {
    headerGradient = "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)";
  } else if (post.category === "Infrastructure") {
    headerGradient = "linear-gradient(135deg, #f59e0b 0%, #ca8a04 100%)";
  }

  return (
    <article className="container" style={{ padding: "20px 0 80px 0", maxWidth: "800px" }}>
      {/* Back to list Link */}
      <Link
        href="/blog"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "14px",
          fontWeight: 600,
          color: "var(--primary)",
          textDecoration: "none",
          marginBottom: "32px",
        }}
      >
        <ArrowLeft size={16} /> Back to Blog directory
      </Link>

      {/* Decorative colored header cover */}
      <div
        style={{
          height: "120px",
          background: headerGradient,
          borderRadius: "20px",
          marginBottom: "40px",
          display: "flex",
          alignItems: "center",
          padding: "0 32px",
          color: "#ffffff",
        }}
      >
        <span
          style={{
            fontSize: "12px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            padding: "6px 12px",
            borderRadius: "20px",
            backdropFilter: "blur(4px)",
          }}
        >
          {post.category} Campaign News
        </span>
      </div>

      {/* Article Meta */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
        <h1
          style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 900,
            lineHeight: 1.15,
            color: "var(--text-primary)",
          }}
        >
          {post.title}
        </h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            fontSize: "13px",
            color: "var(--text-muted)",
            borderBottom: "1px solid var(--navbar-border)",
            paddingBottom: "20px",
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Calendar size={14} /> {post.date}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Clock size={14} /> {post.readTime}
          </span>
          {focusState && (
            <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--accent)" }}>
              <Tag size={14} /> {focusState} Focus Area
            </span>
          )}
        </div>
      </div>

      {/* Article Content body paragraphs */}
      <div
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "16px",
          color: "var(--text-secondary)",
          lineHeight: 1.8,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {post.content.split("\n\n").map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

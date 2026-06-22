"use client";

export default function TrustStrip() {
  const stats = [
    { value: "774", label: "LGAs\nFully Mapped" },
    { value: "8,809", label: "Wards\nAlready Mapped" },
    { value: "36+", label: "Sectors\nIntegrated" },
    { value: "NLC + TUC", label: "Governing\nBoard" },
  ];

  return (
    <section
      style={{
        backgroundColor: "var(--bg-tertiary)",
        borderTop: "1px solid var(--card-border)",
        borderBottom: "1px solid var(--card-border)",
        padding: "48px 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "36px",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Pull quote */}
        <div style={{ maxWidth: "720px" }}>
          <p
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(18px, 2.5vw, 24px)",
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.45,
              margin: 0,
              fontStyle: "italic",
            }}
          >
            &ldquo;Think of it as Google Maps, Budget Office and NLC Policy Unit combined into one website.
            Every sector. One map. One budget. One set of rules.&rdquo;
          </p>
          <p
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "var(--primary)",
              marginTop: "14px",
              marginBottom: 0,
            }}
          >
            Labour Institute of Nigeria
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "40px",
            height: "2px",
            backgroundColor: "var(--brand-red)",
            borderRadius: "2px",
          }}
        />

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(140px, 100%), 1fr))",
            gap: "1px",
            width: "100%",
            maxWidth: "760px",
            background: "var(--card-border)",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid var(--card-border)",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "24px 20px",
                background: "var(--bg-secondary)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(20px, 2.5vw, 26px)",
                  fontWeight: 800,
                  color: "var(--primary)",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jakarta), sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                  color: "var(--text-muted)",
                  whiteSpace: "pre-line",
                  textAlign: "center",
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Governance note */}
        <p
          style={{
            fontFamily: "var(--font-jakarta), sans-serif",
            fontSize: "12px",
            color: "var(--text-muted)",
            margin: 0,
            maxWidth: "500px",
            lineHeight: 1.6,
          }}
        >
          Developed by the Labour Institute of Nigeria as a public-interest tool.
          Data is owned by the Nigerian people. NLC and TUC sit on the governing board
          to ensure it serves workers, not politicians.
        </p>
      </div>
    </section>
  );
}

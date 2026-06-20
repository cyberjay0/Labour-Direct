"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ZoomIn, ZoomOut, RotateCcw, Compass, MapPin, CheckCircle } from "lucide-react";
import nigeriaMap from "@svg-maps/nigeria";
import { stateDatabase, StateData, StateInitiative } from "@/data/stateData";

export default function Map3D() {
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [hoveredStateId, setHoveredStateId] = useState<string | null>(null);
  const [centroids, setCentroids] = useState<Record<string, { x: number; y: number }>>({});
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [tiltMode, setTiltMode] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Calculate centroids once on mount
  useEffect(() => {
    const calculateCentroids = () => {
      const svg = svgRef.current;
      if (!svg) return;

      const newCentroids: Record<string, { x: number; y: number }> = {};
      const paths = svg.querySelectorAll("path");
      
      paths.forEach((path) => {
        const id = path.getAttribute("id");
        if (id) {
          try {
            const bbox = (path as SVGPathElement).getBBox();
            newCentroids[id] = {
              x: bbox.x + bbox.width / 2,
              y: bbox.y + bbox.height / 2
            };
          } catch (e) {
            // Fallback for environments where getBBox is not available
          }
        }
      });
      
      setCentroids(newCentroids);
    };

    // Delay calculation slightly to ensure layout completes
    const timer = setTimeout(calculateCentroids, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleStateClick = (stateId: string) => {
    const data = stateDatabase[stateId];
    if (data) {
      setSelectedState(data);
    }
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.75));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setTiltMode(false);
    setSelectedState(null);
    setActiveFilter(null);
  };
  const toggleTilt = () => setTiltMode((prev) => !prev);

  // Filter initiatives by category
  const filteredStates = Object.values(stateDatabase).filter((state) => {
    if (!activeFilter) return true;
    return state.initiatives.some((init) => init.category === activeFilter);
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Map Control Actions */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "8px",
          position: "absolute",
          top: "16px",
          right: "16px",
          zIndex: 10,
        }}
      >
        <button
          onClick={handleZoomIn}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "8px",
            border: "1px solid var(--card-border)",
            background: "var(--bg-secondary)",
            color: "var(--text-primary)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          title="Zoom In"
        >
          <ZoomIn size={18} />
        </button>
        <button
          onClick={handleZoomOut}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "8px",
            border: "1px solid var(--card-border)",
            background: "var(--bg-secondary)",
            color: "var(--text-primary)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          title="Zoom Out"
        >
          <ZoomOut size={18} />
        </button>
        <button
          onClick={toggleTilt}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "8px",
            border: "1px solid var(--card-border)",
            background: tiltMode ? "var(--primary)" : "var(--bg-secondary)",
            color: tiltMode ? "#ffffff" : "var(--text-primary)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s",
          }}
          title="Change Perspective Tilt"
        >
          <Compass size={18} />
        </button>
        <button
          onClick={handleReset}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "8px",
            border: "1px solid var(--card-border)",
            background: "var(--bg-secondary)",
            color: "var(--text-primary)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          title="Reset Map View"
        >
          <RotateCcw size={18} />
        </button>
      </div>

      {/* 3D Map Perspective Box */}
      <div className="map-3d-scene" ref={containerRef}>
        <div
          className="map-3d-container"
          style={{
            transform: `rotateX(${tiltMode ? "42deg" : "55deg"}) rotateZ(${
              tiltMode ? "-15deg" : "-30deg"
            }) scale(${zoom}) translate3d(${pan.x}px, ${pan.y}px, 0)`,
          }}
        >
          {/* Layer 1: Shadow Backdrop (Lowest) */}
          <div className="map-layer map-layer-shadow" style={{ transform: "translateZ(-24px)" }}>
            <svg viewBox={nigeriaMap.viewBox} className="map-svg">
              {nigeriaMap.locations.map((loc) => (
                <path key={`sh-${loc.id}`} d={loc.path} className="state-path" />
              ))}
            </svg>
          </div>

          {/* Layer 2 to 5: Extrusion Thickness Blocks */}
          <div className="map-layer map-layer-depth" style={{ transform: "translateZ(-16px)" }}>
            <svg viewBox={nigeriaMap.viewBox} className="map-svg">
              {nigeriaMap.locations.map((loc) => (
                <path key={`dp1-${loc.id}`} d={loc.path} className="state-path" />
              ))}
            </svg>
          </div>
          <div className="map-layer map-layer-depth" style={{ transform: "translateZ(-12px)" }}>
            <svg viewBox={nigeriaMap.viewBox} className="map-svg">
              {nigeriaMap.locations.map((loc) => (
                <path key={`dp2-${loc.id}`} d={loc.path} className="state-path" />
              ))}
            </svg>
          </div>
          <div className="map-layer map-layer-depth" style={{ transform: "translateZ(-8px)" }}>
            <svg viewBox={nigeriaMap.viewBox} className="map-svg">
              {nigeriaMap.locations.map((loc) => (
                <path key={`dp3-${loc.id}`} d={loc.path} className="state-path" />
              ))}
            </svg>
          </div>
          <div className="map-layer map-layer-depth" style={{ transform: "translateZ(-4px)" }}>
            <svg viewBox={nigeriaMap.viewBox} className="map-svg">
              {nigeriaMap.locations.map((loc) => (
                <path key={`dp4-${loc.id}`} d={loc.path} className="state-path" />
              ))}
            </svg>
          </div>

          {/* Layer 6: Main Interactive Topography Surface (Highest) */}
          <div className="map-layer map-layer-interactive" style={{ transform: "translateZ(0px)" }}>
            <svg viewBox={nigeriaMap.viewBox} className="map-svg" ref={svgRef} id="interactive-map-svg">
              {nigeriaMap.locations.map((loc) => {
                const isHovered = hoveredStateId === loc.id;
                const isSelected = selectedState?.id === loc.id;
                const hasMatchingFilter = filteredStates.some((s) => s.id === loc.id);

                return (
                  <path
                    key={loc.id}
                    id={loc.id}
                    d={loc.path}
                    className={`state-path ${isSelected ? "state-path-selected" : ""}`}
                    style={{
                      fill: isSelected
                        ? "var(--map-fill-active)"
                        : isHovered
                        ? "var(--map-fill-hover)"
                        : hasMatchingFilter && activeFilter
                        ? "var(--primary-light)"
                        : "var(--map-fill)",
                      opacity: activeFilter && !hasMatchingFilter ? 0.35 : 1,
                      transform: isHovered ? "translateZ(8px)" : "translateZ(0px)",
                      transition: "transform 0.2s ease, fill 0.2s, opacity 0.3s",
                    }}
                    onMouseEnter={() => setHoveredStateId(loc.id)}
                    onMouseLeave={() => setHoveredStateId(null)}
                    onClick={() => handleStateClick(loc.id)}
                  />
                );
              })}
            </svg>
          </div>

          {/* 3D Billboarding Project Pins */}
          {Object.entries(centroids).map(([id, coords]) => {
            const stateData = stateDatabase[id];
            if (!stateData) return null;

            // Only show pin for the hovered/selected category or all if no filter
            const matchInits = stateData.initiatives.filter(
              (init) => !activeFilter || init.category === activeFilter
            );

            if (matchInits.length === 0) return null;
            const primaryInit = matchInits[0];

            let pinColorClass = "map-pin-green";
            if (primaryInit.category === "active-project") pinColorClass = "map-pin-yellow";
            if (primaryInit.category === "listening") pinColorClass = "map-pin-blue";

            return (
              <div
                key={`pin-${id}`}
                className="map-pin"
                style={{
                  left: `${(coords.x / 744) * 100}%`,
                  top: `${(coords.y / 600) * 100}%`,
                  transform: `translate3d(-50%, -50%, ${hoveredStateId === id ? "12px" : "4px"})`,
                }}
                onClick={() => handleStateClick(id)}
                onMouseEnter={() => setHoveredStateId(id)}
                onMouseLeave={() => setHoveredStateId(null)}
              >
                <div className={`map-pin-inner ${pinColorClass}`}>
                  <div className="map-pin-pulse" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating State Detail Card (Billboard placement or sidebar layout) */}
      {selectedState && (
        <div
          className="glass-card"
          style={{
            padding: "24px",
            border: "1px solid var(--card-border)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
            position: "relative",
            animation: "fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "12px",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: "20px",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                }}
              >
                {selectedState.name} State
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "13px",
                  color: "var(--primary-light)",
                  fontWeight: 600,
                  marginTop: "2px",
                }}
              >
                Campaign Regional Focus
              </p>
            </div>
            <button
              onClick={() => setSelectedState(null)}
              style={{
                background: "transparent",
                border: "none",
                fontSize: "18px",
                color: "var(--text-muted)",
                cursor: "pointer",
                padding: "4px",
              }}
            >
              &times;
            </button>
          </div>

          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "14px",
              color: "var(--text-secondary)",
              marginBottom: "20px",
              lineHeight: 1.5,
            }}
          >
            {selectedState.summary}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            {selectedState.initiatives.map((init, index) => {
              let tagColor = "#22c55e"; // green
              let typeLabel = "High Impact Initiative";
              if (init.category === "active-project") {
                tagColor = "#eab308"; // gold
                typeLabel = "Active Project";
              } else if (init.category === "listening") {
                tagColor = "#3b82f6"; // blue
                typeLabel = "Community Listening";
              }

              return (
                <div
                  key={index}
                  style={{
                    padding: "16px",
                    borderRadius: "10px",
                    background: "var(--bg-tertiary)",
                    borderLeft: `4px solid ${tagColor}`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      fontWeight: 700,
                      color: tagColor,
                      marginBottom: "6px",
                    }}
                  >
                    {typeLabel}
                  </div>
                  <h4
                    style={{
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "4px",
                    }}
                  >
                    {init.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "13px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    }}
                  >
                    {init.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link
              href={`/blog?state=${selectedState.id}`}
              className="btn-primary"
              style={{ padding: "10px 20px", fontSize: "13px" }}
            >
              View Local State Updates
            </Link>
          </div>
        </div>
      )}

      {/* Legend & Filtration */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
          padding: "16px",
          background: "var(--bg-secondary)",
          border: "1px solid var(--navbar-border)",
          borderRadius: "12px",
          marginTop: "12px",
        }}
      >
        {[
          { key: "high-impact", label: "High Impact Initiatives", color: "#22c55e" },
          { key: "active-project", label: "Active Projects", color: "#eab308" },
          { key: "listening", label: "Community Listening", color: "#3b82f6" },
        ].map((item) => {
          const isActive = activeFilter === item.key;
          return (
            <button
              key={item.key}
              onClick={() => setActiveFilter(isActive ? null : item.key)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "20px",
                border: isActive ? `2px solid ${item.color}` : "1px solid var(--card-border)",
                background: isActive ? "var(--bg-tertiary)" : "transparent",
                color: "var(--text-primary)",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: item.color,
                }}
              />
              {item.label}
            </button>
          );
        })}
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { ZoomIn, ZoomOut, RotateCcw, Minimize2, Maximize2, X, MapPin, ChevronRight, Users, Building2, Wallet } from "lucide-react";
import nigeriaMap from "@svg-maps/nigeria";
import { stateDatabase, StateData } from "@/data/stateData";

const labelOffsets: Record<string, { x: number; y: number }> = {
  kogi: { x: -8, y: 15 },
  niger: { x: 5, y: -8 },
  "cross-river": { x: -10, y: 8 },
  rivers: { x: 0, y: -10 },
  bayelsa: { x: 6, y: -12 },
  delta: { x: -12, y: -4 },
  oyo: { x: 12, y: 8 },
  kebbi: { x: 12, y: 8 },
  fct: { x: 2, y: -2 },
  nassarawa: { x: 6, y: -6 },
  lagos: { x: 2, y: -6 },
  anambra: { x: -6, y: 2 },
  imo: { x: 4, y: 4 },
  abia: { x: 6, y: -2 },
  enugu: { x: 2, y: -4 },
  ebonyi: { x: 4, y: -2 },
  "akwa-ibom": { x: 0, y: -8 },
};

export default function Map3D() {
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [panelVisible, setPanelVisible] = useState(false);
  const [hoveredStateId, setHoveredStateId] = useState<string | null>(null);
  const [centroids, setCentroids] = useState<Record<string, { x: number; y: number }>>({});
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Rotation lives in refs to avoid re-render lag during drag
  const rotateXRef = useRef(55);
  const rotateZRef = useRef(-30);
  const dragStartRef = useRef({ x: 0, y: 0, rotX: 55, rotZ: -30 });
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const fsMapContainerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const rafRef = useRef<number | null>(null);

  // Track which SVG path the finger started on (for reliable mobile tap)
  const touchedStateRef = useRef<string | null>(null);
  const touchMovedRef = useRef(false);

  const applyTransform = useCallback((rotX: number, rotZ: number, z: number, instant = false) => {
    const targets = [mapContainerRef.current, fsMapContainerRef.current].filter(Boolean);
    targets.forEach((el) => {
      if (!el) return;
      el.style.transition = instant ? "none" : "transform 0.55s cubic-bezier(0.25, 1, 0.5, 1)";
      el.style.transform = `rotateX(${rotX}deg) rotateZ(${rotZ}deg) scale(${z})`;
    });
  }, []);

  useEffect(() => {
    const calculate = () => {
      const svg = svgRef.current;
      if (!svg) return;
      const result: Record<string, { x: number; y: number }> = {};
      svg.querySelectorAll("path").forEach((path) => {
        const id = path.getAttribute("id");
        if (id) {
          try {
            const b = (path as SVGPathElement).getBBox();
            result[id] = { x: b.x + b.width / 2, y: b.y + b.height / 2 };
          } catch (_) {}
        }
      });
      setCentroids(result);
    };
    const t = setTimeout(calculate, 400);
    return () => clearTimeout(t);
  }, [isFullscreen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (panelVisible) closePanel();
        else if (isFullscreen) setIsFullscreen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isFullscreen, panelVisible]);

  useEffect(() => {
    document.body.style.overflow = isFullscreen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isFullscreen]);

  const openPanel = (data: StateData) => {
    setSelectedState(data);
    setPanelVisible(true);
  };

  const closePanel = () => {
    setPanelVisible(false);
    setTimeout(() => setSelectedState(null), 350);
  };

  const handleStateClick = (stateId: string) => {
    const data = stateDatabase[stateId];
    if (data) openPanel(data);
  };

  // rAF drag
  const onDragMove = useCallback((clientX: number, clientY: number) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const dx = clientX - dragStartRef.current.x;
      const dy = clientY - dragStartRef.current.y;
      const speed = 0.4;
      rotateZRef.current = dragStartRef.current.rotZ - dx * speed;
      rotateXRef.current = Math.min(Math.max(dragStartRef.current.rotX - dy * speed, 20), 80);
      applyTransform(rotateXRef.current, rotateZRef.current, zoom, true);
    });
  }, [zoom, applyTransform]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY, rotX: rotateXRef.current, rotZ: rotateZRef.current };
  };
  const handleMouseMove = (e: React.MouseEvent) => { if (isDragging) onDragMove(e.clientX, e.clientY); };
  const handleMouseUp = () => setIsDragging(false);

  // Touch handlers: per-path touchStart records which state was touched
  // so we don't rely on elementFromPoint (which breaks under 3D CSS transforms)
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    touchMovedRef.current = false;
    touchedStateRef.current = null;
    const t = e.touches[0];
    dragStartRef.current = { x: t.clientX, y: t.clientY, rotX: rotateXRef.current, rotZ: rotateZRef.current };
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const t = e.touches[0];
    const dx = Math.abs(t.clientX - dragStartRef.current.x);
    const dy = Math.abs(t.clientY - dragStartRef.current.y);
    if (dx > 8 || dy > 8) touchMovedRef.current = true;
    onDragMove(t.clientX, t.clientY);
  };
  const handleTouchEnd = () => {
    setIsDragging(false);
    // If it was a tap (not a drag) and we recorded which state, open it
    if (!touchMovedRef.current && touchedStateRef.current) {
      handleStateClick(touchedStateRef.current);
    }
    touchedStateRef.current = null;
  };

  const handleZoomIn = () => { const z = Math.min(zoom + 0.25, 2.5); setZoom(z); applyTransform(rotateXRef.current, rotateZRef.current, z); };
  const handleZoomOut = () => { const z = Math.max(zoom - 0.25, 0.6); setZoom(z); applyTransform(rotateXRef.current, rotateZRef.current, z); };
  const handleReset = () => {
    rotateXRef.current = 55; rotateZRef.current = -30;
    setZoom(1); setActiveFilter(null); closePanel();
    applyTransform(55, -30, 1);
  };

  const filteredStates = Object.values(stateDatabase).filter((s) =>
    !activeFilter || s.initiatives.some((i) => i.category === activeFilter)
  );

  const LEGEND = [
    { key: "high-impact", label: "High Impact", color: "#22c55e" },
    { key: "active-project", label: "Active Projects", color: "#eab308" },
    { key: "listening", label: "Community Listening", color: "#3b82f6" },
  ];

  const controlBtnStyle: React.CSSProperties = {
    width: "38px", height: "38px", borderRadius: "10px",
    border: "1px solid var(--card-border)", background: "var(--bg-secondary)",
    color: "var(--text-primary)", cursor: "pointer", display: "flex",
    alignItems: "center", justifyContent: "center",
    transition: "all 0.2s ease", backdropFilter: "blur(8px)",
  };

  const MapSVGContent = ({ fullscreen }: { fullscreen: boolean }) => (
    <>
      {/* Shadow Layer */}
      <div className="map-layer map-layer-shadow" style={{ transform: "translateZ(-24px)" }}>
        <svg viewBox={nigeriaMap.viewBox} className="map-svg">
          {nigeriaMap.locations.map((loc) => <path key={`sh-${loc.id}`} d={loc.path} className="state-path" />)}
        </svg>
      </div>
      {[-16, -12, -8, -4].map((z) => (
        <div key={z} className="map-layer map-layer-depth" style={{ transform: `translateZ(${z}px)` }}>
          <svg viewBox={nigeriaMap.viewBox} className="map-svg">
            {nigeriaMap.locations.map((loc) => <path key={`dp${z}-${loc.id}`} d={loc.path} className="state-path" />)}
          </svg>
        </div>
      ))}
      {/* Interactive Surface */}
      <div className="map-layer map-layer-interactive" style={{ transform: "translateZ(0px)" }}>
        <svg viewBox={nigeriaMap.viewBox} className="map-svg" ref={fullscreen ? undefined : svgRef}>
          {nigeriaMap.locations.map((loc) => {
            const isHovered = hoveredStateId === loc.id;
            const isSelected = selectedState?.id === loc.id;
            const hasFilter = filteredStates.some((s) => s.id === loc.id);
            return (
              <path
                key={loc.id}
                id={loc.id}
                d={loc.path}
                className={`state-path ${isSelected ? "state-path-selected" : ""}`}
                style={{
                  fill: isSelected ? "var(--map-fill-active)" : isHovered ? "var(--map-fill-hover)" : hasFilter && activeFilter ? "var(--primary-light)" : "var(--map-fill)",
                  opacity: activeFilter && !hasFilter ? 0.3 : 1,
                  transition: "fill 0.22s ease, opacity 0.3s ease",
                  filter: isHovered ? "brightness(1.15)" : "none",
                }}
                onMouseEnter={() => setHoveredStateId(loc.id)}
                onMouseLeave={() => setHoveredStateId(null)}
                onClick={() => handleStateClick(loc.id)}
                // Record which state was touched so touchEnd can open it reliably
                onTouchStart={(e) => { touchedStateRef.current = loc.id; e.stopPropagation(); }}
              />
            );
          })}
        </svg>
      </div>
      {/* Pins */}
      {Object.entries(centroids).map(([id, coords]) => {
        const sd = stateDatabase[id];
        if (!sd) return null;
        const matching = sd.initiatives.filter((i) => !activeFilter || i.category === activeFilter);
        if (matching.length === 0) return null;
        const cat = matching[0].category;
        const pinColor = cat === "active-project" ? "#eab308" : cat === "listening" ? "#3b82f6" : "#22c55e";
        const off = labelOffsets[id] || { x: 0, y: 0 };
        return (
          <div
            key={`pin-${id}`}
            className="map-pin"
            style={{
              left: `${((coords.x + off.x) / 744) * 100}%`,
              top: `${((coords.y + off.y) / 600) * 100}%`,
              transform: `translate3d(-50%, -50%, ${hoveredStateId === id ? "14px" : "5px"})`,
              transition: "transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
            onClick={() => handleStateClick(id)}
            onMouseEnter={() => setHoveredStateId(id)}
            onMouseLeave={() => setHoveredStateId(null)}
            onTouchStart={() => { touchedStateRef.current = id; }}
          >
            <div className="map-pin-inner" style={{ backgroundColor: pinColor, border: "2.5px solid #fff", width: "12px", height: "12px", borderRadius: "50%", position: "relative" }}>
              <div className="map-pin-pulse" style={{ backgroundColor: pinColor }} />
            </div>
          </div>
        );
      })}
      {/* State Labels (fullscreen only) */}
      {fullscreen && Object.entries(centroids).map(([id, coords]) => {
        const sd = stateDatabase[id];
        if (!sd) return null;
        const off = labelOffsets[id] || { x: 0, y: 0 };
        return (
          <div key={`lbl-${id}`} style={{
            position: "absolute",
            left: `${((coords.x + off.x) / 744) * 100}%`,
            top: `${((coords.y + off.y) / 600) * 100}%`,
            transform: `translate3d(-50%, -50%, 16px) rotateZ(${-rotateZRef.current}deg) rotateX(${-rotateXRef.current}deg)`,
            transformStyle: "preserve-3d",
            pointerEvents: "none",
            fontSize: "8px", fontWeight: 800,
            color: "var(--text-primary)", backgroundColor: "var(--card-bg)",
            border: "1px solid var(--card-border)", padding: "1px 4px",
            borderRadius: "3px", whiteSpace: "nowrap",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            letterSpacing: "0.5px",
            fontFamily: "var(--font-jakarta), sans-serif",
            transition: isDragging ? "none" : "transform 0.55s cubic-bezier(0.25, 1, 0.5, 1)",
          }}>
            {sd.name === "Federal Capital Territory" ? "FCT" : sd.name}
          </div>
        );
      })}
    </>
  );

  const MapDragWrapper = ({ fullscreen, containerRef }: { fullscreen: boolean; containerRef: React.RefObject<HTMLDivElement> }) => (
    <div
      style={{
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
        touchAction: "none",
        width: "100%",
        height: fullscreen ? "calc(100vh - 160px)" : "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: "1200px",
        perspectiveOrigin: "50% 40%",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div style={{
        width: "100%", height: "100%",
        display: "flex", alignItems: "center", justifyContent: "center",
        transformStyle: "preserve-3d",
        animation: isDragging ? "none" : "mapFloat 8s ease-in-out infinite",
      }}>
        <div
          ref={containerRef}
          className="map-3d-container"
          style={{
            aspectRatio: "744 / 600",
            width: fullscreen ? "min(82vw, 88vh)" : "100%",
            height: "auto",
            maxWidth: fullscreen ? "1100px" : "600px",
            transform: `rotateX(${rotateXRef.current}deg) rotateZ(${rotateZRef.current}deg) scale(${zoom})`,
            transition: isDragging ? "none" : "transform 0.55s cubic-bezier(0.25, 1, 0.5, 1)",
            transformStyle: "preserve-3d",
            position: "relative",
          }}
        >
          <MapSVGContent fullscreen={fullscreen} />
        </div>
      </div>
    </div>
  );

  const LegendBar = () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      {LEGEND.map((item) => {
        const active = activeFilter === item.key;
        return (
          <button key={item.key} onClick={() => setActiveFilter(active ? null : item.key)} style={{
            display: "flex", alignItems: "center", gap: "6px",
            padding: "6px 14px", borderRadius: "20px",
            border: active ? `2px solid ${item.color}` : "1px solid var(--card-border)",
            background: active ? `${item.color}18` : "var(--bg-secondary)",
            color: "var(--text-primary)", fontFamily: "var(--font-jakarta), sans-serif",
            fontSize: "12px", fontWeight: 600, cursor: "pointer",
            transition: "all 0.22s ease", backdropFilter: "blur(8px)",
          }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: item.color, flexShrink: 0 }} />
            {item.label}
          </button>
        );
      })}
    </div>
  );

  const ControlBar = ({ fullscreen }: { fullscreen: boolean }) => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      {[
        { icon: <ZoomIn size={16} />, action: handleZoomIn, title: "Zoom In" },
        { icon: <ZoomOut size={16} />, action: handleZoomOut, title: "Zoom Out" },
        { icon: <RotateCcw size={16} />, action: handleReset, title: "Reset View" },
      ].map(({ icon, action, title }) => (
        <button key={title} onClick={action} title={title} style={controlBtnStyle}>{icon}</button>
      ))}
      <button
        onClick={() => setIsFullscreen(!fullscreen)}
        title={fullscreen ? "Exit Fullscreen" : "Fullscreen"}
        style={{ ...controlBtnStyle, background: fullscreen ? "var(--primary)" : "var(--bg-secondary)", color: fullscreen ? "#fff" : "var(--text-primary)" }}
      >
        {fullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
      </button>
    </div>
  );

  return (
    <>
      {/* Standard view */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <LegendBar />
          <ControlBar fullscreen={false} />
        </div>

        {/* Map + state popup overlay wrapper */}
        <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden" }}>
          {/* Only render the normal map when NOT in fullscreen */}
          {!isFullscreen && (
            <MapDragWrapper fullscreen={false} containerRef={mapContainerRef as React.RefObject<HTMLDivElement>} />
          )}

          {/* State popup: absolute overlay centred over the map */}
          {panelVisible && !isFullscreen && selectedState && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,0,0,0.45)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                padding: "16px",
                animation: "fsBackdropIn 0.3s ease-out",
              }}
              onClick={closePanel}
            >
              <div
                style={{ width: "min(480px, 100%)", maxHeight: "calc(100% - 32px)", overflowY: "auto" }}
                onClick={(e) => e.stopPropagation()}
              >
                <StatePanel state={selectedState} onClose={closePanel} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen backdrop */}
      {isFullscreen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 9998,
          backgroundColor: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)",
          animation: "fsBackdropIn 0.35s ease-out forwards",
        }} onClick={() => setIsFullscreen(false)} />
      )}

      {/* Fullscreen modal */}
      {isFullscreen && (
        <div style={{
          position: "fixed", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "calc(100vw - 48px)", maxWidth: "1400px",
          height: "calc(100vh - 48px)", zIndex: 9999,
          background: "var(--bg-primary)", borderRadius: "24px",
          border: "1px solid var(--card-border)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.4)",
          display: "flex", flexDirection: "column", overflow: "hidden",
          animation: "fsModalIn 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards",
        }} onClick={(e) => e.stopPropagation()}>
          {/* Fullscreen header */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "20px 28px", borderBottom: "1px solid var(--card-border)", flexShrink: 0,
            flexWrap: "wrap", gap: "12px",
          }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "20px", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>
                Labour Direct Map Explorer
              </h3>
              <p style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "12px", color: "var(--text-muted)", margin: "2px 0 0 0" }}>
                Drag to rotate. Click a state to view its plan.
              </p>
            </div>
            <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
              <LegendBar />
              <ControlBar fullscreen={true} />
              <button onClick={() => setIsFullscreen(false)} style={{ ...controlBtnStyle, marginLeft: "4px", background: "var(--bg-tertiary)" }} title="Close">
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Fullscreen map area */}
          <div style={{ flex: 1, display: "flex", overflow: "hidden", position: "relative" }}>
            <div style={{ flex: 1 }}>
              <MapDragWrapper fullscreen={true} containerRef={fsMapContainerRef as React.RefObject<HTMLDivElement>} />
            </div>

            {/* Side drawer in fullscreen */}
            <div style={{
              position: "absolute", top: "16px", right: "16px", bottom: "16px", width: "340px",
              transform: panelVisible ? "translateX(0)" : "translateX(calc(100% + 24px))",
              transition: "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)",
              zIndex: 100, display: "flex", flexDirection: "column",
              pointerEvents: panelVisible ? "auto" : "none",
            }}>
              {selectedState && <StatePanel state={selectedState} onClose={closePanel} drawerMode />}
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes mapFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px) rotateX(0.5deg); }
        }
        @keyframes fsBackdropIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fsModalIn {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.93); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </>
  );
}

// State Info Panel
function StatePanel({ state, onClose, drawerMode = false }: { state: StateData; onClose: () => void; drawerMode?: boolean }) {
  const CATEGORY_CONFIG: Record<string, { color: string; label: string }> = {
    "high-impact": { color: "#22c55e", label: "High Impact Initiative" },
    "active-project": { color: "#eab308", label: "Active Project" },
    listening: { color: "#3b82f6", label: "Community Listening" },
  };

  return (
    <div
      className="glass-card"
      style={{
        height: drawerMode ? "100%" : "auto",
        display: "flex", flexDirection: "column", padding: "0",
        overflow: drawerMode ? "hidden" : "visible",
        border: "1px solid var(--card-border)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
        borderRadius: "20px",
        animation: drawerMode ? undefined : "fsBackdropIn 0.25s ease-out",
      }}
    >
      {/* Header */}
      <div style={{
        padding: "20px 20px 16px 20px",
        background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)",
        flexShrink: 0, borderRadius: drawerMode ? "20px 20px 0 0" : "20px 20px 0 0",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
              <MapPin size={14} color="#fbbf24" />
              <span style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-jakarta), sans-serif" }}>
                Labour Direct
              </span>
            </div>
            <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "22px", fontWeight: 800, color: "#ffffff", margin: 0, lineHeight: 1.1 }}>
              {state.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "8px", color: "#fff", cursor: "pointer", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "16px", marginTop: "16px", paddingTop: "14px", borderTop: "1px solid rgba(255,255,255,0.2)", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Users size={12} color="rgba(255,255,255,0.7)" />
            <div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff", fontFamily: "var(--font-playfair), serif" }}>{state.population}</div>
              <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.8px" }}>Population</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Building2 size={12} color="rgba(255,255,255,0.7)" />
            <div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff", fontFamily: "var(--font-playfair), serif" }}>{state.lgaCount} LGAs</div>
              <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.8px" }}>Local Govts</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Wallet size={12} color="rgba(255,255,255,0.7)" />
            <div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff", fontFamily: "var(--font-playfair), serif" }}>{state.annualBudget}</div>
              <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.8px" }}>Annual Budget</div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div style={{ padding: "14px 20px", borderBottom: "1px solid var(--card-border)", flexShrink: 0 }}>
        <p style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.55, margin: 0 }}>
          {state.summary}
        </p>
      </div>

      {/* Initiatives */}
      <div style={{ flex: drawerMode ? 1 : undefined, overflowY: drawerMode ? "auto" : "visible", padding: "14px 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {state.initiatives.map((init, i) => {
          const cfg = CATEGORY_CONFIG[init.category] || CATEGORY_CONFIG["high-impact"];
          return (
            <div key={i} style={{
              padding: "12px 14px", borderRadius: "12px",
              background: "var(--bg-tertiary)", borderLeft: `4px solid ${cfg.color}`,
            }}>
              <div style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "1.2px", fontWeight: 700, color: cfg.color, marginBottom: "4px", fontFamily: "var(--font-jakarta), sans-serif" }}>
                {cfg.label}
              </div>
              <h4 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "14px", fontWeight: 700, color: "var(--text-primary)", margin: "0 0 3px 0" }}>
                {init.title}
              </h4>
              <p style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "12.5px", color: "var(--text-secondary)", lineHeight: 1.45, margin: 0 }}>
                {init.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div style={{ padding: "14px 20px", borderTop: "1px solid var(--card-border)", flexShrink: 0, background: "var(--bg-secondary)", borderRadius: "0 0 20px 20px" }}>
        <Link
          href={`/blog?state=${state.id}`}
          className="btn-primary"
          style={{ width: "100%", justifyContent: "center", padding: "12px", fontSize: "13px" }}
          onClick={onClose}
        >
          View State Updates <ChevronRight size={15} />
        </Link>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { orbitalSkills, skillCategories } from "../../data/portfolio";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const renderRingSkills = (
    skills: { name: string; color: string }[],
    radius: number,
    glowColor: string
  ) => {
    return skills.map((skill, idx) => {
      const angle = (idx / skills.length) * 2 * Math.PI - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const isHovered = hoveredSkill === skill.name;

      return (
        <div
          key={idx}
          style={{
            position: "absolute",
            transform: `translate(${x}px, ${y}px)`,
            left: "calc(50% - 20px)",
            top: "calc(50% - 20px)",
            zIndex: isHovered ? 40 : 20,
            transition: "all 0.3s ease",
          }}
          onMouseEnter={() => setHoveredSkill(skill.name)}
          onMouseLeave={() => setHoveredSkill(null)}
          onClick={() => setHoveredSkill(hoveredSkill === skill.name ? null : skill.name)}
        >
          <div
            style={{
              position: "relative",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: `1px solid ${isHovered ? glowColor : "rgba(255, 255, 255, 0.15)"}`,
              background: isHovered ? "var(--bg-primary)" : "var(--bg-card)",
              boxShadow: isHovered ? `0 0 16px ${glowColor}` : `0 0 8px ${glowColor}25`,
              transform: isHovered ? "scale(1.18)" : "scale(1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                fontFamily: "monospace",
                color: skill.color,
              }}
            >
              {skill.name.length > 5 ? skill.name.slice(0, 3) : skill.name}
            </span>
          </div>

          {/* Tooltip */}
          {isHovered && (
            <div
              style={{
                position: "absolute",
                bottom: "-30px",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "0.7rem",
                fontFamily: "monospace",
                padding: "0.2rem 0.5rem",
                borderRadius: "6px",
                whiteSpace: "nowrap",
                backgroundColor: "var(--bg-secondary)",
                color: "var(--text-primary)",
                border: `1px solid ${glowColor}`,
                boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                zIndex: 50,
              }}
            >
              {skill.name}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <section id="skills" className="section-wrapper text-[var(--text-primary)]" aria-label="Technical skills">
      <div ref={ref} className="site-container">
        {/* Section Header */}
        <div className="section-header-box">
          <p className="section-badge-tag">Technical Arsenal</p>
          <h2 className="section-main-title">Skills & Core Stack</h2>
          <div className="section-line-accent"></div>
          <p className="section-subtitle-text">
            Grouped into 5 distinct categories covering programming, web development, developer tools, core concepts, and embedded hardware.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "clamp(2rem, 5vw, 3rem)",
            alignItems: "center",
          }}
        >
          {/* Left: Orbital Visualization */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "380px",
                aspectRatio: "1/1",
                borderRadius: "2rem",
                overflow: "hidden",
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
                boxShadow: "var(--glass-shadow)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              {/* Center Hub */}
              <div
                style={{
                  position: "relative",
                  zIndex: 30,
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  padding: "2px",
                  background: "linear-gradient(135deg, #00F0FF, #0284C7)",
                  boxShadow: "0 0 20px rgba(0, 240, 255, 0.4)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    backgroundColor: "var(--bg-primary)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: "0.7rem", fontFamily: "monospace", fontWeight: 800, color: "#00F0FF" }}>TECH</span>
                </div>
              </div>

              {/* Orbits */}
              <div
                style={{
                  position: "absolute",
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  border: "1px solid rgba(0, 240, 255, 0.25)",
                }}
              />
              {renderRingSkills(orbitalSkills.inner, 75, "#00F0FF")}

              <div
                style={{
                  position: "absolute",
                  width: "240px",
                  height: "240px",
                  borderRadius: "50%",
                  border: "1px solid rgba(0, 240, 255, 0.2)",
                }}
              />
              {renderRingSkills(orbitalSkills.middle, 120, "#00F0FF")}

              <div
                style={{
                  position: "absolute",
                  width: "330px",
                  height: "330px",
                  borderRadius: "50%",
                  border: "1px solid rgba(0, 240, 255, 0.15)",
                }}
              />
              {renderRingSkills(orbitalSkills.outer, 165, "#00F0FF")}
            </div>
          </div>

          {/* Right: 5 Skill Category Cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
              width: "100%",
            }}
          >
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="portfolio-card"
                style={{
                  padding: "1rem 1.25rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                  <span
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      backgroundColor: cat.color,
                      boxShadow: `0 0 8px ${cat.color}`,
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: cat.color,
                    }}
                  >
                    {cat.title}
                  </h3>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        backgroundColor: `${cat.color}15`,
                        border: `1px solid ${cat.color}35`,
                        color: "var(--text-primary)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

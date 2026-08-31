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
            left: "calc(50% - 22px)",
            top: "calc(50% - 22px)",
            zIndex: isHovered ? 40 : 20,
            transition: "all 0.3s ease",
          }}
          onMouseEnter={() => setHoveredSkill(skill.name)}
          onMouseLeave={() => setHoveredSkill(null)}
        >
          <div
            style={{
              position: "relative",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: `1px solid ${isHovered ? glowColor : "rgba(255, 255, 255, 0.15)"}`,
              background: isHovered ? "var(--bg-primary)" : "var(--bg-card)",
              boxShadow: isHovered ? `0 0 18px ${glowColor}` : `0 0 8px ${glowColor}30`,
              transform: isHovered ? "scale(1.2)" : "scale(1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            <span
              style={{
                fontSize: "0.7rem",
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
                bottom: "-32px",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "0.7rem",
                fontFamily: "monospace",
                padding: "0.25rem 0.6rem",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* Left: Orbital Visualization */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "440px",
                aspectRatio: "1/1",
                borderRadius: "2rem",
                overflow: "hidden",
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
                boxShadow: "var(--glass-shadow)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Center Hub */}
              <div
                style={{
                  position: "relative",
                  zIndex: 30,
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  padding: "2px",
                  background: "linear-gradient(135deg, #00F0FF, #8B5CF6, #FF6B35)",
                  boxShadow: "0 0 30px rgba(139,92,246,0.5)",
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
                  <span style={{ fontSize: "0.75rem", fontFamily: "monospace", fontWeight: 800, color: "#00F0FF" }}>TECH</span>
                </div>
              </div>

              {/* Orbits */}
              <div
                style={{
                  position: "absolute",
                  width: "170px",
                  height: "170px",
                  borderRadius: "50%",
                  border: "1px solid rgba(0, 240, 255, 0.3)",
                  boxShadow: "0 0 16px rgba(0, 240, 255, 0.1)",
                }}
              />
              {renderRingSkills(orbitalSkills.inner, 85, "#00F0FF")}

              <div
                style={{
                  position: "absolute",
                  width: "280px",
                  height: "280px",
                  borderRadius: "50%",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  boxShadow: "0 0 16px rgba(139, 92, 246, 0.1)",
                }}
              />
              {renderRingSkills(orbitalSkills.middle, 140, "#8B5CF6")}

              <div
                style={{
                  position: "absolute",
                  width: "380px",
                  height: "380px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255, 107, 53, 0.25)",
                  boxShadow: "0 0 16px rgba(255, 107, 53, 0.1)",
                }}
              />
              {renderRingSkills(orbitalSkills.outer, 190, "#FF6B35")}
            </div>
          </div>

          {/* Right: 5 Skill Category Cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="portfolio-card"
                style={{
                  padding: "1.25rem 1.5rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: cat.color,
                      boxShadow: `0 0 8px ${cat.color}`,
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: cat.color,
                    }}
                  >
                    {cat.title}
                  </h3>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        padding: "0.35rem 0.85rem",
                        borderRadius: "9999px",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        backgroundColor: `${cat.color}15`,
                        border: `1px solid ${cat.color}40`,
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

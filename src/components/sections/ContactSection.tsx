"use client";

import React, { useState } from "react";
import { personalInfo, socialLinks } from "../../data/portfolio";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function ContactSection() {
  const { ref } = useScrollAnimation({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" ref={ref} className="section-wrapper text-[var(--text-primary)]">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header-box">
          <p className="section-badge-tag">Get in Touch</p>
          <h2 className="section-main-title">Contact Me</h2>
          <div className="section-line-accent"></div>
          <p className="section-subtitle-text">
            Have a question, opportunity, or looking to collaborate? Reach out directly.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "start",
            marginBottom: "4rem",
          }}
        >
          {/* Left Column: Direct Info Cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {/* Email Card */}
            <div className="portfolio-card" style={{ padding: "1.75rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#00F0FF", textTransform: "uppercase", fontWeight: 700 }}>
                  Direct Email
                </span>
                <button
                  onClick={copyEmailToClipboard}
                  style={{
                    padding: "0.25rem 0.65rem",
                    borderRadius: "9999px",
                    border: "1px solid var(--border-color)",
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-secondary)",
                    fontSize: "0.75rem",
                    fontFamily: "monospace",
                    cursor: "pointer",
                  }}
                >
                  {copiedEmail ? "Copied! ✓" : "Copy"}
                </button>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  wordBreak: "break-all",
                }}
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="portfolio-card" style={{ padding: "1.75rem" }}>
              <span style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#00F0FF", textTransform: "uppercase", fontWeight: 700, display: "block", marginBottom: "0.5rem" }}>
                Phone / WhatsApp
              </span>
              <a
                href={`tel:${personalInfo.phone.replace(/[^+\d]/g, "")}`}
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  textDecoration: "none",
                }}
              >
                {personalInfo.phone}
              </a>
            </div>

            {/* Location & Status Card */}
            <div className="portfolio-card" style={{ padding: "1.75rem" }}>
              <span style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#00F0FF", textTransform: "uppercase", fontWeight: 700, display: "block", marginBottom: "0.5rem" }}>
                Location & Status
              </span>
              <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>
                {personalInfo.location}
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>
                Available for internships, full-time engineering roles & projects.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="portfolio-card" style={{ padding: "2.25rem" }}>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
              Send a Message
            </h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              Fill out the form below to dispatch an email inquiry directly.
            </p>

            {submitted && (
              <div
                style={{
                  padding: "0.75rem 1rem",
                  borderRadius: "0.75rem",
                  backgroundColor: "rgba(16, 185, 129, 0.15)",
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                  color: "#34D399",
                  fontSize: "0.85rem",
                  marginBottom: "1rem",
                }}
              >
                ✓ Opening email client with your message details...
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontFamily: "monospace", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Alex Smith"
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "0.75rem",
                      border: "1px solid var(--border-color)",
                      backgroundColor: "var(--bg-secondary)",
                      color: "var(--text-primary)",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontFamily: "monospace", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="alex@example.com"
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "0.75rem",
                      border: "1px solid var(--border-color)",
                      backgroundColor: "var(--bg-secondary)",
                      color: "var(--text-primary)",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontFamily: "monospace", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Opportunity / Collaboration"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.75rem",
                    border: "1px solid var(--border-color)",
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-primary)",
                    fontSize: "0.9rem",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontFamily: "monospace", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Hi Shailesh, I'd like to discuss..."
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.75rem",
                    border: "1px solid var(--border-color)",
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-primary)",
                    fontSize: "0.9rem",
                    outline: "none",
                    resize: "none",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "0.9rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "#FFFFFF",
                  background: "linear-gradient(135deg, #00F0FF, #0284C7)",
                  boxShadow: "0 0 25px rgba(0, 240, 255, 0.35)",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <span>Send Message</span>
                <span>↗</span>
              </button>
            </form>
          </div>
        </div>

        {/* Social Links Pills */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginBottom: "3rem" }}>
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "9999px",
                border: "1px solid var(--border-color)",
                backgroundColor: "var(--glass-bg)",
                color: "var(--text-primary)",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <span>{link.name}</span>
              <span style={{ color: "#00F0FF" }}>↗</span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            borderTop: "1px solid var(--border-color)",
            paddingTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            fontSize: "0.8rem",
            fontFamily: "monospace",
            color: "var(--text-secondary)",
          }}
        >
          <p>© {new Date().getFullYear()} Shailesh Pratap Singh. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            style={{
              padding: "0.35rem 0.9rem",
              borderRadius: "9999px",
              border: "1px solid var(--border-color)",
              backgroundColor: "var(--bg-secondary)",
              color: "var(--text-secondary)",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
          >
            <span>Back to Top</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </section>
  );
}

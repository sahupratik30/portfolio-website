"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/data";
import { getYearsOfExperience } from "@/lib/utils";

const easing = [0.4, 0, 0.2, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easing, delay },
  }),
};

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const yoe = getYearsOfExperience();

  const handleScrollToWork = () => {
    document.getElementById("experience")?.scrollIntoView({
      behavior: shouldReduceMotion ? "instant" : "smooth",
    });
  };
  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: shouldReduceMotion ? "instant" : "smooth",
    });
  };

  return (
    <section
      id="home"
      aria-label="Introduction"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "100px",
        paddingBottom: "80px",
      }}
    >
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "600px",
          background:
            "radial-gradient(ellipse at center, rgba(200,169,110,0.05) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            maxWidth: "900px",
          }}
        >
          {/* Available tag */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span
              className="badge badge-accent"
              style={{ gap: "0.4rem" }}
              aria-label="Currently available for new opportunities"
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  animation: "pulse 2s infinite",
                }}
                aria-hidden="true"
              />
              👋 The last 2% matters
            </span>
          </motion.div>

          {/* Main headline + avatar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "3rem",
            }}
          >
            <div style={{ flex: 1 }}>
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.1}
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "clamp(3rem, 8vw, 6.5rem)",
                  fontWeight: 400,
                  lineHeight: 1.0,
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                  marginBottom: "1.5rem",
                }}
              >
                {siteConfig.name}
              </motion.h1>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.2}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "2rem",
                }}
              >
                <span
                  style={{
                    fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                    color: "var(--text-muted)",
                    fontWeight: 300,
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-jetbrains-mono)",
                  }}
                >
                  {siteConfig.role}
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                  }}
                />
                <span
                  style={{
                    fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                    color: "var(--text-muted)",
                    fontWeight: 300,
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-jetbrains-mono)",
                  }}
                >
                  {yoe} Years
                </span>
              </motion.div>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.3}
                style={{
                  fontSize: "clamp(1.15rem, 2.5vw, 1.45rem)",
                  lineHeight: 1.55,
                  color: "var(--text-muted)",
                  maxWidth: "600px",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}
              >
                I build frontend systems where{" "}
                <em
                  style={{
                    fontFamily: "var(--font-instrument-serif)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "1.15em",
                    color: "var(--text)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  speed is a feature,
                </em>{" "}
                not an afterthought.
              </motion.p>
            </div>

            {/* Avatar */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.15}
              className="hero-avatar"
              style={{ flexShrink: 0 }}
            >
              {/* Outer decorative ring */}
              <div
                style={{
                  position: "relative",
                  width: "224px",
                  height: "224px",
                  flexShrink: 0,
                }}
              >
                {/* Spinning dashed ring */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: "-8px",
                    borderRadius: "50%",
                    border: "1px dashed rgba(200,169,110,0.22)",
                    animation: "spin-slow 18s linear infinite",
                  }}
                />
                {/* Static subtle glow ring */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: "-2px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(200,169,110,0.12) 0%, transparent 70%)",
                  }}
                />
                {/* Photo */}
                <div
                  style={{
                    position: "relative",
                    width: "224px",
                    height: "224px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid rgba(200,169,110,0.3)",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(200,169,110,0.08)",
                  }}
                >
                  <Image
                    src="/avatar.png"
                    alt="Pratik Sahu — Frontend Engineer"
                    fill
                    sizes="224px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={handleScrollToWork}
              className="btn btn-primary"
              aria-label="View my work and experience"
            >
              View Work
              <ArrowRight size={15} aria-hidden="true" />
            </button>
            <button
              onClick={handleScrollToContact}
              className="btn btn-ghost"
              aria-label="Go to contact section"
            >
              Get in Touch
            </button>

            {/* Social links */}
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginLeft: "0.5rem" }}
              role="list"
              aria-label="Social media links"
            >
              {[
                { icon: Github, href: siteConfig.github, label: "GitHub profile" },
                { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn profile" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  role="listitem"
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "8px",
                    border: "1px solid var(--border)",
                    background: "var(--bg-card)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-muted)",
                    transition: "border-color 0.2s, color 0.2s, background 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(200,169,110,0.3)";
                    el.style.color = "var(--accent)";
                    el.style.background = "var(--accent-dim)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--border)";
                    el.style.color = "var(--text-muted)";
                    el.style.background = "var(--bg-card)";
                  }}
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
        aria-hidden="true"
      >
        <span
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--text-faint)",
            fontFamily: "var(--font-jetbrains-mono)",
          }}
        >
          Scroll
        </span>
        <motion.div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, var(--accent), transparent)",
          }}
          animate={{ scaleY: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-avatar [style*="spin-slow"] { animation: none !important; }
        }
        @media (max-width: 640px) {
          .hero-avatar { display: none !important; }
        }
      `}</style>
    </section>
  );
}

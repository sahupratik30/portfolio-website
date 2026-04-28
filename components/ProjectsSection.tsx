"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/data";

const easing = [0.4, 0, 0.2, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing, delay },
  }),
};

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.article
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index * 0.1}
      className="card"
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
      }}
      aria-label={`${project.name} — ${project.tagline}`}
    >
      {/* Gradient bg (decorative) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at top left, ${project.gradient.replace("from-", "").replace("/20 to-transparent", "").replace("-", " ").includes("amber") ? "rgba(180,130,60,0.06)" : project.gradient.includes("emerald") ? "rgba(52,211,153,0.05)" : project.gradient.includes("blue") ? "rgba(96,165,250,0.05)" : "rgba(167,139,250,0.05)"} 0%, transparent 60%)`,
          pointerEvents: "none",
        }}
      />

      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.65rem",
              color: "var(--text-muted)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "0.4rem",
            }}
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "1.4rem",
              fontWeight: 400,
              color: "var(--text)",
              lineHeight: 1.2,
            }}
          >
            {project.name}
          </h3>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-muted)",
              marginTop: "0.2rem",
            }}
          >
            {project.tagline}
          </p>
        </div>

        {/* Links */}
        <div
          style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}
          role="list"
          aria-label={`Links for ${project.name}`}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} on GitHub`}
              role="listitem"
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-muted)",
                transition: "border-color 0.2s, color 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(200,169,110,0.3)";
                el.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--border)";
                el.style.color = "var(--text-muted)";
              }}
            >
              <Github size={15} aria-hidden="true" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name} live site`}
              role="listitem"
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-muted)",
                transition: "border-color 0.2s, color 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(200,169,110,0.3)";
                el.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--border)";
                el.style.color = "var(--text-muted)";
              }}
            >
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="section-divider" aria-hidden="true" />

      {/* Problem */}
      <section aria-label={`Problem ${project.name} solves`}>
        <p
          style={{
            fontSize: "0.65rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--accent)",
            marginBottom: "0.4rem",
            fontFamily: "var(--font-jetbrains-mono)",
          }}
        >
          Problem
        </p>
        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--text-muted)",
            lineHeight: 1.7,
          }}
        >
          {project.problem}
        </p>
      </section>

      {/* Solution */}
      <section aria-label={`Solution for ${project.name}`}>
        <p
          style={{
            fontSize: "0.65rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--text-muted)",
            marginBottom: "0.4rem",
            fontFamily: "var(--font-jetbrains-mono)",
          }}
        >
          Solution
        </p>
        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--text-muted)",
            lineHeight: 1.7,
          }}
        >
          {project.solution}
        </p>
      </section>

      {/* Impact */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.6rem 0.85rem",
          background: "var(--accent-dim)",
          border: "1px solid rgba(200,169,110,0.15)",
          borderRadius: "6px",
        }}
        role="note"
        aria-label={`Key metric: ${project.impact} ${project.impactLabel}`}
      >
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.95rem",
            color: "var(--accent)",
            fontWeight: 500,
          }}
        >
          {project.impact}
        </span>
        <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
          {project.impactLabel}
        </span>
      </div>

      {/* Tech tags */}
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}
        role="list"
        aria-label={`Technologies used in ${project.name}`}
      >
        {project.tech.map((t) => (
          <span key={t} className="badge" role="listitem">
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section
      id="projects"
      aria-label="Side projects"
      style={{
        paddingTop: "8rem",
        paddingBottom: "8rem",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="section-container">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "4rem" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
            aria-hidden="true"
          >
            <span
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "0.85rem",
                color: "var(--accent)",
                opacity: 0.8,
              }}
            >
              02
            </span>
            <span style={{ width: "40px", height: "1px", background: "var(--border)" }} />
            <span
              style={{
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--text-muted)",
                fontFamily: "var(--font-jetbrains-mono)",
              }}
            >
              Projects
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              color: "var(--text)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Things I&apos;ve built on{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>my own terms</em>
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-muted)",
              maxWidth: "500px",
              lineHeight: 1.75,
            }}
          >
            Problems I kept running into as an engineer. Tools I wished existed. Built to learn,
            shipped to share.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 460px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

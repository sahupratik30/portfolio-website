"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/data";

const easing = [0.4, 0, 0.2, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easing },
  },
};

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        marginBottom: "5rem",
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
        {number}
      </span>
      <span
        style={{
          width: "40px",
          height: "1px",
          background: "var(--border)",
        }}
      />
      <span
        style={{
          fontSize: "0.8rem",
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          color: "var(--text-muted)",
          fontFamily: "var(--font-jetbrains-mono)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      className="exp-card-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        gap: "3rem",
        paddingBottom: "4rem",
        borderBottom: "1px solid var(--border-subtle)",
        marginBottom: "4rem",
      }}
      aria-label={`${experience.company} — ${experience.role}`}
    >
      {/* Left column: metadata */}
      <aside
        className="exp-aside"
        style={{
          paddingTop: "0.25rem",
        }}
        aria-label="Company and role details"
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.75rem",
            marginBottom: "1rem",
          }}
        >
          <div className="timeline-dot" style={{ marginTop: "6px" }} aria-hidden="true" />
          <div>
            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "0.72rem",
                color: "var(--text-muted)",
                letterSpacing: "0.04em",
                marginBottom: "0.25rem",
              }}
              aria-label={`Period: ${experience.period}`}
            >
              {experience.period}
            </p>
            <span
              className="badge"
              style={{ fontSize: "0.65rem" }}
              aria-label={`Employment type: ${experience.type}`}
            >
              {experience.type}
            </span>
          </div>
        </div>

        {/* Index number (decorative) */}
        <div
          className="exp-aside-number"
          aria-hidden="true"
          style={{
            marginTop: "2rem",
            fontFamily: "var(--font-instrument-serif)",
            fontSize: "4rem",
            color: "var(--text-faint)",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </aside>

      {/* Right column: case study content */}
      <div>
        {/* Company + role header */}
        <header style={{ marginBottom: "1.75rem" }}>
          <h3
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 400,
              color: "var(--text)",
              lineHeight: 1.1,
              marginBottom: "0.4rem",
            }}
          >
            {experience.company}
          </h3>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-muted)",
              fontWeight: 300,
            }}
          >
            {experience.role}
          </p>
        </header>

        {/* Context */}
        <section style={{ marginBottom: "2rem" }} aria-label="Company context">
          <p
            style={{
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--accent)",
              marginBottom: "0.6rem",
              fontFamily: "var(--font-jetbrains-mono)",
            }}
          >
            Context
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-muted)",
              lineHeight: 1.75,
              maxWidth: "620px",
            }}
          >
            {experience.context}
          </p>
        </section>

        {/* Contributions */}
        <section style={{ marginBottom: "2rem" }} aria-label="Key contributions">
          <p
            style={{
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--accent)",
              marginBottom: "1rem",
              fontFamily: "var(--font-jetbrains-mono)",
            }}
          >
            Contributions
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {experience.contributions.map((c, i) => (
              <li
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "16px 1fr",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    marginTop: "5px",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "var(--text-muted)",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "var(--text)",
                      fontWeight: 500,
                      marginBottom: "0.3rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {c.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.7,
                    }}
                  >
                    {c.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Impact metrics */}
        <section style={{ marginBottom: "2rem" }} aria-label="Measurable impact">
          <p
            style={{
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--accent)",
              marginBottom: "1rem",
              fontFamily: "var(--font-jetbrains-mono)",
            }}
          >
            Impact
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
            }}
            role="list"
            aria-label={`Impact metrics for ${experience.company}`}
          >
            {experience.impact.map((item, i) => (
              <div key={i} className="metric-chip" role="listitem">
                <span className="metric-value">{item.metric}</span>
                <span className="metric-label">{item.description}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section aria-label="Technologies used">
          <p
            style={{
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
              marginBottom: "0.6rem",
              fontFamily: "var(--font-jetbrains-mono)",
            }}
          >
            Tech
          </p>
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}
            role="list"
            aria-label={`Technologies used at ${experience.company}`}
          >
            {experience.tech.map((t) => (
              <span key={t} className="badge" role="listitem">
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>
    </motion.article>
  );
}

export default function ExperienceSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section
      id="experience"
      aria-label="Work experience"
      style={{ paddingTop: "8rem", paddingBottom: "4rem" }}
    >
      <div className="section-container">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <SectionLabel number="01" label="Experience" />

          <h2
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              color: "var(--text)",
              lineHeight: 1.1,
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Where I&apos;ve built{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>products</em> that matter
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-muted)",
              maxWidth: "520px",
              lineHeight: 1.75,
              marginBottom: "5rem",
            }}
          >
            Each engagement was less about writing code and more about solving real business
            problems. Here&apos;s how I approached them.
          </p>
        </motion.div>

        {/* Experience cards */}
        <div>
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

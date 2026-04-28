"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data";
import { getYearsOfExperience } from "@/lib/utils";

const SKILL_CATEGORIES = [
  { key: "languages" as const, label: "Languages" },
  { key: "frameworks" as const, label: "Frameworks & Libraries" },
  { key: "testing" as const, label: "Testing" },
  { key: "tools" as const, label: "Tools & Platforms" },
  { key: "core" as const, label: "Core Skills" },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      id="about"
      aria-label="About Pratik Sahu"
      style={{
        paddingTop: "8rem",
        paddingBottom: "8rem",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Section marker */}
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
              About
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "6rem",
              alignItems: "start",
            }}
            className="about-grid"
          >
            {/* Story */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                  fontWeight: 400,
                  color: "var(--text)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  marginBottom: "2.5rem",
                }}
              >
                I think about
                <br />
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>how products feel</em>
                <br />
                not just how they work.
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  fontSize: "1rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                }}
              >
                <p>
                  My interest in frontend engineering didn&apos;t start from a tutorial — it started
                  from frustration. I noticed that beautifully designed apps often felt sluggish,
                  and fast apps were often ugly or confusing. I wanted to close that gap.
                </p>
                <p>
                  Over {getYearsOfExperience()} years, I&apos;ve worked across home services, social
                  platforms, and B2B tools. What connected them wasn&apos;t the domain — it was the
                  same core challenge: getting the UI out of the user&apos;s way so they could do
                  what they came to do.
                </p>
                <p>
                  Today I focus on the intersection of{" "}
                  <strong style={{ color: "var(--text)", fontWeight: 500 }}>
                    performance engineering
                  </strong>{" "}
                  and{" "}
                  <strong style={{ color: "var(--text)", fontWeight: 500 }}>
                    product thinking
                  </strong>
                  . I care about bundle sizes, but I care more about whether the user achieved their
                  goal. I care about component architecture, but I care more about whether the team
                  can move fast without breaking things.
                </p>
                <p>
                  When I&apos;m not engineering, I&apos;m writing about performance patterns,
                  contributing to open-source tooling, or breaking apart product decisions I find
                  interesting.
                </p>
              </div>
            </div>

            {/* Skills grid */}
            <div>
              <p
                style={{
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--text-muted)",
                  marginBottom: "2rem",
                  fontFamily: "var(--font-jetbrains-mono)",
                }}
                aria-label="Technical skills section"
              >
                Technical Toolkit
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {SKILL_CATEGORIES.map(({ key, label }) => (
                  <div key={key}>
                    <p
                      style={{
                        fontSize: "0.7rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--text-faint)",
                        marginBottom: "0.6rem",
                        fontFamily: "var(--font-jetbrains-mono)",
                      }}
                    >
                      {label}
                    </p>
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}
                      role="list"
                      aria-label={`${label} skills`}
                    >
                      {skills[key].map((skill) => (
                        <span key={skill} className="badge" role="listitem">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Values strip */}
              <div
                style={{
                  marginTop: "3rem",
                  padding: "1.5rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                }}
                role="note"
                aria-label="Professional values"
              >
                <p
                  style={{
                    fontSize: "0.65rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--accent)",
                    marginBottom: "0.75rem",
                    fontFamily: "var(--font-jetbrains-mono)",
                  }}
                >
                  What I bring to a team
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  {[
                    "Performance-first mindset at every layer",
                    "Strong bias for measurable outcomes over output",
                    "Opinionated about DX — builds reusable systems",
                    "Comfortable bridging design and engineering",
                  ].map((value) => (
                    <li
                      key={value}
                      style={{
                        fontSize: "0.95rem",
                        color: "var(--text-muted)",
                        display: "flex",
                        gap: "0.6rem",
                        alignItems: "flex-start",
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          color: "var(--accent)",
                          marginTop: "3px",
                          flexShrink: 0,
                        }}
                      >
                        ↳
                      </span>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}

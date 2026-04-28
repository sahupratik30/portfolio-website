"use client";

import { useRef, useState, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { siteConfig } from "@/data";

const EJS_SERVICE = process.env.NEXT_PUBLIC_EJS_SERVICE ?? "";
const EJS_TEMPLATE = process.env.NEXT_PUBLIC_EJS_TEMPLATE ?? "";
const EJS_PUBLIC = process.env.NEXT_PUBLIC_EJS_PUBLIC ?? "";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setFormState("loading");
    setErrorMsg("");
    try {
      await emailjs.sendForm(EJS_SERVICE, EJS_TEMPLATE, formRef.current, {
        publicKey: EJS_PUBLIC,
      });
      setFormState("success");
    } catch {
      setFormState("error");
      setErrorMsg("Something went wrong. Please try emailing me directly.");
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Pratik Sahu"
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
              03
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
              Contact
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "6rem",
              alignItems: "start",
            }}
            className="contact-grid"
          >
            {/* Left: CTA text */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                  fontWeight: 400,
                  color: "var(--text)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  marginBottom: "1.5rem",
                }}
              >
                Let&apos;s build
                <br />
                something <em style={{ fontStyle: "italic", color: "var(--accent)" }}>great</em>
              </h2>

              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  marginBottom: "2.5rem",
                  maxWidth: "360px",
                }}
              >
                Open to frontend engineering roles, technical consulting, and interesting problems.
                I respond to every message, usually within a day.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
                role="list"
                aria-label="Contact information"
              >
                <a
                  href={`mailto:${siteConfig.email}`}
                  role="listitem"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")
                  }
                  aria-label={`Email: ${siteConfig.email}`}
                >
                  <Mail size={15} aria-hidden="true" />
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  role="listitem"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")
                  }
                  aria-label={`Phone: ${siteConfig.phone}`}
                >
                  <Phone size={15} aria-hidden="true" />
                  {siteConfig.phone}
                </a>
                <div
                  role="listitem"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                  }}
                  aria-label={`Location: ${siteConfig.location}`}
                >
                  <MapPin size={15} aria-hidden="true" />
                  {siteConfig.location}
                </div>
              </div>

              {/* Availability badge */}
              <div style={{ marginTop: "2.5rem" }} aria-label="Availability status">
                <span className="badge badge-accent">
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
                  Let&apos;s build something together
                </span>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="card" style={{ padding: "2rem" }}>
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    padding: "3rem 1rem",
                    textAlign: "center",
                  }}
                  aria-live="polite"
                  aria-label="Message sent successfully"
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "var(--accent-dim)",
                      border: "1px solid rgba(200,169,110,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                    }}
                    aria-hidden="true"
                  >
                    ✓
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-instrument-serif)",
                      fontSize: "1.5rem",
                      color: "var(--text)",
                    }}
                  >
                    Message sent
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                  aria-label="Contact form"
                  noValidate
                >
                  <div>
                    <label
                      htmlFor="name"
                      style={{
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--text-muted)",
                        display: "block",
                        marginBottom: "0.5rem",
                        fontFamily: "var(--font-jetbrains-mono)",
                      }}
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="input"
                      placeholder="Your name…"
                      value={formData.name}
                      onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                      required
                      autoComplete="name"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--text-muted)",
                        display: "block",
                        marginBottom: "0.5rem",
                        fontFamily: "var(--font-jetbrains-mono)",
                      }}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="input"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                      required
                      autoComplete="email"
                      spellCheck={false}
                      inputMode="email"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      style={{
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--text-muted)",
                        display: "block",
                        marginBottom: "0.5rem",
                        fontFamily: "var(--font-jetbrains-mono)",
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="input"
                      placeholder="Tell me what you're working on…"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                      required
                      style={{ resize: "vertical", minHeight: "120px" }}
                      aria-required="true"
                    />
                  </div>

                  {formState === "error" && (
                    <p
                      role="alert"
                      aria-live="polite"
                      style={{
                        fontSize: "0.85rem",
                        color: "#f87171",
                        padding: "0.6rem 0.85rem",
                        background: "rgba(248,113,113,0.08)",
                        border: "1px solid rgba(248,113,113,0.2)",
                        borderRadius: "6px",
                      }}
                    >
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      opacity: formState === "loading" ? 0.7 : 1,
                    }}
                    disabled={formState === "loading"}
                    aria-label={formState === "loading" ? "Sending message..." : "Send message"}
                  >
                    {formState === "loading" ? (
                      <>
                        <span
                          aria-hidden="true"
                          style={{
                            width: "14px",
                            height: "14px",
                            border: "2px solid rgba(0,0,0,0.3)",
                            borderTopColor: "#000",
                            borderRadius: "50%",
                            animation: "spin 0.7s linear infinite",
                            display: "inline-block",
                          }}
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={14} aria-hidden="true" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}

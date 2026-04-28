"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data";
import ThemeToggle from "@/components/ThemeToggle";

const NAV_LINKS = [
  { label: "Work", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const RESUME_URL = "https://drive.google.com/file/d/1Ma_pzcJgPHINl-Ny5WhgCGB27aybtss-/view";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["experience", "projects", "about", "contact"];
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? "color-mix(in srgb, var(--bg) 88%, transparent)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
        role="banner"
      >
        <div className="section-container">
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "64px",
            }}
            aria-label="Main navigation"
          >
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                flexShrink: 0,
              }}
              aria-label="Scroll to top"
            >
              <span
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  background: "var(--accent-dim)",
                  border: "1px solid rgba(200,169,110,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "0.85rem",
                  color: "var(--accent)",
                  flexShrink: 0,
                }}
              >
                P
              </span>
              <span
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "var(--text)",
                  letterSpacing: "-0.01em",
                }}
              >
                {siteConfig.name}
              </span>
            </button>

            {/* Desktop nav links */}
            <ul className="nav-desktop" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "0.4rem 0.85rem",
                        fontSize: "0.875rem",
                        fontWeight: 400,
                        color: isActive ? "var(--accent)" : "var(--text-muted)",
                        borderRadius: "6px",
                        position: "relative",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive)
                          (e.currentTarget as HTMLButtonElement).style.color = "var(--text)";
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive)
                          (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)";
                      }}
                      aria-current={isActive ? "true" : undefined}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          style={{
                            position: "absolute",
                            bottom: "4px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            background: "var(--accent)",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Right-side group: Resume + Theme toggle + hamburger */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-resume btn btn-ghost"
                style={{ fontSize: "0.8rem", padding: "0.45rem 1rem" }}
                aria-label="View resume on Google Drive"
              >
                Resume ↗
              </a>
              <ThemeToggle />

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen((o) => !o)}
                className="nav-mobile-toggle"
                style={{
                  background: "none",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "0.5rem",
                  color: "var(--text)",
                  cursor: "pointer",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence initial={false}>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] as const }}
              style={{
                overflow: "hidden",
                borderTop: "1px solid var(--border)",
                background: "color-mix(in srgb, var(--bg) 96%, transparent)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
              aria-label="Mobile navigation menu"
            >
              <div
                className="section-container"
                style={{ paddingTop: "0.75rem", paddingBottom: "1.25rem" }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.2rem",
                  }}
                >
                  {NAV_LINKS.map((link) => {
                    const sectionId = link.href.replace("#", "");
                    const isActive = activeSection === sectionId;
                    return (
                      <li key={link.href}>
                        <button
                          onClick={() => handleNavClick(link.href)}
                          style={{
                            background: isActive ? "var(--accent-dim)" : "transparent",
                            border: "none",
                            cursor: "pointer",
                            padding: "0.8rem 1rem",
                            fontSize: "1rem",
                            fontWeight: 400,
                            color: isActive ? "var(--accent)" : "var(--text)",
                            borderRadius: "8px",
                            width: "100%",
                            textAlign: "left",
                            fontFamily: "inherit",
                          }}
                        >
                          {link.label}
                        </button>
                      </li>
                    );
                  })}
                  <li
                    style={{
                      paddingTop: "0.5rem",
                      borderTop: "1px solid var(--border)",
                      marginTop: "0.25rem",
                    }}
                  >
                    <a
                      href={RESUME_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0.8rem 1rem",
                        marginTop: "0.25rem",
                        fontSize: "0.9rem",
                        color: "var(--text-muted)",
                        textDecoration: "none",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                        transition: "color 0.2s, border-color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                        (e.currentTarget as HTMLAnchorElement).style.borderColor =
                          "rgba(200,169,110,0.3)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                      }}
                      aria-label="View resume on Google Drive"
                    >
                      Resume ↗
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <style>{`
          @media (min-width: 768px) {
            .nav-desktop { display: flex !important; align-items: center; gap: 0.25rem; }
            .nav-resume { display: inline-flex !important; }
            .nav-mobile-toggle { display: none !important; }
          }
          @media (max-width: 767px) {
            .nav-desktop { display: none !important; }
            .nav-resume { display: none !important; }
            .nav-mobile-toggle { display: flex !important; }
          }
        `}</style>
      </motion.header>

      {/* Backdrop to close menu on outside click */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999,
              background: "rgba(0,0,0,0.4)",
            }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}

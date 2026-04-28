"use client";

import { Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        paddingTop: "2.5rem",
        paddingBottom: "2.5rem",
      }}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="section-container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {/* Left: name + copyright */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <span
              style={{
                fontSize: "0.8rem",
                color: "var(--text-muted)",
              }}
            >
              <span style={{ color: "var(--text)" }}>{siteConfig.name}</span>
              <span
                style={{
                  margin: "0 0.5rem",
                  color: "var(--text-faint)",
                  fontFamily: "var(--font-jetbrains-mono)",
                }}
                aria-hidden="true"
              >
                ·
              </span>
              <span aria-label={`Copyright ${currentYear}`}>© {currentYear}</span>
            </span>
          </div>

          {/* Right: social links */}
          <nav aria-label="Social media links in footer">
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {[
                { icon: Github, href: siteConfig.github, label: "GitHub" },
                { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${siteConfig.name}'s ${label} profile`}
                    style={{
                      color: "var(--text-muted)",
                      transition: "color 0.2s",
                      display: "flex",
                      alignItems: "center",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")
                    }
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

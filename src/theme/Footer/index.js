import React from "react";
import { GitHubIcon } from "@site/src/components/icons";
import styles from "./styles.module.css";

const NAV_LINKS = [
  { label: "Documentation", href: "/" },
  { label: "Linea Mainnet docs", href: "https://docs.linea.build" },
  {
    label: "LF Decentralized Trust",
    href: "https://www.lfdecentralizedtrust.org/",
  },
  { label: "Discord", href: "https://discord.gg/hyperledger" },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/LFDT-Lineth",
    icon: <GitHubIcon aria-hidden="true" />,
  },
];

export default function FooterWrapper() {
  return (
    <footer className={styles.footer}>
      <a href="/" className={styles.logoLink} aria-label="Lineth documentation">
        <span className={styles.wordmark}>Lineth</span>
      </a>

      <nav className={styles.navLinks} aria-label="Footer navigation">
        {NAV_LINKS.map(({ label, href }) => (
          <a key={label} href={href} className={styles.navLink}>
            {label}
          </a>
        ))}
      </nav>

      <div className={styles.socialIcons}>
        {SOCIAL_LINKS.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label={label}>
            {icon}
          </a>
        ))}
      </div>
    </footer>
  );
}

import React from "react";
import Link from "@docusaurus/Link";
import { DiscordIcon, GitHubIcon } from "@site/src/components/icons";

import styles from "./support.module.css";

type LayoutProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = require("@theme/Layout").default;

export default function Support(): React.ReactNode {
  return (
    <Layout
      title="Lineth support"
      description="Community resources for people evaluating or operating Lineth.">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Lineth support</h1>
            <p className={styles.intro}>
              Can&apos;t find what you need in the docs? Use the open-source
              community channels below. Linea Mainnet support stays on{" "}
              <Link to="https://docs.linea.build/support">
                docs.linea.build
              </Link>
              .
            </p>
          </div>
        </section>

        <section className={styles.resources} aria-label="Support resources">
          <div className={styles.resourcesInner}>
            <div className={styles.audienceSection}>
              <h2 id="support-resources">Operators and evaluators</h2>
              <div className={styles.resourceGrid}>
                <Link
                  className={styles.resourceCard}
                  to="https://github.com/LFDT-Lineth/lineth-monorepo">
                  <div className={styles.resourceTitle}>
                    <GitHubIcon
                      className={styles.resourceIcon}
                      aria-hidden="true"
                    />
                    <span>Lineth on GitHub</span>
                  </div>
                  <p>
                    Explore the source code for the Lineth open-source stack.
                  </p>
                </Link>
                <Link
                  className={styles.resourceCard}
                  to="https://discord.gg/hyperledger">
                  <div className={styles.resourceTitle}>
                    <DiscordIcon
                      className={styles.resourceIcon}
                      aria-hidden="true"
                    />
                    <span>LF Decentralized Trust Discord</span>
                  </div>
                  <p>
                    Join the open-source community for LF Decentralized Trust
                    projects on Discord.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

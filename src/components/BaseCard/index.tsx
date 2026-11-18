import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

type BaseCardProps = {
  href: string;
  text: string;
  description?: string;
  image?: string;
  descriptionClassName?: string;
};

export default function BaseCard({
  href,
  text,
  description,
  descriptionClassName,
}: BaseCardProps): React.ReactNode {
  return (
    <Link to={href} className={styles.card}>
      <div className={styles.content}>
        <p className={styles.text}>{text}</p>
        {description ? (
          <p className={clsx(styles.description, descriptionClassName)}>
            {description}
          </p>
        ) : null}
      </div>
    </Link>
  );
}

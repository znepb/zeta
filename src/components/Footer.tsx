import changelog from "../json/changelog.json";

import styles from "../styles/Footer.module.scss";
import Link from "next/link";

import { Patch } from "../types";
import { useMediaQuery } from "usehooks-ts";

export default function Footer() {
  const latestVersion: Patch = changelog[0];
  const useSmall = useMediaQuery("(max-width: 900px)");

  return (
    <footer className={styles.footerSmall}>
      <section className={styles.smallTitle}>
        <img src="/svg/wordmark-light.svg" height={36} />
      </section>
      <section className={styles.footerLinks}>
        <Link href="/">
          <a className={styles.footerLinkTextHere}>Home</a>
        </Link>
        <span>•</span>
        <Link href="https://analytics.znepb.me/">
          <a className={styles.footerLink}>Analytics</a>
        </Link>
        <span>•</span>
        <Link href="https://countdowns.znepb.me/">
          <a className={styles.footerLink}>Countdowns</a>
        </Link>
        <span>•</span>
        <Link href="https://files.znepb.me/">
          <a className={styles.footerLink}>Files</a>
        </Link>
      </section>
      <section className={styles.footerBottom}>
        <span>Copyright © {new Date().getFullYear()} znepb</span>
        <span>•</span>
        <span>
          <Link href="/changes">
            <a className="nostyle">
              v
              {latestVersion.version.map((n: number, i: number) => {
                if (i == latestVersion.version.length - 1) {
                  return <span key={i}>{n}</span>;
                } else {
                  return <span key={i}>{n}.</span>;
                }
              })}
              {latestVersion.suffix}
            </a>
          </Link>
        </span>
        <span>•</span>
        <span>
          <Link href="/archive">
            <a className="nostyle">View Archives</a>
          </Link>
        </span>
      </section>
    </footer>
  );
}

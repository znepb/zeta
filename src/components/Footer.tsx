import styles from "../styles/Footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <span>
        <Link href="/">
          <a
            className="nostyle"
            style={{
              fontWeight: "bold",
              color: "#1BE253",
            }}
          >
            Home
          </a>
        </Link>
        <span>•</span>
        <a href="https://lens.znepb.me">Lens</a>
        <span>•</span>
        <a href="https://analytics.znepb.me">Analytics</a>
        <span>•</span>
        <a href="https://countdowns.znepb.me">Countdowns</a>
        <span>•</span>
        <a href="https://files.znepb.me">Files</a>
      </span>
      <footer>
        <span>
          <Link href="/changes">
            <a className="nostyle">v6.2</a>
          </Link>
        </span>
        <span>Copyright ©️ znepb 2021</span>
        <img src="/svg/logo.svg" height={25} />
      </footer>
    </div>
  );
}

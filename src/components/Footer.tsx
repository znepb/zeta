import styles from "../styles/Footer.module.scss";
import Link from 'next/link'

export default function Footer() {
  return <div className={styles.footer}>
    <span>
      <Link href="/">
        Home
      </Link>
      <span>•</span>
      <Link href="#projects">
        Projects
      </Link>
      <span>•</span>
      <a href="https://photos.znepb.me">
        Photos
      </a>
      <span>•</span>
      <a href="https://analytics.znepb.me">
        Analytics
      </a>
      <span>•</span>
      <a href="https://countdowns.znepb.me">
        Countdowns
      </a>
      <span>•</span>
      <a href="https://files.znepb.me">
        Files
      </a>
    </span>
    <footer>
      <span>
        <Link href="/changes">
          <span style={{color: "white !important"}}>
            v6.1
          </span>
        </Link>
      </span>
      <span>Copyright ©️ znepb 2021</span>
      <img src="/logo.svg" />
    </footer>
  </div>
}
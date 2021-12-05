import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return <div className={styles.footer}>
    <span>
      <a href="/">
        Home
      </a>
      <span>•</span>
      <a href="#projects">
        Projects
      </a>
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
      <span>v6</span>
      <span>Copyright ©️ znepb 2021</span>
      <img src="/logo.svg" />
    </footer>
  </div>
}
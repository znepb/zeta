import styles from "../styles/Footer.module.scss";
import Link from "next/link";

import { Settings } from "react-feather";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Footer() {
  const [settingsVisible, setSettingsVisible] = useState(false);

  const [renderSettings, setRenderSettings] = useState(false);
  const [comingIn, setComingIn] = useState<boolean>(true);
  const [animate, setAnimate] = useState<boolean>(true);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (settingsVisible === true) {
      setComingIn(true);
      setRenderSettings(true);
    } else {
      setComingIn(false);
      console.log(animate);
      if (animate) {
        setTimeout(() => {
          setRenderSettings(false);
        }, 400);
      } else {
        setRenderSettings(false);
      }
    }
  }, [settingsVisible]);

  useEffect(() => {
    console.log(localStorage.getItem("reduced_motion"));
    if (localStorage.getItem("reduced_motion") === "false") {
      setAnimate(false);
    } else {
      setAnimate(true);
    }
  }, []);

  return (
    <>
      {renderSettings && (
        <div
          className={`${styles.options} ${
            animate && (comingIn ? styles.optionsIn : styles.optionsOut)
          }`}
        >
          <div>
            <h2>Settings</h2>
            <section>
              <header>Reduced Motion</header>
              <select
                className="zeta-select"
                value={String(animate)}
                onChange={(e) => {
                  setAnimate(e.target.selectedOptions[0].value === "true");
                  localStorage.setItem(
                    "reduced_motion",
                    e.target.selectedOptions[0].value
                  );
                }}
              >
                <option value="true">Disabled (default)</option>
                <option value="false">Enabled</option>
              </select>
              <small>
                <i>Disables animations and home page confetti / snow.</i>
              </small>
            </section>

            <section>
              <header>Theme</header>
              <select
                className="zeta-select"
                value={theme}
                onChange={(e) => {
                  setTheme(e.target.selectedOptions[0].value);
                }}
              >
                <option value="dark">Dark (default)</option>
                <option value="verydark">Super Dark (AMOLED)</option>
                <option value="light">Light</option>
              </select>
            </section>

            <section>
              <div>
                <button
                  onClick={() => {
                    setSettingsVisible(false);
                  }}
                  className="zeta-button zeta-button-primary"
                >
                  OK
                </button>
              </div>
            </section>
          </div>
        </div>
      )}
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
          <span
            onClick={() => {
              setSettingsVisible(true);
            }}
          >
            <Settings />
          </span>
          <span>
            <Link href="/changes">
              <a className="nostyle">v6.5.1</a>
            </Link>
          </span>
          <span>Copyright ©️ znepb 2022</span>
          <img src="/svg/logo.svg" height={25} />
        </footer>
      </div>
    </>
  );
}

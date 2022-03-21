import styles from "../styles/Home.module.scss";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

import Image from "next/image";

import Card from "../components/Card";
import Footer from "../components/Footer";

import * as Feather from "react-feather";

import {
  Autodesk,
  Cplusplus,
  Csharp,
  CssThree,
  Discord,
  Express,
  Html5,
  Java,
  Javascript,
  Lua,
  Musescore,
  Nextdotjs,
  Nodedotjs,
  Php,
  Prisma,
  Python,
  ReactJs,
  Roblox,
  Sass,
  Typescript,
} from "@icons-pack/react-simple-icons";

import albums from "../json/albums.json";
import games from "../json/games.json";
import media from "../json/media.json";
import links from "../json/links.json";
import projects from "../json/projects.json";

import Head from "next/head";

import Confetti from "../components/Confetti";
import Snow from "../Snow";
import Birthday from "../Birthday";

TimeAgo.addLocale(en);

import { useEffect, useState } from "react";

import { Link, Project, ProjectSite } from "../types";

export default function Index() {
  const [age, setAge] = useState(14);

  const [confetti, setConfetti] = useState<any>();

  const [todayIs, setTodayIs] = useState<string | undefined>();

  useEffect(() => {
    const old = new Date("Mar 6 2007 19:45:00");
    const now = new Date();
    setAge(new Date(now.getTime() - old.getTime()).getUTCFullYear() - 1970);

    const month = now.getMonth() + 1;
    const date = now.getDate();

    if (month == 12 || month == 3) {
      if (month == 3 && date == 6) {
        setTodayIs("birthday");
        setConfetti(new Birthday([]));
      } else if (month == 3 && date <= 20) {
        setConfetti(new Snow([]));
      } else if (month == 12 && date >= 21) {
        setConfetti(new Snow([]));
      }
    } else if (month < 3) {
      setConfetti(new Snow([]));
    }
  }, []);

  useEffect(() => {
    if (
      confetti != undefined &&
      localStorage.getItem("reduced_motion") == "false"
    ) {
      confetti.pauseAnimation();
    } else if (confetti != undefined) {
      confetti.startAnimation();
    }
  }, [confetti]);

  return (
    <>
      <Head>
        <title>{todayIs === "birthday" ? "🎉 " : ""}znepb.me</title>
      </Head>

      {confetti && <Confetti confetti={confetti} />}

      <section className="header" id="header">
        <div> </div>
        <img src="/svg/header-logo-shadow.svg" />
        <a href="#aboutme">
          <img className={styles.down} src="/svg/chevron-down.svg" />
        </a>
      </section>

      {todayIs === "birthday" && (
        <section className="primary" id="occassion">
          <h2>What&apos;s the occassion?</h2>
          <div className="headingDecoration"></div>
          <p>
            You&apos;re probably wondering, what&apos;s with all the confetti?
            Well, today is my birthday!
          </p>
        </section>
      )}

      <section className="primary" id="aboutme">
        <h2>About Me</h2>
        <div className="headingDecoration"></div>
        <p>
          Hi! I&apos;m Marcus, known as znepb on the internet. I&apos;m a{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://countdowns.znepb.me/1"
          >
            {age}-year-old
          </a>{" "}
          percussionist, programmer and roller coaster enthusiant.
        </p>

        <p>
          I started programming when I was 7. I started off with programming in
          Lua, using a Minecraft programming mod called{" "}
          <a target="_blank" rel="noreferrer" href="https://computercraft.info">
            ComputerCraft
          </a>
          . From there, I branched out to many languages, starting with
          JavaScript, and eventually TypeScript, Java, and a few others.
        </p>

        <p>
          I also love playing and writing music. I haven&apos;t written much,
          but I&apos;ve competed in my school&apos;s marching band and indoor
          percussion ensomble on vibraphone. I started playing music in 6th
          grade (on the trombone), but I switched to percussion in 9th grade,
          because I didn&apos;t really like playing trombone that much.
        </p>

        <p>
          Finally, I am a huge roller coaster nerd. As of December 23nd, 2021, I
          have ridden 52 roller coasters, a total of 286 times. I&apos;ve been
          to 5 amusment parks, and my home park is Kings Island. My favorite
          roller coaster is Steel Vengance at Cedar Point.{" "}
          <small>(Very original, I know.)</small> If you&apos;d like to see all
          the coasters I&apos;ve ridden and their rankings (and plently of other
          statistics){" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://docs.google.com/spreadsheets/d/1KGE_UN3Ftr-P13eenqGx-tMuOkPr7EM7e4hEA-Gmclk/edit?usp=sharing"
          >
            check out my Google Spreadsheet.
          </a>
        </p>
      </section>
      <section className="primary" id="likings">
        <h2>Things I like</h2>
        <div className="headingDecoration"></div>
        <div className={styles.thingsILike}>
          <div>
            <h3>Music</h3>
            <div className={styles.likingsList}>
              {albums.map((data) => (
                <Card key={data.id} {...data} />
              ))}
            </div>
          </div>
          <div>
            <h3>Games</h3>
            <div className={styles.likingsList}>
              {games.map((data) => (
                <Card key={data.id} {...data} />
              ))}
            </div>
          </div>
          <div>
            <h3>Movies &amp; Shows</h3>
            <div className={styles.likingsList}>
              {media.map((data) => (
                <Card key={data.id} {...data} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="primary" id="projects">
        <h2>Projects</h2>
        <div className="headingDecoration"></div>

        <div className={styles.projects}>
          {projects.map((project: Project, index: number) => (
            <div key={index}>
              <Image
                width={1000}
                height={700}
                src={require(`../../public/projects/${project.name
                  .toLowerCase()
                  .replace(" ", "-")}.png`)}
                placeholder={"blur"}
              />
              <article>
                <div>
                  <header>
                    {project.name} <small>{project.month}</small>
                  </header>
                  <article>{project.description}</article>
                </div>
                <footer>
                  {project.sites.map((site: ProjectSite, index: number) => {
                    let Icon =
                      require(`react-feather/dist/icons/${site.icon.toLowerCase()}`).default;

                    return (
                      <a
                        href={site.url}
                        rel="noreferrer"
                        target="_blank"
                        key={index}
                      >
                        <Icon size={32} />
                      </a>
                    );
                  })}
                </footer>
              </article>
            </div>
          ))}
        </div>
      </section>
      <section className="primary" id="connect">
        <h2>Connect</h2>
        <div className="headingDecoration"></div>

        <div className={styles.contact}>
          <a
            href="https://www.instagram.com/mwenzel.percussion/"
            rel="noreferrer"
            target="_blank"
            className="nostyle"
            style={{
              background:
                "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
            }}
          >
            <Feather.Instagram size="32px" /> <span>@mwenzel.percussion</span>
          </a>
          <a
            href="https://twitter.com/im_znepb"
            rel="noreferrer"
            target="_blank"
            className="nostyle"
            style={{
              background: "#1c9aef",
            }}
          >
            <Feather.Twitter size="32px" /> <span>@im_znepb</span>
          </a>
          <a
            href="https://github.com/znepb"
            rel="noreferrer"
            target="_blank"
            className="nostyle"
            style={{
              background: "#24292e",
            }}
          >
            <Feather.GitHub size="32px" /> <span>znepb</span>
          </a>
          <a
            href="https://discord.com/users/356209633313947648"
            rel="noreferrer"
            target="_blank"
            className="nostyle"
            style={{
              background: "#5662f6",
            }}
          >
            <Discord size="32px" /> <span>znepb#1234</span>
          </a>
        </div>
      </section>
      <section className="primary-bottom" id="more">
        <div className={styles.more}>
          <section>
            <h2>Links</h2>
            <div className="headingDecoration"></div>
            <div className={styles.links}>
              {links.map((link: Link, index: number) => (
                <div key={index}>
                  <article>
                    <img width={48} height={48} src={link.image} />
                    <main>
                      <header>{link.name}</header>
                      <footer>{link.description}</footer>
                    </main>
                  </article>
                  <a href={link.url} target="_blank" rel="noreferrer">
                    <Feather.ExternalLink />
                  </a>
                </div>
              ))}
              <div>
                <article>
                  <img width={48} height={48} src={"/svg/links/coffee.svg"} />
                  <main>
                    <header>Buy me a coffee</header>
                    <footer>
                      Feeling generous and like what I&apos;m making? Consider
                      supporting server costs via Buy Me a Coffee. Donations are
                      greatly appreciated!
                    </footer>
                  </main>
                </article>
                <a
                  href="https://www.buymeacoffee.com/znepb"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.coffee}
                ></a>
              </div>
            </div>
          </section>
          <section
            style={{ display: "flex", flexDirection: "column", gap: "5rem" }}
          >
            <div className={styles.skillsWrapper}>
              <h2>Skills</h2>
              <div className="headingDecoration"></div>
              <table className={styles.skills}>
                <thead>
                  <tr>
                    <th>Experience Level</th>
                    <th>Front-end</th>
                    <th>Back-end</th>
                    <th>General Purpose</th>
                    <th>Scripting</th>
                    <th>Frameworks</th>
                    <th>Other Skills</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Expert</th>
                    <td>
                      <Html5 color="var(--text)" size={24} />
                    </td>
                    <td>
                      <Nodedotjs color="var(--text)" size={24} />
                    </td>
                    <td>
                      <Javascript color="var(--text)" size={24} />
                    </td>
                    <td>
                      <Lua color="var(--text)" size={24} />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>Great</th>
                    <td>
                      <CssThree color="var(--text)" size={24} />
                      <Nextdotjs color="var(--text)" size={24} />
                      <Sass color="var(--text)" size={24} />
                    </td>
                    <td>
                      <Php color="var(--text)" size={24} />
                    </td>
                    <td>
                      <Typescript color="var(--text)" size={24} />
                    </td>
                    <td></td>
                    <td>
                      <Express color="var(--text)" size={24} />
                    </td>
                    <td>
                      <Roblox color="var(--text)" size={24} />
                      <Prisma color="var(--text)" size={24} />
                      <Feather.Figma color="var(--text)" size={24} />
                    </td>
                  </tr>
                  <tr>
                    <th>Good</th>
                    <td>
                      <ReactJs color="var(--text)" size={24} />
                    </td>
                    <td></td>
                    <td>
                      <Java color="var(--text)" size={24} />
                    </td>
                    <td>
                      <Python color="var(--text)" size={24} />
                    </td>
                    <td></td>
                    <td>
                      <Musescore color="var(--text)" size={24} />
                    </td>
                  </tr>
                  <tr>
                    <th>Capable</th>
                    <td></td>
                    <td></td>
                    <td>
                      <Cplusplus color="var(--text)" size={24} />
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <i title="AutoDesk Fusion 360">
                        <Autodesk color="var(--text)" size={24} />
                      </i>
                    </td>
                  </tr>
                  <tr>
                    <th>Poor</th>
                    <td></td>
                    <td></td>
                    <td>
                      <Csharp color="var(--text)" size={24} />
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h2>Computer Specifications / Peripherals</h2>
              <div className="headingDecoration"></div>
              <table className={styles.skills}>
                <tbody>
                  <tr>
                    <th>CPU</th>
                    <td>AMD Ryzen 7 2700X</td>
                  </tr>
                  <tr>
                    <th>CPU Cooler</th>
                    <td>Corsair H100i Elite Capellix RGB</td>
                  </tr>
                  <tr>
                    <th>Motherboard</th>
                    <td>ROG STRIX B550-F</td>
                  </tr>
                  <tr>
                    <th>RAM</th>
                    <td>Corsair Vengance RGB 32GB (3200MHz)</td>
                  </tr>
                  <tr>
                    <th>Graphics Card</th>
                    <td>ASUS Phoenix 1050 Ti</td>
                  </tr>
                  <tr>
                    <th>Storage 1 (SATA SSD)</th>
                    <td>500GB Samsung 860 EVO</td>
                  </tr>
                  <tr>
                    <th>Storage 2 (HDD)</th>
                    <td>2TB Seagate drive</td>
                  </tr>
                  <tr>
                    <th>Case</th>
                    <td>Corsair 4000X RGB</td>
                  </tr>
                  <tr>
                    <th>Power Supply</th>
                    <td>Corsair RMX 850</td>
                  </tr>
                  <tr>
                    <th>Keyboard</th>
                    <td>Razer Ornata Chroma</td>
                  </tr>
                  <tr>
                    <th>Mouse</th>
                    <td>Some HP mouse, I have no idea</td>
                  </tr>
                  <tr>
                    <th>Microphone</th>
                    <td>Blue Yeti 2017(?) model</td>
                  </tr>
                  <tr>
                    <th>Mouse Pad</th>
                    <td>Corsair MM700 RGB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
}

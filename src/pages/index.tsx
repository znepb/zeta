import styles from "../styles/Home.module.scss";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

import Card from "../components/Card";
import Footer from "../components/Footer";

import {
  Instagram,
  Twitter,
  GitHub,
  Globe,
  ExternalLink,
  Figma,
} from "react-feather";

import {
  Autodesk,
  Cplusplus,
  Csharp,
  CssThree,
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

import Head from "next/head";

import Confetti from "../components/Confetti";
import Snow from "../Snow";
import Birthday from "../Birthday";

TimeAgo.addLocale(en);

import { useEffect, useState } from "react";

export default function Index() {
  const timeAgo = new TimeAgo("en-US");
  const [age, setAge] = useState(14);

  const [confetti, setConfetti] = useState<any>();

  const [todayIs, setTodayIs] = useState<string | undefined>();

  useEffect(() => {
    const old = timeAgo.format(new Date("Mar 6 2007 19:45:00"));
    const now = new Date();

    if (old && typeof old === "string") {
      const age = old.match(/\d+/);

      if (age && age[0]) {
        setAge(Number(age[0]) - 1);
      }
    }

    const month = now.getMonth() + 1;
    const date = now.getDate();

    console.log(month, date);

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
          Finally, I am a huge roller coaster nerd. As of October 22nd, 2021, I
          have ridden 52 roller coasters, a total of 283 times. I&apos;ve been
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
          <div>
            <img width="300px" src="/projects/countdowns.png" />
            <article>
              <div>
                <header>
                  Countdowns <small>October 2021</small>
                </header>
                <article>
                  A glorified clock with some countdowns to some important dates
                  for me.
                </article>
              </div>
              <footer>
                <a href="https://countdowns.znepb.me">
                  <Globe size="28px" />
                </a>
                <a
                  href="https://github.com/znepb/countdowns"
                  rel="noreferrer"
                  target="_blank"
                >
                  <GitHub size="28px" />
                </a>
              </footer>
            </article>
          </div>
          <div>
            <img width="300px" src="/projects/lens.png" />
            <article>
              <div>
                <header>
                  Lens <small>December 2021</small>
                </header>
                <article>
                  Lens is a website to show off some pictures I&apos;ve taken,
                  designed very similar to znepb.me.
                </article>
              </div>
              <footer>
                <a href="https://lens.znepb.me">
                  <Globe size="28px" />
                </a>
                <a
                  href="https://github.com/znepb/lens"
                  rel="noreferrer"
                  target="_blank"
                >
                  <GitHub size="28px" />
                </a>
              </footer>
            </article>
          </div>
          <div>
            <img width="300px" src="/projects/lit.png" />
            <article>
              <div>
                <header>
                  LIT <small>In Development</small>
                </header>
                <article>
                  It&apos;s totally LIT, son! LIT is a chat app &amp; social
                  media platform I&apos;ve been working on with{" "}
                  <a rel="noreferrer" target="_blank" href="https://auti.one">
                    AutiOne
                  </a>
                  .
                </article>
              </div>
              <footer>
                <a href="https://litsocial.app">
                  <Globe size="28px" />
                </a>
              </footer>
            </article>
          </div>
          <div>
            <img width="300px" src="/projects/files.png" />
            <article>
              <div>
                <header>
                  files.znepb.me <small>September 2021</small>
                </header>
                <article>An incredibly minimalistic file dump.</article>
              </div>
              <footer>
                <a href="https://files.znepb.me">
                  <Globe size="28px" />
                </a>
                <a
                  href="https://github.com/znepb/filemanager"
                  rel="noreferrer"
                  target="_blank"
                >
                  <GitHub size="28px" />
                </a>
              </footer>
            </article>
          </div>
          <div>
            <img width="300px" src="/projects/zme6.png" />
            <article>
              <div>
                <header>
                  znepb.me v6 <small>December 2021</small>
                </header>
                <article>
                  The 6th version of my website, made in NextJS. Why can&apos;t
                  I just settle on one website? Good lord.
                </article>
              </div>
              <footer>
                <small
                  style={{
                    fontSize: "0.8rem",
                  }}
                >
                  <em>You&apos;re already here.</em>
                </small>
              </footer>
            </article>
          </div>
          <div>
            <img width="300px" src="/projects/photos-site.png" />
            <article>
              <div>
                <header>
                  Photos <small>March 2021</small>
                </header>
                <article>
                  A open-soruce photos website I&apos;ve since replaced (at
                  least on znepb.me) with Lens.
                </article>
              </div>
              <footer>
                <a
                  href="https://github.com/znepb/photos-site"
                  rel="noreferrer"
                  target="_blank"
                >
                  <GitHub size="28px" />
                </a>
              </footer>
            </article>
          </div>
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
            <Instagram size="32px" /> <span>@mwenzel.percussion</span>
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
            <Twitter size="32px" /> <span>@im_znepb</span>
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
            <GitHub size="32px" /> <span>znepb</span>
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
            <img src="/svg/discord.svg" width="32px" />{" "}
            <span>! read status (znepb)#0123</span>
          </a>
        </div>
      </section>
      <section className="primary-bottom" id="more">
        <div className={styles.more}>
          <section>
            <h2>Links</h2>
            <div className="headingDecoration"></div>
            <div className={styles.links}>
              <div>
                <main>
                  <header>AutiOne</header>
                  <footer>
                    Another programming nerd{" "}
                    <span title="He insisted I put this here.">
                      (and design nerd)
                    </span>{" "}
                    who helped me design this site.
                  </footer>
                </main>
                <a href="https://auti.one" target="_blank" rel="noreferrer">
                  <ExternalLink />
                </a>
              </div>
              <div>
                <main>
                  <header>znepb/zeta</header>
                  <footer>The source for znepb.me.</footer>
                </main>
                <a
                  href="https://github.com/znepb/zeta"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink />
                </a>
              </div>
              <div>
                <main>
                  <header>Coasters Spreadsheet</header>
                  <footer>
                    A record of every coaster I&apos;ve ridden, park I&apos;ve
                    visited, and data on every coaster and amusment park visits.
                    Rennovation coming Soon™
                  </footer>
                </main>
                <a
                  href="https://docs.google.com/spreadsheets/d/1KGE_UN3Ftr-P13eenqGx-tMuOkPr7EM7e4hEA-Gmclk/edit#gid=2055894933"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink />
                </a>
              </div>
              <div>
                <main>
                  <header>Numbers Survey</header>
                  <footer>
                    Data of a survey I&apos;m currently conducting via Discord.
                    This survey will end mid-February 2022. If you&apos;d like
                    to participate, DM me on Discord with an integer from 1-10.
                  </footer>
                </main>
                <a
                  href="https://docs.google.com/spreadsheets/d/1VS-QbNVb4mq59j1bybDmQSWMO53cV1nuiiiuMBZmoZY/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink />
                </a>
              </div>
              <div>
                <main>
                  <header>My Spotify playlist</header>
                  <footer>
                    It&apos;s called &quot;bad taste&quot; because I&apos;ve
                    been told I have bad taste. Anyway, enjoy my wacky
                    collection of favorite songs.
                  </footer>
                </main>
                <a
                  href="https://open.spotify.com/playlist/2coydXv9V3Aj2RtQfTRosX?si=6ac681fafe324990"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink />
                </a>
              </div>
              {/*to be added - <div>
                <main>
                  <header>v5.znepb.me</header>
                  <footer>An old version of znepb.me. I&apos;d like to add even older versions, but unfortunetly, I don&apos;t have backups of those.</footer>
                </main>
                <a href="https://v5.znepb.me" target="_blank" rel="noreferrer">
                  <ExternalLink />
                </a>
              </div>*/}
              <div>
                <main>
                  <header>timeline.znepb.me</header>
                  <footer>The timeline of znepb.me (and just znepb)</footer>
                </main>
                <a
                  href="https://timeline.znepb.me"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink />
                </a>
              </div>
              <div>
                <main>
                  <header>analytics.znepb.me</header>
                  <footer>Analytics of my servers and computer.</footer>
                </main>
                <a
                  href="https://timeline.znepb.me"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink />
                </a>
              </div>
              <div>
                <main>
                  <header>Buy me a coffee</header>
                  <footer>
                    Feeling generous and like what I&apos;m making? Consider
                    supporting server costs via Buy Me a Coffee. Donations are
                    greatly appreciated!
                  </footer>
                </main>
                <a
                  href="https://www.buymeacoffee.com/znepb"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.coffee}
                ></a>
              </div>
            </div>
          </section>
          <section className={styles.skillsWrapper}>
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
                    <Figma color="var(--text)" size={24} />
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
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
}

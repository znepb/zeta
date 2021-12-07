import styles from '../styles/Home.module.scss'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'

import Card from "../components/Card";
import Footer from "../components/Footer";

import { Instagram, Twitter, GitHub, Globe } from 'react-feather';

import albums from "../json/albums.json";
import games from "../json/games.json";
import media from "../json/media.json";

import Head from 'next/head';
import Link from 'next/link';

TimeAgo.addLocale(en);

import { useEffect, useState } from 'react';

export default function Index() {
  const timeAgo = new TimeAgo('en-US')
  const [age, setAge] = useState(14);

  useEffect(() => {
    const old = timeAgo.format(new Date("Mar 6 2007 19:45:00"));

    if(old && typeof old === "string") {
      const age = old.match(/\d+/);

      if(age && age[0]) {
        setAge(Number(age[0]) - 1);
      }
    }
  }, [])

  return <>
    <Head>
      <title>znepb.me</title>
    </Head>

    <section className="header" id="header">
      <div> </div>
      <img src="/header-logo-shadow.svg" />
      <a href="#aboutme">
        <img className={styles.down} src="/chevron-down.svg" />
      </a>
    </section>
    <section className="primary" id="aboutme">
      <h2>About Me</h2>
      <div className="headingDecoration"></div>
      <p
        >Hi! I&apos;m Marcus, known as znepb on the internet. I&apos;m a{" "}
        <a target="_blank" rel="noreferrer" href="https://countdowns.znepb.me/1">{age}-year-old</a> percussionist, programmer and 
        roller coaster enthusiant.
      </p>

      <p>
        I started programming when I was 7. I started off with programming in Lua, using a Minecraft programming mod 
        called <a target="_blank" rel="noreferrer" href="https://computercraft.info">ComputerCraft</a>. From there, I branched out to 
        many languages, starting with JavaScript, and eventually TypeScript, Java, and a few others.
      </p>

      <p>
        I also love playing and writing music. I haven&apos;t written much, but I&apos;ve competed in my school&apos;s marching band 
        and indoor percussion ensomble on vibraphone. I started playing music in 6th grade (on the trombone), but I 
        switched to percussion in 9th grade, because I didn&apos;t really like playing trombone that much.
      </p>

      <p>
        Finally, I am a huge roller coaster nerd. As of October 22nd, 2021, I have ridden 52 roller coasters, a total 
        of 283 times. I&apos;ve been to 5 amusment parks, and my home park is Kings Island. My favorite roller coaster is 
        Steel Vengance at Cedar Point. <small>(Very original, I know.)</small> If you&apos;d like to see all the coasters
        I&apos;ve ridden and their rankings (and plently of other statistics){" "}
         <a rel="noreferrer" target="_blank" href="https://docs.google.com/spreadsheets/d/1KGE_UN3Ftr-P13eenqGx-tMuOkPr7EM7e4hEA-Gmclk/edit?usp=sharing">check out my Google Spreadsheet.</a>
      </p>
    </section>
    <section className="primary" id="likings">
      <h2>Things I like</h2>
      <div className="headingDecoration"></div>
      <div className={styles.thingsILike}>
        <div>
          <h3>Music</h3>
          <div className={styles.likingsList}>
            {albums.map(data => <Card key={data.id} {...data}/>)}
          </div>

          <Link href="/spotify-wrapped-21">
            <a className={styles.spotifyWrappedLink}>
              <img src="/spotify.png" width={32} />
              Spotify Wrapped 2021
            </a>
          </Link>
        </div>
        <div>
          <h3>Games</h3>
          <div className={styles.likingsList}>
            {games.map(data => <Card key={data.id} {...data}/>)}
          </div>
        </div>
        <div>
          <h3>Movies &amp; Shows</h3>
          <div className={styles.likingsList}>
            {media.map(data => <Card key={data.id} {...data}/>)}
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
              <header>Countdowns</header>
              <article>A glorified clock with some countdowns to some important dates for me.</article>
            </div>
            <footer>
              <a href="https://countdowns.znepb.me"><Globe size="28px" /></a>
              <a href="https://github.com/znepb/countdowns" rel="noreferrer" target="_blank"><GitHub size="28px" /></a>
            </footer>
          </article>
        </div>
        <div>
          <img width="300px" src="/projects/lit.png" />
          <article>
            <div>
              <header>LIT</header>
              <article>It&apos;s totally LIT, son! LIT is a chat app &amp; social media platform I&apos;ve been working on with <a rel="noreferrer" target="_blank" href="https://auti.one">AutiOne</a>.</article>
            </div>
            <footer>
              <a href="https://litsocial.app"><Globe size="28px" /></a>
            </footer>
          </article>
        </div>
        <div>
          <img width="300px" src="/projects/files.png" />
          <article>
            <div>
              <header>files.znepb.me</header>
              <article>An incredibly minimalistic file dump.</article>
            </div>
            <footer>
              <a href="https://files.znepb.me"><Globe size="28px" /></a>
              <a href="https://github.com/znepb/filemanager" rel="noreferrer" target="_blank"><GitHub size="28px" /></a>
            </footer>
          </article>
        </div>
        <div>
          <img width="300px" src="/projects/zme6.png" />
          <article>
            <div>
              <header>znepb.me v6</header>
              <article>The 6th version of my website, made in NextJS. Why can&apos;t I just settle on one website? Good lord.</article>
            </div>
          </article>
        </div>
        <div>
          <img width="300px" src="/projects/photos-site.png" />
          <article>
            <div>
              <header>photos.znepb.me</header>
              <article>A open-soruce photos website. That&apos;s about it.</article>
            </div>
            <footer>
              <a href="https://photos.znepb.me"><Globe size="28px" /></a>
              <a href="https://github.com/znepb/photos-site" rel="noreferrer" target="_blank"><GitHub size="28px" /></a>
            </footer>
          </article>
        </div>
      </div>
    </section>
    <section className="primary" id="Connect">
      <h2>Connect</h2>
      <div className="headingDecoration"></div>

      <div className={styles.contact}>
        <a href="https://www.instagram.com/mwenzel.percussion/" rel="noreferrer" target="_blank" className="nostyle">
          <Instagram size="32px" /> <span>@mwenzel.percussion</span>
        </a>
        <a href="https://twitter.com/im_znepb" rel="noreferrer" target="_blank" className="nostyle">
          <Twitter size="32px" /> <span>@im_znepb</span>
        </a>
        <a href="https://github.com/znepb" rel="noreferrer" target="_blank" className="nostyle">
          <GitHub size="32px" /> <span>znepb</span>
        </a>
        <span>
          <img src="/discord.svg" width="32px" /> <span>znepb#0123</span>
        </span>
      </div>
    </section>
    <Footer />
  </>
}
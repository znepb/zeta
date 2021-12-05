import Card from "../components/Card";
import Footer from "../components/Footer";
import Head from 'next/head';

import styles from "../styles/SpotifyWrapped.module.scss"

export default function SpotifyWrapped21() {
  return <>
    <Head>
      <title>Spotify Wrapped 2021 - znepb.me</title>
    </Head>

    <section className="header" id="header">
      <div> </div>
      <h2>Spotify Wrapped 2021</h2>
      <div></div>
    </section>
    <section className={`primary ${styles.main}`}>
      <div>
        <div>
          <h2>Minutes Listened</h2>
          <div className="headingDecoration"></div>
        </div>
        <div>
          I listened for 57,154 minutes (more than 94% of all listeners in the United States!)
        </div>
      </div>
      <div>
        <div>
          <h2>Audio Aura</h2>
          <div className="headingDecoration"></div>
        </div>
        <div>
          My audio aura was <span style={{color: "#d4531c"}}>bold</span> and <span style={{color: "#fff53d"}}>focused</span>.
        </div>
      </div>
      <div>
        <div>
          <h2>Top Generes</h2>
          <div className="headingDecoration"></div>
        </div>
        <div>
          <ul>
            <li>Lo-fi beats</li>
            <li>Gaming EDM</li>
            <li>Weirdcore</li>
            <li>Indie pop</li>
            <li>Minecraft</li>
          </ul>
        </div>
      </div>
      <div className={styles.tops}>
        <div className={styles.section}>
          <div>
            <h2>Top Artists</h2>
            <div className="headingDecoration"></div>
          </div>
          <Card name="C418" id="topartist" artist="Streamed 5906 minutes - Top song: Aria Math" image="spotifywrapped2021/c418.jpg" offset="0%" />
          <Card name="Tally Hall" id="topartist2" logo="spotifywrapped2021/tallyhall.jpg" image="spotifywrapped2021/tallyhall-background.jpg" offset="20%" />
          <Card name="Miracle Musical" id="topartist3" logo="spotifywrapped2021/miracle-musical-hawaii-part-ii.jpg" image="spotifywrapped2021/miracle-musical-hawaii-part-ii-cropped.jpg" offset="20%" />
          <Card name="Lil Darkie" id="topartist4" logo="spotifywrapped2021/lildarkie.jpg" image="spotifywrapped2021/lildarkie.jpg" offset="60%" />
          <Card name="Kill Paris" id="topartist5" logo="spotifywrapped2021/killparis.jpg" image="spotifywrapped2021/killparis.jpg" offset="20%" />

        </div>
        <div className={styles.section}>
          <div>
            <h2>Top Songs</h2>
            <div className="headingDecoration"></div>
          </div>
          <Card name="Miracle Musical - Dream Sweet in Sea Major" id="topsong" artist="Streamed 114 times" logo="spotifywrapped2021/miracle-musical-hawaii-part-ii.jpg" image="spotifywrapped2021/miracle-musical-hawaii-part-ii-cropped.jpg" offset="20%" />
          <Card name="Isle unto Thyself" id="topsong" artist="Miracle Musical" logo="spotifywrapped2021/miracle-musical-hawaii-part-ii.jpg" image="spotifywrapped2021/miracle-musical-hawaii-part-ii-cropped.jpg" offset="20%" />
          <Card name="Black Rainbows" id="topsong" artist="Miracle Musical" logo="spotifywrapped2021/miracle-musical-hawaii-part-ii.jpg" image="spotifywrapped2021/miracle-musical-hawaii-part-ii-cropped.jpg" offset="20%" />
          <Card name="The Mind Electric" id="topsong" artist="Miracle Musical" logo="spotifywrapped2021/miracle-musical-hawaii-part-ii.jpg" image="spotifywrapped2021/miracle-musical-hawaii-part-ii-cropped.jpg" offset="20%" />
          <Card name="Ruler of Everything" id="topsong" artist="Tally Hall" offset="0%" image="music/mmmm.jpg" />
        </div>
        <div className={styles.section}>
          <div>
            <h2>Movie Soundtrack</h2>
            <div className="headingDecoration"></div>
          </div>
          <Card name="Opening credits theme" id="openingcredits" artist="Nickelback - Photograph (I have no idea why this is here)" image="spotifywrapped2021/nickelback-alltherightreasons.jpg" />
          <Card name="Song as I defeat the ancient vengeful spirit" id="vengefulspirit" artist="Tally Hall - Ruler of Everything" offset="0%" image="music/mmmm.jpg" />
          <Card name="Song as I score the last point before the buzzer" id="lastpoint" artist="Miracle Musical - Variations on a Cloud" offset="25%" image="spotifywrapped2021/miraclemusical-variationsonacloud.png" />
          <Card name="Faceoff with rival dance crew" id="rivaldance" artist="Technotronic - Pump Up the Jam" image="spotifywrapped2021/technotronic-pumpupthejam.jpeg" />
          <Card name="Single tear drops into a pool with your reflection" id="tear" artist="Lil Darkie - tale of yehoshua (interlude)" image="spotifywrapped2021/lildarkie-SWAMP.png" />
        </div>
      </div>
    </section>
    <Footer />
  </>
}
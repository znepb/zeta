import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Head from "next/head";

import styles from "../../styles/SpotifyWrapped.module.scss";

import wrapped from "../../json/SpotifyWrapped2021.json";

import { useState } from "react";
import Link from "next/link";

export default function SpotifyWrapped21() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <Head>
        <title>Spotify Wrapped 2021 - znepb.me</title>
      </Head>

      <section className="header" id="header">
        <div style={{ paddingTop: "2rem" }}>
          <Link href="/archive">
            <a>Return to Archives</a>
          </Link>
        </div>
        <h2>Spotify Wrapped 2021</h2>
        <div></div>
      </section>
      <section className={`primary-bottom ${styles.main}`}>
        <div>
          <div>
            <h2>Minutes Listened</h2>
            <div className="headingDecoration"></div>
          </div>
          <div>
            I listened for {wrapped.minutesListened} minutes (more than{" "}
            {wrapped.moreThan}% of all listeners in the United States!)
          </div>
        </div>
        <div>
          <div>
            <h2>Audio Aura</h2>
            <div className="headingDecoration"></div>
          </div>
          <div>
            My audio aura was{" "}
            <span style={{ color: `#${wrapped.audioAura[0].color}` }}>
              {wrapped.audioAura[0].name}
            </span>{" "}
            and{" "}
            <span style={{ color: `#${wrapped.audioAura[1].color}` }}>
              {wrapped.audioAura[1].name}
            </span>
            .
          </div>
        </div>
        <div>
          <div>
            <h2>Top Generes</h2>
            <div className="headingDecoration"></div>
          </div>
          <div>
            <ul>
              {wrapped.topGeneres.map((obj, idx) => (
                <li key={idx}>{obj}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.tops}>
          <div className={styles.section}>
            <div>
              <h2>Top Artists</h2>
              <div className="headingDecoration"></div>
            </div>
            {wrapped.artists.map((obj, idx) => (
              <Card key={idx} {...obj} />
            ))}
          </div>
          <div className={styles.section}>
            <div>
              <h2>Top Songs</h2>
              <div className="headingDecoration"></div>
            </div>
            {showMore
              ? wrapped.songs.map((obj, idx) => <Card key={idx} {...obj} />)
              : wrapped.songs
                  .filter((_, idx) => idx < 5)
                  .map((obj, idx) => <Card key={idx} {...obj} />)}
            <a
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              {showMore ? "Show Less" : "Show More"}
            </a>
          </div>
          <div className={styles.section}>
            <div>
              <h2>Movie Soundtrack</h2>
              <div className="headingDecoration"></div>
            </div>
            {wrapped.soundtrack.map((obj, idx) => (
              <Card key={idx} {...obj} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

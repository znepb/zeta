import Footer from "../../components/Footer";
import Head from "next/head";

import styles from "../../styles/SpotifyWrapped.module.scss";

import { useState } from "react";
import Link from "next/link";

export default function SpotifyWrapped21() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <Head>
        <title>Archives - znepb.me</title>
      </Head>

      <section className="header" id="header">
        <div></div>
        <h2>znepb.me Archives</h2>
        <div></div>
      </section>
      <section className={`primary-bottom ${styles.main}`}>
        <div>This page contains links to archived pages on this site.</div>

        <ul>
          <li>
            <Link href="/archive/spotify-wrapped-21">
              <a>Spotify Wrapped 2021</a>
            </Link>
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
}

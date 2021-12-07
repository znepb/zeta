import styles from '../styles/Home.module.scss'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'

import Footer from "../components/Footer";

import Head from 'next/head';

TimeAgo.addLocale(en);

export default function Index() {
  const timeAgo = new TimeAgo('en-US');

  return <>
    <Head>
      <title>znepb.me</title>
    </Head>

    <section className="header" id="header">
      <div> </div>
      <h2>Changelog</h2>
      <div></div>
    </section>
    <section className="primary" id="aboutme">
      <h2>6.1</h2>
      <div className="headingDecoration"></div>
      <h3>Dec 7 2021 ({timeAgo.format(new Date("Dec 7 2021 16:53:00"))})</h3>
      <ul>
        <li>Converted Spotify Wrapped to a JSON-file based page</li>
        <li>Added changelog page</li>
        <li>Added &quot;Show More&quot; to Spotify Wrapped</li>
      </ul>
      <h2>6.0.1</h2>
      <div className="headingDecoration"></div>
      <h3>Dec 5 2021 ({timeAgo.format(new Date("Dec 5 2021"))})</h3>
      <ul>
        <li>Fix column sizing issues</li>
      </ul>
      <h2>6.0</h2>
      <div className="headingDecoration"></div>
      <h3>Dec 5 2021 ({timeAgo.format(new Date("Dec 5 2021"))})</h3>
      <ul>
        <li>znepb.me v6 release. Now made in NextJS!</li>
      </ul>
    </section>
    <Footer />
  </>
}
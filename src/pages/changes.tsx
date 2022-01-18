import styles from "../styles/Home.module.scss";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

import Footer from "../components/Footer";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

TimeAgo.addLocale(en);

export default function Index() {
  const timeAgo = new TimeAgo("en-US");

  const [showOlder, setShowOlder] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>znepb.me</title>
      </Head>

      <section className="header" id="header">
        <div> </div>
        <h2>Changelog</h2>
        <div></div>
      </section>
      <section className="primary-bottom" id="changes">
        <h2>6.5.2</h2>
        <div className="headingDecoration"></div>
        <h3>
          Jan 18 2022 ({timeAgo.format(new Date("Jan 18 2022 15:04:00"))})
        </h3>
        <ul>
          <li>Fixed Spotify Wrapped archive link</li>
        </ul>

        <h2>6.5.1</h2>
        <div className="headingDecoration"></div>
        <h3>
          Jan 18 2022 ({timeAgo.format(new Date("Jan 18 2022 15:00:00"))})
        </h3>
        <ul>
          <li>Changed Links &amp; Skills section around</li>
          <li>Added older znepb.me versions to the changelog</li>
        </ul>

        <h2>6.5</h2>
        <div className="headingDecoration"></div>
        <h3>
          Jan 17 2022 ({timeAgo.format(new Date("Jan 17 2022 14:17:00"))})
        </h3>
        <ul>
          <li>Added Skills and Links section</li>
          <li>Added settings</li>
          <li>Added themes</li>
          <li>Link to my Discord profile on Contact section</li>
          <li>Projects now have dates</li>
        </ul>

        <h2>6.4</h2>
        <div className="headingDecoration"></div>
        <h3>Jan 3 2022 ({timeAgo.format(new Date("Jan 3 2022 17:25:00"))})</h3>
        <ul>
          <li>Added noscript message</li>
        </ul>

        <h2>6.3</h2>
        <div className="headingDecoration"></div>
        <h3>Jan 3 2022 ({timeAgo.format(new Date("Jan 3 2022 14:50:00"))})</h3>
        <ul>
          <li>🎉 Happy New Year!</li>
          <li>
            Archived{" "}
            <Link href="/archive/spotify-wrapped-21">
              <a>Spotify Wrapped</a>
            </Link>
          </li>
          <li>New fancy backgrounds for socials</li>
          <li>Snow actually works now</li>
        </ul>

        <h2>6.2</h2>
        <div className="headingDecoration"></div>
        <h3>
          Dec 28 2021 ({timeAgo.format(new Date("Dec 28 2021 19:00:00"))})
        </h3>
        <ul>
          <li>Better CSS</li>
          <li>Uniform CSS across znepb.me (just lens as of writing)</li>
          <li>Snow</li>
          <li>Special effects for my birthday</li>
        </ul>
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

        {showOlder && (
          <>
            <h2>5.3</h2>
            <div className="headingDecoration"></div>
            <h3>May 20th 2021 ({timeAgo.format(new Date("May 20 2021"))})</h3>
            <ul>
              <li>Google analytics? I don&apos;t know.</li>
            </ul>
            <h2>5.2</h2>
            <div className="headingDecoration"></div>
            <h3>May 2021 ({timeAgo.format(new Date("May 10 2021"))})</h3>
            <ul>
              <li>Apparently it existed at some point.</li>
            </ul>
            <h2>5.1</h2>
            <div className="headingDecoration"></div>
            <h3>Apr 24 2021 ({timeAgo.format(new Date("Apr 24 2021"))})</h3>
            <ul>
              <li>Themes are added, just light and dark.</li>
            </ul>
            <h2>5.0</h2>
            <div className="headingDecoration"></div>
            <h3>Apr 11 2021 ({timeAgo.format(new Date("Apr 11 2021"))})</h3>
            <ul>
              <li>znepb.me v5 release.</li>
            </ul>
            <h2>4.0</h2>
            <div className="headingDecoration"></div>
            <h3>January 2021 ({timeAgo.format(new Date("Jan 2021"))})</h3>
            <ul>
              <li>znepb.me v4 starts development, but is never released.</li>
            </ul>
            <h2>3.0</h2>
            <div className="headingDecoration"></div>
            <h3>October 2019 ({timeAgo.format(new Date("October 2019"))})</h3>
            <ul>
              <li>
                znepb.me v3, also based on Bootstrap but with material design,
                is released. Unfortunetly, this cannot be found on the Wayback
                Machine.
              </li>
            </ul>
            <h2>2.0</h2>
            <div className="headingDecoration"></div>
            <h3>
              February 24th 2019 ({timeAgo.format(new Date("February 24 2019"))}
              )
            </h3>
            <ul>
              <li>
                znepb.me v2, based on Bootstrap was released. This is the only
                version of znepb.me (apart from v5 and v6) that is archived
                well. You can see that archive{" "}
                <a
                  href="https://web.archive.org/web/20190324162440/znepb.me"
                  target="_blank"
                  rel="noreferrer"
                >
                  here.
                </a>
              </li>
            </ul>
            <h2>1.0</h2>
            <div className="headingDecoration"></div>
            <h3>
              August 24th 2018 ({timeAgo.format(new Date("August 24 2018"))})
            </h3>
            <ul>
              <li>znepb.me is registered, and znepb.me v1 releases.</li>
            </ul>
          </>
        )}

        <a
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowOlder(!showOlder);
          }}
        >
          {showOlder ? "Hide" : "Show"} older
        </a>
      </section>
      <Footer />
    </>
  );
}

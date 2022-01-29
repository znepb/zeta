import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

import Footer from "../components/Footer";

import Head from "next/head";
import { useState } from "react";

import changelog from "../json/changelog.json";
import oldChangelog from "../json/changelog-old.json";

import { Patch } from "../types";

TimeAgo.addLocale(en);

export default function Changes() {
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
        {changelog.map((change: Patch, index: number) => (
          <section key={index}>
            <h2>
              {change.version.map((n: number, i: number) => {
                if (i == change.version.length - 1) {
                  return <span key={i}>{n}</span>;
                } else {
                  return <span key={i}>{n}.</span>;
                }
              })}
              {change.suffix}
            </h2>
            <div className="headingDecoration"></div>
            <h3>
              {change.date} (
              {timeAgo.format(new Date(`${change.date} ${change.time}`))})
            </h3>
            <ul>
              {change.notes.map((note: string) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </section>
        ))}

        {showOlder && (
          <>
            {oldChangelog.map((change: Patch, index: number) => (
              <section key={index}>
                <h2>
                  {change.version.map((n: number, i: number) => {
                    if (i == change.version.length - 1) {
                      return <span key={i}>{n}</span>;
                    } else {
                      return <span key={i}>{n}.</span>;
                    }
                  })}
                  {change.suffix}
                </h2>
                <div className="headingDecoration"></div>
                <h3>
                  {change.date} (
                  {timeAgo.format(new Date(`${change.date} ${change.time}`))})
                </h3>
                <ul>
                  {change.notes.map((note: string) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </section>
            ))}
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

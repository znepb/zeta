import styles from "../styles/Error.module.scss";
import Link from "next/link";
import Head from "next/head";

export default function error404() {
  return (
    <>
      <Head>
        <title>404 - znepb.me</title>
      </Head>
      <section className={styles.header} id="header">
        <div></div>
        <article>
          <h2>404</h2>
          <div style={{ marginBottom: "0.5rem" }}>
            Looks like we couldn&apos;t find this page. Bummer dude.
          </div>
          <Link href="/">Take me home</Link>
        </article>
        <div></div>
      </section>
    </>
  );
}

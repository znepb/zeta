import {
  Bandcamp,
  Netflix,
  Soundcloud,
  Spotify,
  Steam,
  Wikipedia,
} from "@icons-pack/react-simple-icons";
import { ExternalLink } from "react-feather";
import Image from "next/image";
import styles from "../styles/Card.module.scss";
import Spoiler from "./Spoiler";

interface Card {
  image: string;
  offset?: number | string;
  logo?: string;
  subtext?: string;
  name: string;
  links?: Link[];
  hasSpoilers?: boolean;
}

interface Link {
  icon: string;
  url: string;
}

export default function Card({
  image,
  offset,
  logo,
  subtext,
  name,
  links,
  hasSpoilers,
}: Card) {
  return (
    <>
      <div
        className={styles.card}
        style={{
          cursor: "pointer",
        }}
      >
        <Image
          src={`/${image}`}
          objectPosition={`center ${offset}`}
          objectFit="cover"
          layout="fill"
          className={`shimmer ${styles.cardBackgroundImage}`}
        />
        <article className={styles.cardContent}>
          <header className={styles.cardImage}>
            <Image
              src={logo ? `/${logo}` : `/${image}`}
              width={64}
              height={64}
            />
          </header>
          <main className={styles.cardInfo}>
            <header className={styles.cardInfoHeader}>{name}</header>
            {subtext && (
              <footer className={styles.cardInfoAuthor}>
                {hasSpoilers ? <Spoiler text={subtext} /> : subtext}
              </footer>
            )}
          </main>
          <footer className={styles.cardLinks}>
            {links &&
              links.map((link) => {
                switch (link.icon) {
                  case "link":
                    return (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        key={link.url}
                      >
                        <ExternalLink size={24} />
                      </a>
                    );
                  case "spotify":
                    return (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        key={link.url}
                      >
                        <Spotify size={24} />
                      </a>
                    );
                  case "bandcamp":
                    return (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        key={link.url}
                      >
                        <Bandcamp size={24} />
                      </a>
                    );
                  case "soundcloud":
                    return (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        key={link.url}
                      >
                        <Soundcloud size={24} />
                      </a>
                    );
                  case "netflix":
                    return (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        key={link.url}
                      >
                        <Netflix size={24} />
                      </a>
                    );
                  case "wikipedia":
                    return (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        key={link.url}
                      >
                        <Wikipedia size={24} />
                      </a>
                    );
                  case "steam":
                    return (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        key={link.url}
                      >
                        <Steam size={24} />
                      </a>
                    );
                  default:
                    return null;
                }
              })}
          </footer>
        </article>
      </div>
    </>
  );
}

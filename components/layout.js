import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Image from 'next/image';
import Menu from "./menu";

const name = "Ryan P. Gniadek";
export const siteTitle = "Ryan Gniadek";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Ryan Gniadek's personal website" />
        <meta
          property="og:image"
          content="/images/CompressedBanner.jpg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
      <>
      <Link href="/">

        <Image
          src="/images/profile.jpg"
          className={`${styles.headerImage} ${utilStyles.borderCircle}`}
          alt={name}
          width="110"
          height="110"
          quality={100}
        />

      </Link>
        <h2 className={utilStyles.headingLg}>
          <Link href="/" className={utilStyles.colorInherit}>
            {name}
          </Link>
        </h2>
      </>
        {/* {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )} */}
        <Menu></Menu>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            ← Back to home
          </Link>
        </div>
      )}
    </div>
  );
}

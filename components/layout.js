import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Image from 'next/image';
import Menu from "./menu";

const name = "Ryan P. Gniadek";
export const siteTitle = "Ryan Gniadek";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Ryan Gniadek's personal website" />
        <meta property="og:image" content="/images/CompressedBanner.jpg" />
        <meta property="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
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
        <Menu />
      </header>
      <main>{children}</main>
    </div>
  );
}

import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

const pageTitle = "Contact Me";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>
          {pageTitle} | {siteTitle}
        </title>
      </Head>
      <section className={utilStyles.headingXl}>
        <h1>{pageTitle}</h1>
      </section>
      <section>
        <p>
          <b>There are a few ways to get in touch with me:</b>
        </p>
        <p>
          Email:{" "}
          <Link href="mailto:ryan@gniadek.net">
            <a>ryan@gniadek.net</a>
          </Link>
        </p>
        <p>
          Facebook:{" "}
          <Link href="https://facebook.com/gniadekryan">
            <a>Ryan Gniadek</a>
          </Link>
        </p>
        <p>
          Twitter:{" "}
          <Link href="https://twitter.com/ryangniadek">
            <a>@ryangniadek</a>
          </Link>
        </p>
        <p>
          Instagram:{" "}
          <Link href="https://instagram.com/ryangniadek">
            <a>@ryangniadek</a>
          </Link>
        </p>
        <p>
          LinkedIn:{" "}
          <Link href="https://linkedin.com/in/ryangniadek">
            <a>in:ryangniadek</a>
          </Link>
        </p>
        <p>
          I am also on Signal. Send me an email if you do not have my cell phone
          number.
        </p>
      </section>
    </Layout>
  );
}

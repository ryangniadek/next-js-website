import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h3>My name is Ryan Gniadek</h3>
        <p>
          <Link href={`/files/publickey.ryan@gniadek.net.asc`}><a>Click here to download my PGP public key</a></Link>
        </p>
        <p>
          I am a student at the Virginia Tech College of Engineering, working
          towards a Bachelor of Science degree in Computer Science.
          Academically, I am interested in software engineering, programming
          languages, and computer systems.{" "}
        </p>
        <p>
          On campus, I am the President of the{" "}
          <Link href="https://vtluug.org">
            <a>Linux and Unix Users Group</a>
          </Link>{" "}
          , a group that promotes *nix and free software on campus.
          Additionally, I serve on the Executive Board of the{" "}
          <Link href="https://www.sec.vt.edu">
            <a>Student Engineers' Council</a>
          </Link>
          , a group that represents undergraduate students in the College of
          Engineering.{" "}
        </p>
        <p>
          This is my website where you can see more information about me, check
          out my projects and ventures, and read my blog posts.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

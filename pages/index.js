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
          I am a student at the Virginia Tech{" "}
          <Link href="https://eng.vt.edu/">
            <a>College of Engineering</a>
          </Link>
          , working towards a Bachelor of Science degree in{" "}
          <Link href="https://cs.vt.edu/">
            <a>Computer Science</a>
          </Link>
          . Academically, I am interested in software engineering, programming
          languages, and computer systems.{" "}
        </p>
        <p>
          On campus, I serve as the President of the{" "}
          <Link href="https://www.sec.vt.edu/About/RyanGniadek.html">
            <a>Student Engineers' Council</a>
          </Link>
          , a group that serves undergraduate students in the College of
          Engineering. As President, I oversee our fourteen member Executive Board, manage 300+ corporate relationships, and serve as the external representative for the organization by acting as our spokesperson and facilitating relationships across the University.
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

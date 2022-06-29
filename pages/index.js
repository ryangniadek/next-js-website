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
          On campus, I am the President of the{" "}
          <Link href="https://www.sec.vt.edu/about/leadership/RyanGniadek.html">
            <a>Student Engineers' Council</a>
          </Link>
          , a group that serves undergraduate students in the College of
          Engineering. As President, I oversee our fourteen member Executive Board,
          manage 300+ corporate relationships, and serve as the external representative for
          the organization by acting as our spokesperson and facilitating relationships across the University.
          The SEC supports VT Engineering in various ways including the{" "}
          <Link href="https://expo.sec.vt.edu">
            <a>Engineering Expo </a>
          </Link>
          which is the largest career fair at Virginia Tech and the second largest student-run career fair in the nation,
          giving back over $280k every year to support student initiatives, and increasing engagement with the College by
          hosting marquee events such as the{" "}
          <Link href="https://twitter.com/VTEngineering/status/1498466372279488514">
            <a>Engineers' Ball </a>
          </Link>
          which is a new annual tradition at Virginia Tech.
        </p>
        <p>
          This is my website where you can see more information about me, check
          out my projects and ventures, and read my blog posts.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Publications</h2>
        <ul className={utilStyles.list}>
            <li className={utilStyles.listItem}>
              <Link href="#">
                <a>Integrating DevOps to Enhance Student Experience in an Undergraduate Research Project</a>
              </Link>
              <small className={utilStyles.lightText}>
                <text><br/>Ryan Gniadek, Godmar Back, Kirk Cameron, Margaret Ellis
                <br/>ASEE 2022 Annual Conference{" "}
                <Link href="/files/rgniadek_ASEE_presentation_2022.pdf">
                <a>(Presentation)</a>
                </Link></text>
              </small>
            </li>
        </ul>
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

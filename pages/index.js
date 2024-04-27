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
          I like computer systems, infrastructure, DevOps, and software engineering.{" "}
        </p>
        <p>
          I work as a Software Consultant at <Link href="https://www.redhat.com"><a>Red Hat</a></Link> helping clients with automation, infrastructure, and DevOps problems. As part of my job, I have also earned numerous <Link href="/certifications"><a>certifications</a></Link> in infrastructure and cloud technologies.
          Using these skills, I lead customer projects to transform their IT automation practices.
        </p>
        <p>
          My undergraduate degree is in <Link href="https://cs.vt.edu"><a>Computer Science</a></Link> from <Link href="https://eng.vt.edu"><a>Virginia Tech</a></Link>.
          I am still involved with the college as a board member on the Young Alumni Council for the College of Engineering. I was appointed to a four-year term in 2024.
        </p>
        <p>
          This is my website where you can see more information about me, check
          out my projects, and read my blog posts.
        </p>
        <p>
          - rpg
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Publications</h2>
        <ul className={utilStyles.list}>
            <li className={utilStyles.listItem}>
              <Link href="https://peer.asee.org/40747">
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

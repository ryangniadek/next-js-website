import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

const pageTitle = "Work Experience";

export default function Resume() {
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
      <section className={utilStyles.headingMd}>
        <h2>Software Engineer Intern - Leidos</h2>
        <p>
          <b>
            <i>Summer 2020</i>
          </b>
        </p>
        <li>
          Prototyped C++ unit and mock testing frameworks for inclusion in a
          CI/CD pipeline
        </li>
        <li>
          Revised TFDM product test steps to ensure compliance with System
          Management requirements
        </li>
      </section>
      <section className={utilStyles.headingMd}>
        <h2>Systems Engineer Intern - Leidos</h2>
        <p>
          <b>
            <i>Summer 2019</i>
          </b>
        </p>
        <li>
          Developed operating procedures for a prototype AI system that will be
          used to predict future ERAM performance
        </li>
        <li>
          Improved department-level procedures for ERAM (En Route Automation
          Modernization) product/version control
        </li>
      </section>
      <section className={utilStyles.headingMd}>
        <h2>Partner and Full-Stack Developer - Old Line Digital, LLC</h2>
        <p>
          <b>
            <i>December 2017 - Preseent</i>
          </b>
        </p>
        <li>
          Collaborated with businesses and nonprofits to develop an online
          marketing strategy and website solution
        </li>
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

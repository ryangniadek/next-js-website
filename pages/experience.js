import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

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
        <h2>
          Solutions Architect -{" "}
          <Link href="https://celonis.com/">
            Celonis
          </Link>
        </h2>
        <p>
          <b>
            <i>2025 - present</i>
          </b>
        </p>
        <li>
          Responsible for the technical onboarding experience of our customers
        </li>
      </section>
      <section className={utilStyles.headingMd}>
        <h2>
          Software Consultant -{" "}
          <Link href="https://redhat.com/">
            Red Hat
          </Link>
        </h2>
        <p>
          <b>
            <i>2023 - 2025</i>
          </b>
        </p>
        <li>
          Advising Red Hat clients on automation, DevOps, and infrastructure challenges
        </li>
        <li>
          Skilled with Red Hat Ansible Automation Platform, Red Hat Enterprise Linux, and OpenShift
        </li>
      </section>
      <section className={utilStyles.headingMd}>
        <h2>
          Software Engineer Intern -{" "}
          <Link href="https://www.anedot.com/careers">
            Anedot
          </Link>
        </h2>
        <p>
          <b>
            <i>Summer 2022</i>
          </b>
        </p>
        <li>
          Backend engineer working on payments and infrastructure
        </li>
      </section>
      <section className={utilStyles.headingMd}>
        <h2>
          Software Development Engineer Intern -{" "}
          <Link href="https://www.mastercardservices.com/en">
            Mastercard
          </Link>
        </h2>
        <p>
          <b>
            <i>Summer 2021</i>
          </b>
        </p>
        <li>
          Contributed to a Kubernetes operator designed for compliance with Mastercard-specific deployment patterns
        </li>
        <li>
          Modernized the reboot application used at global Mastercard data centers and Azure cloud instances
        </li>
      </section>
      <section className={utilStyles.headingMd}>
        <h2>
          Software Engineer Intern -{" "}
          <Link href="https://www.leidos.com/markets/aviation">
            Leidos
          </Link>
        </h2>
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
        <h2>
          Systems Engineer Intern -{" "}
          <Link href="https://www.leidos.com/markets/aviation">
            Leidos
          </Link>
        </h2>
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
        <h2>
          Partner and Full-Stack Developer -{" "}
          <Link href="/services">
            Old Line Digital, LLC
          </Link>
        </h2>
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
      <section>
        <br></br>
        <p>
          <Link href="/resume">
            Click here to download a copy of my resume (PDF)
          </Link>
        </p>
      </section>
    </Layout>
  );
}

import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

const pageTitle = "Services";

export default function Services() {
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
        <p>
          Through my business Old Line Digital, LLC, I am available to help you
          or your organization manage a digital presence.{" "}
          <Link href="/contact">
            <a>Contact me to get started.</a>
          </Link>
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <h2>Website Development</h2>
        <p>
          Whether you're running a business, club, nonprofit, or campaign, Old
          Line Digital has you covered. I specialize in providing quality
          website solutions that connect you to your customers or stakeholders
          online, seamlessly. Or, if you've already got a website, I can also
          provide management and update services for whichever platform your
          site may use.
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <h2>Social Media</h2>
        <p>
          In this day and age, many people and organizations have dedicated
          teams run their social media. Just because you don't have the
          resources or know-how to run your digital media operation in house,
          doesn't mean that you can't have a large following and effective
          content. With my specialized tools and experience, I can make sure
          that your posts reach the right audience on all platforms.
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <h2>Online Fundraising</h2>
        <p>
          As a nonprofit or campaign, engaging with small-dollar donors online
          is paramount to your success as an organization. I have extensive
          experience leading online fundraising campaigns that grow your donor
          list while being profitable for your organization.
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <p>
          <Link href="/contact">
            <a>Contact me to get started.</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}

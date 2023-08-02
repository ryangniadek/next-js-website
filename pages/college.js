import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { InlineWidget } from "react-calendly";

const pageTitle = "College Essay Review";

export default function College() {
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
          With a changing college admissions landscape, written statements or the "college essay"
          have become an increasingly important part of the application process. The exact format may vary, but regardless
          it is important to put your best foot forward and use the essay to differentiate yourself — why should you be admitted when compared to another applicant?
        </p>
        <p>
          I offer two different levels of service, depending on how involved you would like me to be in the process.
          The full service level includes a 45 minute consultation to help narrow down an essay topic and discuss any other concerns you have with the application process.
          After your essay is written, I include two rounds of revisions into the base cost. Alterntatively, if you would only like essay revisions and do not require a consultation you can opt for that package. I include two rounds of revisions because I believe that one revision is not enough to fully refine the writing of most applicants.
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <h2>Sign up today!</h2>
        <li>Full Service: Consultation + 2 Revisions ($200)</li>
        <li>2 Revisions ($125)</li>
        <div className="App">
          <InlineWidget url="https://calendly.com/d/27f-wgc-jrp" 
          styles={{height: '1000px'}}/>
        </div>
      </section>
    </Layout>
  );
}

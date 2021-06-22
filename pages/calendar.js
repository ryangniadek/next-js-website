import Head from "next/head";
import ReactDOM from "react-dom";
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
          <b>If you'd like to add a meeting to my calendar please use the widget below:</b>
        </p>
        {/* <!-- Calendly inline widget begin --> */}
        ReactDOM.render(
          <div class="calendly-inline-widget" data-url="https://calendly.com/rgniadek" style="min-width:320px;height:630px;"></div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        )
        {/* <!-- Calendly inline widget end --> */}
      </section>
    </Layout>
  );
}

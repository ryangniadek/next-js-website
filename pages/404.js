import Head from "next/head";
import Layout from "../components/layout";
export default function Custom404() {
  return (
    <Layout>
      <h1>404 - Page Not Found</h1>
      <p>I guess you still haven't found what you are looking for...</p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/e3-5YC_oHjE"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Layout>
  );
}

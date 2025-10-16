import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

const pageTitle = "Projects";

export default function Projects() {
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
        <h2>CS 2104 Assignment: Getting Started with Containers</h2>
        <p>
          In conjunction with <Link href="https://people.cs.vt.edu/maellis1/">
          Professor Margaret Ellis</Link>, I developed an assignment for CS
          2104 (Problem Solving in CS) at Virginia Tech. The assignment
          is designed to introduce students to containers, the Docker command
          line, and deploying cloud services.
        </p>
        <p>
          The assignment is composed of the following parts:
          <ul>
            <li>Distinguishing between a container and a virtual machine</li>
            <li>Running a container image from a public registry</li>
            <li>Building a container image from a Dockerfile</li>
            <li>Pushing a container image to a GitLab registry</li>
            <li>Deploying a containerized application to the Azure cloud</li>
          </ul>
        </p>
        <p>
          Through this assignment, students gain reinforcement of the practical skills and problem solving heuristics
          they are supposed to learn in CS 2104. I am happy to provide the assignment instructions <Link href="mailto:rgniadek@vt.edu">via email</Link>.
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <h2>Research: CS Genome Project</h2>
        <p>
          I am involved with the{" "}
          <Link href="https://csgenome.org/">
            Computer Systems Genome Project
          </Link>{" "}
          at Virginia Tech. CSG is the first scientific effort to catalog the
          lineage of computer system performance over time. My contributions to
          the team are API Development, DevOps, and Outreach.
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <h2>Hackathon: VibeCheck</h2>
        <p>
          <strong>Winner: Qualcomm Best Networking Hack Award</strong>
        </p>
        <p>
          VibeCheck is a web app that takes a user's query and searches the web
          for relevant content. This content is categorized (into Public, News,
          and Financial) and sentiment analysis is performed on the content to
          provide the user with an analysis of what the internet thinks about
          their query - in each category. This web app was designed to help
          remind users that there are many different perspectives from which we
          can look at the world.
        </p>
        <p>
          VibeCheck is a full stack application written in Python. The back end
          uses Flask and the front end uses Jinja. The app can be deployed in
          any enviroment using Docker.
        </p>
        <p>
          Check out our repository{" "}
          <Link href="https://github.com/matt-davison/vibecheck">
            here. 
          </Link>
          Created at the 2020 SheHacksVT Hackathon with Matt Davison, Ben
          Bernstein, and Nate Usher.
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <h2>Hackathon: SafeRyde</h2>
        <p>
          Safe Ryde is a private ride sharing service to streamline rides from
          friends because everyone wants a safe ride home. Safe Ryde has two
          user modes, Driver and Passenger. Passengers can request a ride and be
          added to the queue. Drivers can pick up the next passenger in line and
          receive information about the ride. They even have buttons to place a
          call to the passenger and let them know they've arrived and buttons to
          open the locations (pickup and drop-off) in Google Maps.
        </p>
        <p>
          Front End: HTML, CSS (W3.CSS framework), JavaScript. Back End:
          Firebase Live Database, Google Cloud Platform. If we can add
          authentication, user groups, and make our database ACID compliant, the
          app would be deployable to a large audience.
        </p>
        <p>
          Check out our repository{" "}
          <Link href="https://github.com/ryangniadek/safe-ryde-js">
            here. 
          </Link>
          You can access the live web app{" "}
          <Link href="https://saferyde.tech">
            here. 
          </Link>
          Created at the VTHacks 7 Hackathon with Ben Bernstein.
        </p>
      </section>
    </Layout>
  );
}

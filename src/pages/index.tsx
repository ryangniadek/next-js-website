import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/experience">
            View My Experience
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            Read My Blog
          </Link>
        </div>
      </div>
    </header>
  );
}

function AboutSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2">About Me</Heading>
        <div className={styles.content}>
          <p>
            My name is Ryan Gniadek. I like computer systems, infrastructure, DevOps, and software engineering.
          </p>
          <p>
            I work as a Solutions Architect at <Link href="https://www.celonis.com">Celonis</Link>, responsible for the technical onboarding experience of our customers. Previously, I was a Software Consultant at <Link href="https://www.redhat.com">Red Hat</Link> leading customer projects to transform their IT automation practices.
          </p>
          <p>
            My undergraduate degree is in <Link href="https://cs.vt.edu">Computer Science</Link> from <Link href="https://eng.vt.edu">Virginia Tech</Link>. I am still involved with the college as a board member on the Young Alumni Council for the College of Engineering. I was appointed to a four-year term in 2024.
          </p>
        </div>
      </div>
    </section>
  );
}

function PublicationsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2">Publications</Heading>
        <ul>
          <li>
            <Link href="https://peer.asee.org/40747">
              Integrating DevOps to Enhance Student Experience in an Undergraduate Research Project
            </Link>
            <br />
            <small>
              Ryan Gniadek, Godmar Back, Kirk Cameron, Margaret Ellis
              <br />
              ASEE 2022 Annual Conference{' '}
              <Link href="https://gniadek.net/files/rgniadek_ASEE_presentation_2022.pdf">
                (Presentation)
              </Link>
            </small>
          </li>
        </ul>
      </div>
    </section>
  );
}

function BlogPreviewSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2">Latest Blog Posts</Heading>
        <p>
          Check out my <Link to="/blog">blog</Link> for more articles on software engineering, DevOps, and infrastructure.
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="Ryan Gniadek - Software Engineer | Infrastructure | DevOps">
      <HomepageHeader />
      <main>
        <AboutSection />
        <PublicationsSection />
        <BlogPreviewSection />
      </main>
    </Layout>
  );
}

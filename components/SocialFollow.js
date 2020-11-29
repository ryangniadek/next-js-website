import React from "react";
import Link from "next/link";
import styles from "./layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className={styles.social_container}>
      <h3>Follow me</h3>
      <Link href="https://linkedin.com/in/ryangniadek">
        <a className={styles.social}>
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </Link>
      <Link href="https://twitter.com/ryangniadek">
        <a className={styles.social}>
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </Link>
      <Link href="https://github.com/ryangniadek">
        <a className={styles.social}>
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </Link>
      <Link href="https://facebook.com/gniadekryan">
        <a className={styles.social}>
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
      </Link>
      <Link href="https://instagram.com/ryangniadek">
        <a className={styles.social}>
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </Link>
      <Link href="https://snapchat.com/add/ryangniadek">
        <a className={styles.social}>
          <FontAwesomeIcon icon={faSnapchat} size="2x" />
        </a>
      </Link>
    </div>
  );
}

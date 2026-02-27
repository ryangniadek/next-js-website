import Link from "next/link";
import { useState } from "react";
import styles from "./menu.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact Me" },
  { href: "/wedding", label: "Wedding" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <button
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? "Close" : "Menu"}
      </button>
      <ul className={`${styles.links} ${open ? styles.open : ""}`}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export default function Menu() {
  return (
          <p><Link href="/"><a>Home</a></Link> <Link href="/projects"><a>Projects</a></Link> <Link href="/resume"><a>Experience</a></Link></p>
  );
}

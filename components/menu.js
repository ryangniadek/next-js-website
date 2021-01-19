import Link from "next/link";

export default function Menu() {
  return (
          <p><Link href="/"><a>Home</a></Link> <Link href="/projects"><a>Projects</a></Link> <Link href="/experience"><a>Experience</a></Link> <Link href="/contact"><a>Contact Me</a></Link></p>
  );
}

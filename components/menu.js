import Link from "next/link";

export default function Menu() {
  return (<p><Link href="/">Home</Link> <Link href="/projects">Projects</Link> <Link href="/experience">Experience</Link> <Link href="/contact">Contact Me</Link> <Link href="/wedding">Wedding</Link></p>);
}

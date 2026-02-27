import Link from 'next/link'
import Date from './date'

export default function BlogList({ posts }) {
  return (
    <section>
      <h2>Blog</h2>
      {posts.map(({ id, date, title }) => (
        <div key={id}>
          <Link href={`/posts/${id}`}>{title}</Link>
          <br />
          <small>
            <Date dateString={date} />
          </small>
        </div>
      ))}
    </section>
  )
}

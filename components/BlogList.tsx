import Link from 'next/link';
import Date from './date';
import { PostData } from '../lib/posts';

export default function BlogList({ posts }: { posts: PostData[] }) {
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
  );
}

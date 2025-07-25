import Link from 'next/link';
import Image from 'next/image';

const BLOG_URL = 'https://raw.githubusercontent.com/ganga-300/Data/main/coffee.json';

export async function generateStaticParams() {
  const res = await fetch(BLOG_URL);
  const data = await res.json();
  return data.map(post => ({ id: post.id }));
}

export default async function BlogDetail({ params }) {
  const res = await fetch(BLOG_URL);
  const data = await res.json();
  const post = data.find((b) => b.id === params.id);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
        <Link href="/blogs" className="text-yellow-600 hover:underline">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-yellow-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-4">
        <Link href="/blogs" className="text-yellow-600 hover:underline mb-6 inline-block">&larr; Back to Blogs</Link>
        <div className="w-full h-auto mb-8 relative aspect-[2/1]">
          <Image
            src={post.image || '/best-coffee.jpg'}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-lg shadow object-cover w-full h-auto"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>
        <h1 className="text-4xl font-extrabold mb-6 text-yellow-700 drop-shadow">{post.title}</h1>
        <article className="text-lg text-gray-800 leading-relaxed whitespace-pre-line">{post.content}</article>
      </div>
    </section>
  );
} 
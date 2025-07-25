'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BLOG_URL = 'https://raw.githubusercontent.com/ganga-300/Data/main/coffee.json';

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(BLOG_URL)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        setBlogPosts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-16">Loading blog posts...</div>;
  if (error) return <div className="text-center py-16 text-red-600">Error: {error}</div>;

  return (
    <section className="py-16 bg-gradient-to-b from-white to-yellow-50 text-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-yellow-700 drop-shadow">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blogs/${post.id}`} className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow border border-yellow-100 group cursor-pointer flex flex-col h-full">
                <div className="w-full h-48 relative">
                  <Image
                    src={post.image || '/best-coffee.jpg'}
                    alt={post.title}
                    width={600}
                    height={300}
                    className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300 w-full h-48"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-yellow-700">{post.title}</h3>
                    <p className="text-gray-600">{post.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs; 
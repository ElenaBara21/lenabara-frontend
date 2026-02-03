import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'Blog | Lena Bara',
  description: 'Insights on business growth, marketing strategies, and entrepreneurship',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-white mb-4">Blog</h1>
        <p className="text-xl text-neutral-400 mb-12">
          Insights on business growth, marketing strategies, and entrepreneurship
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group bg-neutral-900 rounded-lg overflow-hidden hover:bg-neutral-800 transition"
            >
              {post.image && (
                <div className="aspect-video bg-neutral-800 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <time className="text-sm text-neutral-500">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <h2 className="text-xl font-semibold text-white mt-2 mb-3 group-hover:text-blue-400 transition">
                  {post.title}
                </h2>
                <p className="text-neutral-400 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-neutral-500 text-lg">No posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}

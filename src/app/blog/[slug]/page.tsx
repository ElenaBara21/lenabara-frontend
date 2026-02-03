import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Lena Bara Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-neutral-950">
      <article className="max-w-4xl mx-auto px-4 py-20">
        <header className="mb-8">
          <time className="text-sm text-neutral-500">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <h1 className="text-5xl font-bold text-white mt-4 mb-6">
            {post.title}
          </h1>
          {post.image && (
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full aspect-video object-cover rounded-lg"
            />
          )}
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: ({node, ...props}) => <h1 className="text-4xl font-bold text-white mt-8 mb-4" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-3xl font-bold text-white mt-8 mb-4" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-2xl font-bold text-white mt-6 mb-3" {...props} />,
              p: ({node, ...props}) => <p className="text-neutral-300 mb-4 leading-relaxed" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-2" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal list-inside text-neutral-300 mb-4 space-y-2" {...props} />,
              a: ({node, ...props}) => <a className="text-blue-400 hover:text-blue-300 underline" {...props} />,
              blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-blue-500 pl-4 italic text-neutral-400 my-4" {...props} />,
              code: ({node, ...props}) => <code className="bg-neutral-800 px-2 py-1 rounded text-sm text-blue-300" {...props} />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}

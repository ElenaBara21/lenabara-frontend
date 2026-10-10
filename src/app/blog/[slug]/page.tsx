import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import ReactMarkdown from 'react-markdown';
import type { Metadata } from 'next';

const SITE_URL = 'https://lenabara.com';
const ARTICLE_SLUG = 'meta-ads-cost-uae';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const title = post.seoTitle || `${post.title} | LenaBara Blog`;
  const description = post.excerpt;
  const canonicalUrl = post.canonicalUrl || `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.image ? `${SITE_URL}${post.image}` : undefined;

  return {
    title,
    description: post.excerpt,
    robots: { index: true, follow: true },
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'article',
      siteName: 'LenaBara',
      publishedTime: post.date,
      modifiedTime: post.modifiedDate || post.date,
      authors: [`${SITE_URL}/about`],
      ...(imageUrl ? { images: [{ url: imageUrl, alt: post.imageAlt || post.title }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleImage = post.image ? `${SITE_URL}${post.image}` : undefined;
  const articleSchema = slug === ARTICLE_SLUG
    ? {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BlogPosting',
            '@id': `${SITE_URL}/blog/${slug}#article`,
            headline: post.title,
            description: post.schemaDescription || post.excerpt,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': post.canonicalUrl || `${SITE_URL}/blog/${slug}`,
            },
            url: post.canonicalUrl || `${SITE_URL}/blog/${slug}`,
            author: {
              '@type': 'Person',
              name: 'Elena Shelepova',
              url: `${SITE_URL}/about`,
            },
            publisher: {
              '@type': 'Organization',
              name: 'LenaBara',
              url: SITE_URL,
              logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/hero/lb-editorial-logo.svg`,
              },
            },
            datePublished: post.date,
            dateModified: post.modifiedDate || post.date,
            ...(articleImage ? { image: [articleImage] } : {}),
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/growth` },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
              { '@type': 'ListItem', position: 3, name: post.title, item: post.canonicalUrl || `${SITE_URL}/blog/${slug}` },
            ],
          },
        ],
      }
    : null;

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
              alt={post.imageAlt || post.title}
              fetchPriority="high"
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
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c'),
          }}
        />
      )}
    </div>
  );
}

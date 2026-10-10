import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  modifiedDate?: string;
  excerpt: string;
  content: string;
  image?: string;
  imageAlt?: string;
  author?: string;
  seoTitle?: string;
  canonicalUrl?: string;
  schemaDescription?: string;
}

export function getAllPosts(): BlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        modifiedDate: data.modifiedDate,
        excerpt: data.excerpt || '',
        content,
        image: data.image,
        imageAlt: data.imageAlt,
        author: data.author,
        seoTitle: data.seoTitle,
        canonicalUrl: data.canonicalUrl,
        schemaDescription: data.schemaDescription,
      } as BlogPost;
    });

  // Sort posts by date (newest first)
  return allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    // Try .md first, then .mdx
    let fileContents;
    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, 'utf8');
    } else {
      const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
      if (fs.existsSync(mdxPath)) {
        fileContents = fs.readFileSync(mdxPath, 'utf8');
      } else {
        return null;
      }
    }

    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      modifiedDate: data.modifiedDate,
      excerpt: data.excerpt || '',
      content,
      image: data.image,
      imageAlt: data.imageAlt,
      author: data.author,
      seoTitle: data.seoTitle,
      canonicalUrl: data.canonicalUrl,
      schemaDescription: data.schemaDescription,
    };
  } catch (error) {
    return null;
  }
}

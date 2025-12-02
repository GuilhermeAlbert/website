import { getPostData, getAllPostIds } from '@/lib/posts';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const postData = await getPostData(slug);
  
  if (!postData) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${postData.title} | Guilherme Albert`,
    description: postData.description,
    openGraph: {
      title: postData.title,
      type: 'article',
      images: ['https://github.com/GuilhermeAlbert.png?size=400'],
    },
  };
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  if (!postData) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6">
      <header className="mb-12 reveal delay-100 active">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 border border-zinc-200 dark:border-white/10 px-2 py-1 rounded-full">
            {postData.category || 'Tech'}
          </span>
          <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
            {new Date(postData.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
          {postData.title}
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
          {postData.description}
        </p>
      </header>

      <div
        className="prose prose-zinc dark:prose-invert max-w-none reveal delay-200 active"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
      />

      <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-white/10 reveal delay-300 active">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19 12H5m7 7l-7-7 7-7"
            ></path>
          </svg>
          Back to Home
        </Link>
      </div>
    </article>
  );
}

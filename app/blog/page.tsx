import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Guilherme Albert',
  description: 'Insights on software engineering, leadership, and technology.',
};

const POSTS_PER_PAGE = 6;

type Props = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function BlogIndex({ searchParams }: Props) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const allPosts = getSortedPostsData();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const offset = (currentPage - 1) * POSTS_PER_PAGE;
  const posts = allPosts.slice(offset, offset + POSTS_PER_PAGE);

  return (
    <div className="mx-auto max-w-7xl px-6 mb-20 pt-20">
      <header className="mb-16 reveal active">
        <div className="flex items-end justify-between border-b border-zinc-200 dark:border-white/10 pb-8">
          <div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              Insights
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 font-light max-w-xl">
              Thoughts on software architecture, engineering leadership, and the future of tech.
            </p>
          </div>
          <div className="hidden sm:block text-xs font-mono text-zinc-400 dark:text-zinc-500">
            /// INDEX_BLOG
          </div>
        </div>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {posts.map((post, index) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="spotlight-card p-8 group rounded-sm block bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/20 transition-colors reveal active"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 border border-zinc-200 dark:border-white/10 px-2 py-1 rounded-full">
                {post.category || 'Tech'}
              </span>
              <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            </div>
            <h2 className="font-display text-xl text-zinc-900 dark:text-white mb-3 group-hover:underline decoration-zinc-400 underline-offset-4">
              {post.title}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
              {post.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 reveal active delay-500">
          {currentPage > 1 && (
            <Link
              href={`/blog?page=${currentPage - 1}`}
              className="px-4 py-2 text-sm font-mono border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors rounded-sm text-zinc-600 dark:text-zinc-400"
            >
              &lt; Prev
            </Link>
          )}
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Link
              key={page}
              href={`/blog?page=${page}`}
              className={`px-4 py-2 text-sm font-mono border transition-colors rounded-sm ${
                currentPage === page
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-black border-zinc-900 dark:border-white'
                  : 'border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/5 text-zinc-600 dark:text-zinc-400'
              }`}
            >
              {page}
            </Link>
          ))}

          {currentPage < totalPages && (
            <Link
              href={`/blog?page=${currentPage + 1}`}
              className="px-4 py-2 text-sm font-mono border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors rounded-sm text-zinc-600 dark:text-zinc-400"
            >
              Next &gt;
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

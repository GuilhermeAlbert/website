import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-zinc-900 dark:text-white px-6 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[size:40px_40px] bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      <div className="text-center space-y-8 relative z-10">
        <div className="relative inline-block">
          <h1 className="font-display text-[12rem] leading-none font-bold text-zinc-100 dark:text-zinc-900 select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-zinc-900 dark:bg-white text-white dark:text-black px-4 py-1 font-mono text-sm rounded-sm">
              /// ERROR_404
            </div>
          </div>
        </div>
        
        <div className="space-y-4 max-w-md mx-auto">
          <h2 className="text-2xl font-display">Signal Lost</h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
            The requested frequency could not be tuned. The content you are looking for might have been moved, deleted, or never existed in this timeline.
          </p>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black font-medium text-sm hover:bg-zinc-700 dark:hover:bg-zinc-200 transition rounded-sm group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 12H5m7 7-7-7 7-7" />
            </svg>
            Return to Base
          </Link>
          
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 font-medium text-sm hover:bg-zinc-200 dark:hover:bg-zinc-800 transition rounded-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V7m2 13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8Z" />
            </svg>
            Read Latest Insights
          </Link>
        </div>
      </div>
    </div>
  )
}

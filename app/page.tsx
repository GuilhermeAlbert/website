import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const allPostsData = getSortedPostsData();
  // Take only the first 4 posts for the homepage
  const recentPosts = allPostsData.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 mb-40 relative">
        <div className="absolute inset-0 z-[-1] bg-[size:40px_40px] bg-grid-pattern opacity-100 pointer-events-none"></div>
        <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-white/0 via-white/0 to-white/80 dark:from-black/0 dark:via-black/0 dark:to-black/80 pointer-events-none"></div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl sm:text-7xl font-medium text-zinc-900 dark:text-white mb-8 leading-[0.9] tracking-tight reveal delay-100">
              Tech Lead & <br />
              <span
                className="text-zinc-400 dark:text-zinc-500 glitch-hover cursor-default inline-block"
                data-value="FULL_STACK"
              >
                Full Stack
              </span>
              Engineer.
            </h1>

            <div className="max-w-xl reveal delay-200 border-l border-zinc-300 dark:border-white/20 pl-8 ml-2">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                I combine{" "}
                <span className="text-zinc-900 dark:text-white font-medium">
                  technical expertise
                </span>
                ,{" "}
                <span className="text-zinc-900 dark:text-white font-medium">
                  product vision
                </span>
                , and{" "}
                <span className="text-zinc-900 dark:text-white font-medium">
                  leadership
                </span>{" "}
                to build impactful solutions. Entrepreneur in digital marketing,
                software, and investments.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-xs font-mono text-zinc-500 reveal delay-300">
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-zinc-900 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
                  ></path>
                  <circle cx="12" cy="10" r="3" strokeWidth="1.5"></circle>
                </svg>
                Brazil
              </span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-zinc-900 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="1.5"></circle>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M2 12h20"
                  ></path>
                </svg>
                PT / EN
              </span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-zinc-900 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    width="20"
                    height="14"
                    x="2"
                    y="7"
                    rx="2"
                    ry="2"
                    strokeWidth="1.5"
                  ></rect>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                  ></path>
                </svg>
                Tech Lead
              </span>
            </div>
          </div>

          <div className="relative reveal delay-200 hidden lg:block">
            <div className="relative w-64 h-64 mx-auto transition duration-700">
              <div className="absolute inset-0 border border-zinc-300 dark:border-white/20 rotate-45"></div>
              <div className="absolute inset-0 border border-zinc-300 dark:border-white/20 -rotate-12"></div>
              <img
                src="https://github.com/GuilhermeAlbert.png?size=400"
                alt="Guilherme Albert"
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover opacity-90"
              />
              {/* HUD Elements */}
              <div className="absolute -top-8 -right-8 text-[10px] font-mono text-zinc-400 dark:text-zinc-600">
                /// ID: GA-01
              </div>
              <div className="absolute -bottom-8 -left-8 text-[10px] font-mono text-zinc-400 dark:text-zinc-600">
                /// STATUS: ONLINE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="mx-auto max-w-7xl px-6 mb-32">
        <div className="flex items-end justify-between mb-16 reveal border-b border-zinc-200 dark:border-white/10 pb-8">
          <h2 className="font-display text-3xl text-zinc-900 dark:text-white">
            Core Competencies
          </h2>
          <div className="hidden sm:block text-xs font-mono text-zinc-400 dark:text-zinc-500">
            /// INDEX_01
          </div>
        </div>

        <div
          className="grid gap-6 sm:grid-cols-3"
          id="cards-container"
          data-spotlight-container
        >
          {/* Card 1 */}
          <article className="spotlight-card p-8 group rounded-sm">
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-6 block">
              01
            </span>
            <h3 className="font-display text-xl text-zinc-900 dark:text-white mb-4">
              Product Engineering
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              End-to-end delivery with a focus on performance, security, and
              observability. Building systems that scale.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[10px] font-mono text-zinc-600 dark:text-zinc-300">
                React
              </span>
              <span className="px-2 py-1 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[10px] font-mono text-zinc-600 dark:text-zinc-300">
                Node.js
              </span>
              <span className="px-2 py-1 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[10px] font-mono text-zinc-600 dark:text-zinc-300">
                AWS
              </span>
            </div>
          </article>

          {/* Card 2 */}
          <article className="spotlight-card p-8 group rounded-sm">
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-6 block">
              02
            </span>
            <h3 className="font-display text-xl text-zinc-900 dark:text-white mb-4">
              Technical Leadership
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              Guiding teams through complex technical challenges. Focusing on
              code quality, architecture, and measurable outcomes.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[10px] font-mono text-zinc-600 dark:text-zinc-300">
                Architecture
              </span>
              <span className="px-2 py-1 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[10px] font-mono text-zinc-600 dark:text-zinc-300">
                Mentoring
              </span>
              <span className="px-2 py-1 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[10px] font-mono text-zinc-600 dark:text-zinc-300">
                Strategy
              </span>
            </div>
          </article>

          {/* Card 3 */}
          <article className="spotlight-card p-8 group rounded-sm">
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-6 block">
              03
            </span>
            <h3 className="font-display text-xl text-zinc-900 dark:text-white mb-4">
              R&D
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              Exploring the frontier of technology. Blockchain protocols, LLM
              integration, and AI-driven experiences.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[10px] font-mono text-zinc-600 dark:text-zinc-300">
                AI/LLM
              </span>
              <span className="px-2 py-1 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[10px] font-mono text-zinc-600 dark:text-zinc-300">
                Blockchain
              </span>
              <span className="px-2 py-1 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[10px] font-mono text-zinc-600 dark:text-zinc-300">
                Web3
              </span>
            </div>
          </article>
        </div>
      </section>

      {/* Tech Stack (Redesigned) */}
      <section className="mx-auto max-w-7xl px-6 mb-32 reveal">
        <div className="border border-zinc-200 dark:border-white/10 bg-zinc-50/50 dark:bg-white/5 backdrop-blur-sm p-8 sm:p-12 relative overflow-hidden rounded-sm">
          <div className="absolute top-0 right-0 p-4 animate-pulse">
            <svg
              className="w-6 h-6 text-zinc-400 dark:text-zinc-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect
                width="16"
                height="16"
                x="4"
                y="4"
                rx="2"
                strokeWidth="1.5"
              ></rect>
              <rect
                width="6"
                height="6"
                x="9"
                y="9"
                rx="1"
                strokeWidth="1.5"
              ></rect>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15 2v2m0 16v2M2 15h2m-2-6h2m16 6h2m-2-6h2M9 2v2m0 16v2"
              ></path>
            </svg>
          </div>

          <h2 className="font-display text-2xl text-zinc-900 dark:text-white mb-8 reveal delay-100">
            Technical Arsenal
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="reveal delay-200">
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
                Frontend
              </h4>
              <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300 font-light">
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                  React / Next.js
                </li>
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                  React Native
                </li>
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                  TypeScript
                </li>
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                  Tailwind CSS
                </li>
              </ul>
            </div>
            <div className="reveal delay-300">
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
                Backend
              </h4>
              <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300 font-light">
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                  Node.js
                </li>
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                  PHP / Laravel
                </li>
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                  API Architecture
                </li>
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                  Serverless
                </li>
              </ul>
            </div>
            <div className="reveal delay-400">
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
                Infrastructure
              </h4>
              <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300 font-light">
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                  AWS
                </li>
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                  Vercel
                </li>
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                  Docker
                </li>
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                  CI/CD
                </li>
              </ul>
            </div>
            <div className="reveal delay-500">
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
                Data & Tools
              </h4>
              <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300 font-light">
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                  PostgreSQL
                </li>
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                  MySQL
                </li>
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                  Redis
                </li>
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                  MongoDB
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights (Blog) */}
      <section className="mx-auto max-w-7xl px-6 mb-32">
        <div className="flex items-end justify-between mb-12 reveal border-b border-zinc-200 dark:border-white/10 pb-8">
          <h2 className="font-display text-3xl text-zinc-900 dark:text-white">
            Latest Insights
          </h2>
          <div className="hidden sm:block text-xs font-mono text-zinc-400 dark:text-zinc-500">
            /// INDEX_02
          </div>
        </div>

        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          data-spotlight-container
        >
          {recentPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className={`spotlight-card p-6 group rounded-sm block reveal delay-${
                (index + 1) * 100
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 border border-zinc-200 dark:border-white/10 px-2 py-1 rounded-full">
                  {post.category || "Tech"}
                </span>
                <svg
                  className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M7 17L17 7M17 7H7M17 7V17"
                  ></path>
                </svg>
              </div>
              <h3 className="font-display text-lg text-zinc-900 dark:text-white mb-2 group-hover:underline decoration-zinc-400 underline-offset-4">
                {post.title}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-3">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Personal / Interests */}
      <section className="mx-auto max-w-7xl px-6 mb-20 reveal">
        <div className="grid md:grid-cols-2 gap-12 border-t border-zinc-200 dark:border-white/10 pt-12">
          <div className="reveal delay-100">
            <h2 className="font-display text-2xl text-zinc-900 dark:text-white mb-6">
              Beyond Code
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-6">
              I believe that diverse interests fuel creativity. When I'm not
              architecting systems, I'm exploring music, sports, and the
              culinary arts.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/guilhermealbert"
                target="_blank"
                className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black font-medium text-sm hover:bg-zinc-700 dark:hover:bg-zinc-200 transition rounded-sm"
              >
                Connect
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-50 dark:bg-white/5 p-6 border border-zinc-200 dark:border-white/10 rounded-sm group hover:border-zinc-300 dark:hover:border-white/20 transition reveal delay-200">
              <div className="text-emerald-500 dark:text-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 18V5l12-2v13"
                  ></path>
                  <circle cx="6" cy="18" r="3" strokeWidth="1.5"></circle>
                  <circle cx="18" cy="16" r="3" strokeWidth="1.5"></circle>
                </svg>
              </div>
              <h4 className="text-zinc-900 dark:text-white font-display mb-1">
                Music
              </h4>
              <p className="text-xs text-zinc-500">Multi-instrumentalist</p>
            </div>
            <div className="bg-zinc-50 dark:bg-white/5 p-6 border border-zinc-200 dark:border-white/10 rounded-sm group hover:border-zinc-300 dark:hover:border-white/20 transition reveal delay-300">
              <div className="text-cyan-500 dark:text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <line x1="6" x2="10" y1="12" y2="12" strokeWidth="1.5"></line>
                  <line x1="8" x2="8" y1="10" y2="14" strokeWidth="1.5"></line>
                  <line
                    x1="15"
                    x2="15.01"
                    y1="13"
                    y2="13"
                    strokeWidth="1.5"
                  ></line>
                  <line
                    x1="18"
                    x2="18.01"
                    y1="11"
                    y2="11"
                    strokeWidth="1.5"
                  ></line>
                  <rect
                    width="20"
                    height="12"
                    x="2"
                    y="6"
                    rx="2"
                    strokeWidth="1.5"
                  ></rect>
                </svg>
              </div>
              <h4 className="text-zinc-900 dark:text-white font-display mb-1">
                Gaming
              </h4>
              <p className="text-xs text-zinc-500">Retro enthusiast</p>
            </div>
            <div className="bg-zinc-50 dark:bg-white/5 p-6 border border-zinc-200 dark:border-white/10 rounded-sm group hover:border-zinc-300 dark:hover:border-white/20 transition reveal delay-400">
              <div className="text-purple-500 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
                  ></path>
                </svg>
              </div>
              <h4 className="text-zinc-900 dark:text-white font-display mb-1">
                Reading
              </h4>
              <p className="text-xs text-zinc-500">Continuous learning</p>
            </div>
            <div className="bg-zinc-50 dark:bg-white/5 p-6 border border-zinc-200 dark:border-white/10 rounded-sm group hover:border-zinc-300 dark:hover:border-white/20 transition reveal delay-500">
              <div className="text-orange-500 dark:text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 22h16"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M18 2H6v7a6 6 0 0 0 12 0V2Z"
                  ></path>
                </svg>
              </div>
              <h4 className="text-zinc-900 dark:text-white font-display mb-1">
                Sports
              </h4>
              <p className="text-xs text-zinc-500">Volleyball & more</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

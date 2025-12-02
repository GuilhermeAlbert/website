import type { Metadata } from "next";
import "./globals.css";
import "highlight.js/styles/base16/dracula.css";
import SiteEffects from "@/components/SiteEffects";

export const metadata: Metadata = {
  title: "Guilherme Albert | Tech Lead & Engineer",
  description: "Tech Leader & Full Stack Engineer. Product-minded, hands-on, and entrepreneur.",
  openGraph: {
    title: "Guilherme Albert",
    type: "website",
    images: ["https://github.com/GuilhermeAlbert.png?size=400"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='0' fill='black'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-weight='bold' font-size='32' fill='white'>GA</text></svg>"
        />
      </head>
      <body
        className="antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black bg-white dark:bg-black text-zinc-600 dark:text-zinc-300 transition-colors duration-300"
      >
        <header
          className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-zinc-200 dark:border-white/10 transition-colors duration-300"
          id="navbar"
        >
          <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
            <a href="/" className="flex items-center gap-4 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-black dark:bg-white blur-lg opacity-0 group-hover:opacity-10 transition duration-500"></div>
                <div className="size-8 bg-zinc-100 dark:bg-white/10 border border-zinc-200 dark:border-white/20 flex items-center justify-center text-xs font-mono text-zinc-900 dark:text-white font-bold">
                  GA
                </div>
              </div>
              <span className="font-display font-bold tracking-widest text-zinc-900 dark:text-white uppercase text-sm hidden sm:block">
                Guilherme Albert
              </span>
            </a>

            <nav className="flex items-center gap-6 sm:gap-8">
              <button
                id="theme-toggle"
                className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                {/* Sun Icon */}
                <svg
                  className="w-5 h-5 hidden dark:block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 2v2m0 16v2m-7.07-7.07l-1.41 1.41m17.66-17.66l-1.41 1.41M2 12h2m16 0h2m-7.07 17.66l-1.41-1.41m19.07-19.07l-1.41 1.41"
                  ></path>
                </svg>
                {/* Moon Icon */}
                <svg
                  className="w-5 h-5 block dark:hidden"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
                  ></path>
                </svg>
              </button>
              <a
                href="/blog"
                className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors uppercase tracking-widest"
              >
                [Blog]
              </a>
              <a
                href="https://www.linkedin.com/in/guilhermealbert"
                target="_blank"
                rel="noopener"
                className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors uppercase tracking-widest"
              >
                [LinkedIn]
              </a>
              <a
                href="https://github.com/GuilhermeAlbert"
                target="_blank"
                rel="noopener"
                className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors uppercase tracking-widest"
              >
                [GitHub]
              </a>
            </nav>
          </div>
        </header>

        <main className="relative pt-40 pb-20">
          {children}
        </main>

        <footer className="border-t border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-black transition-colors duration-300">
          <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-2 bg-zinc-900 dark:bg-white rounded-full"></div>
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                Guilherme Albert © <span id="y">2025</span>
              </p>
            </div>

            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/guilhermealbert"
                target="_blank"
                className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition uppercase tracking-widest"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/GuilhermeAlbert"
                target="_blank"
                className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition uppercase tracking-widest"
              >
                GitHub
              </a>
              <a
                href="https://dev.to/guilhermealbert"
                target="_blank"
                className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition uppercase tracking-widest"
              >
                Dev.to
              </a>
            </div>
          </div>
        </footer>
        <SiteEffects />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Theme Toggle Logic
              const themeToggleBtn = document.getElementById("theme-toggle");
              const htmlElement = document.documentElement;

              // Check for saved user preference, if any, on load of the website
              if (
                localStorage.theme === "dark" ||
                (!("theme" in localStorage) &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches)
              ) {
                htmlElement.classList.add("dark");
              } else {
                htmlElement.classList.remove("dark");
              }

              if (themeToggleBtn) {
                themeToggleBtn.addEventListener("click", () => {
                  htmlElement.classList.toggle("dark");

                  if (htmlElement.classList.contains("dark")) {
                    localStorage.theme = "dark";
                  } else {
                    localStorage.theme = "light";
                  }
                });
              }
              
              document.getElementById("y").textContent = new Date().getFullYear();
            `,
          }}
        />
      </body>
    </html>
  );
}

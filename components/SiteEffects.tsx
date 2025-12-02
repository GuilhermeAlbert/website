'use client';

import { useEffect } from 'react';

export default function SiteEffects() {
  useEffect(() => {
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    // Spotlight Effect
    const spotlightContainers = document.querySelectorAll('[data-spotlight-container]');

    const handleMouseMove = (e: MouseEvent) => {
      spotlightContainers.forEach((container) => {
        const cards = (container as HTMLElement).querySelectorAll('.spotlight-card');
        for (const card of cards) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
          (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
        }
      });
    };

    // Hacker Text Effect
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const hackerTexts = document.querySelectorAll('[data-value]');

    hackerTexts.forEach((element) => {
      const originalText = (element as HTMLElement).dataset.value || element.textContent || "";
      
      element.addEventListener('mouseover', () => {
        let iteration = 0;
        let interval: NodeJS.Timeout | null = null;
        
        clearInterval(interval!);
        
        interval = setInterval(() => {
          element.textContent = originalText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return originalText[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
          
          if (iteration >= originalText.length) {
            clearInterval(interval!);
          }
          
          iteration += 1 / 3;
        }, 30);
        
        // Store interval on element to clear it later if needed, 
        // though local variable is fine for simple hover
        (element as any)._hackerInterval = interval;
      });
    });

    // Parallax Effect
    const handleParallax = (e: MouseEvent) => {
      const x = (window.innerWidth - e.pageX * 2) / 100;
      const y = (window.innerHeight - e.pageY * 2) / 100;

      const grid = document.querySelector('.bg-grid-pattern') as HTMLElement;
      if (grid) {
        grid.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', handleParallax);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleParallax);
    };
  }, []);

  return null;
}

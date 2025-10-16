"use client";

import { useEffect } from "react";

const SELECTOR = "[data-reveal]";

function setupElement(element: HTMLElement) {
  const delay = element.getAttribute("data-reveal-delay");
  if (delay) {
    const delayNumber = Number(delay);
    if (!Number.isNaN(delayNumber)) {
      element.style.setProperty("--reveal-delay", `${delayNumber}ms`);
    }
  }

  if (!element.classList.contains("reveal-ready")) {
    element.classList.add("reveal-ready");
  }
}

export function RevealProvider() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));

    if (elements.length === 0) {
      return;
    }

    elements.forEach((element) => {
      setupElement(element);
      if (prefersReducedMotion) {
        element.classList.add("reveal-visible");
      }
    });

    if (prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add("reveal-visible");
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}

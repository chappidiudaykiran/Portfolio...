import { useEffect, useRef } from "react";

/**
 * Custom hook for scroll-triggered animations using IntersectionObserver.
 * Returns a ref to attach to the container element.
 * All children with `data-animate` attribute will be animated when visible.
 *
 * @param {Object} options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for observer
 * @param {boolean} options.once - If true, animation only fires once
 */
export default function useScrollAnimation({
  threshold = 0.1,
  rootMargin = "0px 0px -60px 0px",
  once = true,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll("[data-animate]");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold, rootMargin }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}

import { useState, useEffect } from "react";

// ─── SHARED HOOK: useScrolled ─────────────────────────────────────────────────
// Returns true when page scrolls past threshold pixels.
// passive: true → browser optimizes scroll (no jank / no blocking)
// Used by Navbar for frosted glass effect on scroll.
// ─────────────────────────────────────────────────────────────────────────────
export function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return scrolled;
}
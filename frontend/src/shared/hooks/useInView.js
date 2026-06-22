import { useRef, useState, useEffect } from "react";

// ─── SHARED HOOK: useInView ───────────────────────────────────────────────────
// Uses IntersectionObserver (NOT scroll events) for performance.
// Fires once when element enters viewport, then disconnects to free memory.
// Used by FadeUp component across all feature slices.
// ─────────────────────────────────────────────────────────────────────────────
export function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, visible];
}
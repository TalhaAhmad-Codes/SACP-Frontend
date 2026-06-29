import { useInView } from "@/shared/hooks/useInView";

// ─── SHARED COMPONENT: FadeUp ─────────────────────────────────────────────────
// Wraps any content with a scroll-triggered fade-up animation.
// Reused across home, about, and contact feature slices.
// delay prop staggers animations in grids/lists.
// ─────────────────────────────────────────────────────────────────────────────
export function FadeUp({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity .65s cubic-bezier(.16,1,.3,1) ${delay}s,
                     transform .65s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
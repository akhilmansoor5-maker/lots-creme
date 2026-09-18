"use client";

import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type SwipeRowProps = {
  children: ReactNode;
  label: string;
  cols?: "2" | "3" | "4" | "masonry";
  size?: "card" | "film" | "panel";
}

export function SwipeRow({
  children,
  label,
  cols = "2",
  size = "card",
}: SwipeRowProps) {
  const items = Children.toArray(children);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const child = el.firstElementChild as HTMLElement | null;
    if (!child) return;
    const gap = 12;
    const i = Math.round(el.scrollLeft / Math.max(child.offsetWidth + gap, 1));
    setActive(Math.min(items.length - 1, Math.max(0, i)));
  }, [items.length]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const goTo = (index: number) => {
    const el = trackRef.current;
    const child = el?.children[index] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  return (
    <div className="swipe-block">
      <p className="swipe-hint" aria-hidden="true">
        Swipe
        <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden>
          <path
            d="M3 8h9M8 4l4 4-4 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </p>
      <div
        ref={trackRef}
        className={`swipe-track cols-${cols}`}
        role="region"
        aria-label={label}
        tabIndex={0}
      >
        {items.map((child, i) => (
          <div
            key={i}
            className={`swipe-item${size === "card" ? "" : ` ${size}`}`}
          >
            {child}
          </div>
        ))}
      </div>
      {items.length > 1 ? (
        <div className="swipe-dots" role="tablist" aria-label={`${label} slides`}>
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Slide ${i + 1} of ${items.length}`}
              className={`swipe-dot${i === active ? " is-active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

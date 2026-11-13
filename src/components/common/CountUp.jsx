import { useEffect, useState } from "react";
import useReveal from "../../hooks/useReveal";

export default function CountUp({ to, duration = 1250 }) {
  const [ref, seen] = useReveal(0.35);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!seen) return undefined;

    const start = performance.now();
    let frame = 0;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round((Number(to) || 0) * eased));

      if (progress < 1) frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [seen, to, duration]);

  return <span ref={ref}>{count}</span>;
}

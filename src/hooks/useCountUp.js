import { useEffect, useState } from "react";

export function useCountUp(target, start, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let i;
    const a = performance.now();
    const s = (u) => {
      const c = Math.min((u - a) / duration, 1);
      const m = 1 - Math.pow(1 - c, 3);
      setCount(Math.floor(m * target));
      c < 1 && (i = requestAnimationFrame(s));
    };
    i = requestAnimationFrame(s);
    return () => cancelAnimationFrame(i);
  }, [target, start, duration]);
  return count;
}

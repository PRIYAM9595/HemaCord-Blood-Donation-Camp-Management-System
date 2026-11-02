import { useEffect, useRef, useState } from "react";

export function useReveal(
  options = {
    threshold: 0.15,
  },
) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const l = ref.current;
    if (!l) return;
    if (typeof IntersectionObserver > "u") {
      setInView(true);
      return;
    }
    const i = new IntersectionObserver(([a]) => {
      a.isIntersecting && (setInView(true), i.disconnect());
    }, options);
    i.observe(l);
    return () => i.disconnect();
  }, []);
  return [ref, inView];
}

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (hash) {
      const l = document.querySelector(hash);
      if (l) {
        setTimeout(
          () =>
            l.scrollIntoView({
              behavior: "smooth",
            }),
          80,
        );
        return;
      }
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname, hash]);
  useEffect(() => {
    const l = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", l, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", l);
  }, []);
  return (
    <button
      className={`to-top ${visible ? "show" : ""}`}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}

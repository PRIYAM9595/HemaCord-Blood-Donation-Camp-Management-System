import { useState } from "react";

export function useFormSubmit() {
  const [status, setStatus] = useState("idle");
  return {
    status,
    submit: (r, l) => {
      r.preventDefault();
      const i = r.currentTarget;
      const a = Object.fromEntries(new FormData(i).entries());
      setStatus("loading");
      console.log(`[HemaCord] ${l} form submitted`, a);
      setTimeout(() => {
        setStatus("done");
        i.reset();
      }, 900);
    },
    reset: () => setStatus("idle"),
  };
}

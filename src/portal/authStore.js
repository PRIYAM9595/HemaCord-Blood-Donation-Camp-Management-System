import { useEffect, useState } from "react";

export const authStore = {
  s: null,
  l: new Set(),
  get() {
    if (authStore.s) return authStore.s;
    try {
      const v = localStorage.getItem("hc_auth");
      return v ? JSON.parse(v) : null;
    } catch (e) {
      return null;
    }
  },
  set(u) {
    authStore.s = u;
    try {
      u ? localStorage.setItem("hc_auth", JSON.stringify(u)) : localStorage.removeItem("hc_auth");
    } catch (e) {}
    authStore.l.forEach((item) => item());
  },
};
export function useAuth() {
  const [, f] = useState(0);
  useEffect(() => {
    const fn = () => f((x) => x + 1);
    authStore.l.add(fn);
    return () => authStore.l.delete(fn);
  }, []);
  return authStore.get();
}

export const formatNumber = (n) => Number(n || 0).toLocaleString("en-IN");
export const formatDate = (d) =>
  new Date(d + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
export const sumBy = (list, k) => list.reduce((a, c) => a + (c[k] || 0), 0);
export const percent = (a, b) => (b ? Math.round((a / b) * 100) : 0);
export function bloodGroupSplit(n) {
  const r = [
    ["O+", 0.34],
    ["B+", 0.3],
    ["A+", 0.2],
    ["AB+", 0.07],
    ["A-", 0.03],
    ["O-", 0.03],
    ["B-", 0.02],
    ["AB-", 0.01],
  ];
  let left = n;
  return r.map(([g, p], index) => {
    const v = index === r.length - 1 ? Math.max(0, left) : Math.round(n * p);
    left -= v;
    return [g, v];
  });
}

/* ---------- shared bits ---------- */

/* Generic sorter. key looks like "units-desc"; getters maps "units" -> row => value.
   Rows whose value is null/undefined (e.g. upcoming camps with no units yet) always go last. */
export function sortBy(list, key, getters) {
  const [field, dir] = String(key).split("-");
  const get = getters[field];
  if (!get) return list;
  const m = dir === "desc" ? -1 : 1;
  return [...list].sort((a, b) => {
    const x = get(a);
    const y = get(b);
    const xn = x === null || x === undefined;
    const yn = y === null || y === undefined;
    if (xn || yn) return xn === yn ? 0 : xn ? 1 : -1;
    if (typeof x === "string") return x.localeCompare(y, undefined, { sensitivity: "base" }) * m;
    return (x - y) * m;
  });
}

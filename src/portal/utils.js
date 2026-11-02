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

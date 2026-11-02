import { useCountUp } from "../hooks/useCountUp";
import { useReveal } from "../hooks/useReveal";
import { impactStats } from "../data/content";

export function StatItem({ label, value, suffix, start }) {
  const count = useCountUp(value, start);
  return (
    <div className="stat">
      <div className="stat__num">
        {count.toLocaleString("en-IN")}
        {suffix}
      </div>
      <div className="stat__label">{label}</div>
    </div>
  );
}
export function ImpactSection({ dark = false }) {
  const [ref, inView] = useReveal();
  return (
    <section className={`impact ${dark ? "impact--dark" : ""}`} ref={ref}>
      <div className="container">
        <p className="eyebrow eyebrow--center">our impact</p>
        <div className="impact__grid">
          {impactStats.map((item) => (
            <StatItem key={item.label} {...item} start={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

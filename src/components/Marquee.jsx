export function Marquee({ items, label }) {
  const n = [...items, ...items, ...items];
  return (
    <div className="marquee" aria-label={label}>
      <div className="marquee__track">
        {n.map((item, index) => (
          <span key={index} className="marquee__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

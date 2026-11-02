export function FloatingDrops() {
  return (
    <div className="drops" aria-hidden="true">
      {Array.from({
        length: 9,
      }).map((item, index) => (
        <span
          key={index}
          style={{
            "--i": index,
          }}
        />
      ))}
    </div>
  );
}

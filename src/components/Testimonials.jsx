import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "../data/content";

export function StarRating({ rating }) {
  return (
    <div className="stars" aria-label={`${rating} rating`}>
      {[1, 2, 3, 4, 5].map((item) => (
        <Star
          key={item}
          size={18}
          fill={rating >= item ? "currentColor" : rating >= item - 0.5 ? "url(#half)" : "none"}
        />
      ))}
      <span>{rating} rating</span>
    </div>
  );
}
export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const l = testimonials.length;
  useEffect(() => {
    if (paused) return;
    const s = setInterval(() => setActive((u) => (u + 1) % l), 6e3);
    return () => clearInterval(s);
  }, [paused, l]);
  const i = testimonials[active];
  const a = i.name
    .split(" ")
    .map((item) => item[0])
    .join("");
  return (
    <div
      className="testi"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <linearGradient id="half">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
      <Quote className="testi__quote" size={64} />
      <div key={active} className="testi__card">
        <h3>{i.title}</h3>
        <p>{i.text}</p>
        <StarRating rating={i.rating} />
        <div className="testi__who">
          <div className="avatar">{a}</div>
          <div>
            <h4>
              {i.name} ({i.place})
            </h4>
            <span>{i.role}</span>
          </div>
        </div>
      </div>
      <div className="testi__nav">
        <button onClick={() => setActive((active - 1 + l) % l)} aria-label="Previous testimonial">
          <ChevronLeft size={22} />
        </button>
        <div className="dots">
          {testimonials.map((item, index) => (
            <button
              key={index}
              className={index === active ? "active" : ""}
              onClick={() => setActive(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <button onClick={() => setActive((active + 1) % l)} aria-label="Next testimonial">
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
}

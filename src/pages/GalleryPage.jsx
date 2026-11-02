import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { galleryItems, timeline } from "../data/content";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";

export function GalleryPage() {
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    const r = (event) => event.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", r);
    return () => window.removeEventListener("keydown", r);
  }, []);
  const recentItems = [...galleryItems].reverse().slice(0, 6);
  return (
    <>
      <PageHero
        eyebrow="Memory Board"
        title="Our Journey So Far"
        subtitle="Moments of courage, kindness and community captured across our camps."
        image="/images/image2.jpg"
      />
      <section className="section journey">
        <div className="container journey__row">
          {timeline.map((item, index) => (
            <Reveal key={item.year} delay={index * 80} className="journey__item">
              <b>{item.year}</b>
              <span>{item.t}</span>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">Gallery</p>
            <h2 className="h2">Our Recent Camps</h2>
          </Reveal>
          <div className="masonry">
            {galleryItems.map((item, index) => (
              <Reveal key={item.src} delay={(index % 4) * 70} className="masonry__item">
                <button onClick={() => setSelected(item)} aria-label={`Open ${item.cap}`}>
                  <img src={item.src} alt={item.cap} loading="lazy" />
                  <span className="masonry__cap">
                    <ZoomIn size={16} /> {item.cap}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">Featured</p>
            <h2 className="h2">Sitapur Camp</h2>
          </Reveal>
          <div className="strip">
            {recentItems.map((item, index) => (
              <Reveal key={item.src + index} delay={index * 70} className="strip__item">
                <button onClick={() => setSelected(item)} aria-label={`Open ${item.cap}`}>
                  <img src={item.src} alt={item.cap} loading="lazy" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <button className="lightbox__close" aria-label="Close">
            <X size={26} />
          </button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={selected.src} alt={selected.cap} />
            <figcaption>{selected.cap}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}

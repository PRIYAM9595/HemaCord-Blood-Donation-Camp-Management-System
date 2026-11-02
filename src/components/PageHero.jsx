import { Reveal } from "./Reveal";

export function PageHero({ eyebrow, title, subtitle, image, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero__blob page-hero__blob--1" />
      <div className="page-hero__blob page-hero__blob--2" />
      <div className="container page-hero__grid">
        <Reveal className="page-hero__text">
          {eyebrow && <p className="eyebrow eyebrow--light">{eyebrow}</p>}
          <h1>{title}</h1>
          {subtitle && <p className="page-hero__sub">{subtitle}</p>}
          {children}
        </Reveal>
        {image && (
          <Reveal direction="zoom" delay={150} className="page-hero__img">
            <img src={image} alt="" />
          </Reveal>
        )}
      </div>
      <svg
        className="page-hero__curve"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,30 C360,70 1080,-10 1440,30 L1440,60 L0,60 Z" fill="var(--bg)" />
      </svg>
    </section>
  );
}

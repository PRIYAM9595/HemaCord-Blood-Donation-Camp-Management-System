import { Link } from "react-router-dom";
import { ArrowRight, Crown, Eye, HeartHandshake, Megaphone, Target, Truck } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { LogoCrop } from "../components/Brand";
import { site } from "../data/site";
import { collegePartners, corporatePartners, pillars, timeline } from "../data/content";
import { ImpactSection } from "../components/ImpactSection";
import { Marquee } from "../components/Marquee";

export const pillarIcons = [Truck, Megaphone, HeartHandshake, Crown];
export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About HemaCord"
        title="Every Blood Donor Is A Lifesaver"
        subtitle="India's largest youth-led organisation working to eliminate the national blood deficit — one community at a time."
        image="/images/image3.jpg"
      >
        <p className="page-hero__quote">
          “We are India's largest youth-run initiative working in the field of blood donation,
          trying to make India blood sufficient.”
        </p>
      </PageHero>
      <section className="section">
        <div className="container mv">
          <Reveal className="mv__card">
            <div className="mv__icon">
              <Target size={28} />
            </div>
            <h2>Mission</h2>
            <p>
              To address India's chronic blood shortage by building awareness, improving the donor
              experience, and delivering end-to-end solutions from first-time motivation through to
              emergency fulfilment.
            </p>
          </Reveal>
          <Reveal delay={150} className="mv__card mv__card--dark">
            <div className="mv__icon">
              <Eye size={28} />
            </div>
            <h2>Vision</h2>
            <p>A blood-sufficient India, sustained entirely through voluntary donation.</p>
          </Reveal>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container split">
          <Reveal direction="left" className="split__media">
            <div className="frame frame--logo">
              <LogoCrop size={340} />
            </div>
          </Reveal>
          <Reveal direction="right" className="split__text">
            <p className="eyebrow">Our History</p>
            <h2 className="h2">
              It all began with <em>one drop</em>
            </h2>
            <p className="lead">
              {site.name} was founded on 1st April {site.founded} as a student-led project. What
              began as a small team united by a single conviction — that blood cannot be
              manufactured — quickly grew into something larger. Committed to connecting willing
              donors with those in critical need, the team worked relentlessly to build a structure
              that could operate at scale.
            </p>
            <p>
              Within a few years, {site.name} had registered as a full-scale NGO. Today, the
              organisation responds to blood requirements across the country, connecting patients
              with voluntary donors through a live helpline, organised camps, and a growing network
              of city chapters.
            </p>
          </Reveal>
        </div>
        <div className="container timeline">
          {timeline.map((item, index) => (
            <Reveal key={item.year} delay={index * 90} className="timeline__item">
              <span className="timeline__year">{item.year}</span>
              <h4>{item.t}</h4>
              <p>{item.d}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">Our Activities</p>
            <h2 className="h2">
              {site.name} operates on a <em>four-pillar</em> model designed to address the blood
              shortage at every level.
            </h2>
          </Reveal>
          <div className="pillars">
            {pillars.map((item, index) => {
              const Tag2 = pillarIcons[index];
              return (
                <Reveal key={item.t} delay={index * 110} className="pillar">
                  <div className="pillar__icon">
                    <Tag2 size={28} />
                  </div>
                  <h3>{item.t}</h3>
                  <p>{item.d}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <section className="people-cta">
        <div className="container">
          <Reveal>
            <h2 className="h2 h2--light">The People Behind the Mission</h2>
            <Link to="/our-team" className="btn btn--light btn--lg">
              Meet Our Team <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
      <ImpactSection />
      <section className="section partners">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">Together we do more</p>
            <h2 className="h2">Our Partners</h2>
          </Reveal>
          <Reveal className="partner-block">
            <h3>Corporate Partners</h3>
            <p>
              Many corporates have come forward to help us in this cause by providing their
              expertise and resources. They partner for quarterly blood donation camps, provide
              monetary support via payroll donation, and even provide mentorship to our team via
              volunteers.
            </p>
            <div className="chips">
              {corporatePartners.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal className="partner-block">
            <h3>College Partners</h3>
            <p>
              Being largely student volunteer driven, colleges are the backbone of our organization.
              With our college partners, we are able to organize seamless blood donation camps
              throughout the year, recruit the most motivated, sharp and hardworking volunteers and
              last, but most importantly, motivate the newly 18, the first time donors to become
              regular lifesavers.
            </p>
            <div className="chips">
              {collegePartners.map((item) => (
                <span key={item} className="chip chip--alt">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <Marquee items={[...corporatePartners, ...collegePartners]} label="Partners" />
      </section>
    </>
  );
}

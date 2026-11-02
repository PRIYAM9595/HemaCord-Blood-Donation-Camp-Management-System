import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarHeart,
  Check,
  Clock,
  Droplet,
  Instagram,
  MapPin,
  Megaphone,
  Sparkles,
} from "lucide-react";
import { FloatingDrops } from "../components/FloatingDrops";
import { site } from "../data/site";
import { LogoCrop } from "../components/Brand";
import { Reveal } from "../components/Reveal";
import {
  aboutFaqs,
  coreValues,
  pressMentions,
  socialPosts,
  supportChecklist,
} from "../data/content";
import { FactsSection } from "../components/FactsSection";
import { ImpactSection } from "../components/ImpactSection";
import { Testimonials } from "../components/Testimonials";
import { Accordion } from "../components/Accordion";
import { Marquee } from "../components/Marquee";

export function HomePage() {
  return (
    <>
      <section className="hero">
        <FloatingDrops />
        <div className="container hero__grid">
          <div className="hero__text">
            <span className="pill">
              <Sparkles size={16} /> 15 years of saving lives
            </span>
            <h1>
              Uniting India to <em>Save Lives</em> Through Blood Donation
            </h1>
            <p className="hero__sub">{site.subTagline}</p>
            <div className="hero__cta">
              <Link to="/organize-a-camp" className="btn btn--primary btn--lg">
                Organise a camp <ArrowRight size={18} />
              </Link>
              <Link to="/get-involved" className="btn btn--ghost btn--lg">
                <Droplet size={18} /> Register as a donor
              </Link>
            </div>
            <ul className="hero__trust">
              <li>
                <Check size={16} /> 100% volunteer driven
              </li>
              <li>
                <Check size={16} /> 80G tax benefit
              </li>
              <li>
                <Check size={16} /> Govt-approved blood banks
              </li>
            </ul>
          </div>
          <div className="hero__art">
            <div className="hero__blob" />
            <div className="hero__photo hero__photo--main">
              <img
                src="/images/image1.jpg"
                alt="Blood bag and a donor holding a heart-shaped stress ball"
              />
            </div>
            <div className="hero__photo hero__photo--small">
              <img src="/images/image5.jpg" alt="Blood group characters A, B, AB and O" />
            </div>
            <div className="hero__badge">
              <Droplet size={22} />
              <div>
                <strong>1 Pint</strong>
                <span>= up to 3 lives</span>
              </div>
            </div>
            <div className="hero__logo-card">
              <LogoCrop size={170} />
            </div>
          </div>
        </div>
        <svg
          className="hero__curve"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,50 C300,110 700,0 1000,40 C1200,65 1340,60 1440,40 L1440,90 L0,90 Z"
            fill="var(--bg)"
          />
        </svg>
      </section>
      <section className="urgent-wrap">
        <div className="container">
          <Reveal className="urgent">
            <div className="urgent__tag">
              <span className="pulse" /> ONGOING CAMP
            </div>
            <h2>Join us in making a real impact. One unit of blood can save up to three lives.</h2>
            <ul className="urgent__meta">
              <li>
                <MapPin size={18} /> New Delhi
              </li>
              <li>
                <Droplet size={18} /> O+
              </li>
              <li>
                <Clock size={18} /> Within 24 hours
              </li>
            </ul>
            <Link to="/get-involved?tab=volunteer" className="btn btn--light">
              Join as Volunteer <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="section shortage">
        <div className="container split">
          <Reveal direction="left" className="split__media">
            <div className="frame">
              <img src="/images/image7.jpg" alt="Donor squeezing a stress ball during donation" />
              <div className="frame__chip">
                <Droplet size={16} /> Every donation counts
              </div>
            </div>
            <div className="shortage__stat">
              <strong>2M</strong>
              <span>units short every year</span>
            </div>
          </Reveal>
          <Reveal direction="right" className="split__text">
            <p className="eyebrow">The Challenge</p>
            <h2 className="h2">
              India Faces a Shortage of <em>2 Million</em> Units of Blood
            </h2>
            <p className="lead">
              India requires approximately 15 million units of blood each year, yet only 13 million
              are collected. Just 2% of India's youth donating regularly would be enough to bridge
              this gap entirely.
            </p>
            <div className="bar">
              <div className="bar__row">
                <span>Required</span>
                <div>
                  <i
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
                <b>15M</b>
              </div>
              <div className="bar__row">
                <span>Collected</span>
                <div>
                  <i
                    className="bar__fill2"
                    style={{
                      width: "86.6%",
                    }}
                  />
                </div>
                <b>13M</b>
              </div>
            </div>
            <Link to="/about" className="btn btn--primary">
              Know More <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="section section--tint youth">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">Who we are</p>
            <h2 className="h2">
              We, the youth, can make India <em>Blood Sufficient</em>
            </h2>
            <p className="lead">
              HemaCord is India's largest youth-led organisation working alongside colleges,
              corporates, and Resident Welfare Associations (RWAs) to help blood banks maintain
              adequate supplies. We offer a 360° solution, from inspiring people to donate blood to
              facilitating donation through organised camps.
            </p>
          </Reveal>
          <div className="programs">
            <Reveal className="program program--camp">
              <img src="/images/image6.jpg" alt="" className="program__img" />
              <div className="program__body">
                <div className="program__icon">
                  <CalendarHeart size={26} />
                </div>
                <h3>Blood Donation Camps</h3>
                <p>
                  We partner with colleges, corporates, and RWAs to plan and execute innovative,
                  engaging blood donation camps across the country, managing the entire process from
                  start to finish.
                </p>
                <Link to="/get-involved?tab=camp" className="link-arrow">
                  Organise a camp <ArrowRight size={18} />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={150} className="program program--aware">
              <img src="/images/image3.jpg" alt="" className="program__img" />
              <div className="program__body">
                <div className="program__icon">
                  <Megaphone size={26} />
                </div>
                <h3>Awareness Session</h3>
                <p>
                  Street plays, competitions, and interactive sessions are designed to inspire
                  people, particularly first-time donors, to come forward and give blood.
                </p>
                <Link to="/organize-a-camp#request-callback" className="link-arrow">
                  Learn more <ArrowRight size={18} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="section values">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">
              Uniting India's youth to solve the national blood shortage crisis
            </p>
            <h2 className="h2">
              Driven by Purpose. United by Compassion. Focused on <em>Impact.</em>
            </h2>
          </Reveal>
          <div className="values__grid">
            {coreValues.map((item, index) => (
              <Reveal key={item.n} delay={index * 130} className="value">
                <span className="value__n">{item.n}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <FactsSection />
      <section className="banner">
        <div className="container banner__grid">
          <Reveal direction="left" className="banner__text">
            <p className="eyebrow eyebrow--light">Your blood group has a type too</p>
            <h2 className="h2 h2--light">
              Blood donors are <em>life savers</em>
            </h2>
            <p>
              Whether you are A, B, AB or O — someone out there is waiting for exactly your match.
              Knowing your blood group could be the first step toward saving a life.
            </p>
            <Link to="/get-involved" className="btn btn--light btn--lg">
              Find out how you can help <ArrowRight size={18} />
            </Link>
          </Reveal>
          <Reveal direction="right" className="banner__img">
            <img src="/images/image5.jpg" alt="Blood donors are life savers" />
          </Reveal>
        </div>
      </section>
      <section className="section social">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">Stories from the community</p>
            <h2 className="h2">Register as a donor today! 👇</h2>
          </Reveal>
          <div className="social__grid">
            {socialPosts.map((item, index) => (
              <Reveal key={index} delay={(index % 4) * 90} className="post">
                <div className="post__img">
                  <img src={item.img} alt="" loading="lazy" />
                  <span className="post__icon">
                    <Instagram size={16} />
                  </span>
                </div>
                <div className="post__body">
                  <p>{item.text}</p>
                  <span className="post__tag">{item.tag}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="center">
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary btn--lg"
            >
              <Instagram size={18} /> Follow on Instagram
            </a>
          </div>
        </div>
      </section>
      <ImpactSection dark />
      <section className="section section--tint">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">Kind words</p>
            <h2 className="h2">What our community says</h2>
          </Reveal>
          <Testimonials />
        </div>
      </section>
      <section className="section help">
        <div className="container split">
          <Reveal direction="left" className="split__text">
            <p className="eyebrow">Be part of the movement</p>
            <h2 className="h2">
              Help Us make India <em>Blood Sufficient</em>
            </h2>
            <p className="lead">
              We started in a college campus in {site.founded} and have now grown on to 10 cities.
              With your support we hope to further expand and help out blood banks across the
              country and make them blood sufficient. With you helping, we can:
            </p>
            <ul className="checks">
              {supportChecklist.map((item) => (
                <li key={item}>
                  <span>
                    <Check size={16} />
                  </span>{" "}
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/support-us" className="btn btn--primary btn--lg">
              Support Us <ArrowRight size={18} />
            </Link>
          </Reveal>
          <Reveal direction="right" className="split__media">
            <div className="frame frame--tilt">
              <img
                src="/images/image8.jpg"
                alt="Two arms connected by a red thread forming a heart"
                className="contain"
              />
            </div>
            <div className="help__float">
              <img src="/images/image4.jpg" alt="Donate blood, save a life" />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section section--tint faq">
        <div className="container faq__grid">
          <Reveal direction="left" className="faq__intro">
            <p className="eyebrow">Got questions?</p>
            <h2 className="h2">Frequently Asked Questions</h2>
            <p className="lead">
              Can't find what you're looking for? Reach out and a volunteer will get back to you.
            </p>
            <Link to="/contact-us" className="btn btn--ghost">
              Contact Us
            </Link>
          </Reveal>
          <Reveal direction="right">
            <Accordion items={aboutFaqs} />
          </Reveal>
        </div>
      </section>
      <section className="press">
        <div className="container">
          <p className="eyebrow eyebrow--center">As seen in</p>
        </div>
        <Marquee items={pressMentions} label="Press mentions" />
      </section>
    </>
  );
}

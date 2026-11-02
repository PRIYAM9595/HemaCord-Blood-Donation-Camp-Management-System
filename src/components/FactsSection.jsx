import { Clock, Droplet, RefreshCw, ShieldCheck, Timer, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { facts } from "../data/content";

export const factIcons = {
  droplet: Droplet,
  timer: Timer,
  clock: Clock,
  refresh: RefreshCw,
  users: Users,
  shield: ShieldCheck,
};
export function FactsSection() {
  return (
    <section className="section facts">
      <div className="facts__bg" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="container">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow eyebrow--center">Did you know?</p>
          <h2 className="h2">
            Small Facts. <em>Big Reasons</em> to Donate.
          </h2>
          <p className="lead">
            Every number below is a reminder that a few minutes of your time can change the course
            of someone's life.
          </p>
        </Reveal>
        <div className="facts__grid">
          {facts.map((item, index) => {
            const Tag1 = factIcons[item.icon] || Droplet;
            return (
              <Reveal key={item.title} delay={(index % 3) * 120} className="fact">
                <div className="fact__icon">
                  <Tag1 size={26} />
                </div>
                <div className="fact__big">{item.big}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="fact__index">0{index + 1}</span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

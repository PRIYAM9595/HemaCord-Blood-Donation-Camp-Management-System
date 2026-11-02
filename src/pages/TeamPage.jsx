import { Linkedin, Mail } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { boardMembers, teamMembers } from "../data/content";
import { site } from "../data/site";

export const avatarGradients = [
  "linear-gradient(135deg,#dc3832,#7a0000)",
  "linear-gradient(135deg,#ff7a6b,#b3192d)",
  "linear-gradient(135deg,#b3192d,#4a0d17)",
  "linear-gradient(135deg,#f0524b,#8a1020)",
];
export function getInitials(e) {
  return e
    .replace(/^Dr\.?\s*/i, "")
    .split(" ")
    .map((item) => item[0])
    .slice(0, 2)
    .join("");
}
export function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Together We Make It Possible"
        subtitle="A volunteer-powered family of students, professionals and doctors on one mission."
        image="/images/image6.jpg"
      />
      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">Leadership</p>
            <h2 className="h2">Board Members</h2>
          </Reveal>
          <div className="board">
            {boardMembers.map((item, index) => (
              <Reveal key={item.name} delay={(index % 3) * 110} className="member">
                <div
                  className="member__avatar"
                  style={{
                    background: avatarGradients[index % avatarGradients.length],
                  }}
                >
                  {item.photo ? <img src={item.photo} alt={item.name} /> : getInitials(item.name)}
                </div>
                <h3>{item.name}</h3>
                <span className="member__role">{item.role}</span>
                <p>{item.bio}</p>
                <div className="member__links">
                  <a
                    href={site.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${item.name} on LinkedIn`}
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">The doers</p>
            <h2 className="h2">Team Members</h2>
          </Reveal>
          <div className="team">
            {teamMembers.map((item, index) => (
              <Reveal key={item.name} delay={(index % 4) * 80} className="tm">
                <div
                  className="tm__avatar"
                  style={{
                    background: avatarGradients[(index + 1) % avatarGradients.length],
                  }}
                >
                  {getInitials(item.name)}
                </div>
                <h3>{item.name}</h3>
                <span>{item.role}</span>
                <div className="tm__links">
                  {index === 0 && (
                    <a href={`mailto:${site.email}`} aria-label="Email">
                      <Mail size={15} />
                    </a>
                  )}
                  <a
                    href={site.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={15} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

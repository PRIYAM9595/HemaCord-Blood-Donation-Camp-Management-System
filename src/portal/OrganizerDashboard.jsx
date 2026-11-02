import { Link } from "react-router-dom";
import { authStore } from "./authStore";
import { demoUsers, portalCamps } from "./data";
import { formatNumber, percent, sumBy } from "./utils";
import { PageHero } from "../components/PageHero";
import { BarChart, CampCard, LogoutButton, SectionHead, StatCard } from "./components";
import { Reveal } from "../components/Reveal";

export function OrganizerDashboard() {
  const a = authStore.get() || demoUsers.organizer;
  const mine = portalCamps.filter((item) => item.orgId === a.orgId);
  const done = mine.filter((item) => item.status === "Completed");
  const up = mine.filter((item) => item.status === "Upcoming");
  const crowd = sumBy(done, "crowd");
  const units = sumBy(done, "units");
  return (
    <>
      <PageHero
        eyebrow="Camp Organizer Portal"
        title={"Welcome, " + a.name.split(" ")[0]}
        subtitle={
          a.org + " · " + a.city + ". See how your camps performed: crowd, donations and impact."
        }
      >
        <LogoutButton />
      </PageHero>
      <section className="section">
        <div className="container">
          <div className="hc-stats">
            <StatCard label="Camps organised" value={done.length} sub={up.length + " upcoming"} />
            <StatCard label="Total crowd" value={formatNumber(crowd)} sub="Across all camps" />
            <StatCard
              label="Blood units donated"
              value={formatNumber(units)}
              sub={percent(units, crowd) + "% of crowd donated"}
            />
            <StatCard
              label="Lives impacted"
              value={"Up to " + formatNumber(units * 3)}
              sub={formatNumber(sumBy(done, "first")) + " first-time donors"}
            />
          </div>

          <Reveal className="hc-card">
            <SectionHead eyebrow="Camp performance" title="Crowd vs donations" />
            <div className="hc-legend">
              <span>
                <i className="a" /> Crowd at camp
              </span>
              <span>
                <i className="b" /> Units donated
              </span>
            </div>
            <BarChart
              rows={done.map((item) => ({
                label: item.name,
                a: item.crowd,
                b: item.units,
              }))}
            />
          </Reveal>

          {up.length > 0 && (
            <>
              <SectionHead eyebrow="Coming up" title="Upcoming camps" />
              <div className="hc-camps">
                {up.map((item) => (
                  <CampCard key={item.id} c={item} />
                ))}
              </div>
            </>
          )}

          <SectionHead eyebrow="Your history" title="Completed camps" />
          <div className="hc-camps">
            {done
              .slice()
              .reverse()
              .map((item) => (
                <CampCard key={item.id} c={item} />
              ))}
          </div>

          <div className="hc-cta">
            <div>
              <h3>Ready to organise another camp?</h3>
              <p>Our team will connect with you to plan the next one.</p>
            </div>
            <Link to="/organize-a-camp" className="btn btn--light btn--lg">
              Organise a camp
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- admin dashboard ---------- */

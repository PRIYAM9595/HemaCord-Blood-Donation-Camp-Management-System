import { useState } from "react";
import { authStore } from "./authStore";
import { demoUsers, donorHistory, organisations, portalCamps } from "./data";
import { formatDate, sumBy } from "./utils";
import { PageHero } from "../components/PageHero";
import { LogoutButton, SectionHead, StatCard } from "./components";
import { Reveal } from "../components/Reveal";

export /* ---------- donor dashboard ---------- */
function DonorDashboard() {
  const a = authStore.get() || demoUsers.donor;
  const [reg, setReg] = useState({});
  const total = sumBy(donorHistory, "units");
  const last = donorHistory[donorHistory.length - 1];
  const next = new Date(last.date + "T00:00:00");
  next.setDate(next.getDate() + 90);
  const days = Math.ceil((next - new Date()) / 86400000);
  const eligible = days <= 0;
  const upcoming = portalCamps
    .filter((item) => item.status === "Upcoming")
    .sort(
      (x, y) =>
        (x.city === a.city ? -1 : 0) - (y.city === a.city ? -1 : 0) || x.date.localeCompare(y.date),
    );
  return (
    <>
      <PageHero
        eyebrow="Donor Dashboard"
        title={"Welcome back, " + a.name.split(" ")[0]}
        subtitle="Thank you for being a lifesaver. Here is a look at your giving journey with HemaCord."
      >
        <LogoutButton />
      </PageHero>
      <section className="section">
        <div className="container">
          <div className="hc-stats">
            <StatCard label="Donations made" value={total} sub="Since you joined" />
            <StatCard
              label="Lives you can impact"
              value={"Up to " + total * 3}
              sub="1 unit helps up to 3 patients"
            />
            <StatCard label="Blood group" value={a.group} sub={a.city} />
            <StatCard
              label="Next eligible date"
              value={eligible ? "Now" : formatDate(next.toISOString().slice(0, 10))}
              sub={eligible ? "You can donate today" : "In " + days + " days"}
            />
          </div>

          <div className={"hc-banner " + (eligible ? "ok" : "wait")}>
            <div>
              <strong>
                {eligible ? "You are eligible to donate!" : "Recovering well — thank you!"}
              </strong>
              <p>
                {eligible
                  ? "It has been more than 3 months since your last donation. Pick an upcoming camp below and book your slot."
                  : "You can donate whole blood again every 3 months. We will remind you when the date is close."}
              </p>
            </div>
          </div>

          <div className="hc-two">
            <Reveal className="hc-card">
              <SectionHead title="Your donation history" />
              <div className="hc-table-wrap">
                <table className="hc-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Camp</th>
                      <th>City</th>
                      <th>Blood bank</th>
                      <th>Units</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...donorHistory].reverse().map((item) => (
                      <tr key={item.date}>
                        <td>{formatDate(item.date)}</td>
                        <td>{item.camp}</td>
                        <td>{item.city}</td>
                        <td>{item.bank}</td>
                        <td>{item.units}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
            <Reveal className="hc-card" delay={120}>
              <SectionHead title="My details" />
              <dl className="hc-dl">
                <div>
                  <dt>Name</dt>
                  <dd>{a.name}</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>{a.email}</dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd>{a.phone}</dd>
                </div>
                <div>
                  <dt>City</dt>
                  <dd>{a.city}</dd>
                </div>
                <div>
                  <dt>Blood group</dt>
                  <dd>{a.group}</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <SectionHead eyebrow="Be a hero again" title="Upcoming camps near you" />
          <div className="hc-camps">
            {upcoming.map((item) => {
              const org = organisations.find((entry) => entry.id === item.orgId);
              const near = item.city === a.city;
              return (
                <Reveal key={item.id} className="hc-camp">
                  <div className="hc-camp__top">
                    <div>
                      <h3>{item.name}</h3>
                      <p>
                        {org.org} · {item.city}
                      </p>
                    </div>
                    {near && <span className="hc-pill">In your city</span>}
                  </div>
                  <p className="hc-camp__date">{formatDate(item.date)}</p>
                  <button
                    className={"btn btn--sm " + (reg[item.id] ? "btn--ghost" : "btn--primary")}
                    onClick={() =>
                      setReg({
                        ...reg,
                        [item.id]: !reg[item.id],
                      })
                    }
                  >
                    {reg[item.id] ? "Registered ✓ (tap to cancel)" : "Register for this camp"}
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- organizer dashboard ---------- */

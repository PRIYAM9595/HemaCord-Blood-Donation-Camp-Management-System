import { useState } from "react";
import { campRequests, organisations, portalCamps, portalDonors } from "./data";
import { bloodGroupSplit, formatDate, formatNumber, sortBy, sumBy } from "./utils";
import { PageHero } from "../components/PageHero";
import { BarChart, LogoutButton, SectionHead, StatCard } from "./components";

export /* ---------- admin dashboard ---------- */
function AdminDashboard() {
  const [tab, setTab] = useState("overview");
  const [qCamp, setQCamp] = useState("");
  const [city, setCity] = useState("All");
  const [campSort, setCampSort] = useState("default");
  const [qDonor, setQDonor] = useState("");
  const [qOrg, setQOrg] = useState("");
  const [orgCity, setOrgCity] = useState("All");
  const [orgSort, setOrgSort] = useState("default");
  const [reqs, setReqs] = useState(
    campRequests.map((item) => ({
      ...item,
      state: "pending",
    })),
  );
  const done = portalCamps.filter((item) => item.status === "Completed");
  const up = portalCamps.filter((item) => item.status === "Upcoming");
  const pending = reqs.filter((item) => item.state === "pending").length;
  const cities = ["All", ...Array.from(new Set(portalCamps.map((item) => item.city)))];
  const orgOf = (id) => organisations.find((item) => item.id === id);
  const camps = sortBy(
    portalCamps.filter(
      (item) =>
        (city === "All" || item.city === city) &&
        (item.name + " " + orgOf(item.orgId).org).toLowerCase().includes(qCamp.toLowerCase()),
    ),
    campSort,
    {
      name: (item) => item.name,
      units: (item) => (item.status === "Completed" ? item.units : null),
      crowd: (item) => (item.status === "Completed" ? item.crowd : null),
      date: (item) => item.date,
    },
  );
  const orgCities = ["All", ...Array.from(new Set(organisations.map((item) => item.city)))];
  const orgRows = sortBy(
    organisations
      .filter(
        (item) =>
          (orgCity === "All" || item.city === orgCity) &&
          (item.org + " " + item.contact + " " + item.type)
            .toLowerCase()
            .includes(qOrg.toLowerCase()),
      )
      .map((item) => {
        const l = portalCamps.filter((entry) => entry.orgId === item.id);
        return { ...item, campCount: l.length, units: sumBy(l, "units") };
      }),
    orgSort,
    {
      org: (item) => item.org,
      camps: (item) => item.campCount,
      units: (item) => item.units,
    },
  );
  const donors = portalDonors.filter((item) =>
    (item.name + " " + item.city + " " + item.group).toLowerCase().includes(qDonor.toLowerCase()),
  );
  const byCity = Array.from(new Set(done.map((item) => item.city))).map((item) => {
    const l = done.filter((entry) => entry.city === item);
    return {
      label: item,
      a: sumBy(l, "crowd"),
      b: sumBy(l, "units"),
    };
  });
  const totalUnits = sumBy(done, "units");
  const groups = bloodGroupSplit(totalUnits);
  const gmax = Math.max(...groups.map((item) => item[1]));
  const tabs = [
    ["overview", "Overview"],
    ["camps", "Camps"],
    ["donors", "Donors"],
    ["orgs", "Organisations"],
    ["requests", "Camp requests" + (pending ? " (" + pending + ")" : "")],
  ];
  return (
    <>
      <PageHero
        eyebrow="Admin Console"
        title="HemaCord Admin Dashboard"
        subtitle="Keep an eye on every camp, donor and organisation across the network."
      >
        <LogoutButton />
      </PageHero>
      <section className="section">
        <div className="container">
          <div className="hc-tabs hc-tabs--scroll" role="tablist">
            {tabs.map(([id, l]) => (
              <button
                key={id}
                role="tab"
                aria-selected={tab === id}
                className={"hc-tab " + (tab === id ? "on" : "")}
                onClick={() => setTab(id)}
              >
                {l}
              </button>
            ))}
          </div>

          {tab === "overview" && (
            <>
              <div className="hc-stats hc-stats--6">
                <StatCard
                  label="Camps completed"
                  value={done.length}
                  sub={up.length + " upcoming"}
                />
                <StatCard label="Total crowd" value={formatNumber(sumBy(done, "crowd"))} />
                <StatCard label="Units collected" value={formatNumber(totalUnits)} />
                <StatCard label="Registered donors" value={portalDonors.length} sub="Sample list" />
                <StatCard label="Organisations" value={organisations.length} />
                <StatCard label="Pending requests" value={pending} />
              </div>
              <div className="hc-two">
                <div className="hc-card">
                  <SectionHead title="City-wise crowd vs donations" />
                  <div className="hc-legend">
                    <span>
                      <i className="a" /> Crowd
                    </span>
                    <span>
                      <i className="b" /> Units
                    </span>
                  </div>
                  <BarChart rows={byCity} />
                </div>
                <div className="hc-card">
                  <SectionHead title="Units by blood group" />
                  <div className="hc-gbars">
                    {groups.map(([g, v]) => (
                      <div key={g}>
                        <span>{g}</span>
                        <div>
                          <i
                            style={{
                              width: (v / gmax) * 100 + "%",
                            }}
                          />
                        </div>
                        <site>{formatNumber(v)}</site>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {tab === "camps" && (
            <div className="hc-card">
              <div className="hc-filters">
                <input
                  placeholder="Search camp or organisation…"
                  value={qCamp}
                  onChange={(event) => setQCamp(event.target.value)}
                />
                <select value={city} onChange={(event) => setCity(event.target.value)}>
                  {cities.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
                <select
                  aria-label="Sort camps"
                  value={campSort}
                  onChange={(event) => setCampSort(event.target.value)}
                >
                  <option value="default">Sort: Default</option>
                  <option value="name-asc">Camp name (A → Z)</option>
                  <option value="name-desc">Camp name (Z → A)</option>
                  <option value="units-asc">Units (Low → High)</option>
                  <option value="units-desc">Units (High → Low)</option>
                  <option value="crowd-asc">Crowd (Low → High)</option>
                  <option value="crowd-desc">Crowd (High → Low)</option>
                  <option value="date-desc">Date (Newest first)</option>
                  <option value="date-asc">Date (Oldest first)</option>
                </select>
              </div>
              <div className="hc-table-wrap">
                <table className="hc-table">
                  <thead>
                    <tr>
                      <th>Camp</th>
                      <th>Organisation</th>
                      <th>City</th>
                      <th>Date</th>
                      <th>Crowd</th>
                      <th>Units</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {camps.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <strong>{item.name}</strong>
                        </td>
                        <td>{orgOf(item.orgId).org}</td>
                        <td>{item.city}</td>
                        <td>{formatDate(item.date)}</td>
                        <td>{item.status === "Completed" ? formatNumber(item.crowd) : "–"}</td>
                        <td>{item.status === "Completed" ? formatNumber(item.units) : "–"}</td>
                        <td>
                          <span
                            className={
                              "hc-pill " + (item.status === "Completed" ? "" : "hc-pill--up")
                            }
                          >
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                    {camps.length === 0 && (
                      <tr>
                        <td colSpan="7" className="hc-empty">
                          No camps match your search.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {tab === "donors" && (
            <div className="hc-card">
              <div className="hc-filters">
                <input
                  placeholder="Search donor, city or blood group…"
                  value={qDonor}
                  onChange={(event) => setQDonor(event.target.value)}
                />
              </div>
              <div className="hc-table-wrap">
                <table className="hc-table">
                  <thead>
                    <tr>
                      <th>Donor</th>
                      <th>Blood group</th>
                      <th>City</th>
                      <th>Phone</th>
                      <th>Donations</th>
                      <th>Last donation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donors.map((item) => (
                      <tr key={item.name}>
                        <td>
                          <strong>{item.name}</strong>
                        </td>
                        <td>
                          <span className="hc-pill">{item.group}</span>
                        </td>
                        <td>{item.city}</td>
                        <td>{item.phone}</td>
                        <td>{item.donations}</td>
                        <td>{formatDate(item.last)}</td>
                      </tr>
                    ))}
                    {donors.length === 0 && (
                      <tr>
                        <td colSpan="6" className="hc-empty">
                          No donors match your search.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {tab === "orgs" && (
            <div className="hc-card">
              <div className="hc-filters">
                <input
                  placeholder="Search organisation, contact or type…"
                  value={qOrg}
                  onChange={(event) => setQOrg(event.target.value)}
                />
                <select value={orgCity} onChange={(event) => setOrgCity(event.target.value)}>
                  {orgCities.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
                <select
                  aria-label="Sort organisations"
                  value={orgSort}
                  onChange={(event) => setOrgSort(event.target.value)}
                >
                  <option value="default">Sort: Default</option>
                  <option value="org-asc">Organisation (A → Z)</option>
                  <option value="org-desc">Organisation (Z → A)</option>
                  <option value="camps-asc">Camps (Low → High)</option>
                  <option value="camps-desc">Camps (High → Low)</option>
                  <option value="units-asc">Units collected (Low → High)</option>
                  <option value="units-desc">Units collected (High → Low)</option>
                </select>
              </div>
              <div className="hc-table-wrap">
                <table className="hc-table">
                  <thead>
                    <tr>
                      <th>Organisation</th>
                      <th>Type</th>
                      <th>Contact</th>
                      <th>City</th>
                      <th>Camps</th>
                      <th>Units collected</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orgRows.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <strong>{item.org}</strong>
                        </td>
                        <td>{item.type}</td>
                        <td>{item.contact}</td>
                        <td>{item.city}</td>
                        <td>{item.campCount}</td>
                        <td>{formatNumber(item.units)}</td>
                      </tr>
                    ))}
                    {orgRows.length === 0 && (
                      <tr>
                        <td colSpan="6" className="hc-empty">
                          No organisations match your search.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {tab === "requests" && (
            <div className="hc-reqs">
              {reqs.map((item) => (
                <div className="hc-camp hc-camp--wide" key={item.id}>
                  <div className="hc-camp__top">
                    <div>
                      <h3>{item.org}</h3>
                      <p>
                        {item.type} · {item.city} · Contact: {item.contact}
                      </p>
                    </div>
                    <span
                      className={
                        "hc-pill " +
                        (item.state === "pending"
                          ? "hc-pill--up"
                          : item.state === "approved"
                            ? ""
                            : "hc-pill--no")
                      }
                    >
                      {item.state === "pending"
                        ? "Pending"
                        : item.state === "approved"
                          ? "Approved"
                          : "Declined"}
                    </span>
                  </div>
                  <p className="hc-camp__date">
                    Preferred date: {formatDate(item.date)} · Expected crowd:{" "}
                    {formatNumber(item.expected)}
                  </p>
                  {item.state === "pending" && (
                    <div className="hc-actions">
                      <button
                        className="btn btn--primary btn--sm"
                        onClick={() =>
                          setReqs(
                            reqs.map((entry) =>
                              entry.id === item.id
                                ? {
                                    ...entry,
                                    state: "approved",
                                  }
                                : entry,
                            ),
                          )
                        }
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn--ghost btn--sm"
                        onClick={() =>
                          setReqs(
                            reqs.map((entry) =>
                              entry.id === item.id
                                ? {
                                    ...entry,
                                    state: "declined",
                                  }
                                : entry,
                            ),
                          )
                        }
                      >
                        Decline
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

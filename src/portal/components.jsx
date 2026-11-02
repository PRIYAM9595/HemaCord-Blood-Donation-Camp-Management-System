import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authStore, useAuth } from "./authStore";
import { dashboardPaths } from "./data";
import { bloodGroupSplit, formatDate, formatNumber, percent } from "./utils";

export /* ---------- shared bits ---------- */
function StatCard({ label, value, sub }) {
  return (
    <div className="hc-stat">
      <div className="hc-stat__num">{value}</div>
      <div className="hc-stat__label">{label}</div>
      {sub && <div className="hc-stat__sub">{sub}</div>}
    </div>
  );
}
export function SectionHead({ eyebrow, title, children }) {
  return (
    <div className="hc-head">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="h2">{title}</h2>
      {children}
    </div>
  );
}
export function LogoutButton() {
  const nav = useNavigate();
  return (
    <button
      className="btn btn--light"
      onClick={() => {
        authStore.set(null);
        nav("/");
      }}
    >
      Logout
    </button>
  );
}
export function RequireRole({ role, children }) {
  const a = useAuth();
  const nav = useNavigate();
  const ok = a && a.role === role;
  useEffect(() => {
    if (!ok)
      nav("/login?role=" + role, {
        replace: true,
      });
  }, [ok]);
  return ok ? children : null;
}

/* ---------- navbar / drawer / footer pieces ---------- */
export function NavAuth() {
  const a = useAuth();
  const nav = useNavigate();
  if (!a)
    return (
      <Link to="/login" className="btn btn--ghost btn--sm hc-nav-login">
        Login
      </Link>
    );
  return (
    <>
      <Link to={dashboardPaths[a.role]} className="btn btn--ghost btn--sm hc-nav-login">
        Dashboard
      </Link>
      <button
        className="hc-nav-out"
        onClick={() => {
          authStore.set(null);
          nav("/");
        }}
      >
        Logout
      </button>
    </>
  );
}
export function DrawerAuth() {
  const a = useAuth();
  const nav = useNavigate();
  return (
    <div className="hc-drawer-auth">
      {a ? (
        <>
          <Link to={dashboardPaths[a.role]} className="btn btn--ghost btn--block">
            My Dashboard
          </Link>
          <button
            className="btn btn--block hc-drawer-out"
            onClick={() => {
              authStore.set(null);
              nav("/");
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <Link to="/login" className="btn btn--ghost btn--block">
          Login
        </Link>
      )}
    </div>
  );
}
export function FooterLoginLinks() {
  return (
    <>
      <li>
        <Link to="/login?role=donor">Donor Login</Link>
      </li>
      <li>
        <Link to="/login?role=organizer">Organizer Login</Link>
      </li>
      <li>
        <Link to="/login?role=admin">Admin Login</Link>
      </li>
    </>
  );
}

/* ---------- login ---------- */
export /* ---------- organizer dashboard ---------- */
function BarChart({ rows }) {
  const max = Math.max(1, ...rows.flatMap((item) => [item.a, item.b]));
  return (
    <div className="hc-bars">
      {rows.map((item) => (
        <div className="hc-bars__row" key={item.label}>
          <div className="hc-bars__label">{item.label}</div>
          <div className="hc-bars__tracks">
            <div className="hc-bars__track">
              <i
                className="a"
                style={{
                  width: (item.a / max) * 100 + "%",
                }}
              />
              <site>{formatNumber(item.a)}</site>
            </div>
            <div className="hc-bars__track">
              <i
                className="b"
                style={{
                  width: (item.b / max) * 100 + "%",
                }}
              />
              <site>{formatNumber(item.b)}</site>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export function CampCard({ c }) {
  const [open, setOpen] = useState(false);
  const done = c.status === "Completed";
  return (
    <div className="hc-camp hc-camp--wide">
      <div className="hc-camp__top">
        <div>
          <h3>{c.name}</h3>
          <p>
            {formatDate(c.date)} · {c.city} · {c.bank}
          </p>
        </div>
        <span className={"hc-pill " + (done ? "" : "hc-pill--up")}>{c.status}</span>
      </div>
      {done ? (
        <>
          <div className="hc-mini">
            <div>
              <site>{formatNumber(c.registered)}</site>
              <span>Registered</span>
            </div>
            <div>
              <site>{formatNumber(c.crowd)}</site>
              <span>Crowd at camp</span>
            </div>
            <div>
              <site>{formatNumber(c.units)}</site>
              <span>Donations (units)</span>
            </div>
            <div>
              <site>{percent(c.units, c.crowd)}%</site>
              <span>Crowd who donated</span>
            </div>
          </div>
          <button className="hc-link" onClick={() => setOpen(!open)}>
            {open ? "Hide details" : "View details"}
          </button>
          {open && (
            <div className="hc-detail">
              <div className="hc-mini hc-mini--soft">
                <div>
                  <site>{formatNumber(c.first)}</site>
                  <span>First-time donors</span>
                </div>
                <div>
                  <site>{formatNumber(c.deferred)}</site>
                  <span>Deferred (not eligible)</span>
                </div>
                <div>
                  <site>{formatNumber(c.units * 3)}</site>
                  <span>Lives impacted (up to)</span>
                </div>
              </div>
              <p className="hc-detail__t">Units collected by blood group</p>
              <div className="hc-chips">
                {bloodGroupSplit(c.units).map(([g, v]) => (
                  <span key={g}>
                    <site>{g}</site> {v}
                  </span>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="hc-progress">
            <div>
              <i
                style={{
                  width: percent(c.registered, c.expected) + "%",
                }}
              />
            </div>
            <p>
              {formatNumber(c.registered)} of {formatNumber(c.expected)} expected donors registered
              so far
            </p>
          </div>
        </>
      )}
    </div>
  );
}

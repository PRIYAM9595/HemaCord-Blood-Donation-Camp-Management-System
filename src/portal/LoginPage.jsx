import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authStore, useAuth } from "./authStore";
import { dashboardPaths, demoUsers, loginRoles } from "./data";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Input } from "../components/FormFields";

export /* ---------- login ---------- */
function LoginPage() {
  const a = useAuth();
  const nav = useNavigate();
  const loc = useLocation();
  const q = new URLSearchParams(loc.search).get("role");
  const [role, setRole] = useState(loginRoles.some((item) => item.id === q) ? q : "donor");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    if (a)
      nav(dashboardPaths[a.role], {
        replace: true,
      });
  }, [a]);
  const cur = loginRoles.find((item) => item.id === role);
  const demo = demoUsers[role];
  const submit = (event) => {
    event.preventDefault();
    setErr("");
    if (email.trim().toLowerCase() !== demo.email || pw !== demo.password) {
      setErr("Incorrect email or password for the " + cur.label + " account.");
      return;
    }
    setBusy(true);
    setTimeout(() => {
      const { password, ...session } = demo;
      authStore.set(session);
      nav(dashboardPaths[role]);
    }, 600);
  };
  return (
    <>
      <PageHero
        eyebrow="HemaCord Portal"
        title="Login to your account"
        subtitle="Donors, camp organisers and HemaCord admins each get their own dashboard. Choose your role to continue."
      />
      <section className="section hc-login">
        <div className="container hc-login__grid">
          <Reveal direction="left" className="form-card hc-login__card">
            <div className="hc-tabs" role="tablist">
              {loginRoles.map((item) => (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={role === item.id}
                  className={"hc-tab " + (role === item.id ? "on" : "")}
                  onClick={() => {
                    setRole(item.id);
                    setErr("");
                    setEmail("");
                    setPw("");
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <h2 className="h2">{cur.label} Login</h2>
            <p className="lead">{cur.desc}</p>
            <form className="form hc-form" onSubmit={submit}>
              <Input
                label="Email Address"
                name="email"
                type="email"
                required
                full
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="username"
              />
              <Input
                label="Password"
                name="password"
                type="password"
                required
                full
                placeholder="Your password"
                value={pw}
                onChange={(event) => setPw(event.target.value)}
                autoComplete="current-password"
              />
              {err && (
                <div className="hc-err" role="alert">
                  {err}
                </div>
              )}
              <div className="form__submit">
                <button className="btn btn--primary btn--lg" disabled={busy}>
                  {busy ? "Signing in…" : "Login as " + cur.label}
                </button>
              </div>
            </form>
            {role === "donor" && (
              <p className="hc-login__alt">
                New here? <Link to="/get-involved">Register as a donor</Link>
              </p>
            )}
            {role === "organizer" && (
              <p className="hc-login__alt">
                Want to host a camp? <Link to="/organize-a-camp">Request a camp</Link>
              </p>
            )}
          </Reveal>
          <Reveal direction="right" className="hc-demo">
            <span className="eyebrow">Demo access</span>
            <h3>Try the {cur.label} dashboard</h3>
            <p>
              This is a demo portal. Sign-in is simulated in your browser and all numbers are sample
              data.
            </p>
            <dl>
              <div>
                <dt>Email</dt>
                <dd>{demo.email}</dd>
              </div>
              <div>
                <dt>Password</dt>
                <dd>{demo.password}</dd>
              </div>
            </dl>
            <button
              className="btn btn--light"
              type="button"
              onClick={() => {
                setEmail(demo.email);
                setPw(demo.password);
                setErr("");
              }}
            >
              Fill demo login
            </button>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ---------- donor dashboard ---------- */

import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, HeartHandshake, Menu, Search, X } from "lucide-react";
import { navLinks, searchIndex } from "../data/site";
import { Brand } from "./Brand";
import { DrawerAuth, NavAuth } from "../portal/components";

export function SearchModal({ onClose }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const results = useMemo(() => {
    const a = query.trim().toLowerCase();
    return a
      ? searchIndex.filter((item) => (item.label + " " + item.keywords).toLowerCase().includes(a))
      : searchIndex;
  }, [query]);
  useEffect(() => {
    const a = (event) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", a);
    return () => window.removeEventListener("keydown", a);
  }, [onClose]);
  const goTo = (a) => {
    onClose();
    navigate(a);
  };
  return (
    <div className="search-modal" onClick={onClose}>
      <div className="search-modal__box" onClick={(event) => event.stopPropagation()}>
        <div className="search-modal__input">
          <Search size={20} />
          <input
            autoFocus
            placeholder="Search HemaCord…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => event.key === "Enter" && results[0] && goTo(results[0].to)}
          />
          <button onClick={onClose} aria-label="Close search">
            <X size={20} />
          </button>
        </div>
        <ul>
          {results.length === 0 && <li className="search-modal__empty">No results found</li>}
          {results.map((item) => (
            <li key={item.to}>
              <button onClick={() => goTo(item.to)}>{item.label}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const c = () => setScrolled(window.scrollY > 20);
    c();
    window.addEventListener("scroll", c, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", c);
  }, []);
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);
  useEffect(
    () => (
      (document.body.style.overflow = menuOpen ? "hidden" : ""),
      () => (document.body.style.overflow = "")
    ),
    [menuOpen],
  );
  return (
    <>
      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="container nav__inner">
          <Brand />
          <nav className="nav__links" aria-label="Main">
            {navLinks.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="nav__item nav__item--drop"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <NavLink to={item.to} className="nav__link">
                    {item.label} <ChevronDown size={16} />
                  </NavLink>
                  <div className={`nav__drop ${dropdownOpen ? "open" : ""}`}>
                    {item.children.map((entry) => (
                      <NavLink key={entry.to} to={entry.to}>
                        {entry.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink key={item.label} to={item.to} className="nav__link">
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>
          <div className="nav__actions">
            <button className="icon-btn" onClick={() => setSearchOpen(true)} aria-label="Search">
              <Search size={20} />
            </button>
            <NavAuth />
            <Link to="/get-involved" className="btn btn--primary nav__cta">
              <HeartHandshake size={18} /> Get Involved
            </Link>
            <button
              className="icon-btn nav__burger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
      <div className={`drawer ${menuOpen ? "open" : ""}`}>
        <div className="drawer__backdrop" onClick={() => setMenuOpen(false)} />
        <aside className="drawer__panel">
          <div className="drawer__top">
            <Brand />
            <button className="icon-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <nav>
            <NavLink to="/">Home</NavLink>
            {navLinks.map((item) => (
              <div key={item.label}>
                <NavLink to={item.to}>{item.label}</NavLink>
                {item.children &&
                  item.children.map((entry) => (
                    <NavLink key={entry.to} to={entry.to} className="drawer__sub">
                      — {entry.label}
                    </NavLink>
                  ))}
              </div>
            ))}
          </nav>
          <DrawerAuth />
          <Link to="/get-involved" className="btn btn--primary btn--block">
            <HeartHandshake size={18} /> Get Involved
          </Link>
        </aside>
      </div>
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </>
  );
}

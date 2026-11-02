import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { LogoCrop } from "./Brand";
import { campCities, site } from "../data/site";
import { FooterLoginLinks } from "../portal/components";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,40 C240,90 480,0 720,30 C960,60 1200,90 1440,30 L1440,0 L0,0 Z"
            fill="var(--footer-top, #fff)"
          />
        </svg>
      </div>
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <LogoCrop size={210} />
          </div>
          <p>
            Uniting India's youth to solve the national blood shortage crisis — one donor, one drop,
            one community at a time.
          </p>
          <div className="socials">
            <a href={site.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a href={site.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href={site.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={site.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
              <Youtube size={18} />
            </a>
          </div>
        </div>
        <div>
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/our-team">Our Team</Link>
            </li>
            <li>
              <Link to="/support-us">Donate Now</Link>
            </li>
            <li>
              <Link to="/get-involved">Join Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Organise a Camp</h4>
          <ul>
            {campCities.map((item) => (
              <li key={item.slug}>
                <Link to={`/organize-a-camp?city=${item.slug}`}>
                  Organise a camp in {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <FooterLoginLinks />
          </ul>
          <h4 className="footer__h4-gap">Reach Us</h4>
          <ul className="footer__contact">
            <li>
              <Mail size={16} /> <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <Phone size={16} /> {site.phone}
            </li>
            <li>
              <MapPin size={16} /> {site.address}
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <span>
            Copyright © {site.name} Foundation {new Date().getFullYear()}
          </span>
          <span>Made with ❤️ for every donor</span>
        </div>
      </div>
    </footer>
  );
}

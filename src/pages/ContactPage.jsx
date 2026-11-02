import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { site } from "../data/site";
import { ContactForm } from "../components/Forms";

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's get in touch!"
        subtitle="We'd love to hear from you. Reach out with your questions or feedback."
        image="/images/image2.jpg"
      />
      <section className="section">
        <div className="container contact">
          <Reveal direction="left" className="contact__info">
            <h2 className="h2">Say hello 👋</h2>
            <p className="lead">
              Have a question about donating, organising a camp or volunteering? Drop us a message
              and a volunteer will respond as soon as possible.
            </p>
            <ul>
              <li>
                <span>
                  <Mail size={20} />
                </span>
                <div>
                  <b>Email</b>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </li>
              <li>
                <span>
                  <Phone size={20} />
                </span>
                <div>
                  <b>Phone</b>
                  {site.phone}
                </div>
              </li>
              <li>
                <span>
                  <MapPin size={20} />
                </span>
                <div>
                  <b>Registered office</b>
                  {site.address}
                </div>
              </li>
            </ul>
            <div className="socials socials--dark">
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
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
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a href={site.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </Reveal>
          <Reveal direction="right" className="form-card">
            <h2 className="h2">Let's get in touch!</h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

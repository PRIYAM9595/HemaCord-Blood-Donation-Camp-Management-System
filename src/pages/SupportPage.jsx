import { Link } from "react-router-dom";
import { Banknote, Check, CreditCard, Droplet, HeartPulse, ShieldCheck } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { site } from "../data/site";
import { Reveal } from "../components/Reveal";
import { donationUses } from "../data/content";

export function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support Us"
        title="Fuel India's Largest Youth-Led Blood Network"
        subtitle="HemaCord is a registered non-profit with zero paid staff. Every contribution goes directly towards organised donation camps, public awareness programmes, and emergency donor support. No overhead. No intermediaries. Only impact."
        image="/images/image4.jpg"
      >
        <a href={site.donateLink} className="btn btn--light btn--lg">
          Donate Now
        </a>
        <p className="page-hero__fine">
          <ShieldCheck size={14} /> Payments are processed securely. HemaCord Foundation does not
          store any payment information.
        </p>
      </PageHero>
      <section className="section">
        <div className="container reasons">
          <Reveal className="reason">
            <div className="reason__icon">
              <Droplet size={28} />
            </div>
            <h3>Every Donation Saves Lives</h3>
            <p>
              One unit of blood can preserve up to three lives. Yours could be the one that matters.
            </p>
          </Reveal>
          <Reveal delay={120} className="reason">
            <div className="reason__icon">
              <HeartPulse size={28} />
            </div>
            <h3>Blood Is Always Needed</h3>
            <p>
              Unlike medicine, blood cannot be synthesised. Supply depends entirely on voluntary
              donors — people like you.
            </p>
          </Reveal>
          <Reveal delay={240} className="reason">
            <div className="reason__icon">
              <Check size={28} />
            </div>
            <h3>Good for You Too</h3>
            <p>
              Regular blood donation supports cardiovascular health and stimulates the production of
              fresh red blood cells. Giving costs you nothing. It restores everything for someone
              else.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container split">
          <Reveal direction="left" className="split__text">
            <p className="eyebrow">Transparent by design</p>
            <h2 className="h2">Every Rupee Goes Directly Towards:</h2>
            <ul className="checks checks--tall">
              {donationUses.map((item) => (
                <li key={item}>
                  <span>
                    <Check size={16} />
                  </span>{" "}
                  {item}
                </li>
              ))}
            </ul>
            <p className="note">
              A blood donation awareness campaign, supported by our creative partners.
            </p>
          </Reveal>
          <Reveal direction="right" className="split__media">
            <div className="frame frame--tilt">
              <img src="/images/image3.jpg" alt="A drop of blood reaching out between two hands" />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">80G tax benefit</p>
            <h2 className="h2">How can you donate?</h2>
            <p className="lead">
              All contributions made to HemaCord are eligible for tax deduction as per the 80G
              section of the Income Tax Act, 1961.
            </p>
          </Reveal>
          <div className="pay">
            <Reveal className="pay__card">
              <div className="pay__icon">
                <CreditCard size={26} />
              </div>
              <h3>Online Payment</h3>
              <p>
                We collaborate with colleges, corporates and RWAs to organize innovative and
                engaging blood donation camps end to end. Your online contribution powers every one
                of them.
              </p>
              <a href={site.donateLink} className="btn btn--primary btn--lg">
                Donate Now
              </a>
            </Reveal>
            <Reveal delay={150} className="pay__card pay__card--dark">
              <div className="pay__icon">
                <Banknote size={26} />
              </div>
              <h3>Cheque Deposit</h3>
              <p>
                Cheques can be made in the name of: <strong>‘HemaCord Foundation’</strong> and sent
                to: {site.address}.
              </p>
              <dl>
                <div>
                  <dt>Account Number</dt>
                  <dd>0000 0000 0000 000</dd>
                </div>
                <div>
                  <dt>IFSC</dt>
                  <dd>XXXX0000000</dd>
                </div>
              </dl>
              <p className="pay__fine">
                Please drop us a line on {site.email} with the screenshot of the cheque for issuing
                the receipt.
              </p>
              <Link to="/contact-us" className="btn btn--light">
                Contact us
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

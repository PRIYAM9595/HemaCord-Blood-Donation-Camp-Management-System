import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CalendarHeart, Droplet, Users } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { CampForm, DonorForm, VolunteerForm } from "../components/Forms";
import { Accordion } from "../components/Accordion";
import { donorFaqs, volunteerActivities } from "../data/content";
import { ImpactSection } from "../components/ImpactSection";

export const involveTabs = [
  {
    id: "donate",
    label: "Donate Blood",
    icon: Droplet,
  },
  {
    id: "camp",
    label: "Organise a Camp",
    icon: CalendarHeart,
  },
  {
    id: "volunteer",
    label: "Volunteer With Us",
    icon: Users,
  },
];
export function GetInvolvedPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = involveTabs.some((item) => item.id === searchParams.get("tab"))
    ? searchParams.get("tab")
    : "donate";
  const [activeTab, setActiveTab] = useState(initialTab);
  useEffect(() => {
    const a = searchParams.get("tab");
    a && involveTabs.some((item) => item.id === a) && setActiveTab(a);
  }, [searchParams]);
  const selectTab = (a) => {
    setActiveTab(a);
    setSearchParams(
      {
        tab: a,
      },
      {
        replace: true,
      },
    );
  };
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="You Can Help Close India's Blood Deficit"
        subtitle="A single donation takes under an hour and can preserve up to three lives. Find out where your contribution matters most."
        image="/images/image8.jpg"
      >
        <a href="#hub" className="btn btn--light btn--lg">
          View Impact
        </a>
      </PageHero>
      <section className="section" id="hub">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">Choose how you would like to make an impact</p>
            <h2 className="h2">Involvement Hub</h2>
          </Reveal>
          <div className="tabs" role="tablist">
            {involveTabs.map((item) => {
              const Tag3 = item.icon;
              return (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={activeTab === item.id}
                  className={`tab ${activeTab === item.id ? "active" : ""}`}
                  onClick={() => selectTab(item.id)}
                >
                  <Tag3 size={20} /> {item.label}
                </button>
              );
            })}
          </div>
          {activeTab === "donate" && (
            <div key="donate" className="tab-panel">
              <div className="form-wrap form-wrap--two">
                <div className="form-card">
                  <p className="eyebrow">Fill the form and our team will connect with you soon</p>
                  <h2 className="h2">Be A Superhero, Register as a Blood Donor</h2>
                  <h3 className="form-sub">Your Details</h3>
                  <DonorForm />
                </div>
                <div className="form-side">
                  <img src="/images/image4.jpg" alt="Donate blood save a life" />
                  <div className="form-side__note">
                    <strong>Eligibility at a glance</strong>
                    <ul>
                      <li>Age 18 – 65 years</li>
                      <li>Weight above 45 kg</li>
                      <li>Haemoglobin 12.5+ g/dL</li>
                      <li>Blood every 3 months · Platelets weekly</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="faq-block">
                <h3 className="h3">Before you register — read this</h3>
                <Accordion items={donorFaqs} />
              </div>
            </div>
          )}
          {activeTab === "camp" && (
            <div key="camp" className="tab-panel">
              <div className="form-wrap form-wrap--two">
                <div className="form-card">
                  <p className="eyebrow">Fill the form and our team will connect with you soon</p>
                  <h2 className="h2">Organize a camp with us</h2>
                  <h3 className="form-sub">Enter Details</h3>
                  <CampForm idPrefix="get-involved-camp" />
                </div>
                <div className="form-side">
                  <img src="/images/image7.jpg" alt="Donor at a blood donation camp" />
                  <div className="form-side__note">
                    <strong>What are Blood Donation Camps</strong>
                    <p>
                      Rather than going to the hospital to donate blood, we bring the hospital to
                      you. We partner with government recognized blood banks and make all the
                      arrangements — you just provide a ventilated clean area. Saving lives needs
                      just 20 minutes at the camp!
                    </p>
                  </div>
                  <div className="form-side__note">
                    <strong>How we can make them different</strong>
                    <p>
                      Music, themes and a sense of pride for every donor — from motivation before
                      the camp to recognition after it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "volunteer" && (
            <div key="volunteer" className="tab-panel">
              <div className="form-wrap form-wrap--two">
                <div className="form-card">
                  <p className="eyebrow">Join India's largest youth-led blood movement</p>
                  <h2 className="h2">Fill this form to join us</h2>
                  <VolunteerForm />
                </div>
                <div className="form-side">
                  <img src="/images/image6.jpg" alt="Community coming together for blood donation" />
                </div>
              </div>
              <div className="volunteer-do">
                <Reveal className="section-head section-head--center">
                  <h2 className="h2">What We Do</h2>
                  <p className="lead">
                    Through each of our activities we make an impact. Our mission is simple – to
                    save lives. Being a volunteer with HemaCord means you will do a wide variety of
                    activities.
                  </p>
                </Reveal>
                <div className="do-grid">
                  {volunteerActivities.map((item, index) => (
                    <Reveal key={item.t} delay={(index % 5) * 70} className="do">
                      <span className="do__n">{String(index + 1).padStart(2, "0")}</span>
                      <h4>{item.t}</h4>
                      <p>{item.d}</p>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="why">
        <div className="container why__grid">
          <Reveal direction="left">
            <h2 className="h2 h2--light">Why your support matters</h2>
            <p>
              Every single contribution helps stabilize the blood supply chain. We operate 24/7
              across the country to ensure no patient has to wait for life-saving transfusions.
            </p>
          </Reveal>
          <Reveal direction="right" className="why__img">
            <img src="/images/image3.jpg" alt="A drop of blood passing between two hands" />
          </Reveal>
        </div>
      </section>
      <ImpactSection />
    </>
  );
}

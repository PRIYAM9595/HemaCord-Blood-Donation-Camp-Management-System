import { useSearchParams } from "react-router-dom";
import { Building2, Music2, PartyPopper, ShieldCheck, Truck } from "lucide-react";
import { campCities } from "../data/site";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { CampForm } from "../components/Forms";

export function OrganizeCampPage() {
  const [searchParams] = useSearchParams();
  const cityParam = searchParams.get("city");
  const selectedCity = campCities.find((item) => item.slug === cityParam);
  return (
    <>
      <PageHero
        eyebrow="Organise a Blood Donation Camp"
        title="Organise a Blood Donation Camp"
        subtitle="You are one step closer to being a superhero. Organize a blood donation camp in your college, office, society and get that superman cape. We would take care of the process end-to-end."
        image="/images/image7.jpg"
      >
        <a href="#request-callback" className="btn btn--light btn--lg">
          Request Callback
        </a>
      </PageHero>
      <section className="section">
        <div className="container split">
          <Reveal direction="left" className="split__text">
            <p className="eyebrow">The Basics</p>
            <h2 className="h2">What are Blood Donation Camps</h2>
            <p className="lead">
              Rather than going to the hospital to donate blood, we bring the hospital to you. We
              partner with government recognized blood banks who bring their expert doctors and
              staff to conduct a clean blood donation camp without any hassles. The camp can be
              organized in a common area or in a blood donation bus which we can bring. We make all
              the other arrangements, you just have to provide a ventilated clean area. Now saving
              lives does not need any travel even, just 20 minutes at the camp!
            </p>
            <div className="mini-feats">
              <div>
                <ShieldCheck size={20} /> Govt. approved blood banks
              </div>
              <div>
                <Truck size={20} /> Donation bus available
              </div>
              <div>
                <Building2 size={20} /> Just provide a clean area
              </div>
            </div>
          </Reveal>
          <Reveal direction="right" className="split__media">
            <div className="frame">
              <img src="/images/image1.jpg" alt="Blood donation in progress" />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container split split--reverse">
          <Reveal direction="right" className="split__text">
            <p className="eyebrow">Make it memorable</p>
            <h2 className="h2">
              How we can make them <em>different</em>
            </h2>
            <p className="lead">
              We do not just help you organize a camp, but we also try to ensure each donor feels
              special. A blood donation camp can be fun with music, it can have a theme, it can
              motivate people for greater things. We help you do that, right from motivating people
              before the camp to ensuring each donor feels a sense of pride and happiness post
              donation.
            </p>
            <div className="mini-feats">
              <div>
                <Music2 size={20} />
                {" Music & themes"}
              </div>
              <div>
                <PartyPopper size={20} /> Recognition for every donor
              </div>
            </div>
          </Reveal>
          <Reveal direction="left" className="split__media">
            <div className="frame frame--tilt">
              <img src="/images/image4.jpg" alt="Donate blood save a life" className="contain" />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section" id="request-callback">
        <div className="container form-wrap">
          <Reveal className="form-card">
            <p className="eyebrow">
              Fill this form and a volunteer would be in touch with you soon
            </p>
            <h2 className="h2">Organize a Camp or an Awareness Session</h2>
            {selectedCity && (
              <p className="form-note">
                Camp request for <strong>{selectedCity.name}</strong>
              </p>
            )}
            <CampForm defaultCity={selectedCity ? selectedCity.name : ""} />
          </Reveal>
        </div>
      </section>
    </>
  );
}

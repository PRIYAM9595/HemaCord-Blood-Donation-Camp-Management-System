import { PageHero } from "../components/PageHero";
import { site } from "../data/site";

export function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Privacy Policy"
        subtitle="How HemaCord Foundation collects, uses and protects your information."
      />
      <section className="section">
        <div className="container prose">
          <h2>Information we collect</h2>
          <p>
            When you register as a donor, volunteer, request a camp or contact us, we collect
            details such as your name, email, phone number, date of birth, blood group and city so
            that we can respond to your request.
          </p>
          <h2>How we use it</h2>
          <p>
            We use your information only to connect donors with people in need, to inform you about
            nearby blood donation camps, to onboard volunteers and to reply to your queries. We do
            not sell our database and we do not send spam.
          </p>
          <h2>Contact frequency</h2>
          <p>
            Camp communication is mainly via email and messages. For emergency requests we may call,
            but never more than two times a month, and you can deregister at any time.
          </p>
          <h2>Data security</h2>
          <p>
            We take reasonable measures to protect your data. Online payments are processed by a
            secure third-party payment provider and HemaCord does not store any payment information.
          </p>
          <h2>Your choices</h2>
          <p>
            You can ask us to update or delete your details at any time by writing to{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}

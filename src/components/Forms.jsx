import { useFormSubmit } from "../hooks/useFormSubmit";
import { Input, Select, SubmitButton, Textarea } from "./FormFields";
import { bloodGroups, donorCities, volunteerCities } from "../data/content";

export function DonorForm() {
  const { status, submit, reset } = useFormSubmit();
  return (
    <form className="form" onSubmit={(r) => submit(r, "donor")}>
      <Input label="Your Name" name="name" required placeholder="Full name" />
      <Input
        label="Email Address"
        name="email"
        type="email"
        required
        placeholder="you@example.com"
      />
      <Input label="Phone Number" name="phone" type="tel" required placeholder="+91" />
      <Input label="Date of Birth" name="dob" type="date" required />
      <Select
        label="Gender"
        name="gender"
        required
        options={["Male", "Female"]}
        placeholder="Select gender"
      />
      <Select
        label="Blood Group"
        name="bloodGroup"
        required
        options={bloodGroups}
        placeholder="Select Blood Group"
      />
      <Select
        label="City Region"
        name="city"
        required
        full
        options={donorCities}
        placeholder="--select a city--"
      />
      <div className="form__submit">
        <SubmitButton status={status} label="Register as a Donor" onReset={reset} />
      </div>
    </form>
  );
}
export function CampForm({ defaultCity = "", idPrefix = "camp" }) {
  const { status, submit, reset } = useFormSubmit();
  return (
    <form className="form" onSubmit={(i) => submit(i, "camp")} id={idPrefix}>
      <Input label="Your name" name="name" required placeholder="Full name" />
      <Input label="Your email" name="email" type="email" required placeholder="you@example.com" />
      <Input label="Phone Number" name="phone" type="tel" required placeholder="+91" />
      <Input
        key={defaultCity}
        label="City"
        name="city"
        required
        defaultValue={defaultCity}
        placeholder="Your city"
      />
      <Input label="State" name="state" placeholder="Your state" />
      <Input
        label="Name of your Organisation"
        name="organisation"
        placeholder="College / Company / RWA"
      />
      <Textarea label="Any other information you would like to share? (optional)" name="info" />
      <div className="form__submit">
        <SubmitButton status={status} label="Request Callback" onReset={reset} />
      </div>
    </form>
  );
}
export function VolunteerForm() {
  const { status, submit, reset } = useFormSubmit();
  return (
    <form className="form" onSubmit={(r) => submit(r, "volunteer")}>
      <Input label="Your Name" name="name" required placeholder="Full name" />
      <Input
        label="Email Address"
        name="email"
        type="email"
        required
        placeholder="you@example.com"
      />
      <Input label="Phone" name="phone" type="tel" required placeholder="+91" />
      <Select
        label="Education Detail"
        name="education"
        required
        options={["Student", "Professional", "Other"]}
      />
      <Input label="Year of Graduation" name="gradYear" required placeholder="e.g. 2027" />
      <Input label="Organization" name="organization" required placeholder="College / Company" />
      <Select
        label="City in which you wish to volunteer"
        name="city"
        required
        options={volunteerCities}
        full
      />
      <Select
        label="Why do you want to be a part of HemaCord?"
        name="why"
        required
        full
        options={[
          "Social Service",
          "Because my friends are also working here",
          "For my resume",
          "I love to travel",
          "I like to speak with people",
          "Nothing Specific",
        ]}
      />
      <Select
        label="How did you get to know about HemaCord?"
        name="source"
        required
        full
        options={[
          "Through HemaCord Member",
          "In an event/camp of HemaCord",
          "Website",
          "Facebook",
          "Instagram",
          "Twitter",
          "Linkedin",
          "Other",
        ]}
      />
      <Input
        label="Do you have a personal contact in the HemaCord team? If yes, please mention his/her name."
        name="contact"
        full
      />
      <Textarea
        label="Do you have prior experience in volunteering with any NGO or any other extra-curricular activities?"
        name="experience"
      />
      <div className="form__submit">
        <SubmitButton status={status} label="Submit" onReset={reset} />
      </div>
    </form>
  );
}
export function ContactForm() {
  const { status, submit, reset } = useFormSubmit();
  return (
    <form className="form" onSubmit={(r) => submit(r, "contact")}>
      <Input label="Your name" name="name" required placeholder="Full name" />
      <Input
        label="Email Address"
        name="email"
        type="email"
        required
        placeholder="you@example.com"
      />
      <Input label="Phone Number" name="phone" type="tel" required placeholder="+91" />
      <Input label="City" name="city" required placeholder="Your city" />
      <Textarea label="Your message (optional)" name="message" />
      <div className="form__submit">
        <SubmitButton status={status} label="Send Message" onReset={reset} />
      </div>
    </form>
  );
}

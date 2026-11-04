import { useState } from "react";
import { useFormSubmit } from "../hooks/useFormSubmit";
import { Input, PhoneInput, Select, SubmitButton, Textarea } from "./FormFields";
import { bloodGroups, donorCities, volunteerCities } from "../data/content";

const MIN_DONOR_AGE = 18;
const pad = (n) => String(n).padStart(2, "0");
const toISO = (d) => d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
// latest allowed date of birth = today minus the minimum age
function maxDobForMinAge(age) {
  const t = new Date();
  return toISO(new Date(t.getFullYear() - age, t.getMonth(), t.getDate()));
}
const DOB_MSG = "You must be at least " + MIN_DONOR_AGE + " years old to register as a donor.";
// a name/state that is only spaces should not count as filled in
const NOT_BLANK = ".*\\S.*";

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
      <PhoneInput label="Phone Number" name="phone" required placeholder="+91" />
      <Input
        label="Date of Birth"
        name="dob"
        type="date"
        required
        max={maxDobForMinAge(MIN_DONOR_AGE)}
        title={DOB_MSG}
        onInput={(e) => e.target.setCustomValidity("")}
        onInvalid={(e) =>
          e.target.setCustomValidity(e.target.validity.valueMissing ? "" : DOB_MSG)
        }
      />
      <Select
        label="Gender"
        name="gender"
        required
        options={["Male", "Female", "Third Gender"]}
        placeholder="Select gender"
      />
      <Select
        label="Blood Group"
        name="bloodGroup"
        options={[...bloodGroups, "Not Sure"]}
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
      <Input
        label="Your name"
        name="name"
        required
        pattern={NOT_BLANK}
        title="Please enter your name"
        placeholder="Full name"
      />
      <Input label="Your email" name="email" type="email" required placeholder="you@example.com" />
      <PhoneInput label="Phone Number" name="phone" required placeholder="+91" />
      <Input
        key={defaultCity}
        label="City"
        name="city"
        required
        defaultValue={defaultCity}
        placeholder="Your city"
      />
      <Input
        label="State"
        name="state"
        required
        pattern={NOT_BLANK}
        title="Please enter your state"
        placeholder="Your state"
      />
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
  const [education, setEducation] = useState("");
  // Year of Graduation / Organization are optional when Education Detail is "Other"
  const detailsRequired = education !== "Other";
  return (
    <form
      className="form"
      onSubmit={(r) => submit(r, "volunteer")}
      onReset={() => setEducation("")}
    >
      <Input label="Your Name" name="name" required placeholder="Full name" />
      <Input
        label="Email Address"
        name="email"
        type="email"
        required
        placeholder="you@example.com"
      />
      <PhoneInput label="Phone" name="phone" required placeholder="+91" />
      <Select
        label="Education Detail"
        name="education"
        required
        options={["Student", "Professional", "Other"]}
        onChange={(e) => setEducation(e.target.value)}
      />
      <Input
        label="Year of Graduation"
        name="gradYear"
        required={detailsRequired}
        placeholder="e.g. 2027"
      />
      <Input
        label="Organization"
        name="organization"
        required={detailsRequired}
        placeholder="College / Company"
      />
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
      <PhoneInput label="Phone Number" name="phone" required placeholder="+91" />
      <Input label="City" name="city" required placeholder="Your city" />
      <Textarea label="Your message (optional)" name="message" />
      <div className="form__submit">
        <SubmitButton status={status} label="Send Message" onReset={reset} />
      </div>
    </form>
  );
}

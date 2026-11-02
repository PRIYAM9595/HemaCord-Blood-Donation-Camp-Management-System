import { CircleCheck, LoaderCircle } from "lucide-react";

export function Field({ label, required, children, full }) {
  return (
    <label className={`field ${full ? "field--full" : ""}`}>
      <span>
        {label}
        {required && <b>*</b>}
      </span>
      {children}
    </label>
  );
}
export function Input({ label, required, full, ...r }) {
  return (
    <Field label={label} required={required} full={full}>
      <input required={required} {...r} />
    </Field>
  );
}
export function Select({
  label,
  required,
  full,
  options,
  placeholder = "Please select an option",
  ...i
}) {
  return (
    <Field label={label} required={required} full={full}>
      <select required={required} defaultValue="" {...i}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </Field>
  );
}
export function Textarea({ label, required, full = true, ...r }) {
  return (
    <Field label={label} required={required} full={full}>
      <textarea rows={4} required={required} {...r} />
    </Field>
  );
}
export function SubmitButton({ status, label = "Submit", onReset }) {
  return status === "done" ? (
    <div className="form-success">
      <CircleCheck size={28} />
      <div>
        <strong>Thank you!</strong>
        <p>Your details have been received. Our team will connect with you soon.</p>
      </div>
      <button type="button" className="btn btn--ghost btn--sm" onClick={onReset}>
        Send another
      </button>
    </div>
  ) : (
    <button className="btn btn--primary btn--lg" disabled={status === "loading"}>
      {status === "loading" ? (
        <>
          <LoaderCircle size={18} className="spin" /> Sending…
        </>
      ) : (
        label
      )}
    </button>
  );
}

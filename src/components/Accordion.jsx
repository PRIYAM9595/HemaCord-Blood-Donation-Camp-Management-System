import { useState } from "react";
import { Plus } from "lucide-react";

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={item.q} className={`acc ${openIndex === index ? "open" : ""}`}>
          <button
            className="acc__q"
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            aria-expanded={openIndex === index}
          >
            <span>{item.q}</span>
            <span className="acc__icon">
              <Plus size={18} />
            </span>
          </button>
          <div className="acc__a">
            <div>
              <p>{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

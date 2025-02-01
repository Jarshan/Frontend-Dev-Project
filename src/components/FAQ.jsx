import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="bg-gray-100 p-6">
      <h3 className="text-center text-indigo-700 text-xl font-bold">Frequently Asked Questions</h3>
      <div className="max-w-2xl mx-auto mt-4">
        {["Lorem ipsum dolor sit amet?", "Tortor scelerisque integer?", "Facibus scelerisque nunc?"].map((question, index) => (
          <div key={index} className="bg-white p-4 mt-2 rounded shadow">
            <button className="w-full text-left font-semibold" onClick={() => toggle(index)}>
              {question}
              <span className="float-right">{open === index ? "−" : "+"}</span>
            </button>
            {open === index && <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet...</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

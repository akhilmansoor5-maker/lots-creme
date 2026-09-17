"use client";

import { useState } from "react";
import { site } from "@/data/site";

export function InquiryForm() {
  const [occasion, setOccasion] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const href = (() => {
    const parts = [
      "Hello Lots. Crème, I'd like to enquire about a custom cake.",
      occasion && `Occasion: ${occasion}`,
      date && `Needed by: ${date}`,
      notes && `Notes: ${notes}`,
    ].filter(Boolean);
    return `https://wa.me/918714371004?text=${encodeURIComponent(parts.join("\n"))}`;
  })();

  return (
    <form
      className="space-y-5"
      onSubmit={(event) => {
        event.preventDefault();
        window.open(href, "_blank", "noopener,noreferrer");
      }}
    >
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-charcoal">Occasion</span>
        <input
          value={occasion}
          onChange={(event) => setOccasion(event.target.value)}
          placeholder="Birthday, wedding"
          className="input"
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-charcoal">Date needed</span>
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          className="input"
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-charcoal">Notes</span>
        <textarea
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          rows={4}
          placeholder="Size, flavours, colours"
          className="input min-h-[120px]"
        />
      </label>
      <button type="submit" className="btn btn-gold w-full">
        Send on WhatsApp
      </button>
      <p className="text-sm" style={{ color: "var(--muted)" }}>
        Opens WhatsApp to {site.phoneDisplay}.
      </p>
    </form>
  );
}

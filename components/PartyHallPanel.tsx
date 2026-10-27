import type { ReactNode } from "react";
import Image from "next/image";
import { images, site } from "@/data/site";

type HallImage = {
  src: string;
  alt: string;
};

type PartyHallPanelProps = {
  compact?: boolean;
  image?: HallImage;
  children?: ReactNode;
};

export function PartyHallPanel({
  compact = false,
  image = images.ctaTerrace,
  children,
}: PartyHallPanelProps) {
  return (
    <div className={`hall-panel ${compact ? "is-compact" : ""}`}>
      <div className="hall-photo">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 800px) 46vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="hall-copy">
        <p className="hall-kicker">At the shop</p>
        <h2 className="hall-title">A room for the gathering</h2>
        <p className="hall-lead">
          The party hall is here, for a birthday, an anniversary, or a small
          corporate table.
        </p>
        <ul className="hall-events">
          {site.partyHall.events.map((event) => (
            <li key={event} className="hall-event">
              {event}
            </li>
          ))}
        </ul>
        {children ? <div className="hall-actions">{children}</div> : null}
      </div>
    </div>
  );
}

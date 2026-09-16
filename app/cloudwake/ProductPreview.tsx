"use client";

import { useRef, useState } from "react";

const views = [
  { name: "Spending", image: "overview.png", alt: "Month-to-date costs, a monthly forecast, daily spending, and alerts in the Cloudwake Mac app" },
  { name: "Changes", image: "changes.png", alt: "Resource changes with AWS identities and creation details in the Cloudwake Mac app" },
  { name: "Savings", image: "savings.png", alt: "Savings opportunities and recommendations in the Cloudwake Mac app" },
];

export function ProductPreview() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const view = views[active];
  return (
    <figure className="cw-product">
      <div className="cw-menu-strip" aria-hidden="true"><span>Cloudwake</span><span className="cw-menu-value">☁ &nbsp; $4,035.00</span><span>Wed 9:41</span></div>
      <div className="cw-preview-tabs" role="tablist" aria-label="Explore Cloudwake">
        {views.map((item, index) => <button key={item.name} ref={(node) => { tabs.current[index] = node; }} type="button" role="tab" id={`cw-tab-${index}`} aria-selected={active === index} aria-controls="cw-preview-panel" tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={(event) => {
          let next = active;
          if (event.key === "ArrowRight") next = (active + 1) % views.length;
          else if (event.key === "ArrowLeft") next = (active + views.length - 1) % views.length;
          else if (event.key === "Home") next = 0;
          else if (event.key === "End") next = views.length - 1;
          else return;
          event.preventDefault(); setActive(next); tabs.current[next]?.focus();
        }}>{item.name}</button>)}
      </div>
      <div id="cw-preview-panel" role="tabpanel" aria-labelledby={`cw-tab-${active}`} tabIndex={0}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="cw-app-screen" src={`/cloudwake/${view.image}`} width="840" height="1280" fetchPriority="high" alt={`${view.alt}. Illustrative demo data.`} />
      </div>
      <figcaption>EXPLORE THE APP <span>Illustrative demo data</span></figcaption>
    </figure>
  );
}

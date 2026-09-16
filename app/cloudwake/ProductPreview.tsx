"use client";

import { useRef, useState } from "react";

const views = [
  { name: "Spending", question: "Where’s it going?", title: "The whole bill.\nThe useful details.", description: "See month-to-date charges, your forecast, and the services driving the bill. Credits stay separate, so they don’t hide your spending.", detail: "Month-to-date · Daily spend · By service", image: "overview.png", alt: "Cloudwake showing month-to-date costs, forecast, daily spend, and costs by AWS service" },
  { name: "Activity", question: "Who created that?", title: "New resource.\nNow you know.", description: "Follow resource changes and the AWS identity behind them. Spot a new instance or database before it becomes a surprise on the bill.", detail: "CloudTrail events · AWS identities · Notifications", image: "changes.png", alt: "Cloudwake showing example resource creation events and the AWS principals responsible" },
  { name: "Savings", question: "Still being used?", title: "Find what’s idle.\nDecide what goes.", description: "Get alerts for resources observed sitting unused. Review AWS savings recommendations and their estimates before making a change.", detail: "Unused-resource alerts · Estimated savings", image: "savings.png", alt: "Cloudwake showing example unused resources and estimated monthly savings" },
  { name: "Teams", question: "Which team owns it?", title: "Put a name\nto the spending.", description: "Group costs by Project or Owner tags. Keep unassigned spending visible, so forgotten tags don’t become forgotten costs.", detail: "Project · Owner · Unassigned", image: "teams.png", alt: "Cloudwake dark appearance showing demo spending grouped by project with an Unassigned category" },
];

export function ProductPreview() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const view = views[active];
  return (
    <div className="cw-tour">
      <div className="cw-preview-tabs" role="tablist" aria-label="Explore Cloudwake features">
        {views.map((item, index) => <button key={item.name} ref={(node) => { tabs.current[index] = node; }} type="button" role="tab" id={`cw-tab-${index}`} aria-selected={active === index} aria-controls="cw-preview-panel" tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={(event) => {
          let next = active;
          if (event.key === "ArrowRight") next = (active + 1) % views.length;
          else if (event.key === "ArrowLeft") next = (active + views.length - 1) % views.length;
          else if (event.key === "Home") next = 0;
          else if (event.key === "End") next = views.length - 1;
          else return;
          event.preventDefault(); setActive(next); tabs.current[next]?.focus();
        }}><span>{item.name}</span><strong>{item.question}</strong></button>)}
      </div>
      <div className="cw-tour-panel" id="cw-preview-panel" role="tabpanel" aria-labelledby={`cw-tab-${active}`} tabIndex={0}>
        <div className="cw-tour-copy"><p className="cw-eyebrow">ONE CLICK FROM YOUR MENU BAR</p><h3>{view.title.split("\n").map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</h3><p>{view.description}</p><div className="cw-tour-detail">{view.detail}</div></div>
        <figure className="cw-product">
          <div className="cw-menu-strip" aria-hidden="true"><span>9:41</span><span className="cw-menu-value">☁ &nbsp; $4,035.00</span></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="cw-app-screen" src={`/cloudwake/${view.image}`} width="840" height="1280" loading="lazy" alt={`${view.alt}. Illustrative demo data.`} />
          <figcaption>Actual app · Illustrative demo data</figcaption>
        </figure>
      </div>
    </div>
  );
}

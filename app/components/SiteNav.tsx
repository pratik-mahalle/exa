"use client";

import { useEffect, useState } from "react";
import styles from "../portfolio.module.css";

const sections = [
  ["about", "About"],
  ["work", "Work"],
  ["projects", "Projects"],
  ["open-source", "Community"],
  ["articles", "Articles"],
  ["talks", "Talks"],
  ["after-hours", "After Hours"],
  ["contact", "Contact"],
];

export function SiteNav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const threshold = window.innerHeight * 0.25;
      let current = "about";
      for (const [id] of sections) {
        if ((document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= threshold) current = id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) current = "contact";
      setActive(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav className={styles.navigation} aria-label="Main navigation">
      <ul>{sections.map(([id, label]) => (
        <li key={id}><a href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={(event) => {
          event.currentTarget.closest("details")?.removeAttribute("open");
        }}>{label}</a></li>
      ))}</ul>
    </nav>
  );
}

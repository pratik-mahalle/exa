"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Message = {
  id: number;
  from: "trace" | "visitor";
  text: string;
  href?: string;
  linkLabel?: string;
};

const prompts = ["What does Pratik build?", "Show me his talks", "What is After Hours?", "How can I reach him?"];

const answers = [
  {
    keywords: ["build", "project", "work", "ship"],
    text: "Pratik builds at the intersection of infrastructure, AI agents, observability, and developer experience. His recent work includes InfrAudit, OpsBot, k8s-mcp, and Failproof Chaos.",
    href: "/#work",
    linkLabel: "Explore selected work",
  },
  {
    keywords: ["talk", "speak", "conference", "openssf", "community"],
    text: "Pratik speaks about cloud-native systems, security, observability, AI, and the lessons hidden inside engineering failures.",
    href: "/talks",
    linkLabel: "See talks and appearances",
  },
  {
    keywords: ["after hours", "afterhours", "relops", "show", "host"],
    text: "After Hours by RelOps Studio is Pratik's candid conversation series about the parts of a tech career that rarely make the polished version.",
    href: "/talks#after-hours",
    linkLabel: "Meet the series",
  },
  {
    keywords: ["contact", "reach", "email", "mail", "hire", "collaborate"],
    text: "The quickest route is email. Pratik is also active on LinkedIn and X.",
    href: "mailto:mahallepratik683@gmail.com",
    linkLabel: "Email Pratik",
  },
  {
    keywords: ["write", "article", "blog", "read"],
    text: "Pratik writes about infrastructure, developer relations, open source, and the practical side of building reliable systems.",
    href: "/articles",
    linkLabel: "Read his writing",
  },
];

const fallback = {
  text: "I know Pratik's projects, talks, writing, After Hours series, and contact details. Try asking about one of those and I'll point you in the right direction.",
};

function findAnswer(question: string) {
  const normalized = question.toLowerCase();
  return answers.find((answer) => answer.keywords.some((keyword) => normalized.includes(keyword))) ?? fallback;
}

export function TraceSidekick() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, from: "trace", text: "Hey, I'm Trace — your sidekick. Ask me where to look." },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const messageId = useRef(2);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  function ask(question: string) {
    const trimmed = question.trim();
    if (!trimmed) return;

    const answer = findAnswer(trimmed);
    setMessages((current) => [
      ...current,
      { id: messageId.current++, from: "visitor", text: trimmed },
      { id: messageId.current++, from: "trace", ...answer },
    ]);
    setInput("");
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ask(input);
  }

  return (
    <div className="trace-sidekick">
      {isOpen && (
        <section className="trace-panel" aria-label="Trace sidekick">
          <div className="trace-header">
            <div className="trace-identity">
              <span className="trace-avatar" aria-hidden="true">T</span>
              <div><strong>Trace</strong><span><i /> Sidekick</span></div>
            </div>
            <button className="trace-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close Trace">×</button>
          </div>

          <div className="trace-messages" aria-live="polite">
            {messages.map((message) => (
              <div className={`trace-message trace-message-${message.from}`} key={message.id}>
                <p>{message.text}</p>
                {message.href && <a href={message.href}>{message.linkLabel} <span aria-hidden="true">↗</span></a>}
              </div>
            ))}
          </div>

          {messages.length === 1 && (
            <div className="trace-prompts" aria-label="Suggested questions">
              {prompts.map((prompt) => <button type="button" key={prompt} onClick={() => ask(prompt)}>{prompt}</button>)}
            </div>
          )}

          <form className="trace-form" onSubmit={submit}>
            <label className="sr-only" htmlFor="trace-question">Ask Trace a question</label>
            <input ref={inputRef} id="trace-question" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about Pratik..." autoComplete="off" />
            <button type="submit" aria-label="Send question">↗</button>
          </form>
        </section>
      )}

      <button className="trace-launcher" type="button" onClick={() => setIsOpen((current) => !current)} aria-expanded={isOpen} aria-label={isOpen ? "Close Trace" : "Ask Trace, Pratik's sidekick"}>
        <span className="trace-launcher-mark">T</span>
        <span>Ask Trace</span>
        <i aria-hidden="true" />
      </button>
    </div>
  );
}

"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Message = {
  id: number;
  from: "trace" | "visitor";
  text: string;
  href?: string;
  linkLabel?: string;
};

type Answer = Omit<Message, "id" | "from">;

type AnswerRule = {
  patterns: RegExp[];
  answer: Answer;
};

const prompts = ["How do you know Pratik?", "What does Pratik build?", "Show me his talks", "Are you actually AI?"];

const answerRules: AnswerRule[] = [
  {
    patterns: [/how do you know pratik/, /you know pratik/, /who (made|created|built) you/],
    answer: {
      text: "We go way back — roughly to the moment he added me to this site. I live here rent-free and know the public version of his story.",
    },
  },
  {
    patterns: [/who is pratik/, /tell me about pratik/, /introduce pratik/, /what is pratik like/],
    answer: {
      text: "Pratik is an open-source advocate, community builder, speaker, and enthusiastic breaker of prototypes. He turns complicated infrastructure ideas into tools and stories people can actually use.",
      href: "/#about",
      linkLabel: "Meet Pratik",
    },
  },
  {
    patterns: [/are you (an? )?(ai|bot)/, /are you real/, /what are you/, /who are you/],
    answer: {
      text: "AI would be a generous description. I'm a tiny collection of useful answers with excellent timing and no dramatic cloud bill.",
    },
  },
  {
    patterns: [/^(hi|hey|hello|yo|sup)\b/, /good (morning|afternoon|evening)/],
    answer: {
      text: "Hey! I'm Trace. I know a suspicious amount about Pratik and exactly where everything is on this site. What's up?",
    },
  },
  {
    patterns: [/how are you/, /how('?s| is) it going/, /what('?s| is) up/],
    answer: {
      text: "Running smoothly, avoiding meetings, and waiting for interesting questions. So, pretty good.",
    },
  },
  {
    patterns: [/thank(s| you)/, /cheers/, /helpful/],
    answer: {
      text: "Anytime. I accept payment in interesting tabs and good conference snacks.",
    },
  },
  {
    patterns: [/^(bye|goodbye|see you)/, /gotta go/],
    answer: {
      text: "Later! I'll be right here, pretending this browser tab is prime real estate.",
    },
  },
  {
    patterns: [/tell me a joke/, /make me laugh/, /something funny/],
    answer: {
      text: "I asked Pratik for a joke. He shipped me instead. Honestly, fair play.",
    },
  },
  {
    patterns: [/favo(u)?rite colo(u)?r/, /what colo(u)?r do you like/],
    answer: {
      text: "Green, apparently. Have you seen this site? I didn't exactly get a vote.",
    },
  },
  {
    patterns: [/\b(build|built|projects?|work|shipped?)\b/],
    answer: {
      text: "Pratik builds at the intersection of infrastructure, AI agents, observability, and developer experience. His recent work includes InfrAudit, OpsBot, k8s-mcp, and Failproof Chaos.",
      href: "/#work",
      linkLabel: "Explore selected work",
    },
  },
  {
    patterns: [/after hours/, /afterhours/, /relops/, /hosted series/],
    answer: {
      text: "After Hours by RelOps Studio is Pratik's candid conversation series about the parts of a tech career that rarely make the polished version.",
      href: "/talks#after-hours",
      linkLabel: "Meet the series",
    },
  },
  {
    patterns: [/contact/, /reach (him|pratik)/, /e-?mail/, /hire/, /collaborate/, /talk to (him|pratik)/],
    answer: {
      text: "The quickest route is email. Pratik is also active on LinkedIn and X. Carrier pigeon support is still in beta.",
      href: "mailto:mahallepratik683@gmail.com",
      linkLabel: "Email Pratik",
    },
  },
  {
    patterns: [/\b(talks?|speaks?|speaker|conference|openssf)\b/, /community day/],
    answer: {
      text: "Pratik speaks about cloud-native systems, security, observability, AI, and the lessons hidden inside engineering failures.",
      href: "/talks",
      linkLabel: "See talks and appearances",
    },
  },
  {
    patterns: [/\b(writes?|writing|articles?|blog|read)\b/],
    answer: {
      text: "Pratik writes about infrastructure, developer relations, open source, and the practical side of building reliable systems.",
      href: "/articles",
      linkLabel: "Read his writing",
    },
  },
];

const fallback = {
  text: "Bold question. That's outside my tiny jurisdiction — I know Pratik, his work, talks, writing, and where the contact button lives. Try me on one of those before I start improvising.",
};

function findAnswer(question: string) {
  const normalized = question.toLowerCase().replace(/\bpratk\b/g, "pratik").trim();
  return answerRules.find((rule) => rule.patterns.some((pattern) => pattern.test(normalized)))?.answer ?? fallback;
}

export function TraceSidekick() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, from: "trace", text: "Hey, I'm Trace — Pratik's sidekick. Ask me where to look." },
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

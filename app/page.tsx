"use client";

import Image from "next/image";
import { useState } from "react";

const AFFILIATE_URL = "https://www.vmoscloud.com/invite/vmosagfyu3rs";

/* ─────────────────── Navbar ─────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#030712]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="CloudPhoneHub logo" width={36} height={36} />
          <span className="text-lg font-bold tracking-tight text-white">
            CloudPhoneHub
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-gray-400 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-400 md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/5 bg-[#030712] px-6 pb-6 pt-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-gray-400 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block rounded-lg bg-indigo-600 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─────────────────── Hero ─────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Glow effect */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[700px] rounded-full bg-indigo-600/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300">
          <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
          Cloud Phone Infrastructure
        </div>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Manage Multiple Cloud Phones{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            from One Dashboard
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
          Control Android cloud devices, automate workflows, and scale
          multi-account operations with ease.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-lg bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-500 hover:shadow-indigo-500/40 sm:w-auto"
          >
            Get Started
          </a>
          <a
            href="#pricing"
            className="w-full rounded-lg border border-white/10 px-8 py-3.5 text-sm font-semibold text-gray-300 transition hover:border-white/20 hover:text-white sm:w-auto"
          >
            View Pricing
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Powered for multi-account teams, resellers, and automation workflows
        </p>
      </div>
    </section>
  );
}

/* ─────────────────── Features ─────────────────── */
const features = [
  {
    title: "Multi-Device Control",
    desc: "Manage dozens of Android cloud phones simultaneously from a unified control panel.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
    ),
  },
  {
    title: "Cloud Phone Automation",
    desc: "Automate repetitive tasks across devices with scripting and batch operations.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
  },
  {
    title: "Real-Time Monitoring",
    desc: "Track device status, performance metrics, and activity logs in real time.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v-5.5" /></svg>
    ),
  },
  {
    title: "Team & Account Management",
    desc: "Organize teams, assign roles, and manage multiple accounts with fine-grained access control.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
    ),
  },
  {
    title: "Secure Remote Access",
    desc: "Access your cloud phone fleet from anywhere with encrypted connections and 2FA.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
    ),
  },
  {
    title: "Scalable Deployment",
    desc: "Scale from 1 to 1,000+ cloud phones instantly with on-demand resource provisioning.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>
    ),
  },
];

function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Everything you need to manage cloud phones
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            A comprehensive toolkit designed for professionals who need reliable,
            scalable cloud phone infrastructure.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition hover:border-indigo-500/30 hover:bg-white/[0.04]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 transition group-hover:bg-indigo-500/20">
                {f.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Use Cases ─────────────────── */
const useCases = [
  {
    title: "Affiliate Marketers",
    desc: "Manage multiple devices to run campaigns across platforms, track performance, and scale affiliate operations without physical hardware.",
    badge: "Marketing",
  },
  {
    title: "Agencies & Parallel Ops",
    desc: "Run parallel account operations for clients — social media management, app testing, and multi-region deployments from a single dashboard.",
    badge: "Agencies",
  },
  {
    title: "Workflow Automation Teams",
    desc: "Automate Android-based workflows at scale — from data entry and form filling to app interactions and scheduled tasks.",
    badge: "Automation",
  },
];

function UseCases() {
  return (
    <section className="border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Use Cases
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Built for teams that move fast
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {useCases.map((u) => (
            <div
              key={u.title}
              className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-8"
            >
              <span className="inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                {u.badge}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-white">{u.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Pricing ─────────────────── */
const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    desc: "Perfect for individuals getting started with cloud phones.",
    features: [
      "Up to 5 cloud phones",
      "Basic automation",
      "Email support",
      "Real-time monitoring",
      "Standard deployment",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    desc: "For growing teams and professional operators.",
    features: [
      "Up to 50 cloud phones",
      "Advanced automation & scripting",
      "Priority support",
      "Team management",
      "API access",
      "Custom workflows",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large-scale operations with dedicated infrastructure.",
    features: [
      "Unlimited cloud phones",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom integrations",
      "On-premise options",
      "24/7 phone support",
    ],
    highlight: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Choose the plan that fits your scale. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-8 transition ${
                p.highlight
                  ? "border-indigo-500/50 bg-indigo-500/[0.06] shadow-lg shadow-indigo-500/10"
                  : "border-white/5 bg-white/[0.02] hover:border-white/10"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-white">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">{p.price}</span>
                <span className="text-gray-400">{p.period}</span>
              </div>
              <p className="mt-3 text-sm text-gray-400">{p.desc}</p>

              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block w-full rounded-lg py-3 text-center text-sm font-semibold transition ${
                  p.highlight
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-500"
                    : "border border-white/10 text-white hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── FAQ ─────────────────── */
const faqs = [
  {
    q: "What is a cloud phone?",
    a: "A cloud phone is a virtual Android device hosted on remote servers. You can control it through your browser — no physical hardware needed. It runs real Android apps just like a physical phone.",
  },
  {
    q: "Who is CloudPhoneHub for?",
    a: "CloudPhoneHub is designed for affiliate marketers, agencies, automation teams, resellers, and anyone who needs to manage multiple Android devices remotely at scale.",
  },
  {
    q: "Can I manage multiple accounts?",
    a: "Yes. CloudPhoneHub is built specifically for multi-account operations. Each cloud phone runs independently with its own IP, storage, and environment — perfect for parallel account management.",
  },
  {
    q: "Is it remote and browser-based?",
    a: "Absolutely. You can access and control all your cloud phones from any modern browser. No downloads, no plugins — just log in and manage your fleet from anywhere.",
  },
  {
    q: "How do I get started?",
    a: "Click the \"Get Started\" button to create your account on our cloud infrastructure. You can have your first cloud phone running within minutes.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/5 bg-white/[0.02] transition hover:border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-sm font-medium text-white">{f.q}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-gray-400 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-gray-400">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Footer ─────────────────── */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" alt="CloudPhoneHub logo" width={32} height={32} />
              <span className="text-lg font-bold text-white">CloudPhoneHub</span>
            </div>
            <p className="max-w-xs text-center text-sm text-gray-500 md:text-left">
              Cloud phone management platform for multi-device control,
              automation, and scalable operations.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Start with Cloud Phone Infrastructure Today
            </a>
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} CloudPhoneHub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────── Page ─────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <UseCases />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

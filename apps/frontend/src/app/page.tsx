import { AddonGrid } from "@/components/addon-grid";
import { AutopilotCalendar } from "@/components/autopilot-calendar";
import { Hero } from "@/components/hero";
import { InboxPanel } from "@/components/inbox-panel";
import { InsightsPanel } from "@/components/insights-panel";
import { PricingTiles } from "@/components/pricing-tiles";
import { StrategyBuilder } from "@/components/strategy-builder";

const heroHighlights = [
  { label: "Campaigns automated", value: "1,240+" },
  { label: "Avg. time saved / week", value: "14 hrs" },
  { label: "AI accuracy score", value: "92%" },
];

const calendarItems = [
  {
    day: "Mon",
    focus: "Trend POV reel",
    channel: "TikTok + IG Reels",
    assets: ["Short video", "Auto captions", "Trending audio"],
  },
  {
    day: "Wed",
    focus: "Problem / Solution carousel",
    channel: "Instagram",
    assets: ["Carousel", "AI copy", "Hashtag pack"],
  },
  {
    day: "Fri",
    focus: "Thought-leadership pulse",
    channel: "LinkedIn",
    assets: ["Article snippet", "Lead magnet CTA"],
  },
  {
    day: "Sun",
    focus: "Newsletter remix",
    channel: "Email + Threads",
    assets: ["Email", "Thread", "Creative variations"],
  },
];

const insightHighlights = [
  { label: "Engagement", value: "5.4%", delta: "+18% WoW" },
  { label: "Audience growth", value: "+3,420", delta: "+9% MoM" },
  { label: "SEO velocity", value: "12 keywords ↑", delta: "+4 vs last sprint" },
];

const insightPredictions = [
  {
    statement: "Launch a 30s Reel using the “before automation vs after” storyline for 1.7x reach.",
    channel: "Instagram Reels",
    confidence: 86,
  },
  {
    statement: "Repurpose tomorrow’s blog intro into a LinkedIn carousel to capture authority traffic.",
    channel: "LinkedIn",
    confidence: 73,
  },
];

const inboxThreads = [
  {
    id: "thread_001",
    platform: "whatsapp",
    participant: "Thabo · VIP client",
    preview: "Love the new funnel assets. Can we duplicate the TikTok series for Zulu?",
    awaitingApproval: true,
  },
  {
    id: "thread_002",
    platform: "instagram",
    participant: "@futurebloomstudio",
    preview: "Need guidance on boosting the hero post. Any quick wins?",
    awaitingApproval: false,
  },
  {
    id: "thread_003",
    platform: "linkedin",
    participant: "Chantelle · Marketing Lead",
    preview: "AI assistant drafted a reply on reporting cadence. Ready to approve?",
    awaitingApproval: true,
  },
];

const addOns = [
  {
    title: "Trend prediction radar",
    description: "Detect viral formats, audio, and breakout keywords before they peak.",
    tag: "Trends",
  },
  {
    title: "Live ROI heatmap",
    description: "See which platforms + formats drive revenue in real time.",
    tag: "Analytics",
  },
  {
    title: "Auto-engage bot (ethical)",
    description: "Likes, replies, welcomes, and follow-ups with full audit logs.",
    tag: "Engagement",
  },
  {
    title: "Client report studio",
    description: "One-click, fully branded email or WhatsApp reports with AI narration.",
    tag: "Reporting",
  },
];

const pricingTiers = [
  {
    name: "Basic",
    price: "R1 499",
    audience: "Solo creators & freelancers",
    features: ["3 brand workspaces", "Manual approvals", "Core analytics"],
  },
  {
    name: "Pro",
    price: "R4 999",
    audience: "SMEs & boutique agencies",
    features: ["10 clients", "Autopilot calendar", "WhatsApp inbox"],
  },
  {
    name: "Agency",
    price: "Custom",
    audience: "10+ clients, white-label",
    features: ["Unlimited seats", "Dedicated success", "Private AI credits"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 py-10 font-sans text-zinc-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-8">
        <Hero
          title="Your AI digital marketing team in one dashboard."
          subtitle="Plan strategy, generate on-brand content, orchestrate publishing, reply to every inbox, and ship reports on autopilot."
          highlights={heroHighlights}
        />

        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <AutopilotCalendar items={calendarItems} />
          <StrategyBuilder />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <InsightsPanel highlights={insightHighlights} predictions={insightPredictions} />
          <InboxPanel threads={inboxThreads} />
        </div>

        <AddonGrid items={addOns} />
        <PricingTiles tiers={pricingTiers} />
      </div>
    </div>
  );
}

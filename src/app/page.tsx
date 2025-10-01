import Hero from "./components/Hero";
import CodeSnippets from "./components/CodeSnippets";
import TrustSection from "./components/TrustSection";
import CTA from "./components/CTA";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#06070B]">
      <Hero />
      <CodeSnippets />
      <TrustSection />
      <CTA />
      <footer className="border-t border-white/10 bg-[#06070B] px-6 py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} GhostAuth Inc. All rights reserved.
      </footer>
    </main>
  );
}

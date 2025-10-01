import { ShieldCheck, Lock, Globe, Cloud, Building2 } from "lucide-react";

const logos = [
  { name: "Vercel", alt: "Vercel" },
  { name: "Cloudflare", alt: "Cloudflare" },
  { name: "Stripe", alt: "Stripe" },
  { name: "Shopify", alt: "Shopify" },
  { name: "GitHub", alt: "GitHub" },
];

export default function TrustSection() {
  return (
    <section className="w-full bg-[#06070B] px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <h3 className="text-2xl font-semibold md:text-3xl">Security you can prove</h3>
            <p className="mt-2 text-white/70">Passkey-native auth with rigorous compliance and global edge delivery.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="mb-2 flex items-center gap-2 text-emerald-300"><ShieldCheck className="h-4 w-4"/>SOC 2 Type II</div>
              <p className="text-white/70">Independent audits and continuous monitoring.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="mb-2 flex items-center gap-2 text-cyan-300"><Lock className="h-4 w-4"/>WebAuthn / FIDO2</div>
              <p className="text-white/70">Hardware-backed credentials. Phishing-resistant.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="mb-2 flex items-center gap-2 text-indigo-300"><Globe className="h-4 w-4"/>Global Edge</div>
              <p className="text-white/70">Low latency in 300+ PoPs. EU/US data residency.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="mb-2 flex items-center gap-2 text-violet-300"><Cloud className="h-4 w-4"/>99.99% SLA</div>
              <p className="text-white/70">Multi-region active-active architecture.</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="mb-4 text-center text-xs uppercase tracking-widest text-white/50">Trusted by builders from</p>
          <div className="grid grid-cols-2 items-center justify-items-center gap-4 text-white/60 sm:grid-cols-3 md:grid-cols-5">
            {logos.map((l) => (
              <div key={l.name} className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-center text-sm">
                {l.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

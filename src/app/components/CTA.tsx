import Link from "next/link";

export default function CTA(){
  return (
    <section id="get-started" className="w-full bg-gradient-to-b from-[#06070B] to-[#0A0D14] px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
        <h3 className="text-2xl font-semibold md:text-3xl">Start verifying users in minutes</h3>
        <p className="mx-auto mt-2 max-w-2xl text-white/70">Create a project, drop in the SDK, and ship passwordless logins with a single call. Your first 10,000 authentications are free.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link href="#" className="rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-white/90">Create free account</Link>
          <Link href="#docs" className="rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10">Quickstart</Link>
        </div>
        <p className="mt-3 text-xs text-white/50">No passwords. No OTPs. Just a touch.</p>
      </div>
    </section>
  );
}

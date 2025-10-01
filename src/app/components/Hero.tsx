"use client";

import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative isolate min-h-[82vh] w-full overflow-hidden bg-[#06070B] text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        {mounted && (
          <Spline
            scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </div>

      {/* Soft gradient vignettes for contrast */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute -left-24 top-0 z-10 h-[60rem] w-[60rem] rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 z-10 h-[60rem] w-[60rem] rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 pb-24 pt-28 md:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Production-ready passkeys & biometrics
        </div>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white drop-shadow md:text-6xl">
          Auth that disappears.
        </h1>
        <p className="max-w-2xl text-balance text-lg leading-relaxed text-white/80 md:text-xl">
          Passwordless authentication that feels invisible. Add
          biometric login to your app in one line of code. Built on
          passkeys and WebAuthn, delivered from the edge.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="#get-started"
            className="group inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Get API key
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="#docs"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Read the docs
          </Link>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/60">
          <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" /> WebAuthn
          </span>
          <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" /> Passkeys
          </span>
          <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> SOC 2 • GDPR
          </span>
          <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Global edge
          </span>
        </div>
      </div>
    </section>
  );
}

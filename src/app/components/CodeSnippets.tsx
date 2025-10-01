"use client";

import { Check, Clipboard } from "lucide-react";
import { useMemo, useState } from "react";

const snippets = {
  javascript: `// 1. Install\nnpm i @ghostauth/js\n\n// 2. Initialize\nimport { GhostAuth } from '@ghostauth/js';\n\nconst auth = new GhostAuth({ apiKey: process.env.NEXT_PUBLIC_GHOSTAUTH_KEY });\n\n// 3. One-line login\nawait auth.login({ method: 'biometric' });\n` ,
  react: `// App.tsx\nimport { GhostAuthProvider, useAuth } from '@ghostauth/react';\n\nfunction LoginButton(){\n  const { login } = useAuth();\n  return <button onClick={() => login('biometric')}>Sign in</button>\n}\n\nexport default function App(){\n  return (\n    <GhostAuthProvider apiKey={import.meta.env.VITE_GHOSTAUTH_KEY}>\n      <LoginButton />\n    </GhostAuthProvider>\n  );\n}\n`,
  curl: `# Exchange WebAuthn for session\ncurl -X POST https://api.ghostauth.com/v1/sessions \\\n  -H 'Authorization: Bearer $GHOSTAUTH_KEY' \\\n  -H 'Content-Type: application/json' \\\n  -d '{"assertion":"<webauthn-assertion>"}'\n`,
};

type Key = keyof typeof snippets;

export default function CodeSnippets(){
  const tabs = useMemo(() => [
    { key: "javascript" as Key, label: "JavaScript" },
    { key: "react" as Key, label: "React" },
    { key: "curl" as Key, label: "cURL" },
  ], []);

  const [active, setActive] = useState<Key>("javascript");
  const [copied, setCopied] = useState<Key | null>(null);

  const copy = async (key: Key) => {
    try {
      await navigator.clipboard.writeText(snippets[key]);
      setCopied(key);
      setTimeout(() => setCopied(null), 1500);
    } catch {}
  };

  return (
    <section id="docs" className="relative w-full bg-[#0A0D14] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Biometrics in one line</h2>
            <p className="mt-2 text-sm text-white/70">Drop-in SDKs for web and native. Minimal surface, maximum security.</p>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-[#0B0F18] p-2 shadow-2xl shadow-cyan-500/10">
          <div className="mb-2 grid w-full grid-cols-3 gap-1 rounded-lg bg-white/5 p-1 text-sm">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={
                  `rounded-md px-3 py-2 transition ${
                    active === t.key ? "bg-[#101522] text-white" : "text-white/70 hover:text-white"
                  }`
                }
                aria-pressed={active === t.key}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <button
              onClick={() => copy(active)}
              className="absolute right-3 top-3 z-10 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-white/80 hover:bg-white/10"
            >
              {copied === active ? <Check className="h-3.5 w-3.5 text-emerald-400"/> : <Clipboard className="h-3.5 w-3.5"/>}
              {copied === active ? 'Copied' : 'Copy'}
            </button>

            <pre className="overflow-x-auto rounded-lg bg-black/50 p-4 text-sm leading-relaxed text-cyan-100">
              <code>{snippets[active]}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon, WhatsAppLink } from "@/components/cta-link";
import { messages } from "@/content/landing";

// Barra de WhatsApp no mobile: aparece depois que o CTA do hero sai da tela.
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("topo");
    if (!hero) return;
    const io = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      rootMargin: "0px 0px -40% 0px",
    });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-bordo/10 bg-nevoa/95 p-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      inert={!visible}
    >
      <WhatsAppLink
        message={messages.hero}
        cta="sticky-mobile"
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-bordo font-medium text-nevoa"
      >
        <WhatsAppIcon />
        Consultar o 18 Pro Max
      </WhatsAppLink>
    </div>
  );
}

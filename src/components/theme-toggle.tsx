"use client";

import { useEffect, useState } from "react";

/* Os quatro modos da linguagem, nesta ordem. A string vazia e o claro,
   que nao tem classe: e o :root nu.

   O escuro azul chama-se deep-blue; dark, no pure, e o grafite neutro.
   Quem ja visitou o site tem "dark" guardado, e naquele tempo dark ERA o
   azul: por isso o valor antigo e traduzido em vez de descartado. Zerar
   a preferencia de quem volta e a saida preguicosa. */
const MODES = [
  { value: "", label: "Light", icon: "sun" },
  { value: "paper-like", label: "Paper-like", icon: "book" },
  { value: "deep-blue", label: "Deep blue", icon: "moon" },
  { value: "dark", label: "Dark", icon: "contrast" },
] as const;

const CLASSES = MODES.map((m) => m.value).filter(Boolean);

export function ThemeToggle() {
  const [mode, setMode] = useState("");

  useEffect(() => {
    setMode(CLASSES.find((c) => document.documentElement.classList.contains(c)) ?? "");
  }, []);

  function apply(next: string) {
    setMode(next);
    document.documentElement.classList.remove(...CLASSES);
    if (next) document.documentElement.classList.add(next);
    try {
      localStorage.setItem("theme", next || "light");
    } catch {}
    /* a moldura do navegador acompanha o fundo do modo: sem isto ela fica
       com a cor do sistema e a pagina termina antes da janela */
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      const probe = document.createElement("div");
      probe.style.cssText = "position:absolute;visibility:hidden;color:var(--bg)";
      document.body.appendChild(probe);
      meta.setAttribute("content", getComputedStyle(probe).color);
      probe.remove();
    }
  }

  /* O aglomerado liquido: quatro unidades de TAMANHO FIXO que se fundem
     pelo filtro goo. Tamanho fixo e a condicao do material, nao um
     detalhe: as duas camadas sao espelhos, e uma largura que depende do
     texto so se espelha medindo texto, e medir e javascript.

     E por isso que aqui o rotulo sai e fica so o icone. O nome do modo
     nao desaparece: ele vira aria-label e title, entao o leitor de tela
     o ouve e o ponteiro o le. Rotulo de largura variavel continua sendo
     .pill em qualquer outro lugar da pagina. */
  return (
    <div className="liquid liquid-tight modes" role="group" aria-label="Colour mode">
      <div className="liquid-sheet" aria-hidden="true">
        {MODES.map((m) => (
          <span key={m.value || "light"} className="liquid-blob" />
        ))}
      </div>
      <div className="liquid-content">
        {MODES.map((m) => (
          <button
            key={m.value || "light"}
            type="button"
            className="liquid-item"
            aria-pressed={mode === m.value}
            aria-label={m.label}
            title={m.label}
            onClick={() => apply(m.value)}
          >
            <svg className="icon icon-sm" aria-hidden="true">
              <use href={`/pure/icons.svg#${m.icon}`} />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}

import type { Metadata, Viewport } from "next";
import { Archivo, Public_Sans, Spline_Sans_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

/* As tres familias da linguagem, tres papeis. Archivo so em titulo de
   secao, Public Sans na lingua, Spline Sans Mono no dado.

   O eixo wdth vem declarado porque o titulo se separa do texto por
   LARGURA, nao por familia serifada: sem ele --font-display-stretch
   resolve e nao faz nada, e o titulo perde a unica coisa que o separa. */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

const splineMono = Spline_Sans_Mono({
  variable: "--font-spline-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://delunalab.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "delunalab",
    template: "%s — delunalab",
  },
  description:
    "Madson de Luna's lab: bioinformatics tools, data apps, and science software for researchers.",
  keywords: [
    "bioinformatics",
    "data science",
    "research software",
    "science tools",
    "delunalab",
    "Madson de Luna",
  ],
  authors: [{ name: "Madson de Luna", url: BASE_URL }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "delunalab",
    title: "delunalab",
    description:
      "Bioinformatics tools, data apps, and science software for researchers.",
  },
  twitter: {
    card: "summary",
    title: "delunalab",
    description:
      "Bioinformatics tools, data apps, and science software for researchers.",
  },
  /* a marca do casaco do retrato, vetorizada da ilustracao */
  icons: { icon: [{ url: "/mark.svg", type: "image/svg+xml" }] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${publicSans.variable} ${splineMono.variable}`}
      suppressHydrationWarning
    >
      <body className="lit-cursor-only">
        <Script src="/theme-init.js" strategy="beforeInteractive" />

        {/* A lente do cursor. Ela dobra o fundo em vez de desfoca-lo, e o
            filtro precisa morar NESTE documento: backdrop-filter: url(#id)
            nao resolve entre arquivos. */}
        <svg className="pure-defs" aria-hidden="true" focusable="false" width="0" height="0">
          <defs>
{/* Os tres filtros goo, que sao o que funde uma gota na vizinha. Os
    numeros nao sao tokens: feColorMatrix nao le var(), e a coluna da
    ponte foi medida na tela, nao estimada. */}
  <filter id="pure-goo-tight" x="-40%" y="-40%" width="180%" height="180%" colorInterpolationFilters="sRGB">
    <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"/>
    <feColorMatrix in="blur" type="matrix"
      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7.83" result="goo"/>
    <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
  </filter>

  <filter id="pure-goo" x="-40%" y="-40%" width="180%" height="180%" colorInterpolationFilters="sRGB">
    <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"/>
    <feColorMatrix in="blur" type="matrix"
      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"/>
    <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
  </filter>

  <filter id="pure-goo-wide" x="-40%" y="-40%" width="180%" height="180%" colorInterpolationFilters="sRGB">
    <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur"/>
    <feColorMatrix in="blur" type="matrix"
      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 16 -6.17" result="goo"/>
    <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
  </filter>
  <filter id="pure-lens" x="-50%" y="-50%" width="200%" height="200%"
          primitiveUnits="objectBoundingBox" colorInterpolationFilters="sRGB">
    <feImage href="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22r%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%220%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(255%2C0%2C0)%22%2F%3E%3Cstop%20offset%3D%220.06%22%20stop-color%3D%22rgb(190%2C0%2C0)%22%2F%3E%3Cstop%20offset%3D%220.3%22%20stop-color%3D%22rgb(136%2C0%2C0)%22%2F%3E%3Cstop%20offset%3D%220.5%22%20stop-color%3D%22rgb(128%2C0%2C0)%22%2F%3E%3Cstop%20offset%3D%220.7%22%20stop-color%3D%22rgb(120%2C0%2C0)%22%2F%3E%3Cstop%20offset%3D%220.94%22%20stop-color%3D%22rgb(66%2C0%2C0)%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(0%2C0%2C0)%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(0%2C255%2C0)%22%2F%3E%3Cstop%20offset%3D%220.06%22%20stop-color%3D%22rgb(0%2C190%2C0)%22%2F%3E%3Cstop%20offset%3D%220.3%22%20stop-color%3D%22rgb(0%2C136%2C0)%22%2F%3E%3Cstop%20offset%3D%220.5%22%20stop-color%3D%22rgb(0%2C128%2C0)%22%2F%3E%3Cstop%20offset%3D%220.7%22%20stop-color%3D%22rgb(0%2C120%2C0)%22%2F%3E%3Cstop%20offset%3D%220.94%22%20stop-color%3D%22rgb(0%2C66%2C0)%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(0%2C0%2C0)%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22rgb(128%2C128%2C0)%22%2F%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%22100%22%20r%3D%22100%22%20fill%3D%22url(%23r)%22%2F%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%22100%22%20r%3D%22100%22%20fill%3D%22url(%23g)%22%20style%3D%22mix-blend-mode%3Ascreen%22%2F%3E%3C%2Fsvg%3E" x="0" y="0" width="1" height="1" preserveAspectRatio="none" result="lens-body"/>
    <feImage href="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22r%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%220%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(255%2C0%2C0)%22%2F%3E%3Cstop%20offset%3D%220.1%22%20stop-color%3D%22rgb(128%2C0%2C0)%22%2F%3E%3Cstop%20offset%3D%220.9%22%20stop-color%3D%22rgb(128%2C0%2C0)%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(0%2C0%2C0)%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(0%2C255%2C0)%22%2F%3E%3Cstop%20offset%3D%220.1%22%20stop-color%3D%22rgb(0%2C128%2C0)%22%2F%3E%3Cstop%20offset%3D%220.9%22%20stop-color%3D%22rgb(0%2C128%2C0)%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(0%2C0%2C0)%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22rgb(128%2C128%2C0)%22%2F%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%22100%22%20r%3D%22100%22%20fill%3D%22url(%23r)%22%2F%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%22100%22%20r%3D%22100%22%20fill%3D%22url(%23g)%22%20style%3D%22mix-blend-mode%3Ascreen%22%2F%3E%3C%2Fsvg%3E" x="0" y="0" width="1" height="1" preserveAspectRatio="none" result="lens-rim"/>
    <feDisplacementMap in="SourceGraphic" in2="lens-body" scale="0.52" xChannelSelector="R" yChannelSelector="G" result="lens-warp"/>
    <feDisplacementMap in="lens-warp" in2="lens-rim" scale="0.18" xChannelSelector="R" yChannelSelector="G" result="lens-bent"/>
    <feGaussianBlur in="lens-bent" stdDeviation="0.005"/>
  </filter>
          </defs>
        </svg>
        <div className="lit-cursor" aria-hidden="true" />

        {children}

        {/* o unico script da linguagem: mede uma caixa e escreve tres
            numeros. Nenhum nome de efeito aparece nele. */}
        <Script src="/pure/light.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

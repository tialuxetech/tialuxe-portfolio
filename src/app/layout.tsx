import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Space_Grotesk, Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";
import "./refinements.css";
import "./vibrance.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600", "700"], display: "swap" });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], variable: "--font-serif", weight: "400", style: ["normal", "italic"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Tialuxe Tech — Adetunji Tiamiyu", template: "%s | Tialuxe Tech" },
  description: "Tialuxe Tech is the portfolio of Adetunji Tiamiyu, building considered WordPress platforms, commerce experiences and modern front ends.",
  authors: [{ name: "Adetunji Tiamiyu" }],
  openGraph: { title: "Tialuxe Tech — Adetunji Tiamiyu", description: "Thoughtful digital experiences with personality and purpose.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable}`}><body><ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange><a className="skip-link" href="#main">Skip to content</a><SmoothScroll /><SiteHeader />{children}<footer className="site-footer"><div className="section-shell footer-inner"><div><Link className="footer-brand" href="/">TIALUXE <span>TECH.</span></Link><p>Thoughtful websites, built with care.</p></div><div className="footer-links"><Link href="/#about">About ↗</Link><Link href="/work">Work ↗</Link><Link href="/#contact">Contact ↗</Link><a href="https://github.com/tialuxetech" target="_blank" rel="noreferrer">GitHub ↗</a></div><span className="footer-small">© {new Date().getFullYear()} Tialuxe Tech · Adetunji Tiamiyu · Lagos, Nigeria</span></div></footer></ThemeProvider></body></html>;
}

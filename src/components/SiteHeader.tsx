"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [{ href: "/#about", label: "About" }, { href: "/#services", label: "Expertise" }, { href: "/work", label: "Work" }, { href: "/#contact", label: "Contact" }];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner section-shell"><Link className="brand" href="/" aria-label="Tialuxe Tech, home" onClick={() => setOpen(false)}><Image src="/tialuxe-logo.svg" alt="" width={139} height={70} /></Link><nav className={`main-nav${open ? " nav-open" : ""}`} id="main-navigation" aria-label="Main navigation">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}</nav><div className="header-actions"><ThemeToggle /><Link className="header-contact" href="/#contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link><button className={`menu-toggle${open ? " is-open" : ""}`} type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}><span /><span /></button></div></div></header>;
}

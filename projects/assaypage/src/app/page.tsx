"use client";

import Link from "next/link";
import {
  Menu,
  Search,
  Bell,
  Globe,
  UserCircle,
  Settings,
  ArrowDown,
  Database,
  Server,
  Mouse,
  ChevronRight,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const NAV_ITEMS = [
  { label: "Search", icon: Search, href: "/" },
  { label: "Notification", icon: Bell, href: "/" },
  { label: "Languages", icon: Globe, href: "/" },
  { label: "User", icon: UserCircle, href: "/" },
  { label: "Setting", icon: Settings, href: "/" },
];

const HIGHLIGHTS = [
  {
    title: "ACXCD",
    icon: Database,
    description:
      "Lorem ipsum, dolor sit amet consectetur aporro repudiandae dipisicing elit amet consectetur",
  },
  {
    title: "QWEER",
    icon: Server,
    description:
      "Laudantium tenetur porro repud iandae corporis excepturi inventore quo enim cum, voluptatem",
  },
  {
    title: "POIUK",
    icon: Mouse,
    description:
      "Cupiditate excepturi inventore quo enim cum tenetur porro repudiandae corporis saepe elit amet",
  },
];

const SUB_CARDS = [
  {
    title: "Eius consequatur ex harum iure",
    subtitleJp: "これらの権利から得た結果",
    description:
      "praesentium fugiat suscipit dolorem minus eveniet natus ipsum quod, tempora consequuntur possimus neque debitis enim a pariatur animi minima eos repellat doloremque. Nobis, impedit repudiandae?",
  },
  {
    title: "Sit illo obcaecati nemo in soluta nisi",
    subtitleJp: "野放しの場合を除いて、誰もそれによって盲目になってはなりません",
    description:
      "Porro voluptatibus iusto delectus impedit hic sint, magnam dicta sed at repellendus odio error veritatis corporis. Aliquid reprehenderit error dignissimos, quos quae quam.",
  },
];

const WEB_TEMPLATES = [
  { label: "eHotel Gateway", href: "http://train.travflex.com/" },
  { label: "Rama Gardens", href: "http://ramagardens.assaypage.com/" },
  { label: "515Proptech", href: "http://515proptech.assaypage.com/" },
  { label: "Extranet Prototype", href: "http://extranet.assaypage.com" },
  { label: "CMS B/O Design", href: "http://assaypage.com/CMS/" },
  { label: "WPS Templates", href: "http://wps.assaypage.com/" },
  { label: "JTB Sites", href: "http://jtb.assaypage.com/" },
  { label: "JTB - Canada", href: "http://jtbca.assaypage.com/" },
  { label: "Chain Hotels", href: "http://m.assaypage.com/" },
  { label: "Utopia Corp", href: "http://utopia.assaypage.com/" },
];

const BYGONE_JOURNEYS = [
  { label: "Thailand", href: "/journeys/thailand" },
  { label: "Japan", href: "/journeys/japan" },
  { label: "South Korea", href: "/journeys/south-korea" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/runextreme/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/nirv.vana.9",
    icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nirv-vana-8897132a/",
    icon: Linkedin,
  },
];

export default function HomePage() {
  const scrollToContent = () => {
    const el = document.getElementById("main-content");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="rn-background min-h-screen">
      {/* Top Navbar (Absolute over Hero) */}
      <div className="relative w-full z-20">
        <div className="absolute top-0 start-0 w-full">
          <div className="container">
            <div className="flex justify-between items-center">
              {/* Brand Logo */}
              <div className="py-4">
                <Link href="/" className="flex items-center">
                  <img
                    src="/application/images/assaypage-w.svg"
                    alt="ASSAYPAGE"
                    className="max-w-full h-auto"
                  />
                </Link>
              </div>

              {/* Navigation Actions */}
              <div>
                {/* Mobile Offcanvas Trigger (shadcn/ui Sheet) */}
                <div className="block md:hidden">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-white border-0 rounded py-1 px-3 text-base"
                        aria-label="Open menu"
                      >
                        <Menu className="w-5 h-5" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent
                      side="right"
                      className="bg-[#11151c] border-l border-white/15 p-6"
                    >
                      <SheetHeader className="flex flex-row items-center justify-between space-y-0">
                        <SheetTitle className="text-white text-2xl font-normal text-sp">
                          ASSAYPAGE
                        </SheetTitle>
                      </SheetHeader>

                      <div className="py-6">
                        <div className="flex flex-col">
                          {NAV_ITEMS.map((item) => {
                            const Icon = item.icon;
                            return (
                              <div
                                key={item.label}
                                className="border-b rn-border-opacity"
                              >
                                <Button
                                  asChild
                                  variant="outline-ghost"
                                  className="w-full justify-start rounded py-6 px-0 text-base font-normal"
                                >
                                  <Link href={item.href}>
                                    <div className="flex items-center">
                                      <div className="px-2 opacity-50">
                                        <Icon className="w-4 h-4" />
                                      </div>
                                      <div className="px-2">{item.label}</div>
                                    </div>
                                  </Link>
                                </Button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>

                {/* Desktop Icon Menu */}
                <div className="hidden md:block">
                  <div className="flex items-center gap-1">
                    {NAV_ITEMS.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Button
                          key={item.label}
                          asChild
                          variant="outline-ghost"
                          className="rounded py-1 px-3 text-base"
                        >
                          <Link href={item.href} aria-label={item.label}>
                            <Icon className="w-4 h-4" />
                          </Link>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="pb-6">
        <div className="rn-banners">
          <div className="container">
            <div className="flex w-full items-center justify-center min-h-[660px]">
              <div className="flex justify-center w-full">
                <div className="w-full lg:w-8/12">
                  <div className="pb-2 text-center text-white text-4xl sm:text-5xl font-light text-sp rn-gradient">
                    ASSAYPAGE
                  </div>
                  <div className="pb-6 text-center text-base text-white rn-text-shadow leading-relaxed">
                    This website serves as a platform for testing web
                    development and enhancing programming skills. Consequently,
                    it may not offer substantial information to visitors.
                  </div>
                  <div className="pb-6 text-center text-base text-white rn-text-shadow">
                    We apologize for any inconvenience this may cause.
                  </div>
                  <div className="text-center">
                    <Button
                      variant="light"
                      size="icon"
                      onClick={scrollToContent}
                      className="rounded-full w-10 h-10 border-0 animate-bounce"
                      aria-label="Scroll down"
                    >
                      <ArrowDown className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div id="main-content" className="container">
        <div className="py-6">
          {/* 3 Feature Columns (ACXCD, QWEER, POIUK) */}
          <div className="pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:flex lg:justify-center gap-6">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="w-full lg:w-3/12 pb-6 px-0 lg:px-6"
                  >
                    <div className="grid grid-cols-12 gap-4 items-center sm:block">
                      <div className="col-span-4 sm:col-span-12">
                        <div className="pt-2 flex justify-center text-white rn-gradient">
                          <Icon className="w-12 h-12 sm:w-14 sm:h-14 stroke-[1.5]" />
                        </div>
                      </div>
                      <div className="col-span-8 sm:col-span-12 sm:mt-3">
                        <div className="text-2xl sm:text-3xl text-white sm:text-center text-sp">
                          {item.title}
                        </div>
                        <div className="pt-2 text-sm text-white sm:text-center opacity-50 leading-relaxed">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="pb-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Top Full-Width Card */}
              <div className="md:col-span-12">
                <Card className="rn-card rounded h-full">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                      <div className="lg:col-span-6">
                        <div className="px-6">
                          <div className="pb-1 text-center text-white text-xl font-bold text-sp">
                            Consectetur adipisicing elit
                          </div>
                          <div className="pb-2 text-center text-white text-[11px] opacity-25">
                            アディピシションが行われます
                          </div>
                          <div className="pt-2 text-center text-white text-sm opacity-50 leading-relaxed">
                            Placeat atque earum possimus vero ipsam aut est,
                            suscipit nam perspiciatis consectetur incidunt,
                            sint, magni voluptatem ducimus quis itaque deleniti
                            ullam?
                          </div>
                          <div className="pt-6 text-center">
                            <Button
                              variant="outline"
                              className="rounded text-xs py-2 px-6 h-auto"
                            >
                              Read more
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-6 min-h-[280px]" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Bottom 2 Half-Width Cards */}
              {SUB_CARDS.map((card) => (
                <div key={card.title} className="md:col-span-6">
                  <Card className="rn-card rounded h-full">
                    <CardContent className="p-6">
                      <div className="pb-1 text-center text-white text-xl font-bold text-sp">
                        {card.title}
                      </div>
                      <div className="pb-2 text-center text-white text-[11px] opacity-25">
                        {card.subtitleJp}
                      </div>
                      <div className="pt-1 text-center text-white text-sm opacity-50 leading-relaxed">
                        {card.description}
                      </div>
                      <div className="min-h-[280px]" />
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="container">
        {/* Web Templates */}
        <div className="pt-6">
          <div className="flex py-2 px-0">
            <div className="text-white font-bold">Web Templates</div>
          </div>
          <Separator className="bg-white/25" />
          <div className="py-2">
            <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm">
              {WEB_TEMPLATES.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center text-xs text-white"
                >
                  <div className="pe-2">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                  <div className="pe-2">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white no-underline hover:underline"
                    >
                      {item.label}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bygone Journeys */}
        <div className="pt-6">
          <div className="flex py-2 px-0">
            <div className="text-white font-bold">Bygone Journeys</div>
          </div>
          <Separator className="bg-white/25" />
          <div className="py-2">
            <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm">
              {BYGONE_JOURNEYS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center text-xs text-white"
                >
                  <div className="pe-2">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                  <div className="pe-2">
                    <Link
                      href={item.href}
                      className="text-white no-underline hover:underline"
                    >
                      {item.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="pt-6">
          <div className="flex flex-wrap gap-y-2 gap-x-4 justify-center">
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="text-white hover:opacity-80 transition-opacity inline-flex"
                    href={item.href}
                  >
                    <Icon className="w-7 h-7" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 pb-6">
          <div className="text-center text-white text-xs">
            COPYRIGHT &copy; 2024 - ASSAYPAGE. POWERED BY RUNXRUN
          </div>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  {
    name: "Company",
    href: "#",
    subItems: [
      { name: "About Us", href: "/about-us" },
      { name: "Career", href: "/career" },
      { name: "Life @ASTZO", href: "/life-at-astzo" },
    ],
  },
  {
    name: "Resources",
    href: "#",
    subItems: [
      { name: "Documentation", href: "/documentation" },
      { name: "Blog", href: "/blog" },
      { name: "News", href: "/news" },
      { name: "Product Update", href: "/product-update" },
      { name: "Community & Support", href: "/community-and-support" },
    ],
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Modified navbar scrolling effect
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        // Show navbar when scrolling up or near top
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  // Render navigation links (used for both desktop and mobile)
  const renderNavLinks = () => {
    return (
      <>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href || "#"}
            className={`font-semibold text-[16px] text-background transition-all duration-500 hover:text-accent ${
              pathname === item.href && "text-orange-500"
            }`}
          >
            <div className="flex items-center gap-2 w-full px-2 py-1 rounded-md border-none">
              {/* {item?.icon && <item.icon />} */}
              {item.subItems ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="focus:outline-none focus:ring-0">
                    {item.name}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.subItems.map((subItem) => (
                      <DropdownMenuItem key={subItem.name}>
                        <Link
                          href={subItem.href || "#"}
                          className={`w-full text-[16px] font-semibold ${
                            pathname === subItem.href && " text-red-600"
                          }`}
                        >
                          <div className="flex items-center gap-2 w-full ">
                            {/* {subItem?.icon && <subItem.icon />} */}
                            {subItem.name}
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <span>{item.name}</span>
              )}
            </div>
          </Link>
        ))}
      </>
    );
  };

  return (
    <div className="h-[68px]">
      <nav
        id="header"
        className={`w-full fixed top-0 left-0 z-50 bg-primary/90 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-2.5 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold text-background flex items-center gap-0 relative">
            <span>ASTZ</span>
            <svg
              width="100"
              height="100"
              viewBox="0 0 300 300"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute z-10 left-12"
            >
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow
                    dx="0"
                    dy="0"
                    stdDeviation="4"
                    floodColor="orange"
                  />
                  <feDropShadow
                    dx="0"
                    dy="0"
                    stdDeviation="8"
                    floodColor="orange"
                  />
                  <feDropShadow
                    dx="0"
                    dy="0"
                    stdDeviation="12"
                    floodColor="orange"
                  />
                </filter>
              </defs>

              {/* Base O */}
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy=".35em"
                fontSize="120"
                fontFamily="montserrat"
                fill="#FF5C00"
                stroke="none"
                strokeWidth="3"
                filter="url(#)"
              >
                O
              </text>

              {/* Ripple Circles */}
              <circle
                cx="150"
                cy="150"
                r="70"
                stroke="orange"
                strokeWidth="2"
                fill="none"
                filter="url(#glow)"
              >
                <animate
                  attributeName="r"
                  from="70"
                  to="140"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="1"
                  to="0"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle
                cx="150"
                cy="150"
                r="70"
                stroke="orange"
                strokeWidth="2"
                fill="none"
                filter="url(#glow)"
              >
                <animate
                  attributeName="r"
                  from="70"
                  to="140"
                  dur="2s"
                  begin="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="1"
                  to="0"
                  dur="2s"
                  begin="1s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex justify-end items-center gap-2 lg:gap-6 ">
            {renderNavLinks()}
            <Button className="bg-accent text-background text-[16px] font-semibold hover:bg-accent/80 transition-all duration-200">
              <Link href="/contact-us" className="w-full">
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Right Actions */}
          <div className="md:hidden flex items-center gap-2">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className=""
                  aria-label="Open Menu"
                >
                  {open ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-3/4 sm:w-1/2  rounded-lg">
                <div className="flex flex-col gap-2 mt-10 mx-2.5">
                  {renderNavLinks()}
                  <Button className="bg-accent mt-2 text-white text-[16px] font-semibold hover:bg-accent/80 transition-all duration-200">
                    <Link href="/contact-us" className="w-full">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

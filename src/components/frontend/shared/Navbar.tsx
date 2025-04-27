/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
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

  // Add new state to track dropdown open state
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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

      // Close dropdown when scrolling
      if (openDropdown) {
        setOpenDropdown(null);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, openDropdown]);

  // Render navigation links (used for both desktop and mobile)
  const renderNavLinks = () => {
    return (
      <>
        {navItems.map((item) => (
          <div key={item.name} className="relative inline-block">
            <Link
              href={item.href || "#"}
              className={`font-semibold text-[16px] text-background transition-all duration-500 hover:text-accent ${
                pathname === item.href && "text-orange-500"
              }`}
            >
              <div className='flex items-center gap-2 w-full px-2 py-1'>
                {item.subItems ? (
                  <DropdownMenu 
                    modal={false}
                    open={openDropdown === item.name}
                    onOpenChange={(open) => {
                      setOpenDropdown(open ? item.name : null);
                    }}
                  >
                    <DropdownMenuTrigger className='focus:outline-none focus:ring-0'>
                      {item.name}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      className='p-3 mt-4 bg-primary/95 text-background border-none shadow-3xl'
                      sideOffset={5}
                      align="start"
                    >
                      {item.subItems.map((subItem) => (
                        <DropdownMenuItem 
                          key={subItem.name}
                          className="whitespace-nowrap"
                        >
                          <Link
                            href={subItem.href || "#"}
                            className={`w-full text-[16px] font-semibold ${
                              pathname === subItem.href && "text-orange-500"
                            }`}
                          >
                            {subItem.name}
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
          </div>
        ))}
      </>
    );
  };

  return (
    <div className='h-[68px]'>
        <nav
          id='header'
          className={`container mx-auto px-2.5 py-5 flex items-center justify-between fixed top-0 left-0 z-50 bg-primary/90 transition-transform duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Logo */}
          <div className='text-3xl font-bold text-background flex items-center gap-0 relative'>
            <span>ASTZ</span>
            <svg
              width='90'
              height='90'
              viewBox='0 0 300 300'
              xmlns='http://www.w3.org/2000/svg'
              className='absolute z-10 left-13'
            >
              <defs>
                <filter id='glow' x='-50%' y='-50%' width='200%' height='200%'>
                  <feDropShadow
                    dx='0'
                    dy='0'
                    stdDeviation='4'
                    floodColor='orange'
                  />
                  <feDropShadow
                    dx='0'
                    dy='0'
                    stdDeviation='8'
                    floodColor='orange'
                  />
                  <feDropShadow
                    dx='0'
                    dy='0'
                    stdDeviation='12'
                    floodColor='orange'
                  />
                </filter>
              </defs>

              {/* Base O */}
              <text
                x='50%'
                y='50%'
                textAnchor='middle'
                dy='.35em'
                fontSize='120'
                fontFamily='montserrat'
                fill='#FF5C00'
                stroke='none'
                strokeWidth='3'
                filter='url(#)'
              >
                O
              </text>

              {/* Ripple Circles */}
              <circle
                cx='150'
                cy='150'
                r='70'
                stroke='orange'
                strokeWidth='2'
                fill='none'
                filter='url(#glow)'
              >
                <animate
                  attributeName='r'
                  from='70'
                  to='140'
                  dur='2s'
                  repeatCount='indefinite'
                />
                <animate
                  attributeName='opacity'
                  from='1'
                  to='0'
                  dur='2s'
                  repeatCount='indefinite'
                />
              </circle>

              <circle
                cx='150'
                cy='150'
                r='70'
                stroke='orange'
                strokeWidth='2'
                fill='none'
                filter='url(#glow)'
              >
                <animate
                  attributeName='r'
                  from='70'
                  to='140'
                  dur='2s'
                  begin='1s'
                  repeatCount='indefinite'
                />
                <animate
                  attributeName='opacity'
                  from='1'
                  to='0'
                  dur='2s'
                  begin='1s'
                  repeatCount='indefinite'
                />
              </circle>
            </svg>
          </div>

          {/* Desktop Nav */}
          <div className='hidden md:flex justify-end items-center gap-2 lg:gap-6 '>
            {renderNavLinks()}
            <Button className='bg-accent text-background text-[16px] font-semibold hover:bg-accent/80 transition-all duration-200'>
              <Link href='/contact-us' className='w-full'>
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Right Actions */}
          <div className='md:hidden flex items-center gap-2'>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <div className=' text-background'>
                  {open ? (
                    // <X className='h-8 w-8' />
                    ""
                  ) : (
                    <Menu className='h-8 w-8' />
                  )}
                </div>
              </SheetTrigger>
              <SheetContent
                side='left'
                className='w-3/4 sm:w-1/2 rounded-r bg-primary/80 border-none text-white'
              >
                <div className='flex flex-col gap-2 mt-10 mx-2.5'>
                  {renderNavLinks()}
                  <Button className='bg-accent mt-2 text-background text-[16px] font-semibold hover:bg-accent/80 transition-all duration-200'>
                    <Link href='/contact-us' className='w-full'>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
    </div>
  );
};
export default Navbar;

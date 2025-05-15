/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  // { name: "Products", href: "/products" },
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
      // { name: "Documentation", href: "/documentation" },
      { name: "Blog", href: "/blog" },
      // { name: "Product Update", href: "/product-update" },
      { name: "Community", href: "/community" },
      { name: "Support", href: "/support" },
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

  // Handle mouse hover for opening and closing dropdown
  const handleMouseEnter = (itemName: string) => {
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  // Render navigation links (used for both desktop and mobile)
  const renderNavLinks = () => {
    return (
      <div className='flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6 '>
        {navItems.map((item) => (
          <div
            key={item.name}
            className='relative'
            onMouseEnter={() => item.subItems && handleMouseEnter(item.name)}
            onMouseLeave={handleMouseLeave}
          >
            {item.subItems ? (
              // For items with dropdown
              <div className='cursor-pointer'>
                <span
                  className={`font-semibold text-[16px] text-background transition-all duration-500 hover:text-accent`}
                >
                  {item.name}
                </span>
                <div
                  className={`absolute -left-2 top-5 z-50 bg-transparent border-none ${
                    openDropdown === item.name ? "block" : "hidden"
                  }`}
                >
                  <div className='flex flex-col gap-3 mt-2 md:mt-[30px] p-4 rounded bg-background shadow-lg'>
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={`font-semibold text-[16px] text-foreground transition-all duration-500 hover:text-accent whitespace-nowrap ${
                          pathname === subItem.href && "text-orange-500"
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // For items without dropdown
              <Link
                href={item.href}
                className={`font-semibold text-[16px] text-background transition-all duration-500 hover:text-accent ${
                  pathname === item.href && "text-orange-500"
                }`}
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
        <Button className='bg-accent text-background text-[16px] font-semibold hover:bg-accent/80 transition-all duration-200 border-none shadow-none'>
          <Link href='/contact-us' className='w-full'>
            Contact Us
          </Link>
        </Button>
      </div>
    );
  };

  return (
    <header
      className={`w-full h-[78px] fixed flex items-center top-0 left-0 z-50 bg-primary/90 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        id='header'
        className={`container mx-auto px-2.5 flex items-center justify-between `}
      >
        {/* Logo */}
        <div className='text-3xl font-bold text-background flex items-center gap-0 relative tracking-wider'>
          <span>ASTZ</span>
          <svg
            width='90'
            height='90'
            viewBox='0 0 300 300'
            xmlns='http://www.w3.org/2000/svg'
            className='absolute z-10 left-14'
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
        <div className='hidden md:block'>
          {renderNavLinks()}
        </div>

        {/* Right Actions */}
        <div className='block md:hidden'>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <div className=' text-background'>
                {open ? (
                  <X className='h-8 w-8' />
                ) : (
                  <Menu className='h-8 w-8' />
                )}
              </div>
            </SheetTrigger>
            <SheetTitle>{""}</SheetTitle>
            <SheetDescription>{""}</SheetDescription>
            <SheetContent
              side='left'
              className='w-3/4 sm:w-1/2 rounded-r bg-primary/80 border-none text-white overflow-auto'
            >
              <div className='flex flex-col gap-2 mt-10 mx-2.5'>
                {renderNavLinks()}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;

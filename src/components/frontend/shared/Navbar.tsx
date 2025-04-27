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

  //  handle navbar scrolling effect
 const [isFixed, setIsFixed] = useState(false);
 let lastScrollY = 0;

 useEffect(() => {
   const handleScroll = () => {
     const currentScrollY = window.scrollY;

     if (currentScrollY < lastScrollY) {
       // Scrolling Up
       setIsFixed(true);
     } else {
       // Scrolling Down
       setIsFixed(false);
     }

     lastScrollY = currentScrollY;
   };

   window.addEventListener("scroll", handleScroll);

   return () => window.removeEventListener("scroll", handleScroll);
 }, []);

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
            <div className='flex items-center gap-2 w-full px-2 py-1 rounded-md border-none'>
              {/* {item?.icon && <item.icon />} */}
              {item.subItems ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className='focus:outline-none focus:ring-0'>
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
                          <div className='flex items-center gap-2 w-full '>
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
    <nav
      id='header'
      className={`w-full bg-foreground/70 ${
        isFixed ? "fixed  top-0 left-0 z-50" : "static"
      }`}
    >
      <div className='container mx-auto px-2.5 py-4 flex items-center justify-between'>
        {/* Logo */}
        <div className='text-2xl font-bold text-background'>
          ASTZ<span className='text-accent'>O</span>
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
              <Button
                variant='ghost'
                size='icon'
                className=''
                aria-label='Open Menu'
              >
                {open ? (
                  <X className='h-5 w-5' />
                ) : (
                  <Menu className='h-5 w-5' />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='w-3/4 sm:w-1/2  rounded-lg'>
              <div className='flex flex-col gap-2 mt-10 mx-2.5'>
                {renderNavLinks()}
                <Button className='bg-accent mt-2 text-white text-[16px] font-semibold hover:bg-accent/80 transition-all duration-200'>
                  <Link href='/contact-us' className='w-full'>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

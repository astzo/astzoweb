"use client";

import { useState } from "react";
import { Home, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Wrapper from "./Wrapper";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  {
    name: "Company",
    href: "#",
    subItems: [
      { name: "About Us", href: "/company/about-us", icon: Home },
      { name: "Career", href: "/company/career" },
      { name: "Life @ASTZO", href: "/company/life-at-astzo" },
    ],
  },
  {
    name: "Resources",
    href: "#",
    subItems: [
      { name: "Documentation", href: "/resources/documentation" },
      { name: "Blog", href: "/resources/blog" },
      { name: "News", href: "/resources/news" },
      { name: "Product Update", href: "/resources/product-update" },
      { name: "Community & Support", href: "/resources/community-and-support" },
    ],
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Wrapper className='flex items-center justify-between gap-4'>
      {/* Logo */}
      <div className='text-xl font-bold text-primary'>ASTZO</div>

      {/* Desktop Nav */}
      <div className='hidden md:flex gap-6'>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href || "#"}
            className={`text-foreground hover:text-accent ${pathname === item.href && " text-red-600"}`}
          >
            <div className='flex items-center gap-2 w-full hover:bg-secondary px-2 py-1 rounded-md'>
              {item?.icon && <item.icon />}
              {item.subItems ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className='hover:text-primary'>
                    {item.name}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.subItems.map((subItem: any) => (
                      <DropdownMenuItem key={subItem.name}>
                        <Link href={subItem.href || "#"} className={`w-full ${pathname === subItem.href && " text-red-600"}`}>
                          <div className='flex items-center gap-2 w-full '>
                            {subItem?.icon && <subItem.icon />}
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
      </div>

      {/* Right Actions */}
      <div className='md:hidden flex items-center gap-2 '>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className='md:hidden'
              aria-label='Open Menu'
            >
              {open ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='w-3/4 sm:w-1/2'>
            <div className='flex flex-col gap-4 mt-8'>
              {/* renderNavbar here */}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Wrapper>
  );
};
export default Navbar;

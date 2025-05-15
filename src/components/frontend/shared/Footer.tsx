import { Facebook,  Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import whatsapp from "../../../../public/icons/whatsapp.svg"

export default function Footer() {
  return (
    <footer className='bg-slate-900 text-white '>
      <Wrapper className='relative'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
          {/* Company Info */}
          <div className='space-y-4'>
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
                  <filter
                    id='glow'
                    x='-50%'
                    y='-50%'
                    width='200%'
                    height='200%'
                  >
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
            <h2 className='text-slate-300 text-sm 2xl:text-md font-semibold'>
              Advanced Software & Technology Zone
            </h2>
            <p className='text-slate-300 text-sm'>
              Web & App Development | WordPress | SEO | Maintenance |
              Consultation
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              {["Home", "Services", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className='text-slate-300 hover:text-accent transition-colors text-sm'
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Legal info */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Legal</h3>
            <ul className='space-y-2'>
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className='text-slate-300 hover:text-accent transition-colors text-sm'
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Contact</h3>
            <ul className='space-y-3'>
              <li className='flex items-start'>
                <Mail className='h-5 w-5 mr-2 text-accent flex-shrink-0 mt-0.5' />
                <span className='text-slate-300 text-sm'>
                  contact@astzo.com
                </span>
              </li>
              <li className='flex items-start'>
                <Image
                  src={whatsapp}
                  width={20}
                  height={20}
                  alt='whatsapp'
                  className='h-5 w-5 mr-2 text-accent flex-shrink-0 mt-0.5'
                />
                <span className='text-slate-300 text-sm'>+8801804555186</span>
              </li>
              <li className='flex items-start'>
                <MapPin className='h-5 w-5 mr-2 text-accent flex-shrink-0 mt-0.5' />
                <span className='text-slate-300 text-sm'>
                  Dhaka, Bangladesh
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className='pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-sm text-slate-400'>
            &copy; {new Date().getFullYear()} ASTZO. All rights reserved.
          </p>

          <div className='flex space-x-4 pt-2'>
            <Link
              href='https://www.facebook.com/mastzo'
              className='text-white hover:text-accent transition-colors'
            >
              <Facebook className='h-5 w-5' />
              <span className='sr-only'>Facebook</span>
            </Link>
            <Link
              href='https://www.linkedin.com/company/astzo/'
              className='text-white hover:text-accent transition-colors'
            >
              <Linkedin className='h-5 w-5' />
              <span className='sr-only'>LinkedIn</span>
            </Link>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}

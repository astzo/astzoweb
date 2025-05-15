"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "../shared/SectionTitle";
import Wrapper from "../shared/Wrapper";
import Link from "next/link";

// Sample client logos
const clients = [
  {
    id: 1,
    name: "Client 1",
    logo: "/placeholder.svg?height=80&width=200",
    link: "#",
  },
  {
    id: 2,
    name: "Client 2",
    logo: "/placeholder.svg?height=80&width=200",
    link: "#",
  },
  {
    id: 3,
    name: "Client 3",
    logo: "/placeholder.svg?height=80&width=200",
    link: "#",
  },
  {
    id: 4,
    name: "Client 4",
    logo: "/placeholder.svg?height=80&width=200",
    link: "#",
  },
  {
    id: 5,
    name: "Client 5",
    logo: "/placeholder.svg?height=80&width=200",
    link: "#",
  },
  {
    id: 6,
    name: "Client 6",
    logo: "/placeholder.svg?height=80&width=200",
    link: "#",
  },
  {
    id: 7,
    name: "Client 7",
    logo: "/placeholder.svg?height=80&width=200",
    link: "#",
  },
  {
    id: 8,
    name: "Client 8",
    logo: "/placeholder.svg?height=80&width=200",
    link: "#",
  },
];

export default function ClientsSection() {
  const logos = [...clients, ...clients]; // duplicated for looping

  return (
    <section className='py-10'>
      <Wrapper>
        <SectionTitle
          title="Brands We've Worked With"
          description="Leading brands trust ASTZO to power their digital transformation — here are just a few we've worked with."
          centered
        />

        {/* Scrolling Logo Row */}
        <div className='relative mt-12 overflow-hidden w-full'>
          <motion.div
            className='flex gap-12 whitespace-nowrap w-max'
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 50,
              ease: "linear",
            }}
          >
            {logos.map((client, index) => (
              <Link
                href={client.link}
                target='_blank'
                key={`${client.id}-${index}`}
                className='relative h-20 w-32 flex-shrink-0 border rounded-md'
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className='object-contain filter grayscale hover:grayscale-0 transition-all duration-300'
                />
              </Link>
            ))}
          </motion.div>
        </div>
        <div className='relative mt-8 overflow-hidden w-full'>
          <motion.div
            className='flex gap-12 whitespace-nowrap w-max'
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              duration: 50,
              ease: "linear",
            }}
          >
            {logos.map((client, index) => (
              <Link
                href={client.link}
                target='_blank'
                key={`${client.id}-${index}`}
                className='relative h-20 w-32 flex-shrink-0 border rounded-md'
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className='object-contain filter grayscale hover:grayscale-0 transition-all duration-300'
                />
              </Link>
            ))}
          </motion.div>
        </div>
      </Wrapper>
    </section>
  );
}

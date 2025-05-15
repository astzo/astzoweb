"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "../shared/Wrapper";
import SectionTitle from "../shared/SectionTitle";
import ServiceCard from "../shared/ServiceCard";
import { TService } from "@/utils/TService";
import Link from "next/link";

export default function TopServices() {
  const [services, setServices] = useState<TService[]>([]);

  // data load from json file
  useEffect(() => {
    const loadServices = async () => {
      try {
        const res = await fetch("/services.json");
        const data = await res.json();
        setServices(data.slice(0, 6));
      } catch (err) {
        console.error("Error loading services:", err);
        setServices([]);
      }
    };

    loadServices();
  }, []);
  if (services.length === 0) {
    return (
      <div className='text-center text-xl font-bold'>
        Services not available
      </div>
    );
  }
  return (
    <section className='bg-radial-[at_25%_25%] from-white to-background/50 to-75%'>
      <Wrapper className='flex flex-col justify-center items-center'>
        <SectionTitle
          centered
          title='Our Services'
          description='Explore our full suite of digital solutions — from web and mobile development to SEO and server management. Everything you need to build, grow, and maintain your online presence.'
        />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 xl:gap-8 2xl:gap-10'>
          {services.map(({ id, icon, title, description, cta }) => (
            <ServiceCard
              key={id}
              id={id}
              icon={icon}
              title={title}
              description={description}
              cta={cta}
            />
          ))}
        </div>
        <Link
          href='/services'
          className='bg-accent text-background px-4 py-2 rounded-lg font-bold hover:text-foreground transition-all duration-500 z-10 mt-12'
        >
          Explore all services
        </Link>
      </Wrapper>
    </section>
  );
}

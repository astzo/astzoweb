"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "../shared/Wrapper";
import SectionTitle from "../shared/SectionTitle";
import ServiceCard from "../shared/ServiceCard";
import { TService } from "@/utils/TService";

export default function Services() {
  const [services, setServices] = useState<TService[]>([]);

  // data load from json file
  useEffect(() => {
    const loadServices = async () => {
      try {
        const res = await fetch("/services.json");
        const data = await res.json();
        setServices(data);
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
    <section>
      <Wrapper className='space-y-6'>
        <SectionTitle
          title='Our Services'
          subTitle='Explore our full suite of digital solutions — from web and mobile development to SEO and server management. Everything you need to build, grow, and maintain your online presence.'
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
      </Wrapper>
    </section>
  );
}

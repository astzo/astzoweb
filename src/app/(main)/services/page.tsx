"use client"
import SectionTitle from '@/components/frontend/shared/SectionTitle';
import Wrapper from '@/components/frontend/shared/Wrapper';
import { BorderBeam } from '@/components/magicui/border-beam';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'


type TService = {
  id: string;
  title: string;
  description: string;
  cta: string;
  icon: string;
};
  

export default function page() {
  const [services, setServices] = useState<TService[]>([]);
  console.log(services);
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
          {services.map((item) => (
            <Card
              key={item.id}
              className='relative overflow-hidden flex flex-col justify-between text-center'
            >
              <CardHeader>
                <CardTitle className='mx-auto'>
                  <div className='border-2 rounded-full p-4 inline-block'>
                    <Image src={item.icon} alt='icon' width={40} height={40} />
                  </div>
                </CardTitle>
                <CardDescription className='text-lg text-text font-bold'>
                  {item.title}
                </CardDescription>
              </CardHeader>
              <CardContent>{item.description}</CardContent>
              <CardFooter className='mx-auto'>
                <Button variant='outline'>{item.cta}</Button>
              </CardFooter>
              <BorderBeam duration={8} size={100} colorFrom='#FF5C00' />
            </Card>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
  
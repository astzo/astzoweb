/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SectionTitle from "../shared/SectionTitle";
import Wrapper from "../shared/Wrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    position: "CEO at TechBright",
    company: "TechBright",
    avatar: "/placeholder.svg?height=100&width=100",
    quote:
      "ASTZO delivered a custom web app faster than we expected. Highly recommend!",
  },
  {
    id: 2,
    name: "Ahmad Rahman",
    position: "Marketing Head at BizCore",
    company: "BizCore",
    avatar: "/placeholder.svg?height=100&width=100",
    quote: "From SEO to backend fixes, everything was top-notch.",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "Founder at InnovateCo",
    company: "InnovateCo",
    avatar: "/placeholder.svg?height=100&width=100",
    quote:
      "Working with ASTZO transformed our digital presence. Their team understood our vision perfectly.",
  },
  {
    id: 4,
    name: "Michael Chen",
    position: "CTO at FutureTech",
    company: "FutureTech",
    avatar: "/placeholder.svg?height=100&width=100",
    quote:
      "The technical expertise at ASTZO is outstanding. They solved problems other developers couldn't.",
  },
];

export default function TestimonialsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className='py-20 px-4 md:px-8 bg-primary/5'>
      <Wrapper>
        <SectionTitle
          title='What Our Clients Say'
          description="Our success is measured by our clients' success. See their feedback and experiences."
          centered
        />

        <div className='mt-16 relative'>
          <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className='w-full mx-auto'
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className='basis-full lg:basis-1/2'
                >
                  <div className='bg-background rounded-xl p-8 shadow-sm border border-primary/10 flex flex-col md:flex-row gap-8 items-center h-full'>
                    {/* Avatar and Info */}
                    <div className='flex-shrink-0 text-center md:text-left'>
                      <div className='mb-4 relative w-24 h-24 mx-auto md:mx-0'>
                        <Avatar className='w-24 h-24 border-4 border-secondary'>
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                          <AvatarFallback className='text-2xl bg-primary text-white'>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className='absolute -bottom-2 -right-2 bg-accent text-white p-2 rounded-full'>
                          <Quote className='w-4 h-4' />
                        </div>
                      </div>
                      <div>
                        <h4 className='font-bold text-primary'>
                          {testimonial.name}
                        </h4>
                        <p className='text-sm text-text/70'>
                          {testimonial.position}
                        </p>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className='flex-grow'>
                      <blockquote className='text-lg italic text-text/90 relative text-center md:text-left'>
                        “{testimonial.quote}”
                      </blockquote>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent >
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Wrapper>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Wrapper from "../shared/Wrapper";

export default function CtaSection() {
  return (
    <section className='py-20 px-4 md:px-8 bg-primary relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
        <div className='absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl'></div>
        <div className='absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl'></div>
      </div>

      <Wrapper className='relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='max-w-3xl mx-auto text-center'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            Let&apos;s Build Something Great Together
          </h2>
          <p className='text-white/80 mb-8 text-lg'>
            Book a free 15-minute consultation to discuss your project.
          </p>

          <Button
            size='lg'
            className='bg-accent hover:bg-accent/90 text-white group'
            onClick={() =>
              window.open("https://calendly.com/your-calendly-link", "_blank")
            }
          >
            <Calendar className='mr-2 h-5 w-5 group-hover:animate-pulse' />
            Schedule a Call
          </Button>
        </motion.div>
      </Wrapper>
    </section>
  );
}

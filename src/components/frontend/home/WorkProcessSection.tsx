"use client";

import { motion } from "framer-motion";
import { PhoneCall, ClipboardList, Code, TestTube, Rocket } from "lucide-react";
import SectionTitle from "../shared/SectionTitle";

const processSteps = [
  {
    id: 1,
    title: "Discovery Call",
    description: "Understand your vision, needs, and goals.",
    icon: PhoneCall,
  },
  {
    id: 2,
    title: "Planning & Strategy",
    description: "Define roadmap, technologies, and timeline.",
    icon: ClipboardList,
  },
  {
    id: 3,
    title: "Design & Development",
    description:
      "UI/UX design and agile development in sync with your feedback.",
    icon: Code,
  },
  {
    id: 4,
    title: "Testing & QA",
    description: "Ensure flawless functionality across all devices.",
    icon: TestTube,
  },
  {
    id: 5,
    title: "Launch & Support",
    description:
      "Go live with confidence — and get ongoing support and updates.",
    icon: Rocket,
  },
];

export default function WorkProcessSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className='py-20 px-4 md:px-8 bg-primary/5'>
      <div className='container mx-auto'>
        <SectionTitle
          title='Our Working Process'
          description="From concept to launch — here's how we bring your ideas to life"
          centered
        />

        <motion.div
          className='relative mt-16'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
        >
          {/* Process line */}
          <div className='hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary/30 -translate-x-1/2 z-0'></div>

          {/* Process steps */}
          <div className='space-y-16 md:space-y-10 relative z-10'>
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={item}
                className={`flex flex-col-reverse md:flex-row items-center text-center  ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-6 md:gap-10 lg:gap-16`}
              >
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <h3 className='text-2xl font-bold text-primary mb-3'>
                    {step.title}
                  </h3>
                  <p className='text-text/80'>{step.description}</p>
                </div>

                <div className='flex-shrink-0 w-16 h-16 rounded-full bg-secondary flex items-center justify-center shadow-lg'>
                  <step.icon className='w-8 h-8 text-primary' />
                </div>

                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  } md:hidden lg:block`}
                >
                  {/* Empty div for layout on alternating sides */}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

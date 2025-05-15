"use client";

import { motion } from "framer-motion";
import { Award, Settings, Package, Cpu, HeadphonesIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Wrapper from "../shared/Wrapper";
import SectionTitle from "../shared/SectionTitle";

const features = [
  {
    id: 1,
    title: "Expertise Across Industries",
    description:
      "Proven track record in delivering solutions for startups and enterprises.",
    icon: Award,
  },
  {
    id: 2,
    title: "Tailored Solutions",
    description:
      "Custom strategies aligned with your specific business goals and objectives.",
    icon: Settings,
  },
  {
    id: 3,
    title: "End-to-End Services",
    description:
      "From design to development, maintenance to SEO, we cover all your digital needs.",
    icon: Package,
  },
  {
    id: 4,
    title: "Cutting-Edge Technology",
    description:
      "Using the latest frameworks and tools to create fast, secure, and scalable applications.",
    icon: Cpu,
  },
  {
    id: 5,
    title: "Dedicated Support",
    description:
      "Ongoing maintenance and support to ensure your business continues to run smoothly.",
    icon: HeadphonesIcon,
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className='py-20 px-4 md:px-8 bg-background'>
      <Wrapper>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          <div>
            <SectionTitle
              title='Why Choose Us?'
              description='Empowering your digital journey with experience, precision, and
              passion.'
              descriptionClassName='text-accent font-medium text-lg mb-6'
            />
            <p className='text-text/80 mb-8'>
              At ASTZO, we combine cutting-edge technology with a deep
              understanding of your business needs. Our team is dedicated to
              delivering high-performance solutions that drive results, optimize
              user experiences, and scale with your business. Whether it&#39;s
              web development, mobile apps, or SEO, we go above and beyond to
              ensure your success.
            </p>

            <div className='relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden'>
              <div className='absolute inset-0 bg-primary/10 rounded-lg'></div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <span className='text-primary/30 text-xl font-medium'>
                  Team Image
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className='h-full border-primary/10 hover:border-primary/30 transition-colors'>
                    <CardHeader className='pb-2'>
                      <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4'>
                        <feature.icon className='w-6 h-6 text-primary' />
                      </div>
                      <CardTitle className='text-xl text-primary'>
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className='text-text/80'>
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

"use client"
import React, { useEffect, useState } from 'react'
import Wrapper from '../shared/Wrapper'
import SectionTitle from '../shared/SectionTitle'
import { TProject } from '@/utils/TProject';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProjectGrid } from '../shared/ProjectGrid ';
import Link from 'next/link';



export default function PortfolioSection() {
      const [projects, setProjects] = useState<TProject[]>([]);

      
    
      // data load from json file
      useEffect(() => {
        const loadServices = async () => {
          try {
            const res = await fetch("/projects.json");
            const data = await res.json();
            setProjects(data.slice(0, 3));
          } catch (err) {
            console.error("Error loading projects:", err);
            setProjects([]);
          }
        };
    
        loadServices();
      }, []);
      if (projects.length === 0) {
        return (
          <div className='text-center text-xl font-bold'>
            Projects not available
          </div>
        );
      }

  return (
    <section>
      <Wrapper className='flex flex-col justify-center items-center'>
        <SectionTitle
        centered
          title='Our Recent Projects'
          description="Explore the solutions we've delivered for clients across industries. Each project reflects our commitment to quality and innovation."
          className='mb-6'
        />
        <Tabs defaultValue='all' className='w-full'>
          <div className='flex justify-center mb-10'>
            <TabsList className='bg-accent/40'>
              <TabsTrigger value='all'>All Projects</TabsTrigger>
              <TabsTrigger value='web'>Web Development</TabsTrigger>
              <TabsTrigger value='mobile'>Mobile Apps</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value='all' className='mt-0'>
            <ProjectGrid projects={projects} category='all' />
          </TabsContent>
          <TabsContent value='web' className='mt-0'>
            <ProjectGrid projects={projects} category='web' />
          </TabsContent>
          <TabsContent value='mobile' className='mt-0'>
            <ProjectGrid projects={projects} category='mobile' />
          </TabsContent>
        </Tabs>
        <Link
          href='/portfolio'
          className='bg-accent text-background px-4 py-2 rounded-lg font-bold hover:text-foreground transition-all duration-500 z-10 mt-12'
        >
          More Portfolio
        </Link>
      </Wrapper>
    </section>
  );
}
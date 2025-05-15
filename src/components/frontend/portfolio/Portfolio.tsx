"use client";
import Wrapper from "../shared/Wrapper";
import SectionTitle from "../shared/SectionTitle";
import { TProject } from "@/utils/TProject";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectGrid } from "../shared/ProjectGrid ";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [projects, setProjects] = useState<TProject[]>([]);

  // data load from json file
  useEffect(() => {
    const loadServices = async () => {
      try {
        const res = await fetch("/projects.json");
        const data = await res.json();
        setProjects(data);
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
      <Wrapper className='relative'>
        <SectionTitle
          title='Our Recent Projects'
          subTitle="Explore the solutions we've delivered for clients across industries. Each project reflects our commitment to quality and innovation."
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
      </Wrapper>
    </section>
  );
}

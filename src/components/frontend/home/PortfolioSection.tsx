"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "../shared/Wrapper";
import SectionTitle from "../shared/SectionTitle";
import { TProject } from "@/utils/TProject";
import Link from "next/link";
import ProjectTabs from "../shared/ProjectTabs";

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
        <ProjectTabs projects={projects} />
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

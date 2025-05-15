"use client";
import Wrapper from "../shared/Wrapper";
import { TProject } from "@/utils/TProject";
import { useEffect, useState } from "react";
import ProjectTabs from "../shared/ProjectTabs";

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
      <Wrapper>
        <ProjectTabs projects={projects} />
      </Wrapper>
    </section>
  );
}

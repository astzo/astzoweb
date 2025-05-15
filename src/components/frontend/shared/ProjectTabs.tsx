"use client"
import React, { useState } from 'react'
import Wrapper from './Wrapper';
import SectionTitle from './SectionTitle';
import { ProjectGrid } from './ProjectGrid ';
import Link from 'next/link';
import { TProject } from '@/utils/TProject';

type Props = {
    projects: TProject[]
}

export default function ProjectTabs({ projects }: Props) {
  const [activeTab, setActiveTab] = useState("all");
  const tabItems = [
    { label: "All Projects", value: "all" },
    { label: "Web Development", value: "web" },
    { label: "Wordpress Website Development", value: "wordpress" },
    { label: "Website Maintenance", value: "maintenance" },
  ];
  return (
    <>
        <SectionTitle
          centered
          title='Our Recent Projects'
          description="Explore the solutions we've delivered for clients across industries. Each project reflects our commitment to quality and innovation."
          className='mb-6'
        />
        {/* Tabs */}
        <div className='w-full flex flex-col items-center gap-12'>
          <div className='flex flex-wrap justify-center gap-4'>
            {tabItems.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
                  activeTab === tab.value
                    ? "bg-accent text-white"
                    : "bg-secondary text-black hover:bg-red-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className='w-full'>
            {activeTab === "all" && (
              <ProjectGrid projects={projects} category='all' />
            )}
            {activeTab === "web" && (
              <ProjectGrid projects={projects} category='web' />
            )}
            {activeTab === "wordpress" && (
              <ProjectGrid projects={projects} category='wordpress' />
            )}
            {activeTab === "maintenance" && (
              <ProjectGrid projects={projects} category='maintenance' />
            )}
          </div>
        </div>
    </>
  );
}
import { Button } from "@/components/ui/button";
import { TProject } from "@/utils/TProject";
import Image from "next/image";
import Link from "next/link";

export function ProjectGrid({
  projects,
  category,
}: {
  projects: TProject[];
  category: string;
}) {
  const filtered =
    category === "all"
      ? projects
      : projects.filter((project) => project.category === category);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {filtered.map((project) => (
        <div
          key={project.id}
          className='group bg-white border border-primary/10 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all'
        >
          <div className='relative h-80 overflow-hidden'>
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className='object-cover transition-transform duration-500 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
              <Button variant='outline' className='border-none'>
                View Project
              </Button>
            </div>
          </div>
          <div className='p-6'>
            <h3 className='text-xl font-semibold mb-2 text-primary'>
              {project.title}
            </h3>
            <p className='text-text/80 mb-4'>{project.description}</p>
            <div className='flex justify-between items-center'>
              <span className='text-xs uppercase tracking-wider text-accent font-medium'>
                {project.category === "web" ? "Web Development" : "Mobile App"}
              </span>
              <Link
                href={`/portfolio/${project.id}`}
                className='border px-2 py-1 rounded-md hover:text-accent hover:border-accent'
              >
                Details →
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

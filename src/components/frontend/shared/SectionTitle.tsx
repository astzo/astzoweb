import { cn } from '@/lib/utils';
import React from 'react'

type Props = {
  title: string;
  description: string;
  className?: string;
  centered?: boolean;
  descriptionClassName?: string;
};

export default function SectionTitle({
  title,
  description,
  className,
  centered = false,
  descriptionClassName,
}: Props) {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      <h2 className='text-3xl md:text-4xl font-bold mb-4'>
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-3xl",
            centered && "mx-auto",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
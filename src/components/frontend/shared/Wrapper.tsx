import { cn } from "@/lib/utils";
import React from "react";

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div
      className={cn(
        `container mx-auto px-2.5 py-5 sm:py-7.5 lg:py-10 ${className}`
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;

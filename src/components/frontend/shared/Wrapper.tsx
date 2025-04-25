import React from "react";

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div
      className={`container mx-auto px-2.5 py-5 sm:py-7.5 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;

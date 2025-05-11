import Link from "next/link";

const Banner = () => {
  return (
    <div className='w-full min-h-[500px] h-[90vh] -mt-[78px] bg-[url(/images/hero.jpg)] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-white text-center'>
      <div className='container mx-auto flex flex-col justify-center items-center pt-[140px] text-center space-y-4 md:space-y-8 px-2.5 z-40'>
        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-8 md:leading-10 lg:leading-12 xl:leading-14 2xl:leading-20'>
          Complete Web, App, WordPress & SEO Services — Tailored for Your
          Business Needs
        </h1>
        <h4 className='text-base md:text-xl lg:text-2xl'>
          Launch faster, rank higher, and scale smarter with ASTZO’s
          full-service digital solutions.
        </h4>
        <Link href='/services' className='bg-accent px-4 py-2 rounded-lg font-bold hover:bg-accent/80 transition-all duration-200'>
            Explore Services
        </Link>
      </div>
    </div>
  );
};

export default Banner;

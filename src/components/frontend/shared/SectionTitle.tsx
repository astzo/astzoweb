import React from 'react'

type Props = {
    title: string,
    subTitle: string,
}

export default function SectionTitle({ title, subTitle }: Props) {
  return <div className='text-center space-y-3'>
    <h2 className='text-xl md:text-2xl font-bold border-b-4 border-double inline-block'>{title}</h2>
    <p className='text-base sm:w-[90%] lg:w-[80%] mx-auto'>{subTitle}</p>
  </div>;
}
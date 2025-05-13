import { BorderBeam } from '@/components/magicui/border-beam';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { TService } from '@/utils/TService';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'



export default function ServiceCard({id, icon, title, description, cta}: TService) {
  return (
    <Card className='relative overflow-hidden flex flex-col justify-between text-center shadow-lg sm:hover:scale-105 transition-all duration-400'>
      <CardHeader>
        <CardTitle className='mx-auto'>
          <div className='border-2 rounded-full p-4 inline-block'>
            <Image src={icon} alt='icon' width={40} height={40} />
          </div>
        </CardTitle>
        <CardDescription className='text-lg text-text font-bold'>
          {title}
        </CardDescription>
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardFooter className='mx-auto'>
        <Link
          href={`/services/${id}`}
          className='border text-foreground px-4 py-2 rounded-lg font-semibold text-sm '
        >
          {cta}
        </Link>
      </CardFooter>
      <BorderBeam duration={8} size={100} colorFrom='#FF5C00' />
    </Card>
  );
}
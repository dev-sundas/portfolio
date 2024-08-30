import { headerType } from '@/lib/type';
import Link from 'next/link';
import * as React from 'react';

type Props = {
  headerdata:headerType[]
}

export default function Header ({headerdata}:Props) {
  return (
   <header>
    {headerdata.map((item)=>(
       <div key={item.id} className='flex flex-col gap-5  justify-between py-10 w-[40%] md:flex-row md:items-center md:w-full '>
       <h1 className='text-[27px] md:text-[32px] font-bold inline leading-3  tracking-wide'>{item.heading}</h1>
       <Link href={item.link} className=' border-[2px] border-white rounded-sm p-2 hover:text-black hover:bg-white font-semibold ease-in-out transition-all'>{item.linkText}</Link>
     </div>
    ))}
   </header>
  );
}

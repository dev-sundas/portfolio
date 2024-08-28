import Link from 'next/link';
import * as React from 'react';

export interface IHeaderProps {
}

export default function Header (props: IHeaderProps) {
  return (
    <div className='flex flex-col gap-5  justify-between py-10 w-[40%] md:flex-row md:items-center md:w-full '>
      <h1 className='text-[27px] md:text-[32px] font-bold inline leading-3  tracking-wide'>Developer</h1>
      <Link href={""} className=' border-[2px] border-white rounded-sm p-2 hover:text-black hover:bg-white font-semibold ease-in-out transition-all'>Contact US</Link>
    </div>
  );
}

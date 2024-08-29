"use client"
import { motion,} from "framer-motion";
import { heroType } from '@/lib/type';
import Link from 'next/link';
import * as React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

type Props = {
  data: heroType[]
}

export default function Hero({ data }: Props) {
  return (
    <div>
      {data.map((item) => (
        <div className='flex flex-col items-start justify-between gap-28 md:flex-row md:items-center md:gap-0 ' key={item.id}>
          <motion.div className={`${poppins.className} w-full lg:w-[50%] order-2 md:order-1`} initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1.5, delayChildren:0.4, staggerChildren:0.3}}>
            <h1 className='text-[39px] leading-10 md:text-[60px] md:leading-tight'>{item.heading}</h1>
            <p className='py-2 block text-[14px] md:text-[20px]'>{item.paragraph}</p>
            <div className='flex flex-col justify-between md:flex-row'>
            
            <motion.p whileHover={{ scale: 1.1 }}>
            <Link href={item.link} className='flex items-center text-[#9c27b0] font-semibold'>
              {item.linkText}
            </Link>
          </motion.p>
              <Image
                src={item.squareimage}
                alt={'square image'}
                width={200}
                height={200}
              />
            </div>
          </motion.div>
          <motion.div className="relative  w-[300px] h-[200px] md:w-[600px] md:h-[300px] lg:h-[500px] order-1 md:order-2" initial={{scale:0, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:2}}>
          <Image
                src={item.backgroundimage}
                alt={'background image'}
                fill
                style={{ objectFit: 'cover' }}
                className="absolute z-0" 
              />
          <motion.div >
          <Image
              src={item.image}
              alt={'main image'}
              width={600}
              height={400} 
              className=" hero rounded-full  h-[300px] w-[300px]  relative z-10  lg:h-[500px] lg:w-[500px] " 
            />
          </motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

"use client"
import { aboutdataType } from '@/lib/type';
import { useScroll, useTransform,motion } from 'framer-motion';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import * as React from 'react';
import { useRef } from 'react';
const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    subsets: ["latin"],
  });
type Props = {
    aboutdata : aboutdataType[]
}

export default function AboutSection ({aboutdata}:Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]); 
  const scaley = useTransform(scrollYProgress, [0, 1],
    [-0, -300]
) 

  return (
    <div>
        <div ref={ref}>
        {aboutdata.map((item) => (
          <div key={item.id} className="relative">
            <div className="flex flex-col  h-[100vh] items-center justify-center relative">
              <div  className= "bg-black hidden  absolute left-[-28px]  z-20 md:flex md:w-[300px] md:h-[350px]  md:bottom-48 lg:w-[500px] lg:bottom-24 xl:w-[600px]">
              </div>
              <Image
                src={item.imageUrl}
                alt="Background Image"
                width={400}
                height={400}
                className="object-contain opacity-50 z-10 relative"
              />
              <div className=" bg-black z-20 hidden absolute right-[-28px]  md:flex md:w-[300px] md:h-[350px]  md:bottom-48 lg:w-[500px] lg:bottom-24  xl:w-[600px]   ">
              </div>

              <div className="absolute  bottom-0 left-0 right-0 bg-gradient-to-r from-black/75 to-transparent z-20 md:left-[-10%] md:right-[10%]   "></div>
              <motion.div 
              className={`${poppins.className} flex flex-col absolute z-20 md:flex-row md:items-center md:justify-center md:h-[70vh]`}
              style={{ y: scaley ,opacity}}
            >
              <div className='w-full md:w-[50%] md:ml-5'>
                <h1 className="text-[39px] font-bold leading-10 md:leading-tight md:text-[42px]">{item.heading}</h1>
                <h2 className="text-[20px] tracking-normal opacity-35 font-medium leading-8 mt-4 w-[80%]">{item.expertIn}</h2>
              </div>
              <div className='w-full md:w-[50%] md:mr-[80px]'>
                <p>{item.paragraph1}</p>
                <p className="mt-4">{item.paragraph2}</p>
                <p className="mt-4">{item.paragraph3}</p>
              </div>
            </motion.div>
            </div>
            <div className='flex items-start justify-start'>
              <Image src={item.blackbox} alt={'blackbox'} width={200} height={200}/>
              </div>
            </div>
        ))}
        </div>
      
    </div>
  );
}

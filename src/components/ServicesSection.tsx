"use client"
import { serviceType } from '@/lib/type';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import * as React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

type Props = {
    serviceData: serviceType[]
}

export default function ServicesSection({ serviceData }: Props) {
    // Use useScroll to track the scroll progress
    const { scrollYProgress } = useScroll();
    // Transform scroll progress into a value for animation
    const yTransform = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacityTransform = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

    return (
        <div>
            {serviceData.map((item, index) => (
                <div key={item.id}>
                  <motion.div
                  className={`${poppins.className} text-start mt-24 md:text-center`}
                  style={{ y: yTransform, opacity: opacityTransform }} transition={{
                    duration: 2,  delay: 0.5 + 0.1 * index   }} >
                        <h2 className='text-[14px] px-2 opacity-20 md:text-[18px]'>{item.heading1}</h2>
                        <h1 className='text-[39px] my-2 md:text-[56px]'>{item.heading2}</h1>
                        <p className='my-3'>{item.paragraph1}</p>
                        <p className='w-[100%] m-auto mb-5 md:w-[750px]'>{item.paragraph2}</p>
                        <p>Visit my <Link href={item.link} className='text-[#f4a949] hover:underline'>{item.linkText}</Link> for more details.</p>
                    </motion.div>
                    <motion.div
                        className='grid grid-cols-3 w-[100%] m-auto mt-10 md:grid-cols-7 md:w-[90%]'
                        style={{ y: yTransform, opacity: opacityTransform }}
                    >
                        {item.imageUrl.map((items, index) => (
                            <motion.div
                                key={items.id}
                                className='my-5'
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    delay: 0.5 + 0.1 * index,
                                    type: "tween"
                                }}
                            >
                                <div className='flex items-center justify-center'>
                                    <Image src={items.icon} alt={items.icon} width={90} height={90} className='rounded-sm h-[50px] w-[50px] md:h-[90px] md:w-[90px]' />
                                </div>
                                <p className='text-center mt-2'>{items.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    );
}

"use client"
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { cardType, projectType } from "@/lib/type";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

type Props = { projectdata: projectType[], carddata: cardType[] };

export default function ProjectsSection({ projectdata, carddata }: Props) {
   
    return (
        <div className="relative">
            <Carousel
                opts={{ loop: true }}
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
            >
                <CarouselContent>
                 {projectdata.map((item,index) => (
                        <CarouselItem key={item.id}>
                          <div className="flex items-center justify-center h-[100vh] relative">
                          <Image src={"/images/sphereSm.png"} alt="sphereSm"width={50} height={50} className="absolute top-48 left-12 bottom-48 md:top-28 md:left-20  "/>
                            <div className={`${poppins.className} text-start w-full m-auto md:text-center md:w-[550px] z-10`}>
                                <h1 className="text-[27px] leading-10 md:text-[56px] md:leading-tight">{item.heading}</h1>
                                <p className="text-start text-[14px] py-3 md:text-center md:text-[16px]">{item.paragraph} <Link href={item.link1} className="text-[#f4a949] font-semibold">{item.linkText1}</Link></p>
                                <Link href={item.link2} className="text-[#9c27b0] font-semibold">{item.linkText2}</Link>
                            </div>
                            <div>
                                <Image src={"/images/sphereLg.png"} alt="sphereLg"width={150} height={150} className="absolute top-80 left-20 md:left-auto md:right-0"/>
                            </div>
                            <Image src={"/images/sphereMd.png"} alt="sphereSm"width={100} height={100} className="absolute bottom-48 left-0 md:bottom-0"/>
                          </div>
                       
                        </CarouselItem>
                    ))}
                   {carddata.map((items,index) => (
                        <CarouselItem key={items.id} id="projects">
                           <div className="flex flex-col  items-start justify-center h-[100vh] mt-24 md:flex-row md:items-center md:mt-0">
                                <div className={`${poppins.className} w-full  md:w-[550px] order-2 md:order-1`}>
                                    <h2 className="text-[14px] opacity-20 md:text-[18px] font-light mb-3">{items.heading1}</h2>
                                    <h1 className="text-[27px] leading-10 md:text-[32px] md:leading-tight">{items.heading2}</h1>
                                    <div>
                                        <p className="my-3">{items.paragraph1}</p>
                                        <p className="py-4">{items.paragraph2}</p>
                                    </div>
                                    <div>
                                        <Link href={items.link1}>{items.linkText1}</Link><br />
                                        <Link href={items.link2} className="text-[#f4a949]">{items.linkText2}</Link>
                                    </div>
                                </div>
                                <div className="relative order-1 md:order-2">
                                {items.id === 1 && ( 
                                    <div className="hidden md:flex">
                                        <Image src={"/images/darkromb.png"} alt={"darkromb"} width={200} height={200} className="absolute transform rotate-12 md:top-[-20px] lg:top-[-25px] lg:right-36 " />
                                        <Image src={"/images/blackbox.png"} alt={"blackbox"} width={200} height={200} className="absolute transform rotate-6 md:right-[-4px] md:bottom-0 lg:bottom-10 lg:right-10 "  />
                                        <Image src={"/images/whitebox.png"} alt={"whitebox"} width={200} height={200} className="absolute bottom-[-50px] left-[-100px] transform rotate-6" />
                                    </div>
                                )}
                                {items.id === 2 && ( 
                                    <Image
                                    src={"/images/dots.png"}
                                    alt={'background image'}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="absolute z-0 rotate-90  hidden md:flex"
                                    />
                                )}
                                <Image src={items.imageUrl} alt={"images"} width={600} height={600} className=" w-[200px] h-auto m-0 mt-8 block md:max-w-[700px] md:w-[100%] md:m-[20px]" />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <Image src={"/images/whitecube.png"} alt="contact" width={200} height={200} className="hidden md:flex"/>
        </div>
    );
}

"use client"
import {contactType } from "@/lib/type";
import {motion} from "framer-motion"
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    subsets: ["latin"],
});




type Prop = {
    contactdata:contactType[]
}


export default function ContactSection({contactdata}: Prop) {
    return (
        <div>
        <div className="flex flex-col  items-center justify-center h-[100vh] gap-6 md:flex-row">
        <motion.div className="order-2 md:order-1 w-full md:w-[50%]" initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:2, delay:2}}>
       <Card className="bg-transparent text-white rounded-none shadow-md shadow-black mt-12 border-none">
        <CardContent>
        <h1 className={`${poppins.className} text-[32px] font-medium tracking-normal my-5 text-[#f4a949]`}>Contact Me</h1>
        {contactdata.map((item)=>(
            <div key={item.id}>
                <div className="flex items-center gap-4">
                <h1 className="text-[20px] font-bold mb-2">{item.heading}</h1>
                <p>{item.paragraph}</p>
                </div>
            </div>
        ))}
        </CardContent>
       </Card>
        </motion.div> 
         <motion.div className="order-1 md:order-2" initial={{x:-500}} whileInView={{x:100}} transition={{duration:1, delay:1}}>
         <Image src={"/images/contact.png"} alt="contact" width={400} height={400}/> 
         
         </motion.div>
        
         </div>
        </div>
    )
}
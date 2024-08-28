"use client"
import {motion} from "framer-motion"
import { ContactSchema, ContactType } from "@/lib/type";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";


const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    subsets: ["latin"],
});




type Prop = {
}


export default function ContactSection({}: Prop) {
    const form = useForm<ContactType>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            name: "", 
            email: "",
            message: "",
        },
    });
                                        

    const OnSubmit = (data: ContactType) => {
        console.log(data);
    };

    

    return (
        <div>
        <div className="flex flex-col  items-center justify-center h-[100vh] gap-6 md:flex-row">
        <motion.div className="order-2 md:order-1 w-full md:w-[50%]" initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:2, delay:2}}>
        <Form {...form}>
                    <form onSubmit={form.handleSubmit(OnSubmit)}  >
                        <h1 className={`${poppins.className} text-[32px] font-medium tracking-normal my-5`}>Contact Us</h1>
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem className="text-white">
                                <FormControl>
                                    <Input
                                        {...field}
                                        value={field.value}
                                        onChange={(e)=> field.onChange(e.currentTarget.value)}
                                        placeholder="Enter your name"
                                        type="text"
                                        className="bg-transparent rounded-none my-5 py-4"
                                    />
                                </FormControl>
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        value={field.value}
                                        onChange={(e)=> field.onChange(e.currentTarget.value)}
                                        placeholder="Enter your email"
                                        type="email"
                                        className="bg-transparent rounded-none my-5 py-4"
                                    />
                                </FormControl>
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="message" render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        {...field}
                                        value={field.value}
                                        onChange={(e)=> field.onChange(e.currentTarget.value)}
                                        rows={8}
                                        placeholder="Enter your message"
                                        className="bg-transparent rounded-none my-5"
                                    />
                                </FormControl>
                            </FormItem>
                        )} />
                        <Button className="hover:bg-transparent hover:border-[white] bg-[#9c27b0] border-[1px] border-[#9c27b0] rounded-none p-2 w-32 h-12" >Submit</Button>
                    </form>
         </Form> 
        </motion.div> 
         <motion.div className="order-1 md:order-2" initial={{x:-500}} whileInView={{x:100}} transition={{duration:1, delay:1}}>
         <Image src={"/images/contact.png"} alt="contact" width={400} height={400}/> 
         
         </motion.div>
        
         </div>
        </div>
    )
}
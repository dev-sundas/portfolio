import { z } from "zod"

export type heroType = {
    id:number
    image:string
    backgroundimage:string
    squareimage:string
    heading:string
    paragraph:string
    link:string
}

export type aboutdataType = {
    id:number,
    heading:string,
    imageUrl:string,
    blackbox:string,
    expertIn:string
    paragraph1:string,
    paragraph2:string,
    paragraph3:string,
}

export type serviceType={
id:number,
heading1:string,
heading2:string,
paragraph1:string,
paragraph2:string,
imageUrl:{
    id:number,
    icon:string,
    text:string,
}[]
}

export type projectType = {
    id:number,
    heading:string
    paragraph:string
    link1:string
    link2:string
}

export type cardType = {
    id:number,
    heading1:string
    heading2:string
    paragraph1:string
    paragraph2:string
    link1:string
    link2:string
    imageUrl:string
}
export const ContactSchema = z.object({
    name: z.string(),
    email: z.string(),
    message: z.string()
})

export type ContactType = z.infer<typeof ContactSchema>
import { aboutdataType, cardType, contactType, heroType, projectType, serviceType } from "./type";

export const heroSectionData : heroType[]=[{
    id:1,
    image:"/images/image.png",
    backgroundimage:"/images/dots.png",
    squareimage:"/images/square.png",
    heading:"Front-End Software Developer",
    paragraph:"Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.",
    link:"About Me >"
}]

export const aboutSectionData:aboutdataType[]=[{
    id:1,
    imageUrl:"/images/about.png",
    blackbox:"/images/blackbox.png",
    heading:"Hi,I'm Todor Web Developer",
    expertIn:"Front End Developer / JavaScript Fan / Wordpress Expert",
    paragraph1:"Professionally connected with the web development industry.",
    paragraph2:"Problem solver, well-organised person, loyal employee with high attention to detail.Fan of Boxing, outdoor activities, video games, and coding of course.",
    paragraph3:"Interested in the entire frontend spectrum and working on ambitious projects with interesting people."
}]


export const serviceSectionData:serviceType[]=[{
    id:1,
    heading1:"A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.",
    heading2:"Skills & Experience",
    paragraph1:"The main area of expertise is front end development (client side of the web).",
    paragraph2:"HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins, features, animations, and coding interactive layouts. I have also full-stack developer experience with one of the most popular open source CMS on the web - WordPress",
    link:"Linkedin",
    imageUrl:[
    {
        id:1,
        icon:"/images/javaScript.png",
        text:"JavaScript",
    },

    {
        id:2,
        icon:"/images/react.png",
        text:"React"
    },
    {
        id:3,
        icon:"/images/php.png",
        text:"Php"
       
    },
    {
        id:4,
        icon:"/images/nodejs.png",
        text:"Node"
       
       
    } ,
    {
        id:5,
        icon:"/images/wordpress.png",
        text:"WordPress"
       
    },
    {
        
        id:6,
        icon:"/images/html5.png",
        text:"Html5"
    },
    {
        id:7,
        icon:"/images/sass.png",
        text:"Sass"
        
    },
    {
        id:8,
        icon:"/images/css3.png",
        text:"Css3"
       
    },
    {
        id:9,
        icon:"/images/bootstrap.png",
        text:"BootStrap"
       
    },
    {
        id:10,
        icon:"/images/vue.png",
        text:"Vue"
      
    },
    {
        id:11,
        icon:"/images/git.png",
        text:"Git"
    
    },
    {
        id:12,
        icon:"/images/superpower.png",
        text:"SuperPower"
        
    },
    {
        id:13,
        icon:"/images/visiualstudio.png",
        text:"Visual Studio"
        
    },
    {
        id:14,
        icon:"/images/figma.png",
        text:"Figma"
    }
    ]
}]

export const projectsSectionData:projectType[]=[{
    id:1,
    heading:"Portfolio & Previous Projects",
    paragraph:"I have built various different projects to fit different aspects of the client's business. If you want to see more examples of my work than the ones showcased in this site, please",
    link1:"contact me!",
    link2:"See Projects >"
}]

export const cardData:cardType[]=[{
    id:1,
    heading1:"E-COMMERCE APPLICATION",
    heading2:"Crown Clothing",
    paragraph1:"Online store for selling apparel & foot wear.",
    paragraph2:"Built with: React, Redux, Node, JavaScript, SASS, Custom Stripe Integration, Firebase (NoSQL Database, Cloud Functions, Cloud Storage, Hosting).",
    link1:"View the code >",
    link2:"Visit the app >",
        imageUrl:"/images/macbook.png",
       
},
{
    id:2,
    heading1:"FITNESS & WELLNESS COACHING PLATFORM",
    heading2:"Fit & Healthy",
    paragraph1:"Server rendered, progressive web application for online fitness & health coaching. Providing workout programs, nutritions plans, workout logs, follow up with client's progress and more.",
    paragraph2:"Built with: NuxtJs, VueJs, JavaScript, Firebase (NoSQL Database, Cloud Functions, Cloud Storage, Hosting), SASS.",
    link1:"View the code >",
    link2:"Visit the app >",
        imageUrl:"/images/phone.png"

}
]

export const contactSectionData: contactType[] = [
  
    {
      id: 2,
      heading: "Mail",
      paragraph: "hello@react.dev",
    },
    {
      id: 3,
      heading: "Address",
      paragraph: "Hello street  New York",
    },
    {
      id: 4,
      heading: "Phone",
      paragraph: "+1 2345678910",
    },
    {
        id: 5,
        heading: "Facebook",
        paragraph: "Your Facebook",
      },
      {
        id: 6,
        heading: "Instagram",
        paragraph: "@yourInstagram",
      },
      {
        id: 7,
        heading: "Twitter",
        paragraph: "@yourTwitter",
      }
    
     
  ];
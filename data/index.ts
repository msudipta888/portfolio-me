
import React from 'react';
import { IconHome, IconUser,IconPhone,IconPresentation,IconTools } from "@tabler/icons-react";

export const navItems = [
    { name: "Home", link: "#home",  icon: React.createElement(IconHome),
    },
    { name: "About", link: "#about", icon: React.createElement(IconUser),},
    { name: "Projects", link: "#projects" , icon: React.createElement(IconPresentation),},
    {name:"Skills",link:"#skills",icon:React.createElement(IconTools),},
    { name: "Approach", link: "#approach", icon: React.createElement(IconPresentation),},
    { name: "Contact", link: "#contact", icon: React.createElement(IconPhone),},
  ];
  



  export const projects = [
    {
      id: 1,
      title: "React Food Delivery App",
      des: "A react food delivery app where user can choose any foods from food list and order it, also chack there order details.",
      img: '/food-app.jpg',
      iconLists: ["/react.svg","/css.jpg" ],
      link: "https://react-foods-app.vercel.app",
    },
    {
      id: 2,
      title: "Detoxify- A Chrome Extension",
      des: "According to user's search content it filter you tube videos and return most liked,commented and viewed videos.",
      img: "/extension.png",
      iconLists: ["/js.svg", "/chrome.png","/css.jpg"],
      link: "https://github.com/msudipta888/Detoxify",
    },
    {
      id: 3,
      title: "MapQuestorApp- A Real Web-App for Travellers",
      des: "A real web-app for travellers where user can search for any place and get the details of that place and also can find nearby places.",
      img: "/mapapp.jpg",
      iconLists: ["/react.svg", "/node.svg", "/mn.svg", "/css.jpg","/redux.svg"],
      link: "https://github.com/msudipta888/real-time-map",
    },
    {
      id: 4,
      title: "ContentCrafter- A Telegram Bot",
      des: "A telegram bot which can generate content for you using AI, you just need to give the topic and it will generate content for you.",
      img: "/aibot.jpg",
      iconLists: ["/js.svg", "/node.svg","/telegraf.png","/ai.png"],
      link: "https://github.com/msudipta888/ContentCrafter",
    },
  ];
  

  
  
  
 
  
  export const socialMedia = [
    {
      id: "IconBrandLinkedin",
      link:"https://www.linkedin.com/in/sudipta-mondal-009625255/" 
    },
    {
      id: "IconBrandTwitter",
      link:"https://x.com/S9248662258797" 
    },
    {
      id:"IconBrandGithub",
      link:'https://github.com/msudipta888', 
    },

  ];

  export const approch = [
    {
      id: 1,
      header: "Planning & Strategy",
      content: "We will collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
    },
    {
      id: 2,
      header: " Development & Progress Update",
      content: "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
    },
    {
      id: 3,
      header: "Development & Launch",
      content: "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
    }
  ];

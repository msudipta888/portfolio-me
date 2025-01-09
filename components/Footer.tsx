import React from 'react'
import {MagicButton} from './ui/MagicButton'
import {CircleFadingArrowUp} from 'lucide-react'
import{IconBrandLinkedin,IconBrandTwitter,IconBrandGithub} from '@tabler/icons-react'
import { socialMedia } from '@/data'

const Footer = () => {
    const Icons ={
       IconBrandLinkedin, IconBrandTwitter, IconBrandGithub
    }
  return (
    <footer className='w-full pt-20 pb-10 -mb-28 lg:h-screen lg:-mb-44 overflow-hidden  overflow-y-hidden items-center' id='contact'>
    
    <div className='w-full absolute left-0 -bottom-72 min-h-96'>
       <img src="" 
       alt="" 
       className='w-full h-full opacity-50'
       />
    </div>
    <div className='flex flex-col items-center'>
        <h1 className='text-white lg:max-w-[45vw] text-2xl ml-3'>
        Let’s Connect and <span className='text-purple'>Build Something Amazing!</span>
        </h1> <br />
        <p className="text-center font-serif max-w-2xl text-gray-400 text-lg leading-relaxed">
        I'm a passionate Full-Stack Developer who loves crafting elegant, scalable, and user-friendly web applications. 
          Whether it's a challenging project, collaboration, or just a conversation, feel free to reach out. 
          Together, we can create impactful digital experiences.
        </p> <br />
        <a href="mailto:msudipta857@gmail.com">
            <MagicButton title="Let's get in touch"
            Icon={<CircleFadingArrowUp/>} 
            />
        </a>
        
    </div>
    <div className='flex mt-12 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light text-white'>
        © {new Date().getFullYear()} Sudipta Mondal. All Rights Reserved.
        </p> <br />
        <div className='flex items-center md:gap-3 gap-6 mb-4'>
        {
            socialMedia.map((item, idx) => {
              let IconComponent =  Icons[item.id as keyof typeof Icons];
              return (
                <div
                key={idx}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-white rounded-lg transition-all duration-300 ease-in-out hover:shadow-3xl hover:scale-105 hover:translate-y-[-4px] hover:bg-opacity-100"
              >
                <a href={item.link}>
                  {IconComponent && <IconComponent className="w-6 h-6 text-black" />}
                </a>
              </div>
              
              );
            })
        }
        </div>
    </div>
    </footer>
  )
}

export default Footer

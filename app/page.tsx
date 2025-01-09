import About from '@/components/About'
import Hero from '@/components/Hero'
import React from 'react'
import { navItems } from '@/data'
import { Navbar } from '@/components/ui/floating-navbar'
import Projects from '@/components/Projects'
import { Approch } from '@/components/Approch'
import Footer from '@/components/Footer'
import { Skills } from '@/components/Skills'

const Page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-start flex-col overflow-hidden sm:px-10 px-5 min-h-screen">
      <div className="max-w-7xl w-full">
      <Navbar navItems={navItems} className="fixed" />
      <Hero /> 
        <About />
        <Projects />
        <Skills />
        <Approch />
        <Footer  />  
      </div>
    </main>
  );
}

export default Page;

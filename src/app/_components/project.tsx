'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/app/data';
import Image from 'next/image';


export const Project = () => {
  return (
    <section className=" snap-start flex flex-col gap-4 w-full bg-gradient-to-b from-black via-slate-900 to-[#2D425C] pt-10 pb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: false }} className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-cyan-400 font-bold mb-4 font-mono tracking-wide">Projects</h2>
        <hr className="mx-auto mb-4 h-1 w-24 rounded-full border-0 bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500" />

        <p className="mx-auto text-center max-w-4xl text-slate-100 text-base sm:text-lg  leading-relaxed">
          Here are some of the projects I've worked on recently. Each project has a description, technologies used, and a link to the live demo.I'm excited to share them with you.
        </p>
      </motion.div>

      {projects.map((project, index) => (      
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: false }} key={index} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-10">
        <Image className="rounded-t-lg w-full h-auto object-contain" width={400} height={250} src={project.image} alt={project.title} />
        <div className="flex flex-col justify-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{project.title}</h5>
          <p className="mb-3 font-normal text-gray-400 ">{project.description}</p>
        </div>
      </motion.div>
          ))}     
           
    </section>
  );
};

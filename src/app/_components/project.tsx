'use client';
import React from 'react'
import { motion } from 'framer-motion';

export const Project = () => {
  return (
    <section className="h-screen snap-start flex flex-col gap-4 w-full bg-gradient-to-b from-black via-slate-900 to-[#2D425C] pt-10 pb-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false }}
        className="mx-auto text-center text-2xl sm:text-3xl md:text-4xl text-white font-bold mt-14 mb-4"
      >
        My Projects
      </motion.h2>
    </section>
  )
}

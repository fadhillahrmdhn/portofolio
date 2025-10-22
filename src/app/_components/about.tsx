'use client';
import { mySkillsMock } from '../data';
import { motion } from 'framer-motion';
import React from 'react';
import StarBorder from '@/components/StarBorder';

export const About = () => {
  return (
    <section className="h-screen snap-start flex flex-col gap-4 w-full bg-gradient-to-b from-[#2D425C] via-slate-900 to-black pt-10 pb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: false }} className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-cyan-400 font-bold mb-4 font-mono tracking-wide">About Me</h2>
        <hr className="mx-auto mb-4 h-1 w-24 rounded-full border-0 bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500" />

        <p className="mx-auto text-center max-w-3xl text-slate-100 text-base sm:text-lg  leading-relaxed">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false }}
        className=" mx-auto px-4 text-center text-white text-base sm:text-lg md:text-xl leading-relaxed grid grid-cols-2 gap-28 mt-5"
      >
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold mb-4 font-mono tracking-wide text-cyan-400">Get to know me!</h3>
          <p className="text-justify text-slate-100">
            I'm a passionate frontend developer with a strong focus on creating user-friendly and visually appealing web applications. I strive to build responsive and dynamic interfaces that enhance user experience. I'm always eager to
            learn new technologies and improve my skills. I also enjoy working with teams and always strive to make meaningful contributions to every project I work on.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 font-mono tracking-wide text-cyan-400">My Skills</h3>
          <div className="grid grid-cols-4 gap-2">
            {mySkillsMock.map((skill, index) => (
              <StarBorder key={index} as="button" className="custom-class " color="cyan" speed="5s">
                {skill}
              </StarBorder>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

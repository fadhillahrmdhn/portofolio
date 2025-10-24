import * as React from 'react';
import { projects } from '@/app/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const CarouselDemo = ()=> {
  return (
    <Carousel className="w-full max-w-xs mx-auto md:max-w-4xl lg:max-w-6xl">
      <CarouselContent>
      {projects.map((project, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
                <motion.div
                  key={index}
                  className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-10"
                >
                  <Image className="rounded-t-lg w-full h-auto object-contain" width={400} height={250} src={project.image} alt={project.title} />
                  <div className="flex flex-col justify-center">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{project.title}</h5>
                    <p className="mb-3 font-normal text-gray-400 ">{project.description}</p>
                  </div>
                </motion.div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

'use client';
import * as React from 'react';
import { projects } from '@/app/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';

export const CarouselDemo = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: false }}>
      <Carousel setApi={setApi} className="w-full max-w-xs mx-auto md:max-w-4xl lg:max-w-6xl">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <div key={index} className="grid md:grid-cols-2 max-w-5xl mx-auto px-4 py-5 cursor-grab active:cursor-grabbing">
                <Image className="rounded-t-lg w-full h-auto object-contain" width={400} height={250} src={project.image} alt={project.title} />
                <div className="flex flex-col max-w-md mt-7">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight font-mono text-cyan-400">{project.title}</h5>
                  <p className="mb-3 font-normal text-slate-100 text-justify">{project.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex justify-center">
        <div className="inline-flex items-center justify-center rounded-full bg-slate-800/50 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm">
          <span className="font-bold text-cyan-400">{current}</span>
          <span className="mx-2">/</span>
          <span>{count}</span>
        </div>
      </div>
    </motion.div>
  );
};

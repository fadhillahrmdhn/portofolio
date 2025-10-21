import React from 'react';
import GradientText from '@/components/GradientText';

export const Page1 = () => {
  return (
    <section className="h-screen snap-start flex flex-col gap-6 items-center justify-center">
      <GradientText colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']} animationSpeed={3} showBorder={false} className="custom-class text-4xl sm:text-5xl md:text-6xl  px-6">
        Hei, I'm a Frontend Developer
      </GradientText>
      <p className="text-white text-center text-lg sm:text-xl max-w-3xl">
        Passionate about building modern, responsive, and performant web experiences.
      </p>
    </section>
  );
};

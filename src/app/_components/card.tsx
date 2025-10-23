import React from 'react';
import Image from 'next/image';
import { ProjectProps } from '@/types/projects.types';

const Card = ({ project }: ProjectProps) => {
  return (
    <div className="max-w-sm max-h-96 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Image className="rounded-t-lg w-full h-auto object-contain" width={400} height={250} src={project.image} alt={project.title} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">{project.description}</p>

      </div>
    </div>
  );
};

export default Card;

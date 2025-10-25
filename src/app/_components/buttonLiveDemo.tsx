
import React from 'react';
import { ExternalLink } from 'lucide-react';

export const ButtonLiveDemo = ({ link }: { link: string }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit site"
      className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 shadow-lg shadow-cyan-500/50  rounded-lg px-5 py-2.5 text-center me-2 mb-2"
    >
      <ExternalLink className="size-4" />
    </a>
  );
};

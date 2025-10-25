import React from 'react';

export const Badge = ({ tech }: { tech: string }) => {
  return <span className="inline-block rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300 border border-cyan-400/20">{tech}</span>;
};

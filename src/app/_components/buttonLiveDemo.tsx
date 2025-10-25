import React from 'react';

export const ButtonLiveDemo = ({ link }: { link: string }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm py-2.5 text-center me-2 mb-2 w-1/4"
    >
      Visit Site
    </a>
  );
};

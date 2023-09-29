'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { FaFeather } from 'react-icons/fa';

export const SidebarTweetButton = ({ className }: { className?: string }) => {
  const { push: navigateTo } = useRouter();

  const handleClick = useCallback(() => navigateTo('/'), [navigateTo]);

  return (
    <div onClick={handleClick} className={className}>
      <div className="flex mt-6 bg-sky-500 hover:bg-opacity-60 hover:scale-110 transition-all duration-300 ease-in-out lg:hidden rounded-full h-14 w-14 p-4 items-center justify-center cursor-pointer">
        <FaFeather size={24} color="white" />
      </div>
      <div className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-500 hover:bg-opacity-70 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out ">
        <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
          Tweet
        </p>
      </div>
    </div>
  );
};

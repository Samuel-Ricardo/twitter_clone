'use client';

import { ISidebarItemProps } from '@/app/@types/props/section/sidebar/item';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { BsDot } from 'react-icons/bs';

export const SideBarItem = ({
  onClick,
  icon: Icon,
  label,
  href,
  alert,
}: ISidebarItemProps) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    onClick && onClick();
    href && router.push(href);
  }, [onClick, href, router]);

  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div className=" relative rounded-full h-14 w-14 flex items-center justify-center p-4 cursor-pointer lg:hidden hover:bg-blue-300 hover:opacity-80 hover:scale-105 transition-all duration-300 ease-in-out">
        <Icon
          size={28}
          color="white"
          className="hover:fill-black transition "
        />
        {alert && (
          <BsDot className="absolute -top-4 left-0" size={70} color="red" />
        )}
      </div>
      <div className=" relative hidden lg:flex items-row gap-4 p-4 rounded-full cursor-pointer items-center hover:bg-blue-300 hover:opacity-80 hover:scale-105 transition-all duration-300 ease-in-out">
        <Icon size={24} color="white" className="hover:fill-black transition" />
        <p className="hidden lg:block">{label}</p>
        {alert && (
          <BsDot className="absolute -top-4 left-0" size={70} color="red" />
        )}
      </div>
    </div>
  );
};

'use client';

import { IHeaderProps } from '@/app/@types/props/header';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { BiArrowBack } from 'react-icons/bi';

export const Header = ({ label, hideBackButton }: IHeaderProps) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="border-b-[1px] border-neutral-800 p5 flex w-full h-fit">
      <div className="flex flex-row w-full h-fit items-center px-3 py-3">
        {!hideBackButton && (
          <BiArrowBack
            onClick={handleBack}
            color="white"
            size={35}
            className="cursor-pointer p-1 rounded-full hover:scale-125 transition-all duration-300 ease-in-out hover:fill-cyan-200"
          />
        )}
        <h1 className="text-xl font-semibold text-white mx-auto">{label}</h1>
      </div>
    </div>
  );
};

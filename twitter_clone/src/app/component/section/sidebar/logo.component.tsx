'use client';

import { useRouter } from 'next/navigation';
import { BsTwitter } from 'react-icons/bs';

export const SidebarLogo = ({ className }: { className?: string }) => {
  const { push } = useRouter();

  return (
    <div
      onClick={() => push('/')}
      className={
        'rounded-full h-14 w-14 p-4 flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out hover:bg-blue-300 ' +
        className
      }
    >
      <BsTwitter size={30} color="white" />
    </div>
  );
};

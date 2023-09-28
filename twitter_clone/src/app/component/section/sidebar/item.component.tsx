import { ISidebarItemProps } from '@/app/@types/props/section/sidebar/item';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { BsDot } from 'react-icons/bs';

export const SideBarItem = ({
  onClick,
  Icon,
  label,
  href,
  alert,
}: ISidebarItemProps) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    onClick && onClick;
    href && router.push(href);
  }, [onClick, href, router]);

  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div className=" relative rounded-full h-14 w-14 flex items-center justify-center p-4 cursor-pointer lg:hidden ">
        <Icon size={28} color="white" className="hover:text-cyan" />
        {alert && (
          <BsDot className="absolute -top-4 left-0" size={70} color="red" />
        )}
      </div>
      <div className=" relative hidden lg:flex items-row gap-4 p-4 rounded-full cursor-pointer items-center ">
        <Icon size={24} color="white" className="hover:text-cyan" />
        <p>{label}</p>
        {alert && (
          <BsDot className="absolute -top-4 left-0" size={70} color="red" />
        )}
      </div>
    </div>
  );
};

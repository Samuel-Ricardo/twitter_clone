import { useLoginModal } from '@/app/hooks/modal/user/login.hook';
import { useCallback } from 'react';
import { BiLogIn } from 'react-icons/bi';

export const LoginButton = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { open } = useLoginModal();

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      props.onClick ? props.onClick(event) : event.preventDefault();
      open();
    },
    [props, open],
  );

  return (
    <div
      {...props}
      onClick={handleClick}
      className={`flex items-center cursor-pointer transition-all duration-700 ease-in-out hover:bg-blue-200 hover:py-2 hover:pr-3 hover:pl-1 hover:rounded-full 
        ${props.className}`}
    >
      <BiLogIn size={38} className="w-full h-full" />
    </div>
  );
};

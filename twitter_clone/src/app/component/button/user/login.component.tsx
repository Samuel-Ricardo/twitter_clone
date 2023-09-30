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
      className={
        'flex items-center cursor-pointer transition-all duration-700 ease-in-out hover:scale-110 hover:bg-blue-200 hover:p-4 hover:rounded-full ' +
        props.className
      }
    >
      <BiLogIn className="w-full h-full" />
    </div>
  );
};

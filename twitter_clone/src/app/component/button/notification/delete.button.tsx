import { MODULES } from '@/app/modules';
import { IoMdClose } from 'react-icons/io';

export const DeleteNotificationButton = (
  props: React.HtmlHTMLAttributes<HTMLDivElement>,
) => {
  return (
    <div
      {...props}
      onClick={handleClick}
      className={
        'rounded-full h-14 w-14 p-4 flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out hover:bg-red-300 hover:mt-6 sm:hover:mt-auto ' +
        props.className
      }
    >
      <IoMdClose color="white" size={36} />
    </div>
  );
};

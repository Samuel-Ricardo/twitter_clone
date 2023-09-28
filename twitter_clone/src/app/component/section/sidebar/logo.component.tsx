import { useRouter } from 'next/router';
import { BsTwitter } from 'react-icons/bs';

export const SidebarLogo = () => {
  const { push } = useRouter();

  return (
    <div
      onClick={() => push('/')}
      className="rounded-full h-14 w-14 p-4 flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out hover:bg-blue-300"
    >
      <BsTwitter size={30} color="white" />
    </div>
  );
};

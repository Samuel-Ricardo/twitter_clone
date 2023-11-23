import { ReactNode } from 'react';

export const PostItemContainer = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}) => (
  <div
    onClick={onClick}
    className="border-b-[1px] border-neutral-800 border-opacity-90 p-5 cursor-pointer hover:rounded-md hover:bg-gradient-to-br from-gray-400/40 to-gray-100/80 hover:scale-105 transition-all duration-500 ease-in-out hover:my-8 hover:shadow-[0px_0px_30px_-15px] hover:border-none"
  >
    <div className="flex flex-col items-start gap-3">{children}</div>
  </div>
);

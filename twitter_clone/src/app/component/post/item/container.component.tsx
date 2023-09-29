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
    className="border-b-[1px] border-neutral-800 border-opacity-90 p-5 cursor-pointer hover:bg-neutral-900 hover:scale-110 transition-all duration-300 ease-in-out"
  >
    <div className="flex flex-row items-start gap-3">{children}</div>
  </div>
);

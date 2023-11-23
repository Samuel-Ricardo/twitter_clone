import { ReactNode } from 'react';

export const BioContentContainer = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-1 mt-8 px-4 pb-4">{children}</div>;
};

import { ReactNode } from 'react';

export const BioContentContainer = ({ children }: { children: ReactNode }) => {
  return <div className="mt-8 px-4">{children}</div>;
};

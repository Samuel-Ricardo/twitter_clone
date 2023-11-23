'use client';

import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { NotLogged } from '../not_logged.component';
import { IFormSubmitProps } from '@/app/@types/props/submit/form';

export function FormSubmit(props: IFormSubmitProps) {
  const { currentUser } = useCurrentUser({ displayLogin: true });

  const { title, children, className, onSubmit } = props;

  return (
    <div className="flex flex-col gap-3">
      {currentUser ? (
        <div className="flex flex-col gap-3 p-5 rounded-lg bg-gradient-to-br from-gray-100/70 to-gray-400/40 transition-all duration-700 ease-in-out hover:m-4 hover:mt-6 hover:shadow-[0px_0px_25px_-10px] hover:shadow-black hover:scale-105">
          <p>{title}</p>
          <form
            {...props}
            onSubmit={onSubmit}
            className={'flex flex-1 flex-col'}
          >
            {children}
          </form>
        </div>
      ) : (
        <NotLogged />
      )}
    </div>
  );
}

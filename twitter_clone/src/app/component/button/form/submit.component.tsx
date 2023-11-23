'use client';

//import { ISubmitIconProps } from '@/app/@types/props/submit/icon';
import { HTMLAttributes, useRef } from 'react';
import { BiExit } from 'react-icons/bi';

export const SubmitIcon = (props: HTMLAttributes<HTMLButtonElement>) => {
  const submitRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <BiExit
        {...props}
        size={30}
        onClick={() => submitRef.current?.click()}
        className={
          'text-black self-end mr-4 cursor-pointer transition hover:text-cyan-300 hover:scale-105 ' +
          props.className
        }
      />

      <input type="submit" ref={submitRef} hidden />
    </>
  );
};

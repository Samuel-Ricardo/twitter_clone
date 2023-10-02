import { ITextAreaProps } from '@/app/@types/props/form/input/textarea';

export const TextArea = (props: ITextAreaProps) => {
  return (
    <textarea
      {...props}
      className={` flex rounded-md text-black my-4 mx-2 bg-[rgba(255,255,255,0.35)] py-2 pl-2 break-all outline-none  ${props.className}`}
    />
  );
};

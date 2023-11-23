import { ILinkProps } from '@/app/@types/props/text/link';

export const Linked = (props: ILinkProps) => {
  return (
    <span
      className="text-cyan-500 font-semibold cursor-pointer hover:underline hover:text-cyan-400 transition"
      onClick={props.onClick}
    >
      {props.children ? props.children : props.text}
    </span>
  );
};

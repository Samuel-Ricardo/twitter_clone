import { ILinkProps } from '@/app/@types/props/text/link';

export const Linked = (props: ILinkProps) => {
  return (
    <span
      className="text-blue-500 font-semibold cursor-pointer hover:underline hover:text-blue-600"
      onClick={props.onClick}
    >
      {props.children ? props.children : props.text}
    </span>
  );
};

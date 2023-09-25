import { ILinkProps } from '../@types/props/link';

export const Linked = (props: ILinkProps) => {
  return (
    <span className="text-blue-500 font-semibold cursor-pointer hover:underline hover:text-blue-600">
      {props.children ? props.children : props.text}
    </span>
  );
};

import { IFooterTextProps } from '@/app/@types/props/text/footer';

export const FooterText = (props: IFooterTextProps) => {
  return (
    <p className="text-black">{props.children ? props.children : props.text}</p>
  );
};

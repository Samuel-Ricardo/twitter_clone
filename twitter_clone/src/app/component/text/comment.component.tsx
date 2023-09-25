import { IFooterTextProps } from '@/app/@types/props/text/footer';

export const FooterText = (props: IFooterTextProps) => {
  return (
    <p className="text-neutral-400">
      {props.children ? props.children : props.text}
    </p>
  );
};

import { FooterText } from '@/app/component/text/footerText.component';
import { Linked } from '@/app/component/text/link.component';
import { ILoginModalFooterProps } from '@/app/@types/props/modal/user/login/footer';

export const EditModalFooter = (props: ILoginModalFooterProps) => {
  return (
    <div className="text-neutral-400 text-center mt-4 ">
      <FooterText>
        Already have an account?{' '}
        <Linked onClick={props.onClick}>Sign in! :D</Linked>
      </FooterText>
    </div>
  );
};

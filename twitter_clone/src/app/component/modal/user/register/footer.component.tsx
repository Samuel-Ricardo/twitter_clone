import { FooterText } from '@/app/component/text/footerText.component';
import { Linked } from '@/app/component/text/link.component';
import { IRegisterModalFooterProps } from '../../../../@types/props/modal/user/register/footer';

export const RegisterModalFooter = (props: IRegisterModalFooterProps) => {
  return (
    <div className="text-neutral-400 text-center mt-4 ">
      <FooterText>
        Already have an account?{' '}
        <Linked onClick={props.onClick}>Sign in! :D</Linked>
      </FooterText>
    </div>
  );
};

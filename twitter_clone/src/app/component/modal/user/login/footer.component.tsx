import { ILoginModalFooterProps } from '@/app/@types/props/modal/user/login/footer';
import { FooterText } from '@/app/component/text/footerText.component';
import { Linked } from '@/app/component/text/link.component';

export const LogindModalFooter = ({ onClick }: ILoginModalFooterProps) => {
  return (
    <div className="text-neutral-400 text-center mt-4 ">
      <FooterText>
        You not have an account?{' '}
        <Linked onClick={onClick}>Register Now! :D </Linked>
      </FooterText>
    </div>
  );
};

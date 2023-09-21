import { IModalProps } from '@/app/@types/props/modal/generic';
import { ModalContainer } from './container.component';
import { ModalHeader } from './header.component';
import { ModalFooter } from './footer.component';
import { FC, PropsWithChildren } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export const Modal: FC<PropsWithChildren<IModalProps>> = (props) => {
  const { title, onClose, footer, children } = props;

  return (
    <ModalContainer>
      <button
        className=" text-white text-2xl p-1 ml-auto border-0 hover:opacity-70 transition"
        onClick={props.onClose}
      >
        <AiOutlineClose />
      </button>
      <ModalHeader title={title} onClose={onClose} />

      {children}

      {footer && <ModalFooter>{footer}</ModalFooter>}
    </ModalContainer>
  );
};

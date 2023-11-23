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
        className="m-3 ml-auto border-0 transition-all ease-in-out duration-300 hover:bg-blue-300 hover:rounded-full hover:p-3"
        onClick={props.onClose}
      >
        <AiOutlineClose size={34} color="white" />
      </button>

      <ModalHeader title={title} onClose={onClose} />

      {children}

      {footer && <ModalFooter>{footer}</ModalFooter>}
    </ModalContainer>
  );
};

import { useEditUserModal } from '@/app/hooks/modal/user/edit.hook';
import { FiEdit } from 'react-icons/fi';
import { LiaEdit } from 'react-icons/lia';

export const EditUserButton = () => {
  const { open } = useEditUserModal();

  return (
    <>
      <LiaEdit
        onClick={open}
        size={38}
        className="cursor-pointer transition-all duration-500 ease-in-out hover:scale-110 hover:text-cyan-300"
      />
    </>
  );
};

import { useEditUserModal } from '@/app/hooks/modal/user/edit.hook';
import { Modal } from '../generic/generic.modal';
import { ImageUpload } from '../../form/input/image/image.component';
import { Submit } from '../../form/submit.component';
import { useForm } from 'react-hook-form';
import {
  UserEditFormData,
  userEditSchema,
} from '@/app/modules/validation/zod/user/edit.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../input.component';
import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { useLoginModal } from '@/app/hooks/modal/user/login.hook';
import { useEditUser } from '@/app/hooks/user/mutate/edit.hook';
import { IUpdateUserDTO } from '@/app/modules/@core/user/DTO';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

export const EditUserModal = () => {
  const { close, isOpen } = useEditUserModal();
  const { open: openLogin } = useLoginModal();
  const { update, error } = useEditUser();
  const {
    result: { user },
    status,
  } = useCurrentUser();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserEditFormData>({
    resolver: zodResolver(userEditSchema),
  });

  useEffect(() => {
    error && toast.error(error.message);
  }, [error]);

  if (!isOpen) return null;
  if (status === 'unauthenticated') {
    openLogin();
    close();
  }

  const submit = handleSubmit((data) => {
    update({ ...data, id: user.data!.id } as IUpdateUserDTO);
  });

  return (
    <Modal title="Edit User" onClose={close}>
      <form onSubmit={submit}>
        <div className=" mt-2 gap-6 overflow-auto flex flex-col py-4 px-[3vw] w-[80vw] max-w-1/2 transition">
          <ImageUpload
            label="Avatar"
            image={user.data?.profileImage || ''}
            errors={errors.profileImage}
            onChange={({ file }) => setValue('profileImage', file)}
            reactForms={{ register, name: 'profileImage' }}
          />

          <ImageUpload
            label="Cover"
            image={user.data?.coverImage || ''}
            errors={errors.coverImage}
            onChange={({ file }) => setValue('coverImage', file)}
            reactForms={{ register, name: 'coverImage' }}
          />

          <Input
            core={{
              type: 'text',
              placeholder: 'Name',
              defaultValue: user.data?.name || '',
            }}
            label="Name"
            reactForms={{ register, name: 'name' }}
            errors={errors.name}
          />

          <Input
            core={{
              type: 'text',
              placeholder: 'Username',
              defaultValue: user.data?.username || '',
            }}
            label="Username"
            reactForms={{ register, name: 'username' }}
            errors={errors.username}
          />

          <Input
            core={{
              type: 'text',
              placeholder: 'Bio',
              defaultValue: user.data?.bio || '',
            }}
            label="Bio"
            reactForms={{ register, name: 'bio' }}
            errors={errors.bio}
          />

          <Submit />
        </div>
      </form>
    </Modal>
  );
};

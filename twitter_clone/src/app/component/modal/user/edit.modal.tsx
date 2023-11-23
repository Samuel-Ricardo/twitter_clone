'use client';

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
import { useEffect, useMemo } from 'react';
import { toast } from 'react-hot-toast';

export const EditUserModal = () => {
  const { close, isOpen } = useEditUserModal();
  const { open: openLogin } = useLoginModal();
  const { updateAsync, error } = useEditUser();
  const {
    result: { data, mutate },
    status,
  } = useCurrentUser();

  const user = data?.user;

  const initialValues = useMemo(
    () => ({
      name: user?.name,
      username: user?.username,
      bio: user?.bio,
      profileImage: user?.profileImage || '',
      coverImage: user?.coverImage || '',
    }),
    [user],
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserEditFormData>({
    resolver: zodResolver(userEditSchema),
    defaultValues: initialValues,
  });

  useEffect(() => {
    error && toast.error(error.message);
  }, [error]);

  if (!isOpen) return null;
  if (status === 'unauthenticated') {
    openLogin();
    close();
  }

  const submit = handleSubmit(async (data) => {
    await updateAsync({
      id: user!.id,
      coverImage: (data.coverImage as string) || user!.coverImage || undefined,
      profileImage:
        (data.profileImage as string) || user!.profileImage || undefined,
      bio: data.bio || user!.bio || undefined,
      name: data.name || user!.name,
      username: data.username || user!.username,
    });

    !error && mutate();
    !error && close();
  });

  return (
    <Modal title="Edit User" onClose={close}>
      <form onSubmit={submit}>
        <div className=" mt-2 gap-6 overflow-auto flex flex-col py-4 px-[3vw] w-[80vw] max-w-1/2 transition">
          <ImageUpload
            label="Avatar"
            image={user?.profileImage || ''}
            errors={errors.profileImage?.message}
            onChange={({ file }) => setValue('profileImage', file)}
            reactHook={{ registry: () => register('profileImage') }}
          />

          <ImageUpload
            label="Cover"
            image={user?.coverImage || ''}
            errors={errors.coverImage?.message}
            onChange={({ file }) => setValue('coverImage', file)}
            reactHook={{ registry: () => register('coverImage') }}
          />

          <Input
            light
            core={{
              type: 'text',
              placeholder: 'Name',
              defaultValue: user?.name || '',
            }}
            label="Name"
            reactForms={{ register, name: 'name' }}
            className="-my-4"
            errors={errors.name}
          />

          <Input
            light
            core={{
              type: 'text',
              placeholder: 'Username',
              defaultValue: user?.username || '',
            }}
            label="Username"
            reactForms={{ register, name: 'username' }}
            className="-my-4"
            errors={errors.username}
          />

          <Input
            light
            core={{
              type: 'text',
              placeholder: 'Bio',
              defaultValue: user?.bio || '',
            }}
            label="Bio"
            reactForms={{ register, name: 'bio' }}
            className="-my-4"
            errors={errors.bio}
          />

          <Submit />
        </div>
      </form>
    </Modal>
  );
};

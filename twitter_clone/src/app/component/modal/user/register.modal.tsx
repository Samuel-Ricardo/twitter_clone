'use client';

import { IModalProps } from '@/app/@types/props/modal/generic';
import { Modal } from '../generic/generic.modal';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../input.component';
import { toast } from 'react-hot-toast';
import {
  UserRegisterFormData,
  userRegisterSchema,
} from '@/app/modules/validation/zod/user/register.validation';
import { useUserRegisterModal } from '@/app/hooks/modal/user/register.hook';
import { useCreateUser } from '@/app/hooks/user/mutate/create.hook';
import { useEffect } from 'react';
import { useLoginModal } from '@/app/hooks/modal/user/login.hook';
import { RegisterModalFooter } from './register/footer.component';
import { Submit } from '../../form/submit.component';

export const RegisterModal = () => {
  const { close, isOpen } = useUserRegisterModal();
  const { open: openLogin } = useLoginModal();
  const { create, data, error, isLoading } = useCreateUser();

  useEffect(() => console.log({ data }), [data]);
  useEffect(() => console.log({ error }), [error]);
  useEffect(() => {
    toast.error(error?.message);
  }, [error]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterFormData>({
    resolver: zodResolver(userRegisterSchema),
  });

  const toggle = () => {
    if (isLoading) return toast.error('You should not login while loading :D');

    close();
    openLogin();
  };

  if (!isOpen) return null; // return null if modal is not isOpen

  const modalProps: IModalProps = {
    title: 'Register',
    onClose: () => {
      toast.success('Closed :D');
      close();
    },
    footer: <RegisterModalFooter onClick={toggle} />,
  };

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success('Successfully toasted! :D');

    create(data);
  };

  return (
    <Modal {...modalProps}>
      <div className=" overflow-auto flex flex-col py-4 px-[3vw] w-[80vw] max-w-1/2 transition">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            light
            core={{ type: 'email', placeholder: 'Email' }}
            label="Email: "
            reactForms={{ register, name: 'email' }}
            className="-my-2"
            errors={errors.email}
          />
          <Input
            light
            core={{ type: 'text', placeholder: 'Name' }}
            label="Name: "
            reactForms={{ register, name: 'name' }}
            className="-my-2"
            errors={errors.name}
          />
          <Input
            light
            core={{ type: 'text', placeholder: 'Username' }}
            label="Username: "
            reactForms={{ register, name: 'username' }}
            className="-my-2"
            errors={errors.username}
          />
          <Input
            light
            core={{ type: 'password', placeholder: 'Password' }}
            label="Password: "
            reactForms={{ register, name: 'password' }}
            className="-my-2"
            errors={errors.password}
          />

          <Submit />
        </form>
      </div>
    </Modal>
  );
};

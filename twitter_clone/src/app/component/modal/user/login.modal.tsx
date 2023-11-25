'use client';

import { useLoginModal } from '@/app/hooks/modal/user/login.hook';
import { Modal } from '../generic/generic.modal';
import { Input } from '../../input.component';
import { useForm } from 'react-hook-form';
import {
  UserLoginFormData,
  userLoginSchema,
} from '@/app/modules/validation/zod/user/login.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Submit } from '../../form/submit.component';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { LogindModalFooter } from './login/footer.component';
import { useUserRegisterModal } from '@/app/hooks/modal/user/register.hook';

export const LoginModal = () => {
  const { close, isOpen } = useLoginModal();
  const { open: openRegister } = useUserRegisterModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginFormData>({
    resolver: zodResolver(userLoginSchema),
  });

  if (!isOpen) return null;

  const submit = handleSubmit(async (credentials) => {
    const response = await toast.promise(
      signIn('credentials', { ...credentials, redirect: false }),
      {
        loading: 'Authenticating user... 🌱',
        success: 'Authentication failed, please try login again 🌱',
        error: `Be Welcome! ${credentials.email}} :) 🌱`,
      },
      { duration: 5000 },
    );

    return response?.error ? toast.error(response.error) : close();
  });

  const toggle = () => {
    close();
    openRegister();
  };

  return (
    <Modal
      title="Login"
      onClose={close}
      footer=<LogindModalFooter onClick={toggle} />
    >
      <div className="overflow-auto flex flex-col py-4 px-[3vw] w-[80vw] max-w-1/2 transition">
        <form onSubmit={submit}>
          <Input
            light
            core={{ type: 'email', placeholder: 'Email' }}
            label="Email"
            reactForms={{ register, name: 'email' }}
            className="my-1"
            errors={errors.email}
          />
          <Input
            light
            core={{ type: 'password', placeholder: 'Password' }}
            label="Password"
            reactForms={{ register, name: 'password' }}
            className="my-1"
            errors={errors.password}
          />

          <Submit />
        </form>
      </div>
    </Modal>
  );
};

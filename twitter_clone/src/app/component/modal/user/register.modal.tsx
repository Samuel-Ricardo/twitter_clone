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

export const RegisterModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterFormData>({
    resolver: zodResolver(userRegisterSchema),
  });

  const modalProps: IModalProps = {
    title: 'Register',
    onClose: () => toast.success('close'),
  };

  console.log({ errors });

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success('Successfully toasted!');
  };

  return (
    <Modal {...modalProps}>
      <div className="flex flex-col py-4 px-6 w-[80vw] max-w-1/2">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <Input
            core={{ type: 'email', placeholder: 'Email' }}
            label="Email: "
            reactForms={{ register, name: 'email' }}
            className="my-4"
            errors={errors.email}
          />
          <Input
            core={{ type: 'text', placeholder: 'Name' }}
            label="Name: "
            reactForms={{ register, name: 'name' }}
            className="my-4"
            errors={errors.name}
          />
          <Input
            core={{ type: 'text', placeholder: 'Username' }}
            label="Username: "
            reactForms={{ register, name: 'username' }}
            className="my-4"
            errors={errors.username}
          />
          <Input
            core={{ type: 'password', placeholder: 'Password' }}
            label="Password: "
            reactForms={{ register, name: 'password' }}
            className="my-4"
            errors={errors.password}
          />

          <input
            type="submit"
            className=" transition hover:ease-in  mt-10 bg-white text-black font-semibold text-xl w-full rounded-full py-1.5 hover:cursor-pointer hover:shadow-[-0px_0px_40px] hover:shadow-cyan-500/50"
          />
        </form>
      </div>
    </Modal>
  );
};

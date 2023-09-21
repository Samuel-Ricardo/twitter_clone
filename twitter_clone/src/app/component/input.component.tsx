import { IInputProps } from '../@types/props/input';
import { InputContainer } from './inputContainer.component';

export const Input = (props: IInputProps) => {
  const { label, core, errors } = props;

  return (
    <InputContainer label={label} errors={errors}>
      <input
        {...core}
        className=" 
        w-full 
        p-1 
        rounded-lg 
        text-lg 
        bg-black 
        border-2 
        border-neutral-800 
        outline-none 
        text-white 
        focus:border-sky-500 
        foxus:border-3 
        transition 
        disabled:bg-neutral-900 
        disabled:opacity-70 
        disabled:cursor-not-allowed
        "
      />
    </InputContainer>
  );
};

import { IInputProps } from '../@types/props/input';
import { InputContainer } from './inputContainer.component';

export const Input = (props: IInputProps) => {
  const { label, core, errors, reactForms, light } = props;

  const darkTheme = ` 
        w-full 
        h-14
        p-1
        mx-1
        px-8
        rounded-lg 
        text-lg 
        bg-black 
        border-2 
        border-neutral-800 
        outline-none 
        text-white 
        focus:border-sky-500 
        focus:border-3 
        transition 
        disabled:bg-neutral-900 
        disabled:opacity-70 
        disabled:cursor-not-allowed 
        ${core?.className}
        `;

  return (
    <InputContainer label={label} errors={errors} className={props.className}>
      <input
        {...props}
        {...core}
        className={
          !light
            ? darkTheme
            : ` outline-none  flex flex-1 w-full h-fit flex-col rounded-md text-black my-4 mx-2 bg-[rgba(255,255,255,0.35)] py-2 pl-2 ${core?.className}`
        }
        {...reactForms?.register(reactForms.name)}
      />
    </InputContainer>
  );
};

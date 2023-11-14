import { IInputContainerProps } from '../@types/props/inputContainer';

export const InputContainer = (props: IInputContainerProps) => {
  const { label, errors, children } = props;

  return (
    <div className={`flex flex-col w-full p-4 text-white ${props.className}`}>
      {label && <label className="text-lg text-black  mb-2">{label}</label>}

      {children}

      {errors && (
        <p className="text-red-500 font-semibold text-sm">{errors.message}</p>
      )}
    </div>
  );
};

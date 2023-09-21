import { IInputContainerProps } from '../@types/props/inputContainer';

export const InputContainer = (props: IInputContainerProps) => {
  const { label, errors, children } = props;

  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-lg text-white font-semibold mb-2">{label}</label>
      )}

      {children}

      {errors && (
        <p className="text-red-500 font-semibold text-sm">{errors.message}</p>
      )}
    </div>
  );
};

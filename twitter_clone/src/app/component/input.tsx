import { IInputProps } from '../@types/props/input';

export const Input = (props: IInputProps) => {
  const { label, reactForms, errors, core } = props;

  return (
    <div>
      {label && (
        <label className="text-xl text-white font-semibold mb-2">{label}</label>
      )}

      <input {...core} {...reactForms?.register(reactForms.name)} />

      {errors && (
        <p className="text-red-500 font-semibold text-sm">{errors.message}</p>
      )}
    </div>
  );
};

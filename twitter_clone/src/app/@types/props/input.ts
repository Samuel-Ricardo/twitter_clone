export interface IInputProps {
  core: React.InputHTMLAttributes<HTMLInputElement>;
  reactForms?: {
    name: string;
    register: any;
  };
  errors?: any;
  label?: string;
}

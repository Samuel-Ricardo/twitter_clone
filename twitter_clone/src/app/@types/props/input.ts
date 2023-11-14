export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  core?: React.InputHTMLAttributes<HTMLInputElement>;
  reactForms?: {
    name: string;
    register: any;
  };
  errors?: any;
  label?: string;
  className?: string;
  light?: boolean;
}

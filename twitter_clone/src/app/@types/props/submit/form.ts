export interface IFormSubmitProps
  extends React.FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode;
  onSubmit: (...data: any) => any;
  title: string;
}

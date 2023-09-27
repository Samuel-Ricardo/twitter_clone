export interface IButtonProps {
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  fullWidth?: boolean;
  secondary?: boolean;
  large?: boolean;
  outline?: boolean;
}

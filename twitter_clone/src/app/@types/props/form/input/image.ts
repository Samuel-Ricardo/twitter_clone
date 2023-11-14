export interface IImageUploadProps {
  onChange: (data: { file?: File | null; base64: string }) => void;
  label: string;
  className?: string;
  image: string;
  disabled?: boolean;
  large?: boolean;
  reactHook: { registry: () => void | any };
  errors?: string;
}

import { IInputProps } from '../../input';

export interface IImageUploadProps extends IInputProps {
  onChange: (data: { file: File; base64: string }) => void;
  image: string;
  disabled?: boolean;
}

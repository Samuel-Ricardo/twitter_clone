import { IImageUploadContainerProps } from '@/app/@types/props/form/input/image.container';

export const ImageUploadContainer = ({
  className,
  errors,
  label,
  children,
}: IImageUploadContainerProps) => (
  <div className={`flex flex-col w-full ${className}`}>
    {label && (
      <label className="text-lg text-white font-semibold mb-2">{label}</label>
    )}

    {children}

    {errors && (
      <p className="text-red-500 font-semibold text-sm">{errors.message}</p>
    )}
  </div>
);

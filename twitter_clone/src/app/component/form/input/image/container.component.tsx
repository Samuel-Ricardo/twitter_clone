import { IImageUploadContainerProps } from '@/app/@types/props/form/input/image.container';

export const ImageUploadContainer = ({
  className: style,
  errors,
  children,
  dropzone,
}: IImageUploadContainerProps) => (
  <div className="flex flex-col flex-1 gap-6 text-center justify-center items-center">
    <div
      {...dropzone({
        className: `flex justify-center itens-center w-full p-4 text-white text-center border-[3px] border-dotted rounded-md border-white ${style}`,
      })}
    >
      {children}
    </div>

    {errors && (
      <p className="text-red-500 font-semibold text-sm">{errors.message}</p>
    )}
  </div>
);

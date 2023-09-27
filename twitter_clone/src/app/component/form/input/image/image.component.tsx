import { IImageUploadProps } from '@/app/@types/props/form/input/image';
import { ImageUploadContainer } from './container.component';
import { useDropzone } from 'react-dropzone';
import { useCallback, useState } from 'react';
import Image from 'next/image';

export const ImageUpload = ({
  label,
  errors,
  className,
  reactForms,
  image,
  disabled,
  onChange,
}: IImageUploadProps) => {
  const [base64, setBase64] = useState(image);
  reactForms?.register(reactForms.name);

  const handleChange = useCallback(
    (file: File, base64: string) => onChange({ file, base64 }),
    [onChange],
  );

  const handleDrop = useCallback(
    (files: File[]) => {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = (event: any) => {
        setBase64(event.target.result);
        handleChange(file, event.target.result);
      };

      reader.readAsDataURL(file);
    },
    [handleChange],
  );

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: handleDrop,
    disabled,
    accept: { 'image/png': [], 'image/jpg': [], 'image/*': [] },
  });

  return (
    <ImageUploadContainer
      errors={errors}
      className={className}
      dropzone={getRootProps}
    >
      <input {...getInputProps()} />

      {base64 ? (
        <Image
          src={base64}
          width={150}
          height={150}
          alt="uploaded image"
          className="rounded-full"
        />
      ) : (
        <label className="text-lg text-white font-semibold mb-2">{label}</label>
      )}
    </ImageUploadContainer>
  );
};

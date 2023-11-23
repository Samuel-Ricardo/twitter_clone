'use client';

import { IImageUploadProps } from '@/app/@types/props/form/input/image';
import { ImageUploadContainer } from './container.component';
import { useDropzone } from 'react-dropzone';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { DeleteButton } from '@/app/component/button/delete.component';
import { File } from '../../../../@types/file';

export const ImageUpload = ({
  label,
  errors,
  className,
  reactHook,
  image,
  disabled,
  onChange,
  large,
}: IImageUploadProps) => {
  const [base64, setBase64] = useState(image);
  reactHook?.registry();

  //  const { file } = useFile(base64, { name: 'image', type: 'image/png' });

  useEffect(() => setBase64(image), [image]);

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
    <div className="flex flex-row w-full h-fit gap-2">
      <ImageUploadContainer
        errors={errors}
        className={className}
        dropzone={getRootProps}
      >
        <input {...getInputProps()} />

        {base64 ? (
          !large ? (
            <Image src={base64} width={150} height={150} alt="uploaded image" />
          ) : (
            <Image
              src={base64}
              width={1920}
              height={1080}
              alt="uploaded image"
              className="w-full h-full"
            />
          )
        ) : (
          <label className="text-lg text-white font-semibold mb-2">
            {label}
          </label>
        )}
      </ImageUploadContainer>
      {base64 && (
        <DeleteButton
          className="self-start cursor-pointer text-black"
          onClick={() => {
            setBase64('');
            onChange({ file: null, base64: '' });
          }}
        />
      )}
    </div>
  );
};

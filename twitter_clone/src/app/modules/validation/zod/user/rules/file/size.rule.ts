export const maxFileSize = (bytes: number) => (file?: File | null | string) =>
  file && file instanceof File ? file.size <= bytes : true;

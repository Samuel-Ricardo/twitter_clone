export const toBase64 = (file?: File | null | string) => {
  return new Promise((resolve, reject) => {
    if (!file || typeof file === 'string') return resolve(file);

    const reader = new FileReader();

    reader.onload = (event) => resolve(event.target?.result);
    reader.onerror = (error) => reject(error);

    reader.readAsDataURL(file);
  });
};

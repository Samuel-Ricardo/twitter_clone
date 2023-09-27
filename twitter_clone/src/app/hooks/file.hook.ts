import { useState } from 'react';
import { MODULES } from '../modules';

export const useFile = (
  base64: string,
  metadata: { name: string; type: string },
) => {
  const MODULE = MODULES.GATEWAY.AXIOS.GENERIC.HTTP();

  const [file, setFile] = useState<File | null>(null);

  MODULE.server
    .get<Blob>('', { baseURL: base64 })
    .then((response) => response.data)
    .then(
      (bytes) =>
        new File([bytes], metadata.name, {
          type: metadata.type || 'image/png',
        }),
    )
    .then((file) => setFile(file));

  return { file };
};

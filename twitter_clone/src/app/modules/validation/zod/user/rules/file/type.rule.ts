import { File } from '@/app/@types/file';

export const mustBeValidFile = (value: File) =>
  value.stream || value.size || value.arrayBuffer || value.type;

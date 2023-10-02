import { TextareaHTMLAttributes } from 'react';

export interface ITextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hook?: {
    register: () => any;
  };
  errors?: any;
}

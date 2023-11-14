import { DropzoneRootProps } from 'react-dropzone';
import { IInputContainerProps } from '../../inputContainer';

export interface IImageUploadContainerProps extends IInputContainerProps {
  dropzone: <T extends DropzoneRootProps>(props: T) => any;
}

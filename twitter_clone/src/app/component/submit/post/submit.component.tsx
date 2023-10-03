import { TextArea } from '../../form/input/textarea.component';
import { SubmitIcon } from '../../button/form/submit.component';
import { FormSubmit } from '../submit.component';
import { ImageUpload } from '../../form/input/image/image.component';
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';

export const SubmitTweet = () => {
  const { register, handleSubmit } = useForm();

  const submit = useCallback((data) => {});

  return (
    <FormSubmit title="What are you think 🙃?">
      <TextArea />
      <ImageUpload reactForms={{ register, name: '' }} large />
      <SubmitIcon />
    </FormSubmit>
  );
};

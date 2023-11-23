import { ITextAreaProps } from '@/app/@types/props/form/input/textarea';

export const TextArea = (props: ITextAreaProps) => {
  return (
    <div className="flex flex-col flex-1">
      <textarea
        {...props}
        {...props.hook?.register()}
        className={` flex rounded-md text-black my-4 mx-2 bg-[rgba(255,255,255,0.35)] py-2 pl-2 break-all outline-none  ${props.className}`}
      />
      {props.errors && (
        <p className="text-red-500 font-semibold text-sm mb-6">
          {props.errors.message}
        </p>
      )}
    </div>
  );
};

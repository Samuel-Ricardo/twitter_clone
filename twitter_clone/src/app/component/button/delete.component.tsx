import { TiDeleteOutline } from 'react-icons/ti';

export const DeleteButton = (
  props: React.HtmlHTMLAttributes<HTMLDivElement>,
) => {
  return (
    <div
      {...props}
      className={
        ' w-fit h-fit transition hover:text-red-500 hover:scale-105' +
        props.className
      }
    >
      <TiDeleteOutline size={36} />
    </div>
  );
};

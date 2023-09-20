import { AiOutlineClose } from 'react-icons/ai';

export const ModalHeader = (props: { title: string; onClose: () => void }) => {
  return (
    <div className="flex items-center justify-between p-10 rounded-t">
      <h3 className="text-3xl font-semibold text-white">{props.title}</h3>
      <button
        className=" text-white p-1 ml-auto border-0 hover:opacity-60 transition"
        onClick={props.onClose}
      >
        <AiOutlineClose />
      </button>
    </div>
  );
};

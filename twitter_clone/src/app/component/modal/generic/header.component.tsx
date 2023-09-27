export const ModalHeader = (props: { title: string; onClose: () => void }) => {
  return (
    <div className="flex items-center justify-between rounded py-3 px-5 mx-4 my-2 bg-gradient-to-br from-blue-500 to-purple-500">
      <h3 className="text-3xl font-semibold text-white">{props.title}</h3>
    </div>
  );
};

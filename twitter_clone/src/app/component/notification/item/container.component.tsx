export const NotificationItemContainer = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: any;
}) => {
  return (
    <div
      onClick={onClick}
      className=" hover:cursor-pointer z-50 rounded-xl flex h-fit w-full bg-gradient-to-tl from-gray-100/80 to-gray-400/40 transition-all duration-1000 ease-in-out hover:scale-105 hover:mr-auto hover:my-4 hover:bg-gradient-to-br sm:rounded-full "
    >
      <div className="flex flex-col flex-1 rounded-xl sm:flex-row items-center gap-4 p-4 bg-gray-300/50 transition-all duration-1000 ease-in-out hover:bg-transparent sm:rounded-full">
        {children}
      </div>
    </div>
  );
};

export const NotificationItemContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-1 bg-gradient-to-tl from-gray-100/80 to-gray-400/40 transition-all duration-1000 ease-in-out hover:scale-110 hover:my-4 hover:bg-gradient-to-br rounded-full">
      <div className="flex flex-row flex-1 items-center gap-4 p-4 bg-gray-300/60 transition-all duration-1000 ease-in-out hover:bg-transparent rounded-full">
        {children}
      </div>
    </div>
  );
};

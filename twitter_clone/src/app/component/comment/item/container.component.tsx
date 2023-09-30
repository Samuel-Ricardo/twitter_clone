export const CommentItemContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="flex flex-col flex-1  bg-gradient-to-br from-gray-100/80 to-gray-400/40 transition-all duration-1000 ease-in-out hover:opacity-90 hover:scale-110 hover:my-8 hover:from-gray-400/40 hover:to-gray-100/80 rounded-xl">
    <div className=" rounded-xl flex flex-row flex-1 bg-gray-300/70 transparent transition-all duration-1000 ease-in-out hover:bg-transparent p-2">
      {children}
    </div>
  </div>
);

export const FollowBarContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="px-6 py-4 hidden lg:block">
    <div className="bg-sky-500 rounded-xl p-4">{children}</div>
  </div>
);

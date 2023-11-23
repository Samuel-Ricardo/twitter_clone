export const FollowBarContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="px-6 py-4  hidden w-fit lg:block rounded-md ">
    <div className="bg-[rgba(0,100,255,0.10)] rounded-xl p-4 ">{children}</div>
  </div>
);

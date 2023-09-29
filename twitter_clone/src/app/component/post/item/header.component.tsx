import { IUserDTO } from '@/app/modules/@core/user/DTO';

export const PostItemHeader = ({
  user,
  createdAt,
}: {
  user: IUserDTO;
  createdAt: string;
}) => (
  <div className="flex flex-row items-center gap-2">
    <p className="hover:underline">{user.name}</p>
    <span className=" text-neutral-500 hover:underline">@{user.username}</span>
    <span>{createdAt}</span>
  </div>
);

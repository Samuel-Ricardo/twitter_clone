import { IUserDTO } from '@/app/modules/@core/user/DTO';
import { Avatar } from '../../user/avatar.component';
import { DeleteTweetButton } from '../../button/tweet/delete.button';

export const PostItemHeader = ({
  user,
  createdAt,
  body,
  id,
  deletable,
}: {
  user?: IUserDTO;
  createdAt: string;
  body: string;
  id: string;
  deletable?: boolean;
}) => (
  <div className="flex flex-row items-start gap-3 w-full">
    <div className="min-w-fit">
      <Avatar userId={user?.id} image={user?.profileImage} />
    </div>

    <div>
      <div className="flex flex-col items-start gap-2">
        <div className="flex flex-row items-center gap-2 w-full">
          <p className="hover:underline text-lg ">{user?.name || ''}</p>
          <span className=" text-neutral-500 hover:underline">
            @{user?.username || ''}
          </span>
          <span className="hidden md:block">{createdAt}</span>
        </div>
        <span className="md:hidden">{createdAt}</span>
      </div>

      <div className="my-4 mx-2 bg-[rgba(255,255,255,0.35)] p-2 rounded-md overflow-clip break-all hidden md:block ">
        {body}
      </div>
    </div>
    {deletable && <DeleteTweetButton id={id} className="mr-2 ml-auto" />}
  </div>
);

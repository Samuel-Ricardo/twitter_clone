import { IUserDTO } from '@/app/modules/@core/user/DTO';
import { Avatar } from '../../user/avatar.component';

export const PostItemHeader = ({
  user,
  createdAt,
  body,
}: {
  user?: IUserDTO;
  createdAt: string;
  body: string;
}) => (
  <div className="flex flex-row items-start gap-3">
    <div className="min-w-fit">
      <Avatar userId={user?.id} image={user?.profileImage} />
    </div>

    <div>
      <div className="flex flex-col items-start gap-2">
        <div className="flex flex-row items-center gap-2">
          <p className="hover:underline">{user?.name || ''}</p>
          <span className=" text-neutral-500 hover:underline">
            @{user?.username || ''}
          </span>
          <span className="hidden md:block">{createdAt}</span>
        </div>
        <span className="md:hidden">{createdAt}</span>
      </div>

      <div className="my-4 mx-2 bg-[rgba(255,255,255,0.35)] p-2 rounded-md overflow-clip break-all hidden md:block ">
        {body +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
      </div>
    </div>
  </div>
);

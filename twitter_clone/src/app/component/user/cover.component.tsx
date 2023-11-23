import { ICoverProps } from '@/app/@types/props/user/cover';
import Image from 'next/image';
import { Avatar } from './avatar.component';

export const ProfileCover = ({
  userId,
  cover,
  avatar,
  onAvatarClick,
}: ICoverProps) => {
  return (
    <div className="mt-1 z-10">
      <div className="bg-gradient-to-br from-gray-100/70 to-gray-400/40   min-h-fit h-[35vh] relative rounded-md">
        {cover && (
          <Image
            src={cover}
            fill
            alt="cover image"
            style={{ objectFit: 'cover' }}
            className="rounded-md"
          />
        )}
        <div className="absolute -bottom-16 left-4">
          <Avatar
            userId={userId}
            image={avatar}
            onClick={onAvatarClick}
            large
            bordered
          />
        </div>
      </div>
    </div>
  );
};

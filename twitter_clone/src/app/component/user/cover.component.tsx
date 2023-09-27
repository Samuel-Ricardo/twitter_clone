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
    <div>
      <div className="bg-neutral-700 h-44 relative">
        {cover && (
          <Image
            src={cover}
            fill
            alt="cover image"
            style={{ objectFit: 'cover' }}
          />
        )}
        <div className="absolute -bottom-16 left-4">
          <Avatar userId={userId} image={avatar} onClick={onAvatarClick} />
        </div>
      </div>
    </div>
  );
};

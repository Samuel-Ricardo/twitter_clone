import { IAvatarProps } from '@/app/@types/props/user/avatar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export const Avatar = ({
  image,
  large,
  bordered,
  userId,
  onClick,
}: IAvatarProps) => {
  const router = useRouter();

  const handleClick = useCallback(
    (event: React.MouseEvent<any>) => {
      event.stopPropagation();
      if (onClick) onClick(event);
      router.push(`/users/${userId}`);
    },
    [router, userId, onClick],
  );

  return (
    <div
      className={`
        ${bordered ? 'border-4 border-gray-400/40' : ''}
        ${large ? 'h-36' : 'h-20'}
        ${large ? 'w-36' : 'w-20'}
        rounded-full 
        hover:scale-110
        duration-300
        transition-all
        ease-in-out
        cursor-pointer
        relative
      `}
    >
      <Image
        fill
        src={image || '/user/images/placeholder.png'}
        alt="avatar"
        onClick={handleClick}
        style={{
          objectFit: 'cover',
          borderRadius: '100%',
        }}
      />
    </div>
  );
};

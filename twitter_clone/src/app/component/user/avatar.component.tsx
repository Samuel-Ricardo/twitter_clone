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
    (event: React.MouseEvent<HTMLImageElement>) => {
      event.stopPropagation();
      if (onClick) onClick(event);
      router.push(`/users/${userId}`);
    },
    [router, userId, onClick],
  );

  return (
    <div
      className={`
        ${bordered ? 'border-4 border-black' : ''}
        ${large ? 'h-32' : 'h-12'}
        ${large ? 'w-32' : 'w-12'}
        rounded-full 
        hover:opacity-90 
        transition 
        cursor-pointer
        relative
      `}
    >
      <Image
        fill
        src={image || '/images/avatar.png'}
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

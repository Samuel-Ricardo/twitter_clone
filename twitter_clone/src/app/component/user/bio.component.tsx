import { IProfileBIoProps } from '@/app/@types/props/user/bio';
import { BioContainer } from './bio/container.component';
import { EditUserButton } from '../button/user/edit.button';
import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { FollowButton } from '../button/user/follow.button';

export const ProfileBio = (props: IProfileBIoProps) => {
  const { currentUser } = useCurrentUser({ displayLogin: true });

  return (
    <BioContainer>
      <div className="flex justify-end">
        {currentUser?.id === props.userId ? (
          <EditUserButton />
        ) : (
          <FollowButton userId={props.userId} />
        )}
      </div>
      {props.bio}
    </BioContainer>
  );
};

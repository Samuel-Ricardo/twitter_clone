import { IBioDataProps } from '@/app/@types/props/user/data/bio';

export const BioData = (props: IBioDataProps) => {
  return (
    <div className="flex flex-col">
      <p className="text-2xl font-semibold">{props.user}</p>
      <p className="text-md text-neutral-500">@{props.username}</p>
    </div>
  );
};

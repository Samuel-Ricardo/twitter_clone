import { IBioBodyProps } from '@/app/@types/props/user/body/bio';
import { LiaCalendarWeekSolid } from 'react-icons/lia';

export const BioBody = (props: IBioBodyProps) => {
  return (
    <div className="flex flex-col mt-4">
      <div className="p-2 bg-gray-100/70 rounded-md h-fit w-fit">
        <p>{props.bio}</p>
      </div>
      <div
        className="
              flex 
              flex-row 
              items-center 
              gap-2 
              mt-4 
          "
      >
        <LiaCalendarWeekSolid size={34} />
        <p>Joined {props.createdAt}</p>
      </div>
    </div>
  );
};

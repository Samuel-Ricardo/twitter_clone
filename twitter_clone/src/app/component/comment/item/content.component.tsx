import { ICommentItemContentProps } from '@/app/@types/props/comment/item_content';
import { formatDistanceToNowStrict } from 'date-fns';
import { useMemo } from 'react';

export const CommentItemContent = ({
  body,
  createdAt: date,
  author,
}: ICommentItemContentProps) => {
  const createdAt = useMemo(
    () => (date ? formatDistanceToNowStrict(new Date(date)) : ''),
    [date],
  );

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-row w-fit h-fit gap-2 p-3 items-center justify-center ">
        <p className="text-lg font-semibold"> @{author} </p>
        <p> {createdAt} </p>
      </div>
      <div className=" w-fit h-fit mb-4 mx-4 bg-[rgba(255,255,255,0.35)] p-3 rounded-md overflow-clip break-all ">
        <p>{body}</p>
      </div>
    </div>
  );
};

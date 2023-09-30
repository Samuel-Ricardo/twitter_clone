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
        <p>
          {' '}
          {body} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.{' '}
        </p>
      </div>
    </div>
  );
};

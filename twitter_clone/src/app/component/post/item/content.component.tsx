import { IPostItemContentProps } from '@/app/@types/props/post/item_content';
import Image from 'next/image';

export const PostItemContent = ({ body, image }: IPostItemContentProps) => {
  return (
    <div className="pr-4">
      <div className="my-4 mx-2 bg-[rgba(255,255,255,0.35)] py-2 pl-2 rounded-md overflow-clip break-all md:hidden ">
        {body +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
      </div>

      {image && (
        <Image
          src={image || '/user/images/placeholder.png'}
          alt="post image"
          width={1080}
          height={1920}
          className=" mx-5 w-auto max-w-full h-full max-h-[50vh]  rounded-md"
        />
      )}
    </div>
  );
};

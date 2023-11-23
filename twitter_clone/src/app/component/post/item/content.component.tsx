import { IPostItemContentProps } from '@/app/@types/props/post/item_content';
import Image from 'next/image';

export const PostItemContent = ({
  body,
  image,
  fitScreen,
}: IPostItemContentProps) => {
  return (
    <div className="pr-4">
      <div className="my-4 mx-2 bg-[rgba(255,255,255,0.35)] py-2 pl-2 rounded-md overflow-clip break-all md:hidden ">
        {body}
      </div>

      {image && (
        <Image
          src={image}
          alt="post image"
          width={1080}
          height={1920}
          className={` ${
            fitScreen ? 'max-h-[100vh]' : 'max-h-[50vh]'
          } w-auto max-w-full h-full mx-5 rounded-md `}
        />
      )}
    </div>
  );
};

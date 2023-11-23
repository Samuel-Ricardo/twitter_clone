import { ISubmitProps } from '@/app/@types/props/form/submit';

export const Submit = ({ className }: ISubmitProps) => (
  <input
    type="submit"
    className={` transition-all duration-300 ease-in-out mt-10 bg-gray-200 text-black font-semibold text-xl w-full rounded-full py-2 cursor-pointer hover:shadow-[0_0_30px_1px] hover:shadow-cyan-400/40 ${className}`}
  />
);

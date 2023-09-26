import { ISubmitProps } from '@/app/@types/props/form/submit';

export const Submit = ({ className }: ISubmitProps) => (
  <input
    type="submit"
    className={` transition hover:ease-in mt-10 bg-white text-black font-semibold text-xl w-full rounded-full py-1.5 cursor-pointer hover:shadow-[0_0_20px_10px] hover:shadow-cyan-500/50 ${className}`}
  />
);

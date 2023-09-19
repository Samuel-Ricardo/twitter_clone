import { MODULES } from '@/app/modules';

export const usePosts = () => MODULES.POST.MAIN().findAll().posts;

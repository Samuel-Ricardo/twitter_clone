import swr from 'swr';

export interface ISWRSupport {
  readonly useSWR: typeof swr;
  fetcher(url: string): Promise<any> | any;
}

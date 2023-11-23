export interface ISWRSupport {
  fetcher(url: string): Promise<any> | any;
}

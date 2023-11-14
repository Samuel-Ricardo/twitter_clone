export interface IAuthAlgorithmSupport {
  injectAuthTag(secret: string, auth: Buffer): string;
  getAuthTag(encrypted: string): Buffer;
}

export interface IIVAlgorithmSupport {
  injectIV(secret: string, iv: string | Buffer): string;
  extractIV(encrypted: string): Buffer;
}

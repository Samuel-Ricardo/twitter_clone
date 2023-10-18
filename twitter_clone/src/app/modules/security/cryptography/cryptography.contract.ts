export interface ICryptographer {
  hash(word: string): string | Promise<string>;
  compareHash(word: string, hash: string): boolean | Promise<boolean>;
  encrypt(word: string): string | Promise<string>;
  decrypt(word: string): string | Promise<string>;
}

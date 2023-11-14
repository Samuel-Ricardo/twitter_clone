export const cut = (word: string, length: number = 30) =>
  word.length > length ? word.slice(0, length) + '...' : word;

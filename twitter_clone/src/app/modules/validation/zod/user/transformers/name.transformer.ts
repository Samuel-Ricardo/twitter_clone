export const UppercaseFirstLetters = (name: string) =>
  name
    .trim()
    .split(' ')
    .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
    .join(' ');

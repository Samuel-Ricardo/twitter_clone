export const mustBeValidFile = (value: any) =>
  value.stream || value.size || value.arrayBuffer || value.type;

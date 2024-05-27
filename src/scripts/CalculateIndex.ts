export const calcIndex = (index: number, len: number) => {
  if (len === 0) return 0;
  if (index < 0) return len + index;
  if (index >= len) return index % len;
  return index;
};

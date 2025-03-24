export const getTotalPages = (totalCount: number, perPage: number): number => {
  return Math.ceil(totalCount / perPage);
};
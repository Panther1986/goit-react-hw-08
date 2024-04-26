export const selectNameFilter = (state) => {
  return state.filters.name || state.filters.number;
};

import { createSelector } from "@reduxjs/toolkit";
export const selectLoading = (state) => state.contacts.loading;

export const selectFilter = (state) => state.contacts.filter;

export const selectAllTasks = (state) => state.contacts.items;

export const selectContacts = (state) => state.contacts;

export const selectError = createSelector(
  [selectContacts],
  (contacts) => contacts.error
);

export const selectFilteredContacts = createSelector(
  [selectContacts, (state) => state.filters.name || state.filters.number],
  (contacts, filterName) => {
    return contacts.items.filter(
      (contact) =>
        contact.name.includes(filterName) || contact.number.includes(filterName)
    );
  }
);

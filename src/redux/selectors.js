export const selectContacts = state => state.contacts.items;

export const selectFilters = state => state.filters.status;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.erorr;

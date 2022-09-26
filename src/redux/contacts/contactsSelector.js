const getFilter = state => state.contacts.filter;
const getContacts = state => state.contacts.data.items;
const getLoading = state => state.contacts.data.loading;

export { getFilter, getContacts, getLoading };

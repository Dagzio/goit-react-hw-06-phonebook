import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, {payload }) {
        const duplicateName = state.contacts.find(contact => contact.name === state.contacts.name);
        if (duplicateName) {
          alert(duplicateName.name + ' is already in your contacts');
          return;
        }
        state.contacts.push(payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
  },

  deleteContact(state, id) {
    const filterValueId = state.contacts.filter(contact => contact.id !== id);
    state.contacts.push(filterValueId);
  },
});

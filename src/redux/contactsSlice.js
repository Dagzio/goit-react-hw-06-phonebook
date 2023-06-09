import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: (state, { payload }) => {
      const duplicateName = state.contacts.find(
        contact => contact.name === state.contacts.name
      );
      if (duplicateName) {
        alert(duplicateName.name + ' is already in your contacts');
        return;
      }
      state.contacts.push({
        id: nanoid(),
        name: payload.name,
        number: payload.number,
      });
    },
    deleteContact(state, id) {
      const filterValueId = state.contacts.findIndex(
        contact => contact.id === id
      );
      state.contacts.splice(filterValueId, 1);
    },
    onChangeFilter(state, { target: { value } }) {
      state.filter = value;
    },
  },


});
export const { addContact, deleteContact, onChangeFilter } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// addContact: {
//   reducer(state, {payload }) {
//     const duplicateName = state.contacts.find(contact => contact.name === state.contacts.name);
//     if (duplicateName) {
//       alert(duplicateName.name + ' is already in your contacts');
//       return;
//     }
//     state.contacts.push(payload);
//   },
//   prepare(name, number) {
//     return {
//       payload: {
//         id: nanoid(),
//         name,
//         number,
//       },
//     };
//   },
// },
// },

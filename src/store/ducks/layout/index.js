import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = { messages: [] };

// Action Refactored
export const addMessage = createAction('ADD_MESSAGE');
export const removeMessage = createAction('REMOVE_MESSAGE');

// Reducer Refactored
export default createReducer(INITIAL_STATE, {
  [addMessage.type]: (state, action) => ({
    ...state,
    messages: [...state.messages, action.payload]
  }),
  [removeMessage.type]: (state, action) => ({
    ...state,
    messages: state.messages.filter(mg => mg !== action.payload)
  })
});

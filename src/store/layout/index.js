import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = { showMessage: false };

// Action Refactored
export const showMessage = createAction('SHOW_MESSAGE');
export const hideMessage = createAction('HIDE_MESSAGE');

// Reducer Refactored
export default createReducer(INITIAL_STATE, {
  [showMessage.type]: (state, action) => ({ ...state, showMessage: true }),
  [hideMessage.type]: (state, action) => ({ ...state, showMessage: false })
});

import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import reducer from './modules/reducer';

export type IState = ReturnType<typeof reducer>;

export type AppThunk = ThunkAction<void, IState, unknown, Action<string>>;

export const store = configureStore({
  reducer
});
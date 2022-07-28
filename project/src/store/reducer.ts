import { createReducer } from '@reduxjs/toolkit';
import { sortGenres} from './action';
import { filmsMock } from '../mock/mocks';

const initialState = {
  films: filmsMock,
  genre: 'AllGenres'
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(sortGenres, (state, action) => {
      state.films = filmsMock.filter(
        (el) => el.genre === action.payload.typeSort || action.payload.typeSort === 'AllGenres');
    });
});

export { reducer };

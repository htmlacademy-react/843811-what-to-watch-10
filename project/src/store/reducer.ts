import { createReducer } from '@reduxjs/toolkit';
import { sortGenres} from './action';
import { filmsMock } from '../mock/mocks';


const initialState = {
  films: filmsMock,
  genre: 'All genres'
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(sortGenres, (state, action) => {
      state.genre = action.payload.typeSort;
    });
});

export { reducer };

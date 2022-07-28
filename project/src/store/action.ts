import { createAction } from '@reduxjs/toolkit';

export const sortGenres = createAction<{typeSort: string}>('sort/sortFilms');



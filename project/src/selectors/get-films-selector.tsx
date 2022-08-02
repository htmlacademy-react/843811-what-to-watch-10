import { Films } from '../types/film-type-mock';

export const getFilms = (state: { films: Films[] }) => state.films;

export const getGenre = (state: { genre: string }) => state.genre;

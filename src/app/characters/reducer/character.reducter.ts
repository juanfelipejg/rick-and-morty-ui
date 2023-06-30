import { createReducer, on } from "@ngrx/store";
import { LoadCharactersSuccess } from "../actions/character.actions";

export interface CharactersState {
  characters: any[]
}

const initialState: CharactersState = {
  characters: []
}

export const characterReducer = createReducer(
  initialState, 
  on(LoadCharactersSuccess, (state, { characters }) => ({ ...state, characters: characters })));
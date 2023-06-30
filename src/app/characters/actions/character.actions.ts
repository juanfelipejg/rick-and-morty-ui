import { createAction, props } from "@ngrx/store";

export const LoadCharactersSuccess = createAction('[Get characters] Load characters successfully', props<{ characters: any }>());

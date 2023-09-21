import { createAction, props } from "@ngrx/store";

export const LoadCharactersSuccess = createAction('[Characters] Load characters successfully', props<{ characters: any }>());

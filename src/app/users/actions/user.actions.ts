import { createAction, props } from "@ngrx/store";

export const Login = createAction('[Users] Login', props<{ username: string, token: string }>())
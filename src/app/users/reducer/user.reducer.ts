import { createReducer, on } from "@ngrx/store";
import { Login } from "../actions/user.actions";

interface UserState {
  username: string | null
}

const initialState: UserState = {
  username: null
}

export const userReducer = createReducer(
  initialState,
  on(Login, (state, { username }) => ({ ...state, username: username }))
)
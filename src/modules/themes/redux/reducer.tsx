import {
  ThemesActionsTypes,
  themesInitialState,
  ThemesState,
  OnThemesFetchAction,
  onThemesFetchInitialData
} from '.';

export type ThemesReducerAction = OnThemesFetchAction;

export default function themesReducer(
  state: ThemesState = themesInitialState,
  action: ThemesReducerAction
) {
  switch (action.type) {
    case ThemesActionsTypes.FETCH_INITIAL_DATA:
      return onThemesFetchInitialData(state, action);

    default:
      return state;
  }
}

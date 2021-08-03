import {
  ThemeData,
  ThemesActionsTypes,
  themesInitialState,
  ThemesState
} from '..';

export interface OnThemesFetchAction {
  type: ThemesActionsTypes;
  payload?: ThemeData;
}

export function onThemesFetchInitialData(
  state: ThemesState = themesInitialState,
  action: OnThemesFetchAction
): ThemesState {
  return { ...state, current: action.payload };
}

import { Dispatch } from 'redux';

import { ThemeData, ThemesActionsTypes, ThemesReducerAction } from '../';

export default function themesFetchInitialDataCreator(theme: ThemeData) {
  return (dispatch: Dispatch<ThemesReducerAction>) =>
    dispatch({
      type: ThemesActionsTypes.FETCH_INITIAL_DATA,
      payload: theme
    });
}

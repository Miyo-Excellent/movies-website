import { combineReducers } from 'redux';

import dashboardReducer from 'modules/dashboard/redux/reducer';
import movieReducer from 'modules/movie/redux/reducer';
import notFountReducer from 'modules/notFount/redux/reducer';
import ThemeReducer from 'modules/themes/redux/reducer';

export default combineReducers({
  dashboard: dashboardReducer,
  movie: movieReducer,
  notFount: notFountReducer,
  theme: ThemeReducer
});

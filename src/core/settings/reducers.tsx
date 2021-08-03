import { combineReducers } from 'redux';

import dashboardReducer from 'modules/dashboard/redux/reducer';
import detailsReducer from 'modules/details/redux/reducer';
import notFountReducer from 'modules/notFount/redux/reducer';
import ThemeReducer from 'modules/themes/redux/reducer';

export default combineReducers({
  dashboard: dashboardReducer,
  details: detailsReducer,
  notFount: notFountReducer,
  theme: ThemeReducer
});

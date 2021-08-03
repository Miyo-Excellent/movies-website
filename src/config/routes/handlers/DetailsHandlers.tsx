import { HandlerType } from './index';
import { DetailsScreen } from 'modules/details';

const DetailsHandlers: HandlerType = {
  path: '/details',
  name: 'Details',
  component: DetailsScreen,
  exact: false,
  strict: false,
  sensitive: false
};

export default DetailsHandlers;

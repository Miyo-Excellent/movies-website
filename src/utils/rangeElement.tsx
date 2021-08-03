import { cloneElement } from 'react';
import { range } from 'lodash';

export default (options: any = {}, element: JSX.Element) => {
  const { start, end = 1 } = options;

  return range(start, end).map(key => cloneElement(element, { key }));
};

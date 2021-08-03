import { Children, cloneElement, DetailedReactHTMLElement } from 'react';
import { isEmpty } from 'lodash';

export default (children: JSX.Element, elementProps: any = {}) => {
  let elements: DetailedReactHTMLElement<any, HTMLElement> | null | any[] =
    Children.toArray(children);

  const element = elements[0];

  if (isEmpty(elements) || elements === null || elements === undefined) {
    return null;
  }

  if (elements && elements.length === 0) elements = null;

  if (elements && Array.isArray(elements) && elements.length === 1 && element) {
    elements = cloneElement(element, elementProps);
  }

  if (elements && Array.isArray(elements) && elements.length > 1) {
    elements = elements.map(node => cloneElement(node, elementProps));
  }

  return elements;
};

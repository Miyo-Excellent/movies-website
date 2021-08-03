import { isEmpty } from 'lodash';

export default function handlerError(data: any): void {
  if (!data || isEmpty(data)) console.log(data);
}

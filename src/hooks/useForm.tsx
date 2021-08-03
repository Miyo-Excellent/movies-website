import { ChangeEvent, useState } from 'react';

export type userFormResetType = () => void;

export default (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset: userFormResetType = (): void => setValues(initialState);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setValues({
      ...values,
      [target.name]: target.value
    });

  return { values, reset, handleInputChange };
};

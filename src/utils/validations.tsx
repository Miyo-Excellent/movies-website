export interface signUpValidationOptions {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export interface signInValidationOptions {
  email: string;
  password: string;
}

export const nameValidation = (name: string = '') =>
  name.length === 0 || name.split(' ').length < 1;

export const emailValidation = (email: string = '') =>
  email.trim().length === 0 ||
  !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email.trim()
  );

export const passwordValidation = (password: string = '') =>
  password.trim().length < 8;

export const repeatPasswordValidation = (
  password: string = '',
  repeatPassword: string = ''
) => passwordValidation(password) || repeatPassword !== password;

export const signUpValidation = ({
  name = '',
  email = '',
  password = '',
  repeatPassword = ''
}: signUpValidationOptions) =>
  nameValidation(name) ||
  emailValidation(email) ||
  passwordValidation(password) ||
  repeatPasswordValidation(password, repeatPassword);

export const signInValidation = ({
  email = '',
  password = ''
}: signInValidationOptions) =>
  emailValidation(email) || passwordValidation(password);

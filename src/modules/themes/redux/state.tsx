import { darkTheme } from 'config';

export interface ThemeData {
  //  Main
  mainContainerBackgroundColor: string;
  //  Menu
  menuContainerBackgroundColor: string;
  menuWidth: number;
  //  Menu Item
  menuItemHoverBackgroundColor: string;
  menuItemHoverTextColor: string;
  menuItemTextColor: string;
  //  Hero
  //  Hero Item
  heroItemBackgroundColor: string;
  //  Movie Card
  movieCardContentContainerHoverBackgroundColor: string;
  movieCardContentContainerBackgroundColor: string;
  movieCardContentTextColor: string;
  movieCardPosterHeight: number;
  movieCardPosterWidth: number;
  //  Typography
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
  subTitle1: number;
  subTitle2: number;
  body1: number;
  body2: number;
  buttonText: number;
  captionText: number;
  overlineText: number;
}

export interface ThemesState {
  darkMode: boolean;
  current?: ThemeData;
}

export const themesInitialState = {
  darkMode: true,
  current: darkTheme
};

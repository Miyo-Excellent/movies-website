import React, { FC } from 'react';
import styled from 'styled-components';
import { ThemesState } from '../../modules/themes';

export interface ImaxLayoutProps {
  children: JSX.Element | JSX.Element[];
  menuWidth?: number;
}

export interface ImaxLayoutContainerProps {
  menuWidth?: number;
  theme?: ThemesState;
  className?: string;
}

export const ImaxLayoutContainer: FC<ImaxLayoutContainerProps> = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: ${({
      menuWidth = 275,
      theme
    }: ImaxLayoutContainerProps) =>
      theme?.current?.menuWidth || menuWidth}px 1fr;

  @media all and (max-width: 765px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

export default function ImaxLayout({
  children,
  menuWidth
}: ImaxLayoutProps): JSX.Element {
  return (
    <ImaxLayoutContainer
      className="imax_layout_container"
      menuWidth={menuWidth}
    >
      {children}
    </ImaxLayoutContainer>
  );
}

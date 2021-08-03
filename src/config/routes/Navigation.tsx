import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { find } from 'lodash';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { handlersCollection, HandlerType } from './handlers';

export interface NavigationProps {
  blackList?: string[];
}

const NavigationContainer = styled.nav`
  display: grid;
  background: var(--menu-container-background-color);

  @media all and (max-width: 765px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 20;
  }
`;

const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const NavigationListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  &:last-child {
    margin: 0;
  }
`;

const NavigationListItemLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: var(--menu-item-text-color);
  padding: 1rem;
  transition: all linear 150ms;
  cursor: pointer;
  margin: 0 0 0.5rem 0;

  &:hover {
    background: var(--menu-item-hover-background-color);
  }
`;

const NavigationListItemLinkText = styled(Typography)``;

export default function Navigation({
  blackList = []
}: NavigationProps): ReactElement {
  return (
    <NavigationContainer className="navigation_menu">
      <NavigationList className="navigation_menu__list">
        {handlersCollection
          .filter(
            (handler: HandlerType) =>
              //  Path Eval
              !!handler.path &&
              //  Black List Eval
              !find(blackList, (name: string = '') =>
                new RegExp(name, 'gi').test(handler?.name || '')
              )
          )
          .map((handler: HandlerType) => (
            <NavigationListItem
              key={nanoid()}
              className="navigation_menu__list__item"
            >
              <NavigationListItemLink
                to={handler.path || '/'}
                className="navigation_menu__list__item__link"
              >
                <NavigationListItemLinkText
                  className="navigation_menu__list__item__link__text"
                  variant="body1"
                >
                  {handler.name}
                </NavigationListItemLinkText>
              </NavigationListItemLink>
            </NavigationListItem>
          ))}
      </NavigationList>
    </NavigationContainer>
  );
}

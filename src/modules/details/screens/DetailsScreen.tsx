import React from 'react';

export interface DetailsScreenProps {}

export default function DetailsScreen({}: DetailsScreenProps): JSX.Element {
  return (
    <main className="details_screen">
      <header className="details_screen__header">
        <h1 className="details_screen__header__title">Details Screen</h1>
      </header>
    </main>
  );
}

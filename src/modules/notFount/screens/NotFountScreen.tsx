import React from 'react';

export interface NotFountScreenProps {}

export default function NotFountScreen({}: NotFountScreenProps): JSX.Element {
  return (
    <main className="not_fount_screen">
      <header className="not_fount_screen__header">
        <h1 className="not_fount_screen__header__title">NotFount Screen</h1>
      </header>
    </main>
  );
}

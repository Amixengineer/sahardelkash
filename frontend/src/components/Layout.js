import React from 'react';
import Navigation from './Navigation';
import 'normalize.css';
import Typography from '../styles/Typography';
import GlobalStyles from '../styles/GlobalStyles';

export default function Layout({ children }) {
  return (
    <>
      <Typography />
      <GlobalStyles />
      <nav>
        <Navigation />
      </nav>
      <main>{children}</main>
    </>
  );
}

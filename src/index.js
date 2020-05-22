import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import Home from './pages/home';
import ResetStyle from './globalStyle';
import FavIcon from './assets/fav.ico';

ReactDOM.render(
  <>
    <Helmet>
      <title>
        GloboPlay | O mundo na palma da sua mão!
      </title>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" type="image/png" href={FavIcon} sizes="16x16" />
    </Helmet>

    <React.StrictMode>
      <Home />
      <ResetStyle />
    </React.StrictMode>
  </>,
  document.getElementById('root'),
);

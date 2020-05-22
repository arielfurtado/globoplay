import React, { useState, useEffect, useCallback } from 'react';
import Menu from '../../components/menu';
import FeaturedBanner from '../../components/featuredBanner';
import RowContent from '../../components/row-content';
import Banner from '../../components/banner';
import Content from './styles';

const Home = () => {
  const [keyPress, setKeyPress] = useState('');
  const [banner, setBanner] = useState(0);
  const [focusCtrl, setFocusCtrl] = useState({
    menu: false,
    featuredBanner: true,
    rowContent: false,
    lastFocus: '',
  });

  const key = useCallback(({ key }) => {
    setKeyPress(key);
  }, []);

  const cleanKey = () => {
    setKeyPress('');
  };

  const menuExit = (lastFocusItem) => {
    setFocusCtrl({
      ...focusCtrl,
      menu: false,
      [lastFocusItem]: true,
    });
  };

  const goToMenu = (lastFocus) => {
    setFocusCtrl({
      rowContent: false,
      menu: true,
      featuredBanner: false,
      lastFocus,
    });
  };

  const goToRow = () => {
    setFocusCtrl({
      ...focusCtrl,
      rowContent: true,
      featuredBanner: false,
      lastFocus: '',
    });
  };

  const goToFeaturedBanner = () => {
    setFocusCtrl({
      ...focusCtrl,
      featuredBanner: true,
      rowContent: false,
      lastFocus: '',
    });
  };

  const changeImage = (param) => {
    setBanner(param);
  };

  window.addEventListener('keydown', key);

  useEffect(() => cleanKey(), [keyPress]);

  return (
    <>
      <Menu
        keyPressed={keyPress}
        focusCtrl={focusCtrl.menu}
        lastFocus={focusCtrl.lastFocus}
        closeMenu={menuExit}
      />
      <Content>
        {(focusCtrl.featuredBanner
          || focusCtrl.lastFocus === 'featuredBanner') && (
          <FeaturedBanner
            keyPressed={keyPress}
            focusCtrl={focusCtrl.featuredBanner}
            OpenMenu={goToMenu}
            FocusRow={goToRow}
          />
        )}
        {(focusCtrl.rowContent || focusCtrl.lastFocus === 'rowContent') && (
          <Banner imageId={banner} />
        )}
        <RowContent
          focusCtrl={focusCtrl.rowContent}
          keyPressed={keyPress}
          OpenMenu={goToMenu}
          FocusBanner={goToFeaturedBanner}
          featuredImage={changeImage}
        />
      </Content>
    </>
  );
};

export default Home;

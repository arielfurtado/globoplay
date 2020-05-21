import React, { useState, useEffect, useCallback} from 'react';
import Menu from '../../components/menu';
import FeaturedBanner from '../../components/featuredBanner';
import RowContent from '../../components/row-content';
import Banner from '../../components/banner';
import * as S from './styles';

const Home = () => {
    const [keyPress, setKeyPress] = useState('');
    const [banner, setBanner] = useState('');
    const [hasFocus, setHasFocus] = useState({menu: false, featuredBanner: true, rowContent: false});

    const key = useCallback(({ key }) => {
        setKeyPress(key);
      }, []);

    const cleanKey = () => {
        setKeyPress('');
    }

    const menuExit = (lastFocusItem) => {
        setHasFocus({
            ...hasFocus,
            menu: false,
            [lastFocusItem]: true
        })
    };

      const goToMenu = (lastFocus) => {
        setHasFocus({
            rowContent: false,
            menu: true,
            featuredBanner: false,
            lastFocus
        })
      };

      const goToRow = () => {
        setHasFocus({
            ...hasFocus,
            rowContent: true,
            featuredBanner: false,
            lastFocus: ''
        })
      };

      const goToFeaturedBanner = () => {
        setHasFocus({
            ...hasFocus,
            featuredBanner: true,
            rowContent: false,
            lastFocus: ''
        })
      };

      const changeImage = (param) => {
        setBanner(param);
      };

    window.addEventListener('keydown', key);

    useEffect(() => {
        return cleanKey();
    }, [keyPress]);

    return (
        <>
            <Menu 
                keyPressed={keyPress} 
                hasFocus={hasFocus.menu}
                lastFocus={hasFocus.lastFocus}
                closeMenu={menuExit} 
            />
            <S.Content>
                {(hasFocus.featuredBanner || hasFocus.lastFocus === 'featuredBanner') &&
                    <FeaturedBanner
                        keyPressed={keyPress} 
                        hasFocus={hasFocus.featuredBanner}
                        OpenMenu={goToMenu}
                        FocusRow={goToRow}
                    />
                }
                {(hasFocus.rowContent || hasFocus.lastFocus === 'rowContent') &&
                    <Banner imageId={banner}/>
                }
                <RowContent
                    hasFocus={hasFocus.rowContent}
                    keyPressed={keyPress}
                    OpenMenu={goToMenu} 
                    FocusBanner={goToFeaturedBanner}
                    featuredImage={changeImage}
                />
            </S.Content>
        </>
    );
};

export default Home;
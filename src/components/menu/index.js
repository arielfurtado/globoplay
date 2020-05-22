import React, { useEffect, useState } from 'react';
import {
  MdHome,
  MdSearch,
  MdPlayCircleOutline,
  MdVideoLibrary,
  MdAccountCircle,
} from 'react-icons/md';
import PropTypes from 'prop-types';
import * as S from './styles';

const Menu = ({
  keyPressed, focusCtrl, closeMenu, lastFocus,
}) => {
  const [menuItemFocus, setMenuItemFocus] = useState(1);
  const [navItems] = useState([
    {
      id: 1,
      icon: <MdSearch />,
      name: 'Busca',
    },
    {
      id: 2,
      icon: <MdHome />,
      name: 'Início',
    },
    {
      id: 3,
      icon: <MdPlayCircleOutline />,
      name: 'Agora na Globo',
    },
    {
      id: 4,
      icon: <MdVideoLibrary />,
      name: 'Categorias',
    },
    {
      id: 5,
      icon: <MdAccountCircle />,
      name: 'Minha conta',
    },
  ]);

  useEffect(() => {
    if (focusCtrl) {
      if (keyPressed === 'ArrowDown' && menuItemFocus < navItems.length) {
        setMenuItemFocus(menuItemFocus + 1);
      }
      if (keyPressed === 'ArrowUp' && menuItemFocus > 1) {
        setMenuItemFocus(menuItemFocus - 1);
      }
      if (keyPressed === 'ArrowRight') {
        return closeMenu(lastFocus);
      }
    }
  }, [keyPressed, menuItemFocus, navItems, closeMenu, focusCtrl, lastFocus]);

  return (
    <S.Nav focused={focusCtrl}>
      <S.List id="navigation">
        {navItems.map((item) => (
          <S.ListItem
            key={item.id}
            id={item.id}
            isActive={menuItemFocus === item.id && focusCtrl}
          >
            {item.icon}
            <span>{item.name}</span>
          </S.ListItem>
        ))}
      </S.List>
    </S.Nav>
  );
};
Menu.propTypes = {
  keyPressed: PropTypes.string.isRequired,
  lastFocus: PropTypes.string.isRequired,
  focusCtrl: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};
export default Menu;

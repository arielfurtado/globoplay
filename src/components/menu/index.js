import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { MdHome, MdSearch, MdPlayCircleOutline, MdVideoLibrary, MdAccountCircle } from "react-icons/md";

const Menu = ({keyPressed, hasFocus, closeMenu, lastFocus}) => {
    const [menuItemFocus, setMenuItemFocus] = useState(1);
    const [navItems] = useState([
        {
          id: 1,
          icon: <MdSearch/>,
          name: "Busca"
        },
        {
          id: 2,
          icon: <MdHome/>,
          name: "Início"
        },
        {
          id: 3,
          icon: <MdPlayCircleOutline/>,
          name: "Agora na Globo"
        },
        {
          id: 4,
          icon: <MdVideoLibrary/>,
          name: "Categorias"
        },
        {
          id: 5,
          icon: <MdAccountCircle/>,
          name: "Minha conta"
        },
    ]);


    useEffect(() => {
      if(hasFocus) {
        if(keyPressed === 'ArrowDown' && menuItemFocus < navItems.length) {
          setMenuItemFocus(menuItemFocus + 1);
        }
        if(keyPressed === 'ArrowUp' && menuItemFocus > 1 ) {
          setMenuItemFocus(menuItemFocus - 1);
        }
        if(keyPressed === 'ArrowRight') {
          return closeMenu(lastFocus);
        }
      }
      }, [keyPressed, menuItemFocus, navItems, closeMenu, hasFocus, lastFocus]);

    return(
        <S.Nav focused={hasFocus} >
            <S.List id="navigation">
                {navItems.map((item, index) => {
                    return (
                        <S.ListItem key={index} id={item.id} isActive={menuItemFocus === item.id && hasFocus}>
                            {item.icon}
                            <span>{item.name}</span>
                        </S.ListItem>
                    )
                })}

            </S.List>
        </S.Nav>
    )
};

export default Menu
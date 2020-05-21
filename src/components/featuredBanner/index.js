import React, { useState,useEffect } from 'react';
import * as S from './styles';
import Banner from '../../assets/banner_cta.jpg'
import FeaturedLogo from '../../assets/featured-logo.png'
import { MdPlayArrow } from "react-icons/md";

const FeaturedBanner = ({keyPressed, OpenMenu, hasFocus, FocusRow}) => {
    const [buttonFocused, setButtonFocused] = useState(1);
    const [bannerButtons] = useState([
        {
          id: 1,
          icon: <MdPlayArrow/>,
          name: "Assista"
        },
        {
          id: 2,
          icon: false,
          name: "Início"
        }
    ]);

    useEffect(() => {
        if(hasFocus) {
            if(keyPressed === 'ArrowRight' && buttonFocused < bannerButtons.length) {
                setButtonFocused(buttonFocused + 1);
            }
            if((keyPressed === 'ArrowDown')) {
                return FocusRow();
            }
            if(keyPressed === 'ArrowLeft' && buttonFocused !== 1) {
              setButtonFocused(buttonFocused - 1);
            }else if((keyPressed === 'ArrowLeft') && buttonFocused === 1) {
                return OpenMenu('featuredBanner');
            }
        }
      }, [keyPressed, buttonFocused, OpenMenu, FocusRow, hasFocus, bannerButtons]);

    return(
        <S.Wrapper>
            <S.Media background={Banner} />
            <S.Content>
                <S.FeatureLogo src={FeaturedLogo} />
                <S.Title>De Stephen King: uma cidade é isolada do <br /> mundo misteriosamente</S.Title>
                <S.WrapButtons>
                    {bannerButtons.map((item, index) =>
                        <S.Button key={index} isActive={hasFocus && buttonFocused === item.id}>
                            {item.icon}
                            {item.name}
                        </S.Button>
                    )}
                </S.WrapButtons>
            </S.Content>
        </S.Wrapper>
    )
};

export default FeaturedBanner;
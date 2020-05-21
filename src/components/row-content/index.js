import React, { useState, useEffect } from 'react';
import * as S from './style';
import Content from '../../mock';


const RowContent = ({focusCtrl, keyPressed, OpenMenu, FocusBanner, featuredImage}) => {
    const [itemFocus, setitemFocus] = useState(0);


    useEffect(() => {
        if(focusCtrl) {
            if(keyPressed === 'ArrowRight' && itemFocus < (Content.items.length - 1)) {
                setitemFocus(itemFocus + 1);
            }
            if(keyPressed === 'ArrowUp') {
                document.getElementById('target-'+itemFocus).blur();
                return FocusBanner();
            }
            if(keyPressed === 'ArrowLeft' && itemFocus !== 0) {
              setitemFocus(itemFocus - 1);

            }else if(keyPressed === 'ArrowLeft' && itemFocus === 0) {
                setitemFocus(0);
                document.getElementById('target-'+itemFocus).blur();
                return OpenMenu('rowContent');
            }
            document.getElementById('target-'+itemFocus).focus();
            return featuredImage(itemFocus);
        }
      }, [keyPressed, itemFocus, focusCtrl, OpenMenu, FocusBanner, featuredImage]);

    return(
        <S.Wrapper active={focusCtrl}>
            <S.Tag>Novidades</S.Tag>
            <S.Cards >
                {Content.items.map((item, index) =>
                    <S.CardItem key={index} href='#' id={'target-' + index} isActive={focusCtrl && itemFocus === index}>
                        <S.Media src={item.thumb} />
                    </S.CardItem>
                )}
            </S.Cards>
        </S.Wrapper>
    );
}

export default RowContent;
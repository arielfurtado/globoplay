import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Content from '../../mock';

const RowContent = ({
  focusCtrl,
  keyPressed,
  OpenMenu,
  FocusBanner,
  featuredImage,
}) => {
  const [itemFocus, setitemFocus] = useState(0);
  const [eixoCtrl, setEixoCtrl] = useState(0);

  useEffect(() => {
    if (focusCtrl) {
      if (keyPressed === 'ArrowRight' && itemFocus < Content.items.length - 1) {
        setitemFocus(itemFocus + 1);
        setEixoCtrl(eixoCtrl - 185);
      }
      if (keyPressed === 'ArrowUp') {
        return FocusBanner();
      }
      if (keyPressed === 'ArrowLeft' && itemFocus !== 0) {
        setitemFocus(itemFocus - 1);
        setEixoCtrl(eixoCtrl + 185);
      } else if (keyPressed === 'ArrowLeft' && itemFocus === 0) {
        setitemFocus(0);
        return OpenMenu('rowContent');
      }
      return featuredImage(itemFocus);
    }
  }, [keyPressed, itemFocus, focusCtrl, OpenMenu, FocusBanner, featuredImage, eixoCtrl]);

  return (
    <S.Wrapper active={focusCtrl}>
      <S.Tag>Novidades</S.Tag>
      <S.FrameBox showFrame={focusCtrl} />
      <S.Cards eixo={eixoCtrl}>
        {Content.items.map((item, index) => (
          <S.CardItem
            key={index}
            href="#"
            id={`target-${index}`}
            isActive={focusCtrl && itemFocus === index}
          >
            <S.Media src={item.thumb} />
          </S.CardItem>
        ))}
      </S.Cards>
    </S.Wrapper>
  );
};
RowContent.propTypes = {
  keyPressed: PropTypes.string.isRequired,
  OpenMenu: PropTypes.func.isRequired,
  focusCtrl: PropTypes.bool.isRequired,
  FocusBanner: PropTypes.func.isRequired,
  featuredImage: PropTypes.func.isRequired,
};
export default RowContent;

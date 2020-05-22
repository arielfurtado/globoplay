import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import Content from '../../mock';

const Banner = ({ imageId }) => (
  <S.Wrapper>
    {Content.items.map((item, index) => (
      <S.Wrap show={imageId === index} key={item.name}>
        <S.Media src={item.hero} />
        <S.Content>
          <S.Title>{item.name}</S.Title>
          <S.Description>{item.description}</S.Description>
        </S.Content>
      </S.Wrap>
    ))}
  </S.Wrapper>
);

Banner.propTypes = {
  imageId: PropTypes.number.isRequired,
};
export default Banner;

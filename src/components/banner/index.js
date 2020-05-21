import React from 'react';
import * as S from './styles';
import Content from '../../mock';


const Banner = ({imageId}) => {
    return(
        <S.Wrapper>
            {Content.items.map((item, index) =>
                <S.Wrap show={imageId === index} key={index}>
                    <S.Media src={item.hero} />
                    <S.Content>
                        <S.Title>{item.name}</S.Title>
                        <S.Description>{item.description}</S.Description>
                    </S.Content>
                </S.Wrap>
            )}
        </S.Wrapper>
    );
}

export default Banner;
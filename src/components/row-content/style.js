import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    bottom: ${(props) => (props.active ? '20px' : '0')};
    padding-left: 90px;
    left: 0;
    z-index: 2;
    overflow: hidden;
    max-width: 100%;
    transition: all 0.3s;
    padding-left: 105px;
`;
export const FrameBox = styled.div`
    width: 170px;
    height: 250px;
    position: absolute;
    bottom: 0;
    left: 105px;
    z-index: 1;
    border: 2px solid white;
    transition: all 0.3s;
    opacity: ${(props) => (props.showFrame ? '1' : '0')};
`;
export const Cards = styled.div`
    display: flex;
    align-items: center;
    width: min-content;
    transition: all 0.3s;
    transform: translateX(${(props) => props.eixo}px);
`;
export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 15px;
    left: 15px;
`;
export const CardItem = styled.a`
    width: 170px;
    display: flex;
    position: relative;
    background: black;
    margin-right: 15px;
    border: 2px solid transparent;
    transition: all 0.3s;
    transform-origin: center center;
    transform: scale(1);
`;

export const Media = styled.img`
    opacity: 0.7;
`;
export const Tag = styled.h4`
    color: white;
    font-size: 18px;
    margin-bottom: 5px;
`;

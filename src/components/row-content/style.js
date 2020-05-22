import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    bottom: ${(props) => (props.active ? '20px' : '0')};
    padding-left: 90px;
    left: 20px;
    z-index: 2;
    overflow: hidden;
    max-width: 100%;
    transition: all 0.3s;
`;
export const Cards = styled.div`
    display: flex;
    align-items: center;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    margin-right: 45px;
    -ms-overflow-style: none;
    &::-webkit-scrollbar   {
        display: none;
    }
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
    display: block;
    scroll-snap-align: end;
    flex-shrink: 0;
    position: relative;
    background: black;
    margin-right: 15px;
    border: 2px solid transparent;
    transition: all 0.3s;
    transform-origin: center center;
    transform: scale(0.95);
    &:focus {
        border: 2px solid white;
    }
    ${(props) => props.isActive && `
        border: 2px solid white;
        transform: scale(1);
    `
}
`;

export const Media = styled.img`
    opacity: 0.7;
`;
export const Tag = styled.h4`
    color: white;
    font-size: 18px;
    margin-bottom: 5px;
`;

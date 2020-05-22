import styled from 'styled-components';

export const Media = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0;
  visibility: hidden;
  transition: all ease-in 0.3s;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  &:before {
    display: block;
    content: '';
    position: absolute;
    width: calc(100% + 1px);
    height: calc(100% + 1px);
    z-index: 1;
    background-image: linear-gradient(180deg, rgba(31, 31, 31, 0) 35%, #1f1f1f),
      linear-gradient(180deg, rgba(0, 0, 0, 0.5) 5%, transparent 20%),
      linear-gradient(270deg, transparent 30%, #000 80%);
  }
  ${(props) => props.show && `
        opacity: 1;
        visibility: visible;
    `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  color: white;
  max-width: 500px;
  z-index: 2;
  top: 50%;
  transform: translate(15px, -80%);
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 8px;
`;
export const Description = styled.p`
  font-size: 20px;
  font-weight: lighter;
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    padding-left: 20px;
    position: relative;
    background: #060406;
`;

export const Media = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    background: url(${(props) => props.background}) no-repeat top center;
    background-size: cover;
    &:before {
        display: block;
        content: "";
        position: absolute;
        width: calc(100% + 1px);
        height: calc(100% + 1px);
        z-index: 1;
        background-image: linear-gradient(180deg,rgba(0,0,0,.6),transparent 15%),linear-gradient(0deg,#1f1f1f,rgba(31,31,31,.6) 40%,rgba(31,31,31,0) 60%);
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    position: absolute;
    top: 50%;
    transform: translateY(-80%);
    left: 20px;
`;

export const FeatureLogo = styled.img`
    max-width: 200px;
    margin-bottom: 20px;
`;

export const Title = styled.h1`
    font-size: 20px;
    color: white;
    font-weight: 400;
`;

export const WrapButtons = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 20px;
    width: 160px;
    justify-content: center;
    color: white;
    background: transparent;
    border: 2px solid white;
    border-radius: 5px;
    margin-right: 10px;
    transition: all 0.3s;
    ${(props) => props.isActive && `
            background: white;
            color: black;
        `
}
`;

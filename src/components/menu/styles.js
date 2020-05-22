import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    min-height: 100vh;
    background: rgba(0,0,0, 0.95);
    position: absolute;
    max-width: min-content;
    z-index: 9;
    transition: all 0.3s;
    ${(props) => props.focused && `
        background: rgba(0,0,0, 1);
        li {
            span {
                max-width: 150px;
            }
        }
    `}
`;
export const List = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const ListItem = styled.li`
    color: white;
    font-size: 20px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    padding: 30px;
    overflow: hidden;
    min-width: 90px;
    span {
        margin-left: 10px;
        white-space: nowrap;
        transition: all 0.3s;
        max-width: 0;
        overflow: hidden;
    }
    ${(props) => props.isActive && `
            background: white;
            color: black;
        `
}
`;

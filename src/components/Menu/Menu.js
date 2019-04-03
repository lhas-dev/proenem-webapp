import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
    NotificationBubble
} from '../';

const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

const MenuItem = styled.li`
    display: inline-block;
    list-style-type: none;

    a {
        font-family: Poppins;
        font-weight: 400;
        text-decoration: none;
        color: #3D3D3D;
        padding: 15px;
        display: inline-block;

        &:hover {
            color: #F01D4A;
        }
    }

    @media only screen and (min-width: 768px) { 
        a {
            padding-top: 40px;
            padding-bottom: 40px;
            padding-left: 18px;
            padding-right: 18px;
        }
    }
`;

const MenuItemInner = styled.div`
    display: flex;
`;

const MenuItemSearch = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    display: inline-block;
    padding-left: 18px;
    padding-right: 18px;
`;

const MenuItemAvatarWrapper = styled.div`
    display: inline-block;
    margin-left: 18px;
`;

const MenuItemAvatar = styled.div`
    cursor: pointer;
    position: relative;

    img {
        width: 46px;
        height: 46px;
        border-radius: 100%;
    }
`;

const Menu = ({
    onSearch,
    hasNotification,
}) => (
    <Wrapper>
        <MenuItem>
            <Link to="/">Início</Link>
        </MenuItem>
        <MenuItem>
            <Link to="/">Plano de Estudos</Link>
        </MenuItem>
        <MenuItem>
            <Link to="/">Materiais de apoio</Link>
        </MenuItem>
        <MenuItem>
            <Link to="/">Redação</Link>
        </MenuItem>
        <MenuItem>
            <Link to="/">Simulado</Link>
        </MenuItem>
        <MenuItemInner>
            <MenuItemSearch onClick={onSearch}>
                <img src="/assets/search.png" alt="Lupa" />
            </MenuItemSearch>
            <MenuItemAvatarWrapper>
                <MenuItemAvatar>
                    <img src="https://media.licdn.com/dms/image/C4E03AQHyi9mBkcvM0w/profile-displayphoto-shrink_200_200/0?e=1559174400&v=beta&t=LpWzoghw8tEaEyUZVrXy67f50koXJtC025de4MEj4vc" alt="Avatar" />
                    {hasNotification && (<NotificationBubble />)}
                </MenuItemAvatar>
            </MenuItemAvatarWrapper>
        </MenuItemInner>
    </Wrapper>
);

export default Menu;

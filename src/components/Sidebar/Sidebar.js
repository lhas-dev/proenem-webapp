import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 80%;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    border: 1px solid #ededed;
    background-color: #ffffff;
    margin: 0 auto;
    margin-bottom: 40px;

    @media only screen and (min-width: 768px) {
        width: 100%;
        max-width: 270px;
    }
`;

const Header = styled.div`
    text-align: center;
    border-bottom: 1px solid #ededed;
`;

const HeaderAvatar = styled.div`
    margin: 30px 60px;
    margin-bottom: 15px;
    text-align: center;

    img {
        width: 143px;
        height: 143px;
        border-radius: 100%;
    }
`;

const HeaderName = styled.h2`
    color: #001187;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
`;

const HeaderEmail = styled.h3`
    color: #3d3d3d;
    font-family: Poppins;
    font-size: 15px;
    font-weight: 400;
    padding-top: 5px;
`;

const HeaderMemberSince = styled.p`
    color: #9b9b9b;
    font-family: Poppins;
    font-size: 15px;
    font-weight: 400;
    padding-top: 10px;
    padding-bottom: 23px;
`;

const Menu = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

const MenuItem = styled.li`
    width: 100%;
    display: block;
    list-style-type: none;

    a {
        display: block;
        width: 100%;
        padding-left: 25px;
        padding-top: 10px;
        padding-bottom: 10px;
        font-weight: 500;
        color: #f01d4a;
        text-decoration: none;
        font-family: Poppins;

        &:hover {
            color: #001187;
        }
    }

    &:first-child a {
        padding-top: 30px;
    }

    &:last-child a {
        padding-bottom: 30px;
    }
`;

const Sidebar = ({
    name,
    email,
    memberSince,
}) => (
    <Wrapper>
        <Header>
            <HeaderAvatar><img src="https://media.licdn.com/dms/image/C4E03AQHyi9mBkcvM0w/profile-displayphoto-shrink_200_200/0?e=1559174400&v=beta&t=LpWzoghw8tEaEyUZVrXy67f50koXJtC025de4MEj4vc" alt="Avatar" /></HeaderAvatar>
            <HeaderName>{name}</HeaderName>
            <HeaderEmail>{email}</HeaderEmail>
            <HeaderMemberSince>Membro desde {memberSince}</HeaderMemberSince>
        </Header>
        <Menu>
            <MenuItem>
                <Link to="/">
                    Alterar senha
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/">
                    Histórico de Compras
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/">
                    Meus cartões
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/">
                    Minhas assinaturas
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/">
                    Sair
                </Link>
            </MenuItem>
        </Menu>
    </Wrapper>
);

export default Sidebar;

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col, } from 'react-styled-flexboxgrid';
import { Link } from 'react-router-dom';

const Header = styled.div`
    width: 100%;
`;

const Logo = styled.img`
    width: 100%;
    max-width: 200px;
    margin-top: 36px;
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

const MenuItem = styled.div`
    display: inline-block;

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

const NotificationBubble = styled.div`
    position: absolute;
    right: -2px;
    top: 0px;
    display: inline-block;
    width: 14px;
    height: 14px;
    background: #F01D4A;
    border-radius: 100%;
    border: 2px solid #FFF;
`;

const PageHeader = styled.div`
    padding-top: 30px;

    @media only screen and (min-width: 768px) {
        padding-top: 60px;
    }
`;

const PageHeaderTitle = styled.h1`
    color: #001187;
    font-family: Poppins;
    font-size: 25px;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
`;

const PageHeaderDescription = styled.p`
    color: #9b9b9b;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;
    max-width: 600px;
    margin: 0 auto;
    margin-top: 15px;
    line-height: 1.4;
    text-align: center;
`;

const PageContent = styled.div`
    padding-top: 40px;
`;

const Sidebar = styled.div`
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

const SidebarHeader = styled.div`
    text-align: center;
    border-bottom: 1px solid #ededed;
`;

const SidebarHeaderAvatar = styled.div`
    margin: 30px 60px;
    margin-bottom: 15px;
    text-align: center;

    img {
        width: 143px;
        height: 143px;
        border-radius: 100%;
    }
`;

const SidebarHeaderName = styled.div`
color: #001187;
font-family: Poppins;
font-size: 18px;
font-weight: 600;
line-height: 25px;
`;

const SidebarHeaderEmail = styled.div`
color: #3d3d3d;
font-family: Poppins;
font-size: 15px;
font-weight: 400;
padding-top: 5px;
`;

const SidebarHeaderMemberSince = styled.div`
color: #9b9b9b;
font-family: Poppins;
font-size: 15px;
font-weight: 400;
padding-top: 10px;
padding-bottom: 23px;
`;

const SidebarMenu = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

const SidebarMenuItem = styled.div`
    width: 100%;
    display: block;

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

const AccountForm = styled.div`
    @media only screen and (min-width: 768px) {    
        padding-left: 90px;
    }
`;

const AccountFormFieldset = styled.div`
    margin-bottom: 20px;
`;

const AccountFormLegend = styled.div`
    margin-bottom: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AccountFormLegendText = styled.div`
    flex-grow: 1;
    color: #001187;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
`;

const AccountFormLegendLine = styled.div`
    flex-grow: 38;
    margin-left: 20px;
    height: 1px;
    background: #ededed;
`;

const TextFieldWrapper = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 25px;

    @media only screen and (min-width: 768px) {
        width: 95%;
    }
`;

const TextFieldButton = styled.button`
    position: absolute;
    height: 100%;
    right: 0px;
    top: 0px;
    padding: 0px 14px;
    background: transparent;
    border: none;
    color: #f01d4a;
    font-family: Poppins;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
`;

const TextField = styled.input`
    width: 100%;
    height: 43px;
    padding: 15px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: all 0.15s ease-in;
    color: #3d3d3d;
    font-family: Poppins;
    font-size: 15px;
    font-weight: 400;

    ::placeholder {
        color: #9b9b9b;
        font-family: Poppins;
        font-size: 15px;
        font-weight: 400;
    }

    :focus {
        border-color: #f01d4a;
        box-shadow: 0px 0px 0px 4px rgba(240, 29, 74, 0.13);
    }
`;

const SelectFieldWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    position: relative;
    margin-bottom: 25px;
    @media only screen and (min-width: 768px) {
        width: 95%;
    }
`;

const SelectField = styled.select`
    width: 110%;
    height: 43px;
    padding-left: 15px;
    background: transparent;
    border: none;
    outline: none;
    color: #3d3d3d;
    font-family: Poppins;
    font-size: 15px;
    font-weight: 400;
`;

const SelectFieldArrow = styled.div`
    position: absolute;
    z-index: 2;
    right: 15px;
    top: 50%;
    margin-top: -10px;
`;



const UpperFooter = styled.div`
    background: #3d3d3d;
    min-height: 210px;
    display: flex;
    align-items: center;
`;

const UpperFooterBlock = styled.div`
    padding: 30px 0px;

    @media only screen and (min-width: 768px) {
        padding: 0px;
        min-height: 100px;
        border-right: 1px dashed rgba(255, 255, 255, 0.1);  
    }
`;

const UpperFooterButton = styled.div`
    display: inline-block;
    margin-right: 15px;
    margin-bottom: 15px;
`;

const UpperFooterTitle = styled.div`
    color: #ffffff;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
    margin-bottom: 10px;
`;

const UpperFooterListWrapper = styled.div`
    display: flex;
`;

const UpperFooterList = styled.ul`
    width: 100%;
`;

const UpperFooterListItem = styled.div`
    list-style: none;

    &::before {
        content: ' ';
        display: inline-block;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 100%;
        position: relative;
        left: -4px;
        top: -2px;
    }

    a {
        color: rgba(255, 255, 255, 0.5);
        font-family: Poppins;
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
        text-decoration: none;
    }
`;

const LowerFooter = styled.div`
    min-height: 88px;
    display: flex;
    align-items: center;
`;

const LowerFooterBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: center;

    @media only screen and (min-width: 768px) {
        padding: 0px;
    }
`;

const LowerFooterLogo = styled.img`
    opacity: 0.5;
    margin-right: 30px;
`;

const LowerFooterMenu = styled.div`
    width: 100%;
    display: inline-flex;
    justify-content: space-around;
`;

const LowerFooterMenuItem = styled.div`
    a {
        color: #9b9b9b;
        font-family: Poppins;
        font-size: 12px;
        font-weight: 400;
        text-decoration: none;

        &:hover {
            color: #f01d4a;
        }
    }
    @media only screen and (min-width: 768px) {
        a {
            margin-right: 28px;
            font-size: 14px;
        }
    }
`;

const LowerFooterText = styled.p`
    color: #9b9b9b;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    margin-right: 25px;
`;

const LowerFooterButton = styled.div`
    display: inline-block;
    cursor: pointer;
    margin-right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(180deg, #f93e81 0%, #f01d4a 100%);
`;

const onSearch = () => alert('Pesquisa!');

const MyAccount = () => (
    <>
        <Header>
            <Grid>
                <Row center="xs">
                    <Col xs={12} md={3}>
                        <div style={{ display: 'block', textAlign: 'center', }}>
                            <Link to="/minha-conta">
                                <Logo src="/assets/logo-colored.png" />
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} md={9}>
                        <Menu>
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
                                        <NotificationBubble />
                                    </MenuItemAvatar>
                                </MenuItemAvatarWrapper>
                            </MenuItemInner>
                        </Menu>
                    </Col>
                </Row>
            </Grid>
        </Header>
        <PageHeader>
            <Grid>
                <Row>
                    <Col xs={12}>
                        <PageHeaderTitle>Minha Conta</PageHeaderTitle>
                        <PageHeaderDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis vitae ligula et congue. Mauris in lacus vel justo.</PageHeaderDescription>
                    </Col>
                </Row>
            </Grid>
        </PageHeader>
        <PageContent>
            <Grid>
                <Row>
                    <Col xs={12} md={3}>
                        <Sidebar>
                            <SidebarHeader>
                                <SidebarHeaderAvatar><img src="https://media.licdn.com/dms/image/C4E03AQHyi9mBkcvM0w/profile-displayphoto-shrink_200_200/0?e=1559174400&v=beta&t=LpWzoghw8tEaEyUZVrXy67f50koXJtC025de4MEj4vc" alt="Avatar" /></SidebarHeaderAvatar>
                                <SidebarHeaderName>João Angelo</SidebarHeaderName>
                                <SidebarHeaderEmail>exemplo@proenem.com.br</SidebarHeaderEmail>
                                <SidebarHeaderMemberSince>Membro desde 08/2018</SidebarHeaderMemberSince>
                            </SidebarHeader>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <Link to="/">
                                        Alterar senha
                                    </Link>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <Link to="/">
                                        Histórico de Compras
                                    </Link>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <Link to="/">
                                        Meus cartões
                                    </Link>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <Link to="/">
                                        Minhas assinaturas
                                    </Link>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <Link to="/">
                                        Sair
                                    </Link>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </Sidebar>
                    </Col>
                    <Col xs={12} md={9}>
                        <AccountForm>
                            <AccountFormFieldset>
                                <AccountFormLegend>
                                    <AccountFormLegendText>Dados pessoais</AccountFormLegendText>
                                    <AccountFormLegendLine />
                                </AccountFormLegend>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <TextFieldWrapper>
                                            <TextField placeholder="Placeholder" />
                                        </TextFieldWrapper>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <TextFieldWrapper>
                                            <TextField placeholder="Placeholder" value="Preenchido" />
                                        </TextFieldWrapper>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <TextFieldWrapper>
                                            <TextField placeholder="Placeholder" value="Focus" />
                                        </TextFieldWrapper>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <TextFieldWrapper>
                                            <TextField placeholder="Placeholder" value="(27) 981141549" />
                                        </TextFieldWrapper>
                                    </Col>
                                </Row>
                            </AccountFormFieldset>
                            <AccountFormFieldset>
                                <AccountFormLegend>
                                    <AccountFormLegendText>Endereço de cobrança</AccountFormLegendText>
                                    <AccountFormLegendLine />
                                </AccountFormLegend>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <TextFieldWrapper>
                                            <TextField placeholder="Placeholder" value="29456-092" />
                                            <TextFieldButton>Atualizar</TextFieldButton>
                                        </TextFieldWrapper>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <TextFieldWrapper>
                                            <TextField placeholder="Placeholder" value="Av. Paulista" />
                                        </TextFieldWrapper>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={2}>
                                        <TextFieldWrapper>
                                            <TextField placeholder="Placeholder" value="15.902" />
                                        </TextFieldWrapper>
                                    </Col>
                                    <Col xs={5}>
                                        <TextFieldWrapper>
                                            <TextField placeholder="Placeholder" value="Ed. Business Center, Sl. 501" />
                                        </TextFieldWrapper>
                                    </Col>
                                    <Col xs={5}>
                                        <TextFieldWrapper>
                                            <TextField placeholder="Placeholder" value="Bela Vista" />
                                        </TextFieldWrapper>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <SelectFieldWrapper>
                                            <SelectField>
                                                <option value="">São Paulo (SP)</option>
                                            </SelectField>
                                            <SelectFieldArrow>
                                                <img src="/assets/arrow-down.png" alt="Seta" />
                                            </SelectFieldArrow>
                                        </SelectFieldWrapper>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <TextFieldWrapper>
                                            <TextField placeholder="Placeholder" value="São Paulo" />
                                        </TextFieldWrapper>
                                    </Col>
                                </Row>
                            </AccountFormFieldset>
                        </AccountForm>
                    </Col>
                </Row>
            </Grid>
        </PageContent>
        <UpperFooter>
            <Grid>
                <Row between="xs">
                    <Col xs={12} md={2}>
                        <UpperFooterBlock>
                            <UpperFooterTitle>Sobre</UpperFooterTitle>
                            <UpperFooterList>
                                <UpperFooterListItem><Link to="/">Quem somos</Link></UpperFooterListItem>
                                <UpperFooterListItem><Link to="/">Professores</Link></UpperFooterListItem>
                            </UpperFooterList>
                        </UpperFooterBlock>
                    </Col>
                    <Col xs={12} md={4}>
                        <UpperFooterBlock>
                            <UpperFooterTitle>Plataforma</UpperFooterTitle>
                            <UpperFooterListWrapper>
                                <UpperFooterList>
                                    <UpperFooterListItem><Link to="/">Plano de estudos</Link></UpperFooterListItem>
                                    <UpperFooterListItem><Link to="/">Materiais de apoio</Link></UpperFooterListItem>
                                    <UpperFooterListItem><Link to="/">Redação</Link></UpperFooterListItem>
                                </UpperFooterList>
                                <UpperFooterList>
                                    <UpperFooterListItem><Link to="/">Simulado</Link></UpperFooterListItem>
                                    <UpperFooterListItem><Link to="/">Monitorias</Link></UpperFooterListItem>
                                    <UpperFooterListItem><Link to="/">Blog</Link></UpperFooterListItem>
                                </UpperFooterList>
                            </UpperFooterListWrapper>
                        </UpperFooterBlock>
                    </Col>
                    <Col xs={12} md={2}>
                        <UpperFooterBlock>
                            <UpperFooterTitle>Suporte</UpperFooterTitle>
                            <UpperFooterList>
                                <UpperFooterListItem><Link to="/">Central de ajuda</Link></UpperFooterListItem>
                                <UpperFooterListItem><Link to="/">Fale conosco</Link></UpperFooterListItem>
                            </UpperFooterList>
                        </UpperFooterBlock>
                    </Col>
                    <Col xs={12} md={3}>
                        <UpperFooterTitle>Baixe nosso app</UpperFooterTitle>
                        <UpperFooterButton>
                            <Link to="/">
                                <img src="/assets/google-play.png" alt="Google Play" />
                            </Link>
                        </UpperFooterButton>
                        <UpperFooterButton>
                            <Link to="/">
                                <img src="/assets/app-store.png" alt="App Store" />
                            </Link>
                        </UpperFooterButton>
                    </Col>
                </Row>
            </Grid>
        </UpperFooter>
        <LowerFooter>
            <Grid>
                <Row between="xs">
                    <Col xs={12} md={6}>
                        <LowerFooterBlock>
                            <LowerFooterLogo src="/assets/footer-logo.png" alt="ProEnem" />
                            <LowerFooterMenu>
                                <LowerFooterMenuItem>
                                    <Link to="/">Termos de uso</Link>
                                </LowerFooterMenuItem>
                                <LowerFooterMenuItem>
                                    <Link to="/">Política de privacidade</Link>
                                </LowerFooterMenuItem>
                                <LowerFooterMenuItem>
                                    <Link to="/">Trabalhe conosco</Link>
                                </LowerFooterMenuItem>
                            </LowerFooterMenu>
                        </LowerFooterBlock>
                    </Col>
                    <Col xs={12} md={6}>
                        <LowerFooterBlock>
                            <LowerFooterText>© 2018 ProEnem - Todos os direitos reservados</LowerFooterText>
                            <LowerFooterButton />
                            <LowerFooterButton />
                            <LowerFooterButton />
                        </LowerFooterBlock>
                    </Col>
                </Row>
            </Grid>
        </LowerFooter>
    </>
);

export default MyAccount;

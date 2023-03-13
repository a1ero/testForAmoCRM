import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

import Logo from '../images/logo.svg'
import TG from '../images/telegram.svg'
import VB from '../images/viber.svg'
import WA from '../images/whatsapp.svg'

import '../styles/header.css'
import '../@media/@header.css'

import {Link} from "react-router-dom";

function Header() {
    return(
        <Navbar sticky='top'>
            <Container className='header' fluid>
                <div className='head'>
                    <div className='logo'>
                        <Nav.Link href="/"><img
                            src={Logo}
                            height="22"
                            className="d-inline-block alight-top"
                            alt="Logo"
                        />
                        </Nav.Link>
                        <div className='logo__text'>
                            <p>крупный интегратор CRM в<br/>Росcии и ещё 8 странах</p>
                        </div>
                    </div>
                </div>
                <div className='important'>
                    <div className='important__list'>
                        <Nav.Link as={Link} to='/services' id=''>Услуги</Nav.Link>
                        <Nav.Link as={Link} to='/widgets' id=''>Виджеты</Nav.Link>
                        <Nav.Link as={Link} to='/integration' id=''>Интеграция</Nav.Link>
                        <Nav.Link as={Link} to='/cases' id=''>Кейсы</Nav.Link>
                        <Nav.Link as={Link} to='/certificates' id='certificates'>Сертификаты</Nav.Link>
                    </div>
                </div>
                <div></div>
                <div className='contacts'>
                    <Nav.Link className='contacts__tel' href='tel:+79999999999'>+7 555 555-55-55</Nav.Link>
                </div>
                <div className='network'>
                    <Nav.Link className='network__list' href='/'><img src={TG} alt='Telegram'/></Nav.Link>
                    <Nav.Link className='network__list' href='/'><img src={VB} alt='Viber'/></Nav.Link>
                    <Nav.Link className='network__list' href='/'><img src={WA} alt='WatsApp'/></Nav.Link>
                </div>
            </Container>
        </Navbar>
    )
}

export default Header;
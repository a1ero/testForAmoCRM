import React from "react";
import {Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

import TG from "../images/telegram.svg";
import VB from "../images/viber.svg";
import WA from "../images/whatsapp.svg";

import '../styles/footer.css'
import '../@media/@footer.css'

function Footer() {
    return(
        <Container className='footer' fluid>
            <Container style={{maxWidth : '1140px'}}>
                <div className='about'>
                    <div className='about__list'>
                        <h4>О КОМПАНИИ</h4>
                        <Nav.Link as={Link} to='/program' className='about__list-link'>Партнерская программа</Nav.Link>
                        <Nav.Link as={Link} to='/vacancies' className='about__list-link'>Вакансии</Nav.Link>
                    </div>
                    <div className='about__menu'>
                        <div className='about__menu-list'>
                            <h4>МЕНЮ</h4>
                            <Nav.Link as={Link} to='/cost' className='about__menu-list__link'>Расчет стоимости</Nav.Link>
                            <Nav.Link as={Link} to='/services' className='about__menu-list__link'>Услуги</Nav.Link>
                            <Nav.Link as={Link} to='/widgets' className='about__menu-list__link'>Виджеты</Nav.Link>
                            <Nav.Link as={Link} to='/integration' className='about__menu-list__link'>Интеграции</Nav.Link>
                            <Nav.Link as={Link} to='/clients' className='about__menu-list__link'>Наши клиенты</Nav.Link>
                        </div>
                        <div className='about__menu-list'>
                            <h4 style={{visibility : 'hidden'}}>more</h4>
                            <Nav.Link as={Link} to='/cases' className='about__menu-list__link'>Кейсы</Nav.Link>
                            <Nav.Link as={Link} to='/letters' className='about__menu-list__link'>Благодартсвенные письма</Nav.Link>
                            <Nav.Link as={Link} to='/certificates' className='about__menu-list__link'>Сертификаты</Nav.Link>
                            <Nav.Link as={Link} to='/' className='about__menu-list__link'>Блог на YouTube</Nav.Link>
                            <Nav.Link as={Link} to='/' className='about__menu-list__link'>Вопрос / Ответ</Nav.Link>
                        </div>
                    </div>
                    <div className='about__contacts'>
                        <h4>КОНТАКТЫ</h4>
                        <Nav.Link className='about__contacts-tel' href='tel:+79999999999'>+7 555 555-55-55</Nav.Link>
                        <div className='about__contacts-network'>
                            <Nav.Link className='about__contacts-network__link' href='/'><img src={TG} alt='Telegram'/></Nav.Link>
                            <Nav.Link className='about__contacts-network__link' href='/'><img src={VB} alt='Viber'/></Nav.Link>
                            <Nav.Link className='about__contacts-network__link' href='/'><img src={WA} alt='WatsApp'/></Nav.Link>
                        </div>
                        <p>Москва, Путевой проезд 3с1, к 902</p>
                    </div>
                </div>
                <div className='footer__copyrights'>
                    <span>©WELBEX 2022. Все права защищены.</span>
                    <Nav.Link className='footer__copyrights-link' href='/'>Политика конфиденциальности</Nav.Link>
                </div>
            </Container>
        </Container>
    )
}

export default Footer;
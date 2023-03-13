import React from "react";
import {Container} from "react-bootstrap";

import '../styles/home.css'
import '../@media/@home.css'

function Home() {
    return(
        <Container>
            <Container className='home'>
                <div className='home__info'>
                    <h3>Зарабатывайте<br/>больше<br/><span>с WELBEX</span></h3>
                    <p>Развиваем и контролируем<br/>продажи за вас</p>
                </div>
                <div className='home__advice'>
                    <div className='home__advice-title'>
                        <p>Вместе с <span>бесплатной<br/>консультацией </span>мы дарим:</p>
                    </div>
                    <div className='home__advice-list'>
                        <div className='home__advice-list__detail'>
                            <h4>ВИДЖЕТЫ</h4>
                            <p>30 готовых решений</p>
                        </div>
                        <div className='home__advice-list__detail'>
                            <h4>DASHBOARD</h4>
                            <p>с показателями вашего бизнесса</p>
                        </div>
                        <div className='home__advice-list__detail'>
                            <h4>SKYPE АУДИТ</h4>
                            <p>отдела продаж и CRM системы</p>
                        </div>
                        <div className='home__advice-list__detail'>
                            <h4>35 ДНЕЙ</h4>
                            <p>использования CRM</p>
                        </div>
                    </div>
                    <div className='home__advice-listMobile'>
                        <div className='home__advice-listMobile__detail'>
                            <p>SKYPE АУДИТ</p>
                        </div>
                        <div className='home__advice-listMobile__detail'>
                            <p>30 ВИДЖЕТОВ</p>
                        </div>
                        <div className='home__advice-listMobile__detail'>
                            <p>DASHBOARD</p>
                        </div>
                        <div className='home__advice-listMobile__detail'>
                            <p>МЕСЯЦ AMOCRM</p>
                        </div>
                    </div>
                    <div className='home__advice-btn'>
                        <button className='home__advice-btn__button'>Получить консультацию</button>
                    </div>
                </div>
            </Container>
        </Container>
    )
}

export default Home;
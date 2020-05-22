import React, { useState, useEffect } from 'react';
import spaceHederPic from "../Photos/za-nas/5.jpg";
import { Row, Col } from "react-bootstrap";
import girl from "../Photos/girl.jpg";
import "../Components/style/eventSpace.css";



const EventSpace = () => {

    const [bukirajScroll, setBukirajScroll] = useState(false)

    const boxRef = React.createRef()

    useEffect(() => {
        boxRef.current.scrollIntoView()
        return () => {
            setBukirajScroll(false)
        }
    }, [bukirajScroll, boxRef])


    const [roomsArray] = useState(["Brainster", "Конференциска сала", "сала со бина", "Адаптибилна училница", "Училница", "Училница", "Хол", "Канцелариски простор", "Space Kitchen"])
    return (
        <div className="eventSpace-main-div">
            <Row className="heder-spaceEvent">
                <Col md={4} className="spaceEvent-left">
                    <div className="left-inner-box">
                        <h1>Простор за настани</h1>
                        <p>Нашиот простор се прилагодува според потребите на вашиот настан. Седум различни простори и Space Kitchen</p>
                        <p>Наменски создадени да се прилагодуваат и менуваат во согласност со типот на настан кој го организирате.</p>
                        <p>Организираме конференции до 150 учесни и обуки и предавања за групи од 20 учесници. КОнтактирај не за да ви хостираме одличен настан.</p>
                        <button onClick={() => setBukirajScroll(true)}>+ БУКИРАЈ НЕ</button>
                    </div>
                </Col>
                <Col md={8} className="spaceEvent-right">
                    <img src={spaceHederPic} alt="" />
                </Col>
            </Row>

            <Row className="prostorii">
                <Col md={3} className="prostorii-left">
                    <div className="left-inner-box">
                        <h1>Нашите простории </h1>
                        <p>Комплетно адатибилни. Една сала за 150 учесници или три помали сали за групи од по 50 учесника. Училници за од 25 до 40 учесника. Избор од две локации</p>
                        <p>Пулт за прием и најважното место за networking-Brainster Kithchen.</p>
                        <p>Како го замислувате вашиот следен настан?</p>
                    </div>
                </Col>
                <Col md={9} className="spaceEvent-card-container">
                    <Row>
                        {roomsArray.map((el, index) => (
                            <Col md={4} sm={6} key={index} className="card-eventSpace">
                                <div style={{
                                    backgroundImage: "url(" + require(`../Photos/renderi/${index}.jpg`) + ")",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    height: "200px",


                                }}></div>
                                <span>{el}</span>
                            </Col>
                        ))}
                    </Row>

                </Col>
            </Row>

            <Row className="space-kitchen">
                <Col md={{ span: 8, order: 1 }} sm={{ span: 12, order: 2 }}>
                    <Row className="desctop-eventPic">
                        <Col md={6} >
                            <Row>
                                <Col md={12}>
                                    <div className="box1"></div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <div className="box2"></div>

                                </Col>
                                <Col md={6}>
                                    <div className="box3"></div>

                                </Col>
                            </Row>


                        </Col>
                        <Col md={6}>
                            <div className="box-right"></div>

                        </Col>
                    </Row>
                    <Row className="tablet-evenPic">
                        <Col >
                            <Row>
                                <Col sm={6}>
                                    <div className="box1"></div>

                                </Col>
                                <Col sm={6}>
                                    <div className="box-right"></div>

                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <div className="box2"></div>

                                </Col>
                                <Col sm={6}>
                                    <div className="box3"></div>

                                </Col>
                            </Row>

                        </Col>

                    </Row>

                </Col>
             
                <Col md={{ span: 4, order: 2 }} sm={{ span: 12, order: 1 }}>
                    <div className="left-inner-box">
                        <h1>Space Kitchen</h1>
                        <p>Комплетно адатибилни. Една сала за 150 учесници или три помали сали за групи од по 50 учесника. Училници за од 25 до 40 учесника. Избор од две локации</p>
                        <p>Пулт за прием и најважното место за networking-Brainster Kithchen.</p>
                        <p>Како го замислувате вашиот следен настан?</p>
                    </div>
                </Col>
            </Row>


            <Row className="nudime">
                <Col md={12}>
                    <h1>Нудиме</h1>
                    <ul>
                        <li><i className="fas fa-globe-asia"></i>Простор</li>
                        <li><i className="fas fa-utensils"></i>Space Kitchen</li>
                        <li><i className="fas fa-globe"></i>Логистика</li>
                        <li><i className="fas fa-microphone-alt"></i>Техничка Поддршка</li>
                        <li><i className="fas fa-volume-up"></i>Звук</li>
                        <li><i className="far fa-lightbulb"></i>Светло</li>
                        <li><i className="fas fa-network-wired"></i>Помош при Организација</li>
                        <li><i className="fas fa-record-vinyl"></i>Видео иФотографија</li>
                        <li><i className="fab fa-facebook"></i>Промоција на Социјални Мрежи</li>
                    </ul>
                </Col>
            </Row>
            <Row className="girl" ref={boxRef}>
                <Col md={{ span: 7, order: 1 }} sm={{ span: 6, order: 2 }} xs={{ span: 12, order: 2 }}>
                    <div className="left-inner-box">
                        <h1>EVENT HOST</h1>
                        <p>Ања Макевска</p>
                        <p>Ања Макевска</p>
                        <p>+389 070 233 4421</p>
                    </div>

                </Col>
                <Col md={{ span: 5, order: 2 }} sm={{ span: 6, order: 1 }} xs={{ span: 12, order: 1 }}>
                    <img src={girl} alt="" />
                </Col>
            </Row>
        </div>
    )
}

export default EventSpace;
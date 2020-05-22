import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AcademiArr from "./Academies.json"


const Academies = () => {

    return (
        <div className="academies-main-div">
            <Row>
                <Col md={4} className="academies-col1">
                    <h1>Академии</h1>
                    <p>Нашите академии ке ти помогнат да ги совладаш најбараните вештини на денешницата преку интерактивна настава и практична работа на реални проекти.</p>
                    <p>Инструктори кои се докажани експерти во својата област. Преку нив имас мозност да ги научиш и предвидиш предизвиците на иднината на работите и да се поврзеш со сегашните и идните врвни професионалци и компании.</p>
                    <p>Академиите ке ти го итворат патот кон кариера каква што посакуваш</p>
                </Col>
                <Col md={8} className="academies-col2">
                    <div></div>

                </Col>
            </Row>
            <Row className="row-cards">
                {AcademiArr.map((el, index) => (
                    <Col md={4}sm={6} xs={12} key={index}className="academies-col">
                        <div className="academy-cards" style={{
                            backgroundImage: "url(" + require(`../Photos/za-nas/${index}.jpg`) + ")",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            height: "400px",
                                             
                        }}>
                            {index === 0 && <div style={{ borderRadius:"10px", height: "400px", width: "100%", backgroundColor: "rgba(118, 50, 125, 0.5)", position: "absolute" }}></div>}
                            {index === 1 && <div style={{ borderRadius:"10px", height: "400px", width: "100%", backgroundColor: "rgba(138, 59, 78, 0.5)", position: "absolute" }}></div>}
                            {index === 2 && <div style={{borderRadius:"10px", height: "400px", width: "100%", backgroundColor: "rgba(55, 124, 79, 0.5)", position: "absolute" }}></div>}
                            {index === 3 && <div style={{borderRadius:"10px", height: "400px", width: "100%", backgroundColor: "rgba(55, 124, 79, 0.5)", position: "absolute" }}></div>}
                            {index === 4 && <div style={{borderRadius:"10px", height: "400px", width: "100%", backgroundColor: "rgba(70, 76, 108, 0.5)", position: "absolute" }}></div>}
                            {index === 5 && <div style={{borderRadius:"10px", height: "400px", width: "100%", backgroundColor: "rgba(55, 124, 79, 0.5)", position: "absolute" }}></div>}

                         
                            <div className="academy-cards-title">
                                <h3>{el.title}</h3>
                            </div>

                            <div className="inner-div">
                                <p><i className="far fa-user"></i>{el.freeSpace}</p>
                                <p><i className="far fa-calendar-alt"></i>{el.upisi}</p>
                                <p><i className="far fa-clock"></i>{el.profession}</p>
                                <p><i className="far fa-handshake"></i>{el.partnership}</p>
                            </div>
                        </div>


                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Academies;
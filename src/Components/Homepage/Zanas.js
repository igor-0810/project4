import React, { useState, useContext } from 'react';
import zanasInfo from "./zaNas.json";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import eduPic from "../../Photos/za-nas/1.jpg";
import nastaniPic from "../../Photos/za-nas/5.jpg";
import coworkingPic from "../../Photos/za-nas/0.jpg";
import prostoriiPic from "../../Photos/za-nas/4.jpg";
import partnerstvaPic from "../../Photos/partnerstva so tech komp.jpg";
import inovaciiPic from "../../Photos/IMG_7397.jpg"
import {Modal} from "react-bootstrap";
import {Context} from "../../Context/userContext";

const Zanas = () => {

    const {setIsActive, setPartnership} = useContext(Context) 

    const [inovacii, setInovacii] = useState(false)
    return (
        <div>
            <h1 className="zanas-h1">За Нас</h1>
            <Row>
                <Col md={4} sm={6} className="zanas-col">
                    <a href="https://brainster.co/" target="_blank" rel="noopener noreferrer" className="zanas-link">
                        <div className="zanas-card">
                            <div className="pic-div">
                                <img src={eduPic} alt="" />
                            </div>
                            <div className="card-info">
                                <h5>{zanasInfo[0].title}</h5>
                                <p>{zanasInfo[0].description}</p>
                                <i className="far fa-arrow-alt-circle-right "></i>

                            </div>
                        </div>

                    </a>
                </Col>
                <Col md={4} sm={6} className="zanas-col">
                    <Link onClick={() => setIsActive(2)} className="zanas-link" to="/calendar">
                        <div className="zanas-card">
                        <div className="pic-div">
                            <img src={nastaniPic} alt="" />
                        </div>
                        <div className="card-info">
                            <h5>{zanasInfo[1].title}</h5>
                            <p>{zanasInfo[1].description}</p>
                            <i className="far fa-arrow-alt-circle-right "></i>

                        </div>
                        </div>
                       
                    </Link>
                </Col>
                <Col md={4} sm={6} className="zanas-col">
                    <Link to="/" onClick={() => setIsActive(3)} className="zanas-link">
                        <div className="zanas-card">
                        <div className="pic-div">
                            <img src={coworkingPic} alt="" />
                        </div>
                        <div className="card-info">
                            <h5>{zanasInfo[2].title}</h5>
                            <p>{zanasInfo[2].description}</p>
                            <i className="far fa-arrow-alt-circle-right "></i>

                        </div>
                        </div>
                        
                    </Link>
                </Col>
                <Col md={4} sm={6} className="zanas-col">
                    <Link to="/event-space" onClick={() => setIsActive(5)} className="zanas-link">
                        <div className="zanas-card">
                        <div className="pic-div">
                            <img src={prostoriiPic} alt="" />
                        </div>
                        <div className="card-info">
                            <h5>{zanasInfo[3].title}</h5>
                            <p>{zanasInfo[3].description}</p>
                            <i className="far fa-arrow-alt-circle-right "></i>

                        </div>

                        </div>
                    </Link>
                </Col>
                <Col md={4} sm={6} className="zanas-col">
                    <div onClick={() => setPartnership(true)} className="zanas-card">
                        <div className="pic-div">
                            <img src={partnerstvaPic} alt="" />
                        </div>
                        <div className="card-info">
                            <h5>{zanasInfo[4].title}</h5>
                            <p>{zanasInfo[4].description}</p>
                            <i className="far fa-arrow-alt-circle-right "></i>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} className="zanas-col">
                    <div onClick={() => setInovacii(true)} className="zanas-card">
                        <div className="pic-div">
                            <img src={inovaciiPic} alt="" />
                        </div>
                        <div className="card-info">
                            <h5>{zanasInfo[5].title}</h5>
                            <p>{zanasInfo[5].description}</p>
                            <i className="far fa-arrow-alt-circle-right "></i>
                        </div>
                    </div>

                </Col>
            </Row>
            <Modal show={inovacii} animation={false} className="modal-partnership">
                <Modal.Body >
                    <div className="div-partnership">
                        <h3>Иновации за вашата компанија</h3>
                        <i className="fas fa-times-circle close-x" onClick={() => setInovacii(false)}></i>
                        <label htmlFor="">Име и Презиме</label>
                        <input type="text" placeholder="Внесете Име и Презиме" />

                        <label htmlFor="">Име на Кoмпанија</label>
                        <input type="text" placeholder="Внесете име на Вашата Компанија" />

                        <label htmlFor="">Емаил</label>
                        <input type="email" placeholder="Внесете го вашиот емаил" />

                        <label htmlFor="">Телефонски Број</label>
                        <input type="text" placeholder="Внесете Телефонски Број" />


                        <label htmlFor="">Потреби на компанијата</label>
                        <textarea name="" id="" cols="30" rows="5" placeholder="Опишете кои потреби ги има вашата компанија"></textarea>
                        
                       
        
                        <div className="partnership-btn-div">
                            <button className="isprati-forma" onClick={() => setInovacii(false)}>
                                <i className="fas fa-arrow-right"></i>ИСПРАТИ</button>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default Zanas;

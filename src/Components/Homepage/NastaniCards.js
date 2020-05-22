import React, {useContext} from 'react';
import nastaniNiza from "../Homepage/nastani.json";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Context} from "../../Context/userContext";

const NastaniCards = () => {

    const {setIsActive} = useContext(Context) 


    return (
        <div className="div-nastani">
        <h1>Настани</h1>
        <Row className="zanas-row">
            {nastaniNiza.map((el, index) => (
                <Col md={4} sm={6} className="zanas-col" key={index}>
                    <a href="https://brainster.co/" target="_blank" rel="noopener noreferrer" className="zanas-link">
                        <div className="zanas-card">
                            <div className="pic-div" style={{
                                backgroundImage: "url(" + require(`../../Photos/nastani/${index}.jpg`) + ")",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                height: "250px"
                            }}>
                            </div>
                            <div className="card-info">
                                <h5>{el.title}</h5>
                                <p>{el.description}</p>
                                <i className="far fa-arrow-alt-circle-right "></i>

                            </div>
                        </div>

                    </a>
                </Col>
            ))}
        </Row>
        <Link to="/calendar" onClick={() => setIsActive(2)} className="btn-calendar"><i className="far fa-calendar-alt"></i>Календар на настани</Link>

    </div>
    )
}

export default NastaniCards;
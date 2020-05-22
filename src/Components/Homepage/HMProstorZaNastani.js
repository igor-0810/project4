import React, {useContext} from 'react';
import {Row, Col} from "react-bootstrap";
import prostorPic from "../../Photos/za-nas/3.jpg";
import {Link} from "react-router-dom";
import {Context} from "../../Context/userContext"

const HMProstorZaNastani = () => {
    const {setIsActive} = useContext(Context) 

    return (
        <div  className="HM-prostor-za-nastani">
          <Row>
              <Col md={6} className="prostor-col">
                  <div className="HM-prostor-inner-div">
                  <h1>Простор за настани</h1>
                  <p>Можност за презентации, обуки, конференции, networking настани. Одбери ја просторијата која најмногу ке одговара на твојата идеја. Го задржуваме правото да одбереме кој настан ќе се организира во нашиот Brainste Space.</p>
                  <Link to="/event-space" onClick={() => setIsActive(5)}><i className="fas fa-arrow-right"></i>ВИДИ ГО ПРОСТОРОТ</Link>
                  </div>
                 
              </Col>
              <Col md={6}>
                  <img src={prostorPic} alt=""/>
              </Col>
          </Row>
        </div>
    )
}

export default HMProstorZaNastani;
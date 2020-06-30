import React from 'react';
import { Link } from "react-router-dom";
import logo from '../Photos/brainster_space_logo.svg';
import { Row, Col, Popover, OverlayTrigger } from "react-bootstrap";
import "../Components/style/footer.css"


const Footer = () => {
  
    // const firstFieldRef = useRef(null)
    // const popover = (
    //     <Popover id="popover-basic" >
    //         <Popover.Title as="h3">Контакт</Popover.Title>
    //         <Popover.Content>
    //             <p>емаил:</p>
    //             <p>anja@brainster.com</p>
    //             <p>Телефон:</p>
    //             <p>070 233 414</p>
    //         </Popover.Content>
    //     </Popover>
    // );
  
    return (
        <div className="footer-main-div"  >

            <Row>
                <Col md={6}  sm={{ span: 8, order: 1 }} xs={{ span: 12, order: 2 }} className="footer-col1">
                    <div>
                        <p>Корисни Линкови</p>
                        <ul>
                        {/* <OverlayTrigger trigger={"click"} placement="top" overlay={popover}> */}
                                <li  >Контакт</li>
                            {/* </OverlayTrigger> */}

                            <li><a href="https://www.wearelaika.com/" target="_blank" rel="noopener noreferrer">Отворени Позиции</a></li>
                            <li><a href="https://medium.com/wearelaika/brainster-space-the-new-home-of-the-local-tech-community-in-skopje-ffe97b564152" target="_blank" rel="noopener noreferrer">Галерија</a></li>
                            <li><Link to="/calendar">Календар</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p>Социјални мрежи</p>
                        <a href="https://www.facebook.com/" target="_blank"rel="noopener noreferrer"><i className="fab fa-facebook" style={{ color: "#4167b2" }} ></i></a>
                        <a href="https://www.instagram.com/" target="_blank"rel="noopener noreferrer"><i className="fab fa-instagram" style={{ color: "#ca38a6" }}></i></a>
                        <a href="https://www.linkedin.com/" target="_blank"rel="noopener noreferrer"><i className="fab fa-linkedin" style={{ color: "#1a77a1" }}></i></a>
                        
                        
                    </div>
                </Col>
                <Col md={6}  sm={{ span: 4, order: 1 }} xs={{ span: 12, order: 1 }} className="footer-col2">
                    <img src={logo} alt="" />


                </Col>
            </Row>

            

            <p>COPYRIGHT&copy;BrainsterSpace. All Rights Reserved</p>
        </div>
    )
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Footer />, rootElement);
export default Footer;
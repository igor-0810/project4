import React, { useState, useContext } from 'react';
import { Modal } from "react-bootstrap";
import logo from '../Photos/brainster_space_logo.svg';
import { Link } from "react-router-dom";
import "../Components/style/mainNav.css";
import { Context } from "../Context/userContext";


const MainNav = () => {
    const [formShow, setFormShow] = useState(false)

    const { isActive, setIsActive, isSpaceblogNavOpen, setSpaceblogNavOpen, partnership, setPartnership} = useContext(Context);
    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <div className='main-nav'>
            <div className="navbar1">
                <ul>
                    <li onClick={() => setIsActive(0)} className={`${isActive === 0 ? "selected-nav-li" : null}`}><Link to="/" onClick={() => setIsActive(0)}><img src={logo} alt="" /></Link></li>
                    <li onClick={() => setIsActive(1)} className={`${isActive === 1 ? "selected-nav-li" : null}`}><Link to="/space-blog">space блог</Link></li>
                    <li onClick={() => setIsActive(2)} className={`${isActive === 2 ? "selected-nav-li" : null}`}><Link to="/calendar">настани</Link></li>
                    <li onClick={() => setIsActive(3)} className={`${isActive === 3 ? "selected-nav-li" : null}`}><Link to="/">co-working</Link></li>
                    <li onClick={() => setIsActive(4)} className={`${isActive === 4 ? "selected-nav-li" : null}`}><Link to="/academies">академии</Link></li>
                    <li onClick={() => setIsActive(5)} className={`${isActive === 5 ? "selected-nav-li" : null}`}><Link to="/event-space">простор за настани</Link></li>
                    <li onClick={() => setPartnership(true)}>партнетрства</li>
                </ul>
                <button className="btn-black" onClick={() => setFormShow(true)}>+ ПРИКЛУЧИ СЕ</button>
            </div>
            <div className="navbar-tablet">
                <Link to="/" onClick={() => setIsActive(0)}><img src={logo} alt="" /></Link>
                <div className="nav-tablet-menu">
                    <button className="btn-black" onClick={() => setFormShow(true)}>+ ПРИКЛУЧИ СЕ</button>
                    {isActive === 1 ?
                        <div className="openMenu-spaceblog" onClick={() => setSpaceblogNavOpen(!isSpaceblogNavOpen)}>
                            <div className="bar-1"></div>
                            <div className="bar-2"></div>
                            <div className="bar-3"></div>
                        </div>
                        : null
                    }

                    <i className="fas fa-bars" onClick={() => setIsNavOpen(!isNavOpen)}></i>

                </div>
            </div>
            {isNavOpen ?
                <div className="tablet-nav-ul">
                    <ul>
                        <li onClick={() => setIsActive(1)} className={`${isActive === 1 ? "selected-nav-li" : null}`}><Link to="/space-blog">space блог</Link></li>
                        <li onClick={() => setIsActive(2)} className={`${isActive === 2 ? "selected-nav-li" : null}`}><Link to="/calendar">настани</Link></li>
                        <li onClick={() => setIsActive(3)} className={`${isActive === 3 ? "selected-nav-li" : null}`}><Link to="/">co-working</Link></li>
                        <li onClick={() => setIsActive(4)} className={`${isActive === 4 ? "selected-nav-li" : null}`}><Link to="/academies">академии</Link></li>
                        <li onClick={() => setIsActive(5)} className={`${isActive === 5 ? "selected-nav-li" : null}`}><Link to="/event-space">простор за настани</Link></li>
                        <li onClick={() => setPartnership(true)}>партнетрства</li>
                        <li className="btn-priklucise-mobile" onClick={() => setFormShow(true)}>+ ПРИКЛУЧИ СЕ</li>
                    </ul>
                </div>
                :
                null
            }
            <Modal show={formShow} animation={false} className="modal-najavise">
                <Modal.Body >
                    <div className="najava-div">
                        <i className="fas fa-times-circle close-x" onClick={() => setFormShow(false)}></i>

                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder="Enter name" />

                        <label htmlFor="">Last Name</label>
                        <input type="password" placeholder="Enter lastname" />

                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Enter your email" />
                        <br />
                        <button className="save-changes" onClick={() => setFormShow(false)}>ЗАЧУВАЈ</button>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={partnership} animation={false} className="modal-partnership">
                <Modal.Body >
                    <div className="div-partnership">
                        <h3>Приклучи се</h3>
                        <i className="fas fa-times-circle close-x" onClick={() => setPartnership(false)}></i>
                        <label htmlFor="">Име и Презиме (задолжително)</label>
                        <input type="text" placeholder="Внесете Име и Презиме" />

                        <label htmlFor="">Име на Кoмпанија (незадолжително)</label>
                        <input type="text" placeholder="Внесете име на Вашата Компанија" />

                        <label htmlFor="">Телефонски Број (задолжително)</label>
                        <input type="text" placeholder="Внесете Телефонски Број" />

                        <label htmlFor="">Предлог за Соработка (незадолжително)<span>300</span></label>
                        <textarea name="" id="" cols="30" rows="5" placeholder="Во 300 карактери, опишете зошто сакате да соработуваме"></textarea>
                        <br />
                        <div className="partnership-btn-div">
                            <button className="iskluci" onClick={() => setPartnership(false)}>ИСКЛУЧИ</button>
                            <button className="isprati-forma" onClick={() => setPartnership(false)}>
                                <i className="fas fa-arrow-right"></i>ИСПРАТИ ФОРМА</button>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>


        </div>
    )
}

export default MainNav;
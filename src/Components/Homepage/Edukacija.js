import React, { useState } from 'react';
import { Row, Col } from "react-bootstrap";
import eduPic1 from "../../Photos/za-nas/1.jpg";
import eduPic2 from "../../Photos/za-nas/2.jpg"


const Edukacija = () => {
    const [academy, setAcademy] = useState(true)
    const [company, setCompany] = useState(false)

    const showAcademy = () => {
        setAcademy(true);
        setCompany(false)
    }
    const showCompany = () => {
        setCompany(true)
        setAcademy(false)
    }

    return (
        <div className="edukacija-main-div">
            <Row>
                <Col md={6} sm={12} className="edukacija-col">
                    <div className="educatija-inner-div">
                        {academy ?
                            <div>
                                <h1>Едукација</h1>
                                <p>Дали си подготвен да одговорис на потребите на иднината. Вистински курсеви, академии и семинари кои ке ти овозмозат кариерна трансформација во областа дигитален маркетинг, дизајн, програмирање и Data Science.</p>
                            </div>
                            :
                            null
                        }
                        {company ?
                            <div>
                                <h1>Компании</h1>
                                <p>Компаниите имаат можност да ги надградуваат своите техники, а со тоа да го подобрат перформансот на својата компанија</p>
                                <p>
                                    Дигиталната трансформација се случува, а вашите компании треба да бидат подготвени да се адаптираат соодветно. Обуки, Семинари, Курсеви или Team buillding?
                            </p>
                                <p>Во Brainster Science имаме специјално обучен тим, кој е подготвен да ја насочи и адаптира модерни бласдаслкдасд со денешните потреби на компаниите</p>
                            </div> :
                            null
                        }


                        <button className="btn-academy" onClick={showAcademy}>АКАДЕМИИ</button>
                        <button className="btn-company" onClick={showCompany}>ЗА КОМПАНИИ</button>
                    </div>

                </Col>
                <Col md={6} sm={12}  >
                    {academy ? <img src={eduPic1} alt="" /> : null}
                    {company ? <img src={eduPic2} alt="" /> : null}

                </Col>
            </Row>
        </div>
    )
}

export default Edukacija;
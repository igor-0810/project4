import React, { useState, useEffect, useContext } from 'react';
import { Row, Col } from "react-bootstrap";
import coworkingPIc from "../../Photos/za-nas/0.jpg";
import {Context} from "../../Context/userContext"

const Coworking = () => {

    const {coworkingRef} = useContext(Context);


    const [isSold, setIsSold] = useState(false)
    useEffect(() => {
        if (isSold === true){
            setTimeout(() => {
                setIsSold(false)
            },200000)
        }
    }, [isSold])
    
    return (
        <div ref={coworkingRef} className="main-div-coworking">
            <Row>
                <Col md={{ span: 6, order: 1 }} sm={{ span: 12, order: 2 }}>
                    <img src={coworkingPIc} alt="" />
                </Col>
                <Col md={{ span: 6, order: 2 }} sm={{ span: 12, order: 1 }} className="coworking-col">
                    <div className="coworking-inner-div">
                        {
                            isSold ? <span className="soldout">sold out</span> : null

                        }
                        <h1>Coworking</h1>
                        <p>Биди дел од tech заедницата на иноватори, креативци и претприемачи. Резервирај стол во нашата shared office. Пичирај го твојот бизнис и нашиот тим заедно ќе одлучи секој месец се о кого да ги дели своите канцеларии.</p>
                        <button onClick={() => setIsSold(!isSold)} className="btn-coworking">РЕЗЕРВИРАЈ МЕСТО</button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Coworking;
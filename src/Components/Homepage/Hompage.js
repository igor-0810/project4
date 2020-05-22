
import React from "react"
import Zanas from './Zanas';
import HederHomePage from './HederHomepage';
import Edukacija from "../Homepage/Edukacija";
import NastaniCards from "./NastaniCards";
import Coworking from "./Coworking"
import HMProstorZaNastani from "./HMProstorZaNastani";
import {Link} from "react-router-dom"


const Homepage = () => {
    return (
        <div>
            <HederHomePage />
            <div className="main-div-HomePage">
                <Zanas />
                <Edukacija />
                <NastaniCards/>
                <Coworking/>
                <HMProstorZaNastani/>
                <div className="partnerstvo">
                    <h1>Партнери</h1>
                    <p>Имаш идеја? Отворени сме за соработка</p>
                    <Link to="/event-space"><i className="fas fa-arrow-right"></i>ВИДИ ГО ПРОСТОРОТ</Link>
                </div>
            </div>

        </div>
    )
}

export default Homepage;
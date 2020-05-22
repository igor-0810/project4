import React, { useState, useEffect, useContext } from 'react';
import {Context} from "../../Context/userContext";
import "../style/spaceblog.css"


const SpaceblogHeder = () => {

    const  {blogInfoUnchanged}  = useContext(Context)
    const [activeIndex, setActiveIndex] = useState(0)

    const [promenliva, setPromenliva] = useState(blogInfoUnchanged[activeIndex]);
    const increment = () => {
        if (activeIndex === 8) {
            setActiveIndex(0)
        } else {
            setActiveIndex(activeIndex + 1)
        }
    }
    const decrement = () => {
        if (activeIndex === 0) {
            setActiveIndex(8)
        } else {
            setActiveIndex(activeIndex - 1)
        }
    }
    useEffect(() => {
        setPromenliva(blogInfoUnchanged[activeIndex])

        let id = setInterval(() => {
            if (activeIndex < 8) {
                setPromenliva(blogInfoUnchanged[activeIndex])
                setActiveIndex(activeIndex + 1)
            } else {
                setActiveIndex(0)
            }

        }, 7000);
        return () => clearInterval(id);
    }, [activeIndex, blogInfoUnchanged]);

    return (
        <div className="heder-spaceBlog" style={{
            backgroundImage: "url(" + require(`../../Photos/space-blog-kartici/${activeIndex}.jpg`) + ")",
            backgroundPosition: "center",
            backgroundSize: "cover"
        }}>
            <div className="bg-zatemnet">
                <div className="spaceBlog-info">
                    <span className="span-category">{promenliva.category}</span>
                    <h1>{promenliva.title}</h1>
                    <div className="desc-index">
                        <p>{promenliva.description}</p>
                        <span>{activeIndex + 1}/9</span>
                    </div>
                    
                        <a href="brainster.co" target="_blank" rel="noopener noreferrer"><i className="fas fa-arrow-right"></i> Дознај повеќе</a>

                    
                    <div className="strelki">
                        <i onClick={increment} className="far fa-arrow-alt-circle-right "></i>
                        <span>{activeIndex + 1}/9</span>
                        <i onClick={decrement} className="far fa-arrow-alt-circle-left "></i>
                    </div>


                </div>
            </div>


        </div>
    )
}

export default SpaceblogHeder;
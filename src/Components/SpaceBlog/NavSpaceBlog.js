import React, { useContext } from 'react';
import { Context } from "../../Context/userContext";
import "../style/spaceblog.css";

const NavSpaceBlog = () => {
    const { toggleAll, toggleFilters, allCards, selectedCards, isSpaceblogNavOpen } = useContext(Context)



    return (
        <div className="nav-spaceblog">
            {isSpaceblogNavOpen ?
                <ul>
                    <li className="first-child">ФИЛТРИРАЈ</li>
                    <li onClick={toggleAll} name="СИТЕ" className={allCards ? "selected" : "unselected"}>СИТЕ</li>
                    <li onClick={toggleFilters} data-name="kariera" data-actual-name="КАРИЕРА" className={selectedCards.kariera ? "selected" : "unselected"}>КАРИЕРА</li>
                    <li onClick={toggleFilters} data-name="tehnologija" data-actual-name="ТЕХНОЛОГИЈА" className={selectedCards.tehnologija ? "selected" : "unselected"}>ТЕХНОЛОГИЈА</li>
                    <li onClick={toggleFilters} data-name="dataScience" data-actual-name="DATA SCIENCE" className={selectedCards.dataScience ? "selected" : "unselected"}>DATA SCIENCE</li>
                    <li onClick={toggleFilters} data-name="marketing" data-actual-name="МАРКЕТИНГ" className={selectedCards.marketing ? "selected" : "unselected"}>МАРКЕТИНГ</li>
                    <li onClick={toggleFilters} data-name="dizajn" data-actual-name="ДИЗАЈН" className={selectedCards.dizajn ? "selected" : "unselected"}>ДИЗАЈН</li>
                    <li onClick={toggleFilters} data-name="impact" data-actual-name="IMPACT" className={selectedCards.impact ? "selected" : "unselected"}>IMPACT</li>
                    <li><a href="https://medium.com/wearelaika/brainster-space-the-new-home-of-the-local-tech-community-in-skopje-ffe97b564152" target="_blank" rel="noopener noreferrer">#SppaceFamily</a></li>
                </ul>
                :
                null
            }

        </div>
    )
}

export default NavSpaceBlog;
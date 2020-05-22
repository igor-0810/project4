import React, { useState, createContext, useEffect } from "react";
import spaceBlogInfo from "../Components/SpaceBlog/myArr.json"

export const Context = createContext({});

export const Provider = (props) => {

    const [blogInfoUnchanged] = useState(spaceBlogInfo)
    const [blogInfo, setBlogInfo] = useState(spaceBlogInfo);
    const [allCards, setAllCards] = useState(true);
    const [isActive, setIsActive] = useState(0);
    const [isSpaceblogNavOpen, setSpaceblogNavOpen] = useState(false)
    const [partnership, setPartnership] = useState(false)

    const coworkingRef = React.createRef()

    const [selectedCards, setSelectedCards] = useState(
        {
            kariera: false,
            tehnologija: false,
            dataScience: false,
            marketing: false,
            dizajn: false,
            impact: false
        }
    )
    const [cyrillicName, setCyrilllicName] = useState(
        {
            КАРИЕРА: false,
            ТЕХНОЛОГИЈА: false,
            "DATA SCIENCE": false,
            МАРКЕТИНГ: false,
            ДИЗАЈН: false,
            IMPACT: false
        }
    )

    useEffect(() => {
        let allFiltersThatAreActive = []
        const category = cyrillicName;

        for (let i in category) {
            if (category[i]) {
                allFiltersThatAreActive.push(i)
            }
        }
        let filtered = blogInfoUnchanged.filter(card => {
            if(!allFiltersThatAreActive.length){
                return true
            }
            return allFiltersThatAreActive.includes(card.category)
        })
       
        setBlogInfo(filtered)

    }, [cyrillicName, blogInfoUnchanged])

    useEffect(() => {
        if(blogInfo.length === blogInfoUnchanged.length){
            setAllCards(true)
        }
    }, [blogInfo.length, blogInfoUnchanged.length])



    const toggleAll = (e) => {
        setAllCards(true)
        setSelectedCards(
            {
                kariera: false,
                tehnologija: false,
                dataScience: false,
                marketing: false,
                dizajn: false,
                impact: false
            }
        )
        setCyrilllicName(
            {
                КАРИЕРА: false,
                ТЕХНОЛОГИЈА: false,
                "DATA SCIENCE": false,
                МАРКЕТИНГ: false,
                ДИЗАЈН: false,
                IMPACT: false
            }
        )
    }

    const toggleFilters = (e) => {
        let dataName = e.target.dataset.name,
            dataActualName = e.target.dataset.actualName

        setSelectedCards(prevState => ({
            ...prevState,
            [dataName]: !prevState[dataName]
        }))
        setCyrilllicName(prevState => ({
            ...prevState,
            [dataActualName]: !prevState[dataActualName]
        }))
        setAllCards(false)

    }
    useEffect(() => {
        if(isActive === 3){
            coworkingRef.current.scrollIntoView() 
            
        }else{
            window.scrollTo(0, 0)
        }
        // return () => {
        //     setIsActive(0)
        // }

      }, [isActive,coworkingRef])

    const generalData = {
        blogInfo,
        blogInfoUnchanged,
        selectedCards,
        allCards,
        isActive,
        partnership,
        isSpaceblogNavOpen,
        setSpaceblogNavOpen,
        coworkingRef,
        setPartnership,
        setIsActive,
        toggleAll,
        toggleFilters
    }

    return (
        <Context.Provider value={generalData}>
            {props.children}
        </Context.Provider>
    )
}
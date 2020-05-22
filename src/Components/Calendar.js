import * as React from 'react';
import { useState, useEffect } from 'react';


export default function Calendar() {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ['НЕД', 'ПОН', 'ВТО', 'СРЕ', 'ЧЕТ', 'ПЕТ', 'САБ'];
  const MONTHS = ['Јануари', 'Февруари', 'Март', 'Април', 'Мај', 'Јуни', 'Јули', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));
  const [totalArray, setTotalArray] = useState([]);
  const [eventArray, setEventArray] = useState([])
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);


  useEffect(() => {
    if (month === 3){
      let niza = [];
      totalArray.forEach((el, index) => {
        if (el !== "") { }
        if (index === 7 || index === 28) {
          niza.push(el)
        }
      })
      setEventArray(niza)
    }
   

  }, [totalArray, month])

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  


  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });


  useEffect(() => {
  const days = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? DAYS_LEAP : DAYS;

    let niza = [];
    let number = days[month]
    for (let i = 0; i < startDay; i++) {
      let myObj = {
        title: "", time: "", numberOfDays: "", calendarDay: ""
      }
      niza.push(myObj)
    }
    for (let i = 1; i <= number; i++) {
      let myObj = {
        title: "", time: "", numberOfDays: "", calendarDay: i
      }
      if (i === 4 && month === 3) {
        let myObj = {
          title: "Deep Dive into Data Science", time: "10:00 - 18:00ч", numberOfDays: "Ден 1", calendarDay: i
        }
        niza.push(myObj)

      } else if (i === 5 && month === 3) {
        let myObj = {
          title: "Deep Dive into Data Science", time: "10:00 - 18:00ч", numberOfDays: "Ден 2", calendarDay: i
        }
        niza.push(myObj)
      } else if (i === 25 && month === 3) {
        let myObj = {
          title: "Deep Dive into Data Marketing", time: "10:00 - 18:00ч", numberOfDays: "Ден 1", calendarDay: i
        }
        niza.push(myObj)
      } else if (i === 26 && month === 3) {
        let myObj = {
          title: "Deep Dive into Data Marketing", time: "10:00 - 18:00ч", numberOfDays: "Ден 2", calendarDay: i
        }
        niza.push(myObj)
      } else {
        niza.push(myObj)
      }
      setTotalArray(niza)
    }

  }, [startDay, month, year])


  
  return (
    <div className="calendar-main-div">
      <div className="calendar-heder">
        <h1>Календар</h1>
        <div>
          <i className="far fa-arrow-alt-circle-left " onClick={() => setDate(new Date(year, month - 1, day))}></i>
          <span>{MONTHS[month]} {year}</span>
          <i className="far fa-arrow-alt-circle-right " onClick={() => setDate(new Date(year, month + 1, day))}></i>
        </div>

      </div>



      <div className="calendar-week">
        {DAYS_OF_THE_WEEK.map((el, index) => (
          <div className="calendar-weekdays" key={index}><span>{el}</span></div>
        ))}
      </div>
      <div className="calendar">
        {totalArray.map((el, index) => (

          <div className={`${el.calendarDay !== "" ? "bg-calendar-days" : null}
          ${(el.calendarDay === 4 || el.calendarDay === 5) && month === 3 ? "bg-calendar-blue" : null}
          ${(el.calendarDay === 25 || el.calendarDay === 26) && month === 3 ? "bg-calendar-red" : null}        
          calendar-days `}
            key={index}>

            {isDesktop ?
              <div>
                <p className="title-day">{el.title}</p>
                <p>{el.time}</p>
                <p>{el.numberOfDays}</p>
                <span>{el.calendarDay}</span>
              </div>

              :
              <span>{el.calendarDay}</span>
            }
          </div>
        ))}
      </div>
      <div className="calendat-event">
        <h3>Следни Настани</h3>
        <div>
          {eventArray.map((el, index) => (
            <div key={index} className={`event-divs-tablet${index + 1}`}>
              <span>{el.calendarDay - 1}/{el.calendarDay}.0{month}.{year}</span>
              <p>{el.title}</p>
              <span>{el.time}</span>
            </div>
          ))}

        </div>

      </div>



    </div>
  );
}


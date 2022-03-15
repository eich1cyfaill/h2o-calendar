import React, { useState } from 'react';
import CalendarSettings from "./CalendarSettings/CalendarSettings";
import cl from '../../Styles/Calendar.module.sass'
import "../../libs/dateLib";
import {DateLib} from "../../libs/dateLib";

const Calendar = () => {
    const [currentDateList, setCurrentDateList] = useState("today")
    let Date = new DateLib()

    const setDataList = (typeList: string) => {
        setCurrentDateList(typeList)
    }

    console.log(Date.fullDayShowings)

    return (
        <div className={cl.root}>
             <main>
                 <header>
                     <div className={cl.header__arrow}><i className="fa-solid fa-angle-left"></i></div>
                     <div className={cl.header__arrow}><i className="fa-solid fa-angle-right"></i></div>
                     <div className={cl.header__month}>{Date.currentMonth} 2022</div>
                     <div className={cl.header__properties}>
                         <ul>
                             <li className={`${currentDateList == "today" ? cl.active : null}`} onClick={()=>setDataList("today")}>Сегодня</li>
                             <li className={`${currentDateList == "week" ? cl.active : null}`} onClick={()=>setDataList("week")}>Неделя</li>
                             <li className={`${currentDateList == "month" ? cl.active : null}`} onClick={()=>setDataList("month")}>Месяц</li>
                             <li className={`${currentDateList == "list" ? cl.active : null}`} onClick={()=>setDataList("list")}>Список</li>
                         </ul>
                     </div>
                 </header>
                 <section className = {cl.calendar__table}>
                     <div className ={cl.calendar__table_headings}>
                         <ul>
                             <li>Пн</li>
                             <li>Вт</li>
                             <li>Ср</li>
                             <li>Чт</li>
                             <li>Пт</li>
                             <li>Сб</li>
                             <li>Вс</li>
                         </ul>
                     </div>
                     <div className ={cl.calendar__table_days}>
                         {Date.fullDayShowings.map(el =>
                             <div>{el}</div>
                         )}
                     </div>
                 </section>
             </main>
            <CalendarSettings />
        </div>
    );
};

export default Calendar;
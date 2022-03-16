import React, {useEffect, useState } from 'react';
import CalendarSettings from "./CalendarSettings/CalendarSettings";
import cl from '../../Styles/Calendar.module.sass'
import  "../../libs/dateLib";
import { callCalendar, turnNextMonth, turnPrevMonth } from '../../libs/dateLib';

const Calendar = () => {

    const [currentDateList, setCurrentDateList] = useState("today")
    const [days, setDays] = useState([1])
    const [month, setMonth] = useState(null)


    useEffect(() => {
        setDays(callCalendar().days)
        setMonth(callCalendar().month)
    }, [])

    const prevMonth = () => {
        let {days, month} = turnPrevMonth()
        setDays(days)
        setMonth(month)
    }

    const nextMonth = () => {
        let {days, month} = turnNextMonth()
        setDays(days)
        setMonth(month)
    }

    console.log(days, month)


    const setDataList = (typeList: string) => {
        setCurrentDateList(typeList)
    }

    return (
        <div className={cl.root}>
             <main>
                 <header>
                     <div className={cl.header__arrow} onClick={() => prevMonth()}><i className="fa-solid fa-angle-left"></i></div>
                     <div className={cl.header__arrow} onClick={() => nextMonth()}><i className="fa-solid fa-angle-right"></i></div>
                     <div className={cl.header__month}>{month} 2022</div>
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
                         {days?.map((el: number, index: number) =>
                             <div key={Math.random()} className={cl.calendar__table_item}>
                                 <div className={cl.calendar__tableItem_date}>{el}</div>
                             </div>
                         )}
                     </div>
                 </section>
             </main>
            <CalendarSettings days={days} month={month} prevMonth={prevMonth} nextMonth={nextMonth}/>
        </div>
    );
};

export default Calendar;


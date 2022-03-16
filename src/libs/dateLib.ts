export const date = new Date()

export const callCalendar = (): any => {
    let monthsArray = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    let prevMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
    let currentMonthLastDayIndex = new Date(date.getFullYear(), date.getMonth()+ 1, 0).getDay()
    let nextMonthFirstDays = 7 - currentMonthLastDayIndex


    let getLastDay = () => {
        let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
        return lastDay
    }

    let firstDayIndex = () => {
        date.setDate(1)
        const index = date.getDay()
        switch(index){
            case 0:
                return 6
            case 1:
                return 0
            case 2:
                return 1
            case 3:
                return 2
            case 4:
                return 3
            case 5:
                return 4
            case 6:
                return 5
        }
        return index
    }

    let currentMonth = () => {
        return monthsArray[date.getMonth()]
    }

    let monthDays = () => {
        let days = []
        for (let i = 1; i <= getLastDay(); i++){
            days.push(i)
        }
        return days
    }

    let daysBeforeMonth = () => {
        let days = []
        for (let i = firstDayIndex(); i > 0; i--){
            days.push(prevMonthLastDay - i + 1)
        }
        return days
    }

    let daysAfterMonth = () => {
        let days = []
        for(let i = 1; i <= nextMonthFirstDays; i++){
            days.push(i)
        }
        return days
    }

    let fullDayShowings = () => {
        let days = [...daysBeforeMonth(), ...monthDays(), ...daysAfterMonth()]
        return days
    }


    return {days: fullDayShowings(), month: currentMonth()}
}

    export let turnNextMonth = () => {
        date.setMonth(date.getMonth() + 1)
        return callCalendar()
    }

    export let turnPrevMonth = () => {
        date.setMonth(date.getMonth() - 1)
        return callCalendar()
    }

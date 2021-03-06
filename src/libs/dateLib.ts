export const date = new Date()

export const callCalendar = (): any => {
    let monthsArray = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    let prevMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
    let currentMonthLastDayIndex = new Date(date.getFullYear(), date.getMonth()+ 1, 0).getDay()
    let nextMonthFirstDays = 7 - currentMonthLastDayIndex



    let setCleaningDates = (randomNumber: number) => {
        if(randomNumber >= 0.6){
            return [
                'Пр.науки, д.26, кв.24',
                'Кудрово, ул. Ленинградская, д.46'
            ]
        }
        if(randomNumber > 0.4 && randomNumber < 0.6){
            return [
                'ул. Некрасова, д. 60'
            ]
        }
        if(randomNumber <= 0.4){
            return null
        }
    }

    let setRemakeDates = (randomNumber: number) => {
        if(randomNumber > 0.6 && randomNumber <= 0.9){
            return [
                'ул. Жукова, д. 3А, кв. 191'
            ]
        }
        if(randomNumber > 0.2 && randomNumber <= 0.6){
            return null
        }
        if(randomNumber <= 0.2){
            return [
                'Петровский проспект, д. 22, кв. 17',
                'Авангардская ул. д.26, кв.1'
            ]
        }
    }

    let setFreeTime = (randomNumber: number) => {
        if(setCleaningDates(randomNumber) || setRemakeDates(randomNumber)){
            return false
        } else {
            return true
        }
    }

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
            let niceRandom = Math.random()
            days.push({date: i, cleaningDates:setCleaningDates(niceRandom), remakeDates: setRemakeDates(niceRandom), freeDate: setFreeTime(niceRandom)})
        }
        return days
    }

    let daysBeforeMonth = () => {
        let days = []
        for (let i = firstDayIndex(); i > 0; i--){
            let niceRandom = Math.random()
            days.push({date: prevMonthLastDay - i + 1, cleaningDates:setCleaningDates(niceRandom), remakeDates: setRemakeDates(niceRandom), freeDate: setFreeTime(niceRandom)})
        }
        return days
    }

    let daysAfterMonth = () => {
        let niceRandom = Math.random()
        let days = []
        for(let i = 1; i <= nextMonthFirstDays; i++){
            days.push({date: i, cleaningDates:setCleaningDates(niceRandom), remakeDates: setRemakeDates(niceRandom), freeDate: setFreeTime(niceRandom)})
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

// export function dateLib(){
//     let date = new Date()
//     const monthsArray = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
//     let getLastDay = () => {
//         let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
//         return lastDay
//     }
// }

export class DateLib {
    _date = new Date()
    monthsArray = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    prevMonthLastDay = new Date(this._date.getFullYear(), this._date.getMonth(), 0).getDate()
    currentMonthLastDayIndex = new Date(this._date.getFullYear(), this._date.getMonth()+ 1, 0).getDay()
    nextMonthFirstDays = 7 - this.currentMonthLastDayIndex

    get lastDay() {
        let lastDay = new Date(this._date.getFullYear(), this._date.getMonth() + 1, 0).getDate()
        return lastDay
    }

    get firstDayIndex() {
        this._date.setDate(1)
        const index = this._date.getDay()
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

    get currentMonth(): string{
        return this.monthsArray[this._date.getMonth()]
    }

    get monthDays() {
        let days = []
        for (let i = 1; i <= this.lastDay; i++){
            days.push(i)
        }
        return days
    }

    get daysBeforeMonth() {
        let days = []
        for (let i = this.firstDayIndex; i > 0; i--){
            days.push(this.prevMonthLastDay - i + 1)
        }
        return days
    }

    get daysAfterMonth() {
        let days = []
        for(let i = 1; i <= this.nextMonthFirstDays; i++){
            days.push(i)
        }
        return days
    }

    get fullDayShowings() {
        let days = [...this.daysBeforeMonth, ...this.monthDays, ...this.daysAfterMonth]
        return days
    }
}

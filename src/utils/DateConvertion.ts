export const dateToString = (date: Date): string => {

    // Year
    let string = date.getFullYear() + '-'

    // Month
    if(date.getMonth() < 10) {
        string = string + '0' + (date.getMonth() + 1) + '-'
    } else {
        string = string + (date.getMonth() + 1) + '-'
    }

    // Day
    if(date.getDate() < 10) {
        string = string + '0' + date.getDate()
    } else {
        string = string + date.getDate()
    }

    return string
}
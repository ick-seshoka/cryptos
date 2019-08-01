
export const formatDate = ( date ) => {
    const dateObj = new Date(date);
    return dateObj.getDate() + "-" + getMonthShortName(dateObj.getMonth()) + "-" + dateObj.getFullYear();
}

export const formatDateTime = ( date ) => {
    const dateObj = new Date(date);
    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();
    let seconds = dateObj.getSeconds();
    let ampm = '';
    let time = "";

    if ( hours >= 12 ) {
        ampm = 'pm';

    } else {
        ampm = 'am';
    }

    hours = hours % 12;
    if ( hours == 0 ) {
        hours = 12;
    }

    if ( minutes < 10 ) {
        minutes = '0' + minutes;
    }

    time = hours + ':' + minutes + ':' + seconds + ' ' + ampm;

    return formatDate(date) + " @ " + time;
}

export const formatNumber = ( number ) => {
    return Number(Math.round(number+'e2')+'e-2');
}

export const getMonthShortName = ( monthNumber ) => {
    let monthNames = {
        "0": "Jan",
        "1": "Feb",
        "2": "Mar",
        "3": "Apr",
        "4": "May",
        "5": "Jun",
        "6": "Jul",
        "7": "Aug",
        "8": "Sep",
        "9": "Oct",
        "10": "Nov",
        "11": "Dec"
    }

    return monthNames[monthNumber];
}

export const getMonthFullName = ( monthNumber ) => {
    let monthNames = {
        "0": "January",
        "1": "February",
        "2": "March",
        "3": "April",
        "4": "May",
        "5": "June",
        "6": "July",
        "7": "Agust",
        "8": "September",
        "9": "October",
        "10": "November",
        "11": "December"
    }

    return monthNames[monthNumber];
}
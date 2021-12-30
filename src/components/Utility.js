function formatDate(givenDate) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    givenDate = new Date(Date.parse(givenDate));

    return `${months[givenDate.getMonth()]} ${givenDate.getDate()}, ${givenDate.getFullYear()}`
}

function formatDateTime(givenDate) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    givenDate = new Date(Date.parse(givenDate));

    return `${months[givenDate.getMonth()]} ${givenDate.getDate()}, 
    ${givenDate.getFullYear()} at ${to_12hr(givenDate.getHours() + ":" + givenDate.getMinutes())}`
}

function to_12hr(time_in_24hr) {
    let [hrs, mins] = time_in_24hr.split(":")
    hrs = parseInt(hrs);
    mins = parseInt(mins);
    let am_pm = Math.floor(hrs / 12) === 0? 'AM' : 'PM';
    hrs = hrs % 12;
    hrs += 12 * (hrs === 0? 1 : 0);
    return `${hrs}:${mins} ${am_pm}`
}

export {
    formatDate,
    formatDateTime,
}
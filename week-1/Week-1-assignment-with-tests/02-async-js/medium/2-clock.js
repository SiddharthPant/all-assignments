/*
    Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
    clock that shows you the current machine time?

    Can you make it so that it updates every second, and shows time in the following formats - 

    - HH:MM::SS (Eg. 13:45:23)

    - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

let counter = 0;

let date = new Date();

function formatTimeToHHMMSS(date, is12HrClock = false) {
    let hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    if (is12HrClock) {
        let amPm = 'AM';
        if (hours > 12) {
            amPm = 'PM';
            hours = hours - 12;
        }
        return `${hours}:${minutes}:${seconds} ${amPm}`;
    }

    return `${hours}:${minutes}:${seconds}`;
}

setInterval(() => {
    // Increment date by 1 second
    // display date in HH:MM::SS
    date.setSeconds(date.getSeconds() + 1);
    const formattedTime = formatTimeToHHMMSS(date, true);
    console.log(formattedTime);
}, 1000);

// Accepting the timestamp foremat
module.exports = (timestamp) => {
console.log('hello')
console.log("This is timestamp = ", timestamp)
const dateObj = new Date(timestamp);
// const month = dateObj.getMonth();
const month = dateObj.toLocaleString('default', { month: 'long' }); 
const dayOfMonth = dateObj.getDate();

const year = dateObj.getFullYear();
const hour =
    dateObj.getHours() > 12
        ? Math.floor(dateObj.getHours() - 12)
        : dateObj.getHours();

// if hour is 0 (12:00am), change it to 12
if (hour === 0) {
    hour = 12;

}
const minutes = (dateObj.getMinutes() < 10 ? '0' : '') + dateObj.getMinutes();

// set `am` or `pm`
const amPm = dateObj.getHours() >= 12 ? 'pm' : 'am';

const formattedTimeStamp = ` ${month}- ${dayOfMonth}- ${year} at ${hour}:${minutes} ${amPm}`;
console.log(formattedTimeStamp)
return formattedTimeStamp;
};

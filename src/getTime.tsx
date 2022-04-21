import { Interface } from "readline";



interface timeTypes {
    second: Number,
    minute: Number,
    hour: Number,
    day: Number,
    week: Number,
    month: Number,
    year: Number
}


function getTimeLeft(): string {
        const endTime = new Date("Feb 1, 2027 00:00:00");
        const currentTime = new Date();

        let years = Math.abs(endTime.getFullYear() - currentTime.getFullYear());
        let months = Math.abs(endTime.getMonth() - currentTime.getMonth());
        let days = Math.abs(endTime.getDay() - currentTime.getDay());
        let hours = Math.abs(endTime.getHours() - currentTime.getHours());
        let minutes = Math.abs(endTime.getMinutes() - currentTime.getMinutes());
        let seconds = Math.abs(endTime.getSeconds() - currentTime.getSeconds());
        return years + " years " + months + " months " + days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";
}

export default getTimeLeft;
import React from 'react';

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
        const endTime = new Date("Feb 1, 2027");
        let startTime = new Date();

        let years = Math.abs(endTime.getFullYear() - startTime.getFullYear());
        let months = Math.abs(endTime.getMonth() - startTime.getMonth());
        let days = Math.abs(endTime.getDay() - startTime.getDay());
        let hours = Math.abs(endTime.getHours() - startTime.getHours());
        let minutes = Math.abs(endTime.getMinutes() - startTime.getMinutes());
        let seconds = Math.abs(endTime.getSeconds() - startTime.getSeconds());
        return years + " years " + months + " months " + days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";
}


function Timer(props: any): JSX.Element {
    let getTime = setInterval(function() {getTimeLeft()});
    return (
        <p className="text-montana-100">{getTimeLeft()}</p>
    );
}

export default Timer;

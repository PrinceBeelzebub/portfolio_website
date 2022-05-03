/*
This program is responsible for the countdown timer.
*/

function calcuateTime(): void {
    const endDate: Date = new Date("Feburary 1st, 2027");
    const currentDate: Date = new Date();

    let days: number = endDate.getDay() - currentDate.getDay();
    let hours: number = endDate.getHours() - currentDate.getHours();
    let minutes: number = endDate.getMinutes() - currentDate.getMinutes();
    let seconds: number = endDate.getSeconds() - currentDate.getSeconds();
}



setInterval(
    (): void => {
        calcuateTime()
    }
    , 1000)

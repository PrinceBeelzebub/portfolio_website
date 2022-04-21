import React from 'react';


function Countdown(props: any): JSX.Element {
    return (
        <p className="text-montana-100">{props.timeLeft}</p>
    );
}


export default Countdown;


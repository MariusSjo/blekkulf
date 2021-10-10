import React, {  useState } from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";



export default function Cover() {
    const [time, setTime] = useState((new Date("Sun Oct 10 2021 24:00:00 GMT+0200") - Date.now())/
    100000
)

    return (
        
        <>
            <img src="/img/invitation.png" alt="something"></img>
            <h1 id="introtekst">15:00</h1>
        </>
    )
}

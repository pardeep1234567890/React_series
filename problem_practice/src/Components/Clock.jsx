// Show the current time.
// Update the time every second using setInterval.
// Clean up the interval when the component unmounts.

import React, { useEffect, useState } from 'react'

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(
        () => {
            const timer = setInterval(() => {
                setTime(new Date().toLocaleTimeString())
            }, 1000)
            return () => clearInterval(timer);
        }, []
    );

    return (
        <div>
            <h1>⏰ Current Time</h1>
            <h2>{time}</h2>
        </div>
    )
}

export default Clock


// i understand now what is the difference when normally update and using useEffect update ,
//  the diiference is that when the page loads only then the changes apper not directly when apper on page 
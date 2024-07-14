import { useEffect, useState } from "react"

export default function Timer(){
    const [isManual, setIsManual] = useState(false);
    const [time, setTime] = useState(() => {
        const currentSeconds = new Date().getSeconds();
        return currentSeconds;
    });

    useEffect(() => {
        if(!isManual){
        setTimeout(() => {
            setIsManual(false);
            setTime(prevTime => prevTime + 1);
        }, 1000);
    }
    }, [time, isManual])

    const addSecondsHandler = () => {
        setIsManual(true);
        setTime(prevTime => prevTime + 10);
    };
    return (
        <>
        <h1>Timer</h1>
        <div>{time}</div>
        <button onClick={addSecondsHandler}>Add Seconds</button>
        </>
    )
}
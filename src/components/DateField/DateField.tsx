import React, {useEffect, useState} from 'react';
import st from './DateField.module.css'

const DateField:React.FC = () => {
    const [clock, setClock] = useState<string>(new Date().toLocaleTimeString());

    useEffect(()=> {
        const clock = setInterval(
            ():void => setClock(new Date().toLocaleTimeString()),
            1000
        );
        return ()=> {
            clearInterval(clock);
        }
    }, []);

    return <div className={st.wrapper}>
        <p className={st.text}>{new Date().toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        })}</p>
        <span className={st.clock}>{clock}</span>
    </div>
}

export default DateField
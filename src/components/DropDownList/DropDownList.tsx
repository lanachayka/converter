import React from "react";
import st from "./DropDownList.module.css"

interface DropDownListProps {
    values: string[];
    onSelectChange: (value: string) => void;
}

const DropDownList: React.FC<DropDownListProps> = (props) => {

    const changeValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.onSelectChange(event.target.value);
    }
    return <select className={st.select} onChange={changeValue}>
        {props.values.map((value, index)=>(
            <option key={index} value={value}>{value}</option>))}
    </select>
}

export default DropDownList;
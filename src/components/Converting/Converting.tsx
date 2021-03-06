import React, { useState } from "react";
import st from "./Converting.module.css";
import DropDownList from "../DropDownList/DropDownList";

interface ConvertingProps {
  units: string[];
  convertingMethod: (from: string, to: string, value: string) => string;
}

const Converting: React.FC<ConvertingProps> = (props) => {
  const [convertFrom, setConvertFrom] = useState<string>(props.units[0]);
  const [convertTo, setConvertTo] = useState<string>(props.units[0]);
  const [enteredValue, setEnteredValue] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const convert = (): void => {
    setResult(props.convertingMethod(convertFrom, convertTo, enteredValue));
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredValue(event.target.value);
  };

  return (
    <div className={st.wrapperBackGr}>
      <div className={st.wrapper}>
        <div className={st.select}>
          <div className={st.inputBlock}>
            <input
              placeholder="Enter a value"
              className={st.input}
              onChange={onInputChange}
            />
            <DropDownList
              onSelectChange={setConvertFrom}
              values={props.units}
            />
          </div>
          <p className={st.equal}>=</p>
          <div className={st.inputBlock}>
            <input className={st.input} defaultValue={result} />
            <DropDownList onSelectChange={setConvertTo} values={props.units} />
          </div>
        </div>
        <button className={st.btn} onClick={convert}>
          Сonvert
        </button>
      </div>
    </div>
  );
};

export default Converting;

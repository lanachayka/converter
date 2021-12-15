import React, {useState} from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import DateField from "./components/DateField/DateField";
import Converting from "./components/Converting/Converting";
import {convertLength, lengthValues} from "./functions/lengthFunctions";
import {convertWeight, weightValues} from "./functions/weightFunctions";
import {convertTemperature, temperatureValues} from "./functions/temperatureFunctions";

const App:React.FC = () => {

  const types = ['length', 'weight', 'temperature'];
  const [currentType, setCurrentType] = useState<string>('length');

  return (
    <div className="App">
            <DateField />
            <Menu types={types} setCurrentType={setCurrentType} active={currentType}/>
            {currentType === 'length' &&
                <Converting units={lengthValues} convertingMethod={convertLength} />}
            {currentType === 'weight' &&
                <Converting units={weightValues} convertingMethod={convertWeight} />}
            {currentType === 'temperature' &&
                <Converting units={temperatureValues} convertingMethod={convertTemperature} />}
    </div>
  );
}

export default App;

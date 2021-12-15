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
            <Converting units={currentType === 'length'
                            ? lengthValues : currentType ==='weight'
                            ? weightValues : temperatureValues}
                        convertingMethod={currentType === 'length'
                            ? convertLength : currentType ==='weight'
                            ? convertWeight : convertTemperature}
            />
    </div>
  );
}

export default App;

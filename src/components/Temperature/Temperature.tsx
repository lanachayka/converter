import React from 'react';
import Converting from '../Converting/Converting';
import {temperatureValues, convertTemperature} from '../../functions/temperatureFunctions';

const Temperature: React.FC = () => {
    return <Converting units={temperatureValues} convertingMethod={convertTemperature} />
}

export default Temperature;
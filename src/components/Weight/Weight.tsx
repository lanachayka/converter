import React from 'react';
import Converting from '../Converting/Converting';
import {weightValues, convertWeight} from '../../functions/weightFunctions'

const Weight: React.FC = () => {
    return <Converting units={weightValues} convertingMethod={convertWeight} />
}

export default Weight;
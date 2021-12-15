import React from 'react';
import {convertLength, lengthValues} from '../../functions/lengthFunctions';
import Converting from '../Converting/Converting';

const Length: React.FC = () => {
    return (<Converting units={lengthValues} convertingMethod={convertLength}/>)
}

export default Length;
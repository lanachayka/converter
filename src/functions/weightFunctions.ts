const fromKilograms = (type:string, value: string):string => {
    const kg = parseInt(value);
    switch (type) {
        case 'stones' :
            return ((kg*0.1574).toFixed(2)).toString();
        case 'pounds' :
            return ((kg*2.2046).toFixed(2)).toString();
        case 'grams':
            return (kg*1000).toString();
        default: return value;
    }
}

const fromGrams = (type:string, value: string):string => {
    const g = parseInt(value);
    switch (type) {
        case 'stones' :
            return ((g*0.00015747).toFixed(4)).toString();
        case 'pounds' :
            return ((g*0.0022046).toFixed(4)).toString();
        case 'kilograms':
            return ((g/1000).toFixed(4)).toString();
        default: return value;
    }
}

const fromPounds = (type:string, value: string):string => {
    const p = parseInt(value);
    switch (type) {
        case 'stones' :
            return ((p*0.0071429).toFixed(4)).toString();
        case 'grams' :
            return ((p/0.0022046).toFixed(4)).toString();
        case 'kilograms':
            return ((p/2.2046).toFixed(2)).toString();
        default: return value;
    }
}

const fromStones= (type:string, value: string):string => {
    const s = parseInt(value);
    switch (type) {
        case 'pounds' :
            return (s*14).toString();
        case 'grams' :
            return ((s/0.00015747).toFixed(4)).toString();
        case 'kilograms':
            return ((s/0.15747).toFixed(2)).toString();
        default: return value;
    }
}

export const convertWeight = (from: string, to: string, value: string):string => {
    switch (from) {
        case 'kilograms' :
            return fromKilograms(to, value);
        case 'grams' :
            return fromGrams(to, value);
        case 'pounds' :
            return fromPounds(to, value);
        case 'stones' :
            return fromStones(to, value);
        default: return value;
    }
}

export const weightValues: string[] = ['kilograms', 'grams', 'pounds', 'stones' ];
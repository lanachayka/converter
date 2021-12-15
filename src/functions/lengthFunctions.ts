const fromMeters = (type:string, value:string) => {
    const m = parseInt(value);
    switch (type) {
        case 'kilometer' :
            return (m/1000).toString();
        case 'feet' :
            return ((m*3.2808).toFixed(2)).toString();
        case 'yards':
            return ((m*1.0936)).toFixed(2).toString();
        case 'miles' :
            return ((m*0.00062137).toFixed(4)).toString();
        default: return value;
    }
}

const fromKilometer = (type:string, value: string) => {
    const km = parseInt(value);
    switch (type) {
        case 'meter' :
            return (km*1000).toString();
        case 'feet' :
            return ((km*3280.8).toFixed(2)).toString();
        case 'yards':
            return ((km*1093.6)).toFixed(2).toString();
        case 'miles' :
            return ((km*0.62137).toFixed(2)).toString();
        default: return value;
    }
}

const fromFeet = (type:string, value: string) => {
    const f = parseInt(value);
    switch (type) {
        case 'meters' :
            return ((f/3.2808).toFixed(2)).toString();
        case 'kilometer' :
            return ((f/3280.8).toFixed(4)).toString();
        case 'yards':
            return ((f*0.33333)).toFixed(2).toString();
        case 'miles' :
            return ((f*0.00018939).toFixed(4)).toString();
        default: return value;
    }
}

const fromYards = (type:string, value: string) => {
    const y = parseInt(value);
    switch (type) {
        case 'meters' :
            return ((y/1.0936).toFixed(2)).toString();
        case 'kilometer' :
            return ((y/1093.6).toFixed(4)).toString();
        case 'feet':
            return (y*3).toString();
        case 'miles' :
            return ((y*0.00056818).toFixed(4)).toString();
        default: return value;
    }
}

const fromMiles = (type:string, value: string) => {
    const mi = parseInt(value);
    switch (type) {
        case 'meters' :
            return ((mi/0.00062137).toFixed(4)).toString();
        case 'kilometer' :
            return ((mi/0.62137).toFixed(4)).toString();
        case 'feet':
            return (mi*5280).toString();
        case 'yards' :
            return (mi*1760).toString();
        default: return value;
    }
}

export const convertLength = (from: string, to: string, value: string) => {
    switch (from) {
        case 'meters' :
            return fromMeters(to, value);
        case 'kilometer' :
            return fromKilometer(to, value);
        case 'feet' :
            return fromFeet(to, value);
        case 'yards' :
            return fromYards(to, value);
        case 'miles' :
            return fromMiles(to, value);
        default: return value;
    }
}


export const lengthValues: string[] = ['meters', 'kilometer', 'feet', 'yards', 'miles' ];
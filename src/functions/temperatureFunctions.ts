const fromFahrenheit = (type:string, value:string) => {
    const f = parseInt(value);
    switch (type) {
        case 'celsius' :
            return (((f-32)/1.8).toFixed(2)).toString();
        case'kelvin':
            return (((f-32)/1.8+273.15).toFixed(2)).toString();
        default : return value;
    }
}

const fromKelvin = (type:string, value:string) => {
    const k = parseInt(value);
    switch (type) {
        case 'celsius' :
            return (k-273.15).toString();
        case'fahrenheit':
            return (((k-273.15)*1.8+32).toFixed(2)).toString();
        default : return value;
    }
}

const fromCelsius = (type:string, value:string) => {
    const c = parseInt(value);
    switch (type) {
        case 'kelvin' :
            return (c+273.15).toString();
        case'fahrenheit':
            return ((c*1.8+32).toFixed(2)).toString();
        default : return value;
    }
}

export const convertTemperature = (from: string, to: string, value: string) => {
    switch (from) {
        case 'fahrenheit' :
            return fromFahrenheit(to, value);
        case 'kelvin' :
            return fromKelvin(to, value);
        case 'celsius' :
            return fromCelsius(to, value);
        default: return value;
    }
}

export const temperatureValues: string[] = ['fahrenheit', 'kelvin', 'celsius' ];

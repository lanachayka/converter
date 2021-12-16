import {convertLength} from "./lengthFunctions";
import {convertWeight} from "./weightFunctions";
import {convertTemperature} from "./temperatureFunctions";

describe('functions test', function (){
    test('length function should return correct value', () => {
        expect(convertLength('meters', 'kilometer', '1000')).toBe("1");
    });
    test('weight function should return correct value', () => {
        expect(convertWeight('grams', 'kilograms', '1000')).toBe("1.0000");
    });
    test('temperature function should return correct value', () => {
        expect(convertTemperature('fahrenheit', 'fahrenheit', '100')).toBe("100");
    });
});
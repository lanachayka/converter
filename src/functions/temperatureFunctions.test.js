import {convertTemperature} from "./temperatureFunctions";

describe('test converting from Fahrenheit', () => {
    test('should return correct value', () => {
        expect(convertTemperature('fahrenheit', 'fahrenheit', '1')). toBe('1');
    });
    test('should return correct value', () => {
        expect(convertTemperature('fahrenheit', 'celsius', '1')). toBe('-17.22');
    });
    test('should return correct value', () => {
        expect(convertTemperature('fahrenheit', 'kelvin', '1')). toBe('255.93');
    });
});

describe('test converting from Kelvin', () => {
    test('should return correct value', () => {
        expect(convertTemperature('kelvin', 'kelvin', '1')). toBe('1');
    });
    test('should return correct value', () => {
        expect(convertTemperature('kelvin', 'celsius', '1')). toBe('-272.15');
    });
    test('should return correct value', () => {
        expect(convertTemperature('kelvin', 'fahrenheit', '1')). toBe('-457.87');
    });
});

describe('test converting from Celsius', () => {
    test('should return correct value', () => {
        expect(convertTemperature('celsius', 'celsius', '1')). toBe('1');
    });
    test('should return correct value', () => {
        expect(convertTemperature('celsius', 'kelvin', '1')). toBe('274.15');
    });
    test('should return correct value', () => {
        expect(convertTemperature('celsius', 'fahrenheit', '1')). toBe('33.80');
    });
});

test('should return value if temperature not correct', () => {
    expect(convertTemperature('', '', '1')).toBe('1');
});
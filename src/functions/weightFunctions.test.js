import {convertWeight} from "./weightFunctions";

describe('test converting from kilograms', () => {
    test('should return correct value', () => {
        expect(convertWeight('kilograms', 'kilograms', '1')).toBe('1');
    });
    test('should return correct value', () => {
        expect(convertWeight('kilograms', 'stones', '1')).toBe('0.16');
    });
    test('should return correct value', () => {
        expect(convertWeight('kilograms', 'pounds', '1')).toBe('2.20');
    });
    test('should return correct value', () => {
        expect(convertWeight('kilograms', 'grams', '1')).toBe('1000');
    });
});

describe('test converting from grams', () => {
    test('should return correct value', () => {
        expect(convertWeight('grams', 'grams', '1')).toBe('1');
    });
    test('should return correct value', () => {
        expect(convertWeight('grams', 'stones', '1')).toBe('0.0002');
    });
    test('should return correct value', () => {
        expect(convertWeight('grams', 'pounds', '1')).toBe('0.0022');
    });
    test('should return correct value', () => {
        expect(convertWeight('grams', 'kilograms', '1')).toBe('0.0010');
    });
});

describe('test converting from pounds', () => {
    test('should return correct value', () => {
        expect(convertWeight('pounds', 'pounds', '1')).toBe('1');
    });
    test('should return correct value', () => {
        expect(convertWeight('pounds', 'stones', '1')).toBe('0.0071');
    });
    test('should return correct value', () => {
        expect(convertWeight('pounds', 'grams', '1')).toBe('453.5970');
    });
    test('should return correct value', () => {
        expect(convertWeight('pounds', 'kilograms', '1')).toBe('0.45');
    });
});

describe('test converting from stones', () => {
    test('should return correct value', () => {
        expect(convertWeight('stones', 'stones', '1')).toBe('1');
    });
    test('should return correct value', () => {
        expect(convertWeight('stones', 'pounds', '1')).toBe('14');
    });
    test('should return correct value', () => {
        expect(convertWeight('stones', 'grams', '1')).toBe('6350.4160');
    });
    test('should return correct value', () => {
        expect(convertWeight('stones', 'kilograms', '1')).toBe('6.35');
    });
});

test('should return value if weight not correct', () => {
    expect(convertWeight('', '', '1')).toBe('1');
});
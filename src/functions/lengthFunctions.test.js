import {convertLength} from "./lengthFunctions";

describe('test converting from meters', () => {
    test('should return correct value', () => {
        expect(convertLength('meters', 'meters', '1')).toBe('1');
    });
    test('should return correct value', () => {
        expect(convertLength('meters', 'kilometer', '1')).toBe('0.001');
    });
    test('should return correct value', () => {
        expect(convertLength('meters', 'feet', '1')).toBe('3.28');
    });
    test('should return correct value', () => {
        expect(convertLength('meters', 'yards', '1')).toBe('1.09');
    });
    test('should return correct value', () => {
        expect(convertLength('meters', 'miles', '1')).toBe('0.0006');
    });
});

describe('test converting from kilometers', () => {
    test('should return correct value', () => {
        expect(convertLength('kilometer', 'kilometer', '1')).toBe('1');
    });
    test('should return correct value', () => {
        expect(convertLength('kilometer', 'meters', '1')).toBe('1000');
    });
    test('should return correct value', () => {
        expect(convertLength('kilometer', 'feet', '1')).toBe('3280.80');
    });
    test('should return correct value', () => {
        expect(convertLength('kilometer', 'yards', '1')).toBe('1093.60');
    });
    test('should return correct value', () => {
        expect(convertLength('kilometer', 'miles', '1')).toBe('0.62');
    });
});

describe('test converting from feet', () => {
    test('should return correct value', () => {
        expect(convertLength('feet', 'feet', '1')).toBe('1');
    });
    test('should return correct value', () => {
        expect(convertLength('feet', 'meters', '1')).toBe('0.30');
    });
    test('should return correct value', () => {
        expect(convertLength('feet', 'kilometer', '1')).toBe('0.0003');
    });
    test('should return correct value', () => {
        expect(convertLength('feet', 'yards', '1')).toBe('0.33');
    });
    test('should return correct value', () => {
        expect(convertLength('feet', 'miles', '1')).toBe('0.0002');
    });
});

describe('test converting from yards', () => {
    test('should return correct value', () => {
        expect(convertLength('yards', 'yards', '1')).toBe('1');
    });
    test('should return correct value', () => {
        expect(convertLength('yards', 'meters', '1')).toBe('0.91');
    });
    test('should return correct value', () => {
        expect(convertLength('yards', 'kilometer', '1')).toBe('0.0009');
    });
    test('should return correct value', () => {
        expect(convertLength('yards', 'feet', '1')).toBe('3');
    });
    test('should return correct value', () => {
        expect(convertLength('yards', 'miles', '1')).toBe('0.0006');
    });
});

describe('test converting from miles', () => {
    test('should return correct value', () => {
        expect(convertLength('miles', 'miles', '1')).toBe('1');
    });
    test('should return correct value', () => {
        expect(convertLength('miles', 'meters', '1')).toBe('1609.3471');
    });
    test('should return correct value', () => {
        expect(convertLength('miles', 'kilometer', '1')).toBe('1.6093');
    });
    test('should return correct value', () => {
        expect(convertLength('miles', 'feet', '1')).toBe('5280');
    });
    test('should return correct value', () => {
        expect(convertLength('miles', 'yards', '1')).toBe('1760');
    });
});

test('should return value if length not correct', () => {
    expect(convertLength('', '', '1')).toBe('1');
});

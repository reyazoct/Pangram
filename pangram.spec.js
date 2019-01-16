import {isPangram} from './pangram';

describe('Pangram', () => {
    test('empty sentence', () => {
        expect(isPangram('')).toBe(false);
    });

    test('Lowercase Pangram', () => {
        expect(isPangram('abcdefghijklmnopqrstuvwxyz')).toBe(true);
    });
});

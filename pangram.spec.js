import {isPangram} from './pangram';

describe('Pangram', () => {
    test('empty sentence', () => {
        expect(isPangram('')).toBe(false);
    });

    test('Lowercase Pangram', () => {
        expect(isPangram('abcdefghijklmnopqrstuvwxyz')).toBe(true);
    });

    test('Lowercase Pangram with whitespaces', () => {
        expect(isPangram('the quick brown fox jumps over the lazy dog')).toBe(true);
    });

    test("Lowercase Pangram with whitespaces and a missing character 'x'", () => {
        expect(isPangram('a quick movement of the enemy will jeopardize five gunboats')).toBe(false);
    });
});

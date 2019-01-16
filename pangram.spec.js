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

    test("Lowercase Pangram with whitespaces and a missing character 'h'", () => {
        expect(isPangram('five boxing wizards jump quickly at it')).toBe(false);
    });

    test('Lowercase Pangram with underscores', () => {
        expect(isPangram('the_quick_brown_fox_jumps_over_the_lazy_dog')).toBe(true);
    });

    test('Pangram with numbers', () => {
        expect(isPangram('7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog')).toBe(false);
    });

    test('Pangram with mixed case and punctuation', () => {
        expect(isPangram('"Five quacking Zephyrs jolt my wax bed."')).toBe(true);
    });
});

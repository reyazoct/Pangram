import {isPangram} from './pangram';

describe('Pangram', () => {
    test('empty sentence', () => {
        expect(isPangram('')).toBe(false);
    });
});

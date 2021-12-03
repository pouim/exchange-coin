import { isEmpty } from 'src/helper/index';

describe('Check that the value is empty', () => {
    test('If the value is `undefined` then the value is empty and will be `True`', () => {
        const value = isEmpty(undefined);
        expect(value).toBe(true);
    });

    test('If the value is `null` then the value is empty and will be `True`', () => {
        const value = isEmpty(null);
        expect(value).toBe(true);
    });

    test('If the value is `""` then the value is empty and will be `True`', () => {
        const value = isEmpty('');
        expect(value).toBe(true);
    });

    test('If value is an `object` then value is not empty and will be `False`', () => {
        const value = isEmpty({ A: 'merry', B: 'sandra' });
        expect(value).toBe(false);
    });

    test('If value is an `number` then value is not empty and will be `False`', () => {
        const value = isEmpty(68498);
        expect(value).toBe(false);
    });
});

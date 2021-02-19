import { getPicture } from './getPicture';

test('test get picture', () => {
    expect(getPicture([])).toBe('');
});

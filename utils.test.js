import { matchMartixFromStyle } from './utils';

test('get Martix From Style', () => {
    const style = {
        transform: 'martix(1, 0, 1, 0, 1, 1)',
    };
    expect(matchMartixFromStyle(style)).not.toBe(undefined);
});

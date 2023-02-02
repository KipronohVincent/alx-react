import * as Utils from './utils';

it('check year', () => {
    expect(Utils.getFullYear()).toEqual(2020);
});

it('check footer copy', () => {
    expect(Utils.getFooterCopy(true)).toEqual('Holberton School');
    expect(Utils.getFooterCopy(false)).toEqual('Holberton School main dashboard');
})

it('check latest notifications', () => {
    expect(Utils.getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
})

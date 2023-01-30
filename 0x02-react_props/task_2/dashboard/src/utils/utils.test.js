import { getFullYear, getFooterCopy, getLatestNotification } from './utils'

test('Check that the function returns the correct year', () => {
    const year = getFullYear();
    expect(year).toEqual(2022)
  });
  
  test('Check that returns the correct string when the argument is true or false', () => {
    let correct = getFooterCopy(true);
    expect(correct).toEqual('Holberton School')
    correct = getFooterCopy(false);
    expect(correct).toEqual('Holberton School main dashboard')
  });
  
  test('Checking the returned string', () => {
    const string = getLatestNotification();
    expect(string).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
  });
jest.mock('./icon3.svg', () => 'icon3');
jest.mock('./icon2.svg', () => 'icon2');

import icon2 from './icon2.svg';
import icon3 from './icon3.svg';
describe('test', () => {
  it('works', () => {
    expect(icon3).toEqual('icon3');
  });
});

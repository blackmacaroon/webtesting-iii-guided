import { savePerson } from './helpers.js'

describe('helpers', () => {
      it('should return newly created person', () => {
            const name = 'Brandon';
            const expected = { id: 'abc123', name }
            const actual = savePerson('Brandon');

            expect(actual).toEqual(expected)
      });
})
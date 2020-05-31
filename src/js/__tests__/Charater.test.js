import Character from '../Character';

test('should create new Magician Character', () => {
  const result = new Character('Merlin', 'Magician');

  expect(result).toEqual({
    name: 'Merlin',
    type: 'Magician',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  });
});
//
// test.each([
//   ['Merlin', 'Magician', {
//     name: 'Merlin',
//     type: 'Magician',
//     level: 1,
//     health: 100,
//     attack: 10,
//     defence: 40,
//   }],
// ])('.createCharacter(%s, %s)', (a, b, expected) => {
//   Character(a, b).toEqual(expected);
// });

test('should show error, invalid name', () => {
  function result() {
    // eslint-disable-next-line no-unused-vars
    const a = new Character('d', 'Magician');
  }
  expect(result).toThrow();
});

test('should show error, invalid name', () => {
  function result() {
    // eslint-disable-next-line no-unused-vars
    const a = new Character('veryveryverylongname', 'Magician');
  }
  expect(result).toThrow();
});

test('should show error, invalid type', () => {
  function result() {
    // eslint-disable-next-line no-unused-vars
    const a = new Character('Konan', 'Varvar');
  }
  expect(result).toThrow();
});

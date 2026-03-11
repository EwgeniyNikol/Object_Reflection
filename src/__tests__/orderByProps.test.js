import orderByProps from '../js/orderByProps';

describe('orderByProps', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  test('должен сортировать согласно порядку и по алфавиту', () => {
    const result = orderByProps(obj, ['name', 'level']);
    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ]);
  });

  test('должен игнорировать несуществующие ключи', () => {
    const result = orderByProps(obj, ['name', 'nonexistent', 'level']);
    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ]);
  });

  test('должен сортировать по алфавиту при пустом sortOrder', () => {
    const result = orderByProps(obj, []);
    expect(result).toEqual([
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ]);
  });

  test('должен игнорировать свойства из прототипа', () => {
    const proto = { protoProp: 'value' };
    const childObj = Object.create(proto);
    childObj.name = 'child';
    childObj.level = 5;

    const result = orderByProps(childObj, ['name']);
    expect(result).toEqual([
      { key: 'name', value: 'child' },
      { key: 'level', value: 5 },
    ]);
  });
});

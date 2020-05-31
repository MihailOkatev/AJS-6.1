import { allowedTypes } from './variables';

export default function Character(name, type) {
  try {
    // eslint-disable-next-line no-unsafe-negation
    if ((!name instanceof String) || (name.length < 2)) {
      throw new Error('Имя персонажа недопустимо');
    }
    if (!allowedTypes.includes(type)) {
      throw new Error('Недопустимый тип персонажа');
    }
  } catch (e) {
    throw Error(e.message());
  }
  this.name = name;
  this.type = type;
  this.level = 1;
  this.health = 100;
  switch (type) {
    case 'Bowman':
      this.attack = 25;
      this.defence = 25;
      break;
    case 'Swordsman':
      this.attack = 40;
      this.defence = 10;
      break;
    case 'Magician':
      this.attack = 10;
      this.defence = 40;
      break;
    case 'Undead':
      this.attack = 25;
      this.defence = 25;
      break;
    case 'Zombie':
      this.attack = 40;
      this.defence = 10;
      break;
    case 'Daemon':
      this.attack = 10;
      this.defence = 40;
      break;
    default:
  }
}

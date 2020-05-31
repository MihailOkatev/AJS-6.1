export default function Character(name, type) {
  try {
    // eslint-disable-next-line no-unsafe-negation
    if ((!name instanceof String) || (name.length < 2 || name.length > 10)) {
      throw new Error('Имя персонажа недопустимо');
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
        throw new Error('недопустимый тип персонажа');
    }
  } catch
  (e) {
    throw Error(e.message());
  }
}

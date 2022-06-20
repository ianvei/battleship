export default class Ship {
  constructor(length, name, coords) {
    this.length = length;
    this.name = name;
    this.sunk = false;
    this.hits = [];
    // this.isVertical = isVertical
    this.coordinates = [coords[0], coords[1]];
  }

  hit() {
    console.log('IM HIT');
    this.hits.push('X');
  }

  isSunk() {
    if (this.length === this.hits.length) {
      return true;
    }
    return false;
  }
}

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
  // if Ship.isVertical or something in the gameboard -  position = [x, y + length]
  // if !Ship.isVertical - position = [x + length, y]
  // we don't actually need to know the position of the hit, we just need to know that a
  //  hit was succesfull, and if the length of hits = positions it is correct
}

import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // eslint-disable-next-line consistent-return
  cloneCar() {
    if (this._color) {
      return new Car();
    }
    return new Car();
  }
}

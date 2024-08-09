export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(str) {
    if (typeof str !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = str;
  }

  get length() {
    return this._length;
  }

  set length(num) {
    if (typeof num !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = num;
  }

  get students() {
    return this._students;
  }

  set students(arr) {
    if (!Array.isArray(arr)) {
      throw new TypeError('Students must be an array');
    }
    this._students = arr;
  }
}

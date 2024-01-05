export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.isString(name);
    this._length = this.isNumber(length);
    this._students = this.isStudentArray(students);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.isString(newName);
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this.isNumber(newLength);
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this.isStudentArray(newStudents);
  }

  isString(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return value;
  }

  isNumber(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError('Length must be a number');
    }
    return value;
  }

  isStudentArray(value) {
    if (!Array.isArray(value) || !value.every((studentName) => this.isString(studentName))) {
      throw new TypeError('Students must be an array of strings');
    }
    return value;
  }
}

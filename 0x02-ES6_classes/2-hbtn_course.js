function isString(value, varName) {
  if (typeof value !== 'string') {
    throw new TypeError(`${varName} must be a string`);
  }
  return value;
}

function isNumber(value, varName) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw new TypeError(`${varName} must be a number`);
  }
  return value;
}

function isStudentArray(value) {
  if (!Array.isArray(value) || !value.every((studentName) => typeof studentName === 'string')) {
    throw new TypeError('Students must be an array of strings');
  }
  return value;
}
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = isString(name, 'Name');
    this._length = isNumber(length, 'Length');
    this._students = isStudentArray(students);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = isString(newName, 'Name');
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = isNumber(newLength, 'Length');
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = isStudentArray(newStudents);
  }
}

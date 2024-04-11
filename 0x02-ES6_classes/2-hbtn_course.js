export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getters and Setters for name
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  // Getters and Setters for length
  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  // Getters and Setters for students
  get students() {
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students) || !students.every((item) => typeof item === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}

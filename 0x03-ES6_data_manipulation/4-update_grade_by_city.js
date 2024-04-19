/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = newGrades.filter((grade) => grade.studentId === student.id);
      student.grade = studentGrade.length > 0 ? studentGrade[0].grade : 'N/A';
      return student;
    });
}

export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const searchGrade = newGrades.find((grade) => grade.studentId === student.id);

      if (searchGrade) {
        return { ...student, grade: searchGrade.grade };
      }
      return { ...student, grade: 'N/A' };
    });
}

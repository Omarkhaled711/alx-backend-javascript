export default function getStudentIdsSum(students) {
  return students.reduce((summation, student) => summation + student.id, 0);
}

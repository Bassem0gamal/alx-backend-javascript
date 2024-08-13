export default function updateStudentGradeByCity(array, city, newGrades) {
  return array.filter((student) => student.location === city).map((student) => {
    const gradeId = newGrades.find((grade) => grade.studentId === student.id);
    let grade;
    if (gradeId) {
      grade = gradeId.grade;
    } else {
      grade = 'N/A';
    }
    return { ...student, grade };
  });
}

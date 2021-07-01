function gradingStudents(grades) {
  const roundedGrades = grades.map((grade) => {
    return grade < 38 || grade % 5 < 3 ? grade : grade + (5 - (grade % 5))
  });
  return roundedGrades;
}

console.log(gradingStudents([68, 55, 39, 67, 93, 27]));

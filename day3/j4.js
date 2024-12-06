function categorizeStudent(marks) {
    if (marks >= 90 && marks <= 100) {
      return "A+";
    } else if (marks >= 80 && marks < 90) {
      return "A";
    } else if (marks >= 70 && marks < 80) {
      return "B";
    } else if (marks >= 60 && marks < 70) {
      return "C";
    } else if (marks >= 50 && marks < 60) {
      return "D";
    } else if (marks >= 0 && marks < 50) { // Added condition for marks below 50 and greater than or equal to 0.
      return "F";
    } else {
      return "Invalid marks"; // Handle cases where marks are outside the valid range (0-100)
    }
  }
  
  
  // Example usage:
  let studentMarks = 95;
  let grade = categorizeStudent(studentMarks);
  console.log(grade); // Output: A+
  
  studentMarks = 82;
  grade = categorizeStudent(studentMarks);
  console.log(grade); // Output: A
  
  studentMarks = 75;
  grade = categorizeStudent(studentMarks);
  console.log(grade); // Output: B
  
  studentMarks = 68;
  grade = categorizeStudent(studentMarks);
  console.log(grade); // Output: C
  
  studentMarks = 52;
  grade = categorizeStudent(studentMarks);
  console.log(grade); // Output: D
  
  studentMarks = 30;
  grade = categorizeStudent(studentMarks);
  console.log(grade); // Output: F
  
  studentMarks = -10; // Invalid input
  grade = categorizeStudent(studentMarks);
  console.log(grade); // Output: Invalid marks
  
  studentMarks = 110; // Invalid input
  grade = categorizeStudent(studentMarks);
  console.log(grade); // Output: Invalid marks
  
  
function isEligibleForExam(attendancePercentage) {
    if (attendancePercentage < 80) {
      return "Not eligible";
    } else {
      return "Eligible";
    }
  }
  
  // Example usage:
  let attendance = 75;
  let eligibility = isEligibleForExam(attendance);
  console.log(eligibility); // Output: Not eligible
  
  attendance = 85;
  eligibility = isEligibleForExam(attendance);
  console.log(eligibility); // Output: Eligible
  
  
  attendance = 80;
  eligibility = isEligibleForExam(attendance);
  console.log(eligibility); // Output: Eligible
  
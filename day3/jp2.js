function getStringLength(str) {
    let count = 0;
    while (str[count] !== undefined) {
      count++;
    }
    return count;
  }
  
  const myString = "VAMSHI";
  const length = getStringLength(myString);
  console.log(length); // Output: 6
  
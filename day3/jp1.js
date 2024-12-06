function getMiddleLetter(str) {
    const len = str.length;
    const middleIndex = Math.floor(len / 2);
  
    if (len % 2 === 0) {
      // Even length, return two middle characters
      return str.substring(middleIndex - 1, middleIndex + 1);
    } else {
      // Odd length, return the single middle character
      return str[middleIndex];
    }
  }
  
  const word = "BOSCO";
  const middleLetter = getMiddleLetter(word);
  console.log(middleLetter); // Output: S
  
  


  
  
  
  
  
  
  
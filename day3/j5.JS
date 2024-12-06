// Loop through the first 100 natural numbers
for (let i = 1; i <= 100; i++) {
    // Check if the number is a multiple of 2
    if (i % 2 === 0) {
      // Multiply the number by 5
      let multipliedBy5 = i * 5;
      
      // Loop through the first 100 natural numbers again
      for (let j = 1; j <= 100; j++) {
        // Check if the number is a multiple of 3
        if (j % 3 === 0) {
          // Divide the number by 3
          let dividedBy3 = j / 3;
          
          // Check if the multiplied and divided numbers are equal
          if (multipliedBy5 === dividedBy3) {
            console.log(`Common number: ${multipliedBy5}`);
          }
        }
      }
    }
  }

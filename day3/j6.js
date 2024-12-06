function printMultiples() {
    const numbers = [];
  
    let num = 0; 
  
    
    for (let i = 0; i < 5; i++) {
      num = findNextMultiple(num, 2);
      numbers.push(num);
    }
  
   
    for (let i = 0; i < 5; i++) {
      num = findNextMultiple(num, 5);
      numbers.push(num);
    }
  
    for (let i = 0; i < 5; i++) {
      num = findNextMultiple(num, 7);
      numbers.push(num);
    }
  
    
    for (let i = 0; i < 5; i++) {
      num = findNextMultiple(num, 10);
      numbers.push(num);
    }
      
    console.log(numbers);
  }
  
  
  function findNextMultiple(num, multipleOf) {
      do {
          num++;
      } while (num % multipleOf !== 0);
      return num;
  }
  
  printMultiples();
  
  
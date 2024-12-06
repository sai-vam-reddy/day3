 {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (let i = 0; i < alphabet.length; i++) {
    if ((i + 1) % 2 !== 0) { 
      result += alphabet[i];
    }
  }

  console.log(result);
}



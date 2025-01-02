function indexOfIgnoreCase(s1, s2) {
  // If the substring is empty, return 0 as the first occurrence is at index 0
  if (s2 === '') return 0;

  // Convert both strings to lowercase for case-insensitive comparison
  const lowerS1 = s1.toLowerCase();
  const lowerS2 = s2.toLowerCase();

  // Find the index of the first occurrence of the substring in the main string
  return lowerS1.indexOf(lowerS2);
}

// Do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));


function canConstruct(ransomNote, magazine) {
  const magazineLetterCount = countLetters(magazine);
  const ransomNoteLetterCount = countLetters(ransomNote);
  const results = [];
  for (letter in ransomNoteLetterCount) {
    results.push(
      !!(
        magazineLetterCount[letter] &&
        magazineLetterCount[letter] >= ransomNoteLetterCount[letter]
      )
    );
  }
  return results.every((entry) => entry);
}

const countLetters = (string) => {
  const strArray = string.split("");
  const letterCount = {};

  for (letter of strArray) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};

console.log(canConstruct("aab", "ab"));


// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
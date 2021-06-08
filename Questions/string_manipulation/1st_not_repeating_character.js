// loop through str
// store cur char
// indexOf finds the first occurance of a element in a str or array
// if char exists in the string and starting from one idx to the right doesnt appear 
// then that char is the 1st not repeating char; return that char
// otherwise every char repeats; return "_"

function firstNotRepeatingCharacter(s) {
    for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (s.indexOf(char) == i && s.indexOf(char, i + 1) == -1) {
        return char;
      }
    }
    return "_";
}

// time - O(n)
//space - O(1)
  
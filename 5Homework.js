// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum(a, b){
  return a + b;
}



// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg(a, b, c){
  return (a + b + c)/3;
}


// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength(a){
  return a.length;
}


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

function greaterThan(a, b){
  return b > a;
}


// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function great(a){
  return "Hello, " + a + "!";
}


// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

function madlib(a, b, c, d){
  return a + " likes to " + b + " in the " + c " with " + d + ".";
}

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a, b){
    if(a > b){
      return a;
    }
    return b;
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
    if(a >= b && a >= c){
      return a;
    } else if(b >= a && b >= c){
      return b;
    }
    else return c;
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
  if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ||
  char === "A" || char === "E" || char === "I" || char === "O" || char === "U"){
    return true;
  }
  return false;
}

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
  var returnString = "";
    for(count = 0; count < phrase.length; count++){
      if(isVowel(phrase[count]) || phrase[count] === " "){
        returnString += phrase[count];
      } else { returnString = returnString + phrase[count] + "o" + phrase[count]}
    }
  return returnString;
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(input){
    var result = [];
    for(count = 0; count < input.length; count++){
      result.push(input[count])
    }
    result.reverse();
    return result.join("");
}

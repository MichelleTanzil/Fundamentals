// Max, min, and average of an array
function maxMinAvg(arr) {
  var min = arr[0];
  var max = arr[0];
  var sum = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (min < arr[i]) {
      min = arr[i];
    } else if (max > arr[i]) {
      max = arr[i];
    }
    sum += arr[i];
  }
  var avg = sum / arr.length;
  return (
    "The minimum is " +
    min +
    ", the maximum is " +
    max +
    ", and the average is " +
    avg +
    "."
  );
}
console.log(maxMinAvg([1, -2, 9, 4]));

// Fizz Buzz
function fizzBuzz(n) {
  if (isNaN(n)) {
    return "Parameter must be a positive number";
  } else {
    var newStr = "1, 2";
    for (var i = 3; i < n; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        newStr += ", FizzBuzz";
      } else if (i % 3 == 0) {
        newStr += ", Fizz";
      } else if (i % 5 == 0) {
        newStr += ", Buzz";
      } else {
        newStr = newStr + ", " + i.toString();
      }
    }
    if (n % 3 == 0 && n % 5 == 0) {
      newStr += ",and FizzBuzz";
    } else if (n % 3 == 0) {
      newStr += ",and Fizz";
    } else if (n % 5 == 0) {
      newStr += ",and Buzz";
    } else {
      newStr = newStr + ", and " + n.toString();
    }
  }
  return newStr;
}
console.log(fizzBuzz("fifteen"));
console.log(fizzBuzz(15));

//Braces Valid
function bracesValid(str) {
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "(" || (str[i] === "{") | (str[i] === "[")) {
      arr.push(str[i]);
    } else {
      if (arr.length === 0) {
        return false;
      }
      var lastValue = arr[arr.length - 1];
      if (
        (str[i] === ")" && lastValue === "(") ||
        (str[i] === "}" && lastValue === "{") ||
        (str[i] === "]" && lastValue === "[")
      ) {
        arr.pop();
      } else {
        break;
      }
    }
  }
  return arr.length === 0;
}
console.log(bracesValid("{{()}}[]"));
console.log(bracesValid("{(})"));

// Bubble Sort
function bubbleSort(arr) {
  if (arr.length == 1) return arr;
  for (var i = 0; i < arr.length; i++) {
    let swapped = false;
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
      if (!swapped) {
        return arr;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([10, 2, 8, 12, 1, 15, 7]));

// Big O Notation
// #1
function printArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// O(n)

// #2
function findNth(arr, n) {
  console.log(arr[n]);
}
// O(1)

// #3
function halving(n) {
  var count = 0;
  while (n > 1) {
    n = n / 2;
    count++;
  }
  return count;
}
// O(n)

// #4
function identityMatrix(n) {
  var matrix = [];
  for (var i = 0; i < n; i++) {
    var row = [];
    for (var j = 0; j < n; j++) {
      if (j == i) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    matrix.push(row);
  }
  return matrix;
}
// O(n2)

// Coin Change
// Given a number of US cents, return the optimal configuration (meaning the largest denominations possible) of coins in an object. Use dollars, quarters, dimes, nickels, and pennies.
function coinChange(n) {
  if (typeof n === "object") {
    var amt = n["dollars"] * 100 + n["dimes"] * 10 + n["pennies"];
  } else {
    var amt = n;
  }
  let dollars = 0;
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

  pennies = amt % 100;
  dollars = (amt - pennies) / 100;

  temp = pennies;
  pennies = pennies % 25;
  quarters = (temp - pennies) / 25;

  temp = pennies;
  pennies = pennies % 10;
  dimes = (temp - pennies) / 10;

  temp = pennies;
  pennies = pennies % 5;
  nickels = (temp - pennies) / 5;

  var object = {
    dollars: dollars,
    quarters: quarters,
    dimes: dimes,
    nickels: nickels,
    pennies: pennies
  };
  return object;
}
console.log(coinChange(312));
console.log(coinChange(78));
console.log(coinChange({ dollars: 2, dimes: 15, pennies: 5 }));

// User languages and interests
// Write a function called userLanguages that accepts an array of users, such as the one shown above. Return a string that lists all the users by first name and last name and the languages that each user knows. Make the string as nicely formatted as possible so that it is easy to read.

// Input
users = [
  {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
      music: ["guitar", "flute"],
      dance: ["tap", "salsa"],
      television: ["Black Mirror", "Stranger Things"]
    }
  },
  {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
      food: ["honey", "honeycomb"],
      flowers: ["honeysuckle"],
      mysteries: ["Heffalumps"]
    }
  },
  {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
      space: ["stars", "planets", "improbability"],
      home: ["tea", "yellow bulldozers"]
    }
  }
];

function userLanguages(users) {
  let str = "";
  for (var i = 0; i < users.length; i++) {
    str += users[i].fname + " " + users[i].lname + " knows ";
    for (var j = 0; j < users[i]["languages"].length; j++) {
      if (j == users[i]["languages"].length - 1) {
        str += "and " + users[i]["languages"][j];
      } else {
        str += users[i]["languages"][j] + ", ";
      }
    }
    str += ". \n" + users[i].fname + " is also interested in ";
    for (var key in users[i]["interests"]) {
      str += users[i]["interests"][key] + ", ";
    }
    str += ". \n";
  }
  return str;
}
console.log(userLanguages(users));

// Binary Search
// Given an array of sorted numbers and a value (also a number), return whether the array contains that value. Return the index position of the value if it exists and -1 if it does not exist.

// Do not sequentially iterate through the array. Take advantage of the fact that the array is sorted and use a 'divide and conquer' technique. Very similar to when we are searching for a word in a dictionary (the book kind) we may:

// Start our search in the center and determine whether we need to search the back half or the front half.
// Choose a spot around the center of the half of the array we still need to search.
// From here, determine which quarter of the array we still need to search.
// In this way our search is very rapidly narrowed until we find out whether the value we are searching for is in the array or not.

function rBinarySearch(arr, val) {
  if (arr.length == 1)
    if (val == arr[0]) return val;
    else return -1;
  else {
    mid = Math.floor(arr.length / 2) - 1;
    if (arr[mid] == val) {
      rBoundary = mid;
      lBoundary = mid;
      while (arr[rBoundary + 1] == val && rBoundary != arr.length) {
        rBoundary += 1;
      }
      while (arr[lBoundary - 1] == val && lBoundary != 0) {
        lBoundary -= 1;
      }
      return rBoundary - lBoundary + 1;
    } else if (arr[mid] < val) return rBinarySearch(arr.slice(mid + 1), val);
    else if (arr[mid] > val) return rBinarySearch(arr.slice(0, mid + 1), val);
  }
}
console.log(
  rBinarySearch(
    [
      1,
      3,
      8,
      10,
      12,
      15,
      17,
      20,
      22,
      34,
      38,
      40,
      50,
      52,
      78,
      87,
      90,
      91,
      92,
      94,
      200
    ],
    93
  )
);
console.log(
  rBinarySearch(
    [
      1,
      3,
      8,
      10,
      12,
      15,
      17,
      20,
      22,
      34,
      38,
      40,
      50,
      52,
      78,
      87,
      90,
      91,
      92,
      94
    ],
    15
  )
);

function binarySearch(arr, target, start = 0, stop = arr.length - 1) {
  let midPoint = Math.floor((stop - start) / 2 + start);

  switch (true) {
    case arr[midPoint] === target:
      return midPoint;
    case stop - start === 0:
      return -1;
    case arr[midPoint] < target:
      return binarySearch(arr, target, midPoint + 1, stop);
    case arr[midPoint] > target:
      return binarySearch(arr, target, start, midPoint);
  }
}
console.log(
  binarySearch(
    [
      1,
      3,
      8,
      10,
      12,
      15,
      17,
      20,
      22,
      34,
      38,
      40,
      50,
      52,
      78,
      87,
      90,
      91,
      92,
      94
    ],
    15
  )
);

// Big O Notation: O(log n)
// Non recursion method
function binarySearchIteration(arr, target) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === x)
      return mid;
    else if (arr[mid] < x)
      start = mid + 1;
    else
    end = mid - 1;
  }
  return -1;
}

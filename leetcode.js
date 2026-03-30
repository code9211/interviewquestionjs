{
  var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
      const outerElement = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
        const innerElement = nums[j];
        if (innerElement + outerElement == target) {
          return [i, j];
        }
      }
    }
  };

  ((nums = [3, 2, 4]), (target = 6));

  console.log(twoSum(nums, target));
}
{
  class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }

  function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
      const x = l1 !== null ? l1.val : 0;
      const y = l2 !== null ? l2.val : 0;

      const total = x + y + carry;
      carry = Math.floor(total / 10);
      current.next = new ListNode(total % 10);
      current = current.next;

      if (l1 !== null) l1 = l1.next;
      if (l2 !== null) l2 = l2.next;
    }

    if (carry > 0) {
      current.next = new ListNode(carry);
    }

    return dummy.next;
  }

  // Example usage
  // Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
  // Output: 7 -> 0 -> 8

  // Define linked lists
  const l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);

  const l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);

  // Call the function
  const result = addTwoNumbers(l1, l2);

  // Print the result
  let temp = result;
  let output = "";
  while (temp) {
    output += temp.val + " ";
    temp = temp.next;
  }
  console.log(output.trim()); // Output: 7 0 8
}
{
  let l1 = [9, 9, 9, 9, 9, 9, 9],
    l2 = [9, 9, 9, 9];
  // [7, 0, 8]
  //  342 + 465 = 807
  addTwoNumbers(l1, l2);
  function addTwoNumbers(l1, l2) {
    let carry = 0;
    let i = 0;
    let result = [];
    while (carry || i < l1.length || l2 < l2.length) {
      let temp1 = l1[i] ?? 0;
      let temp2 = l2[i] ?? 0;
      let sum = temp1 + temp2 + carry;

      result.push(sum % 10); //
      carry = parseInt(sum / 10);
      i++;
    }
    return result;
  }
}
{
  s = "aab";
  // Output: 3
  // Explanation: The answer is "abc", with the length of 3.
  console.log(lengthOfLongestSubstring(s));
  function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let charMap = {};

    for (let i = 0, j = 0; j < s.length; j++) {
      if (charMap[s[j]] !== undefined) {
        // Move the start of the window to the next position after the last occurrence of the repeating character
        i = Math.max(charMap[s[j]] + 1, i);
      }
      // Update the index of the current character
      charMap[s[j]] = j;
      // Update the maximum length
      maxLength = Math.max(maxLength, j - i + 1);
    }

    return maxLength;
  }
}
{
  // Find second smallest element without sort, is it correct?

  let arr = [3, 52, 34, 5, 1, 6, 7, 3, 4, 80, 7, 1, 1, 234];
  let fs = arr[0],
    ss = arr[1];
  secondSmallestNumber(arr);
  function secondSmallestNumber(arr) {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (fs >= element) {
        fs = element;
      } else if (ss >= element) {
        ss = element;
      }
      console.log(fs, ss);
    }
    console.log(fs, ss);
  }
}
{
  // zigzag problem
  console.log("zigzag problem");

  console.log(zigzag("PAHNAPLSIIGYIR", 3));
  function zigzag(str, row) {
    let input = str.split("");
    let result = [[], [], []];
    // console.log("asdf", row0, row1, row2);
    let direction = "down";
    let counter = 0;
    for (let index = 0; index < input.length; index++) {
      const element = input[index];

      result[counter].push(element);
      //   }
      if (counter == 0) {
        direction = "down";
      } else if (counter == row - 1) {
        direction = "up";
      }
      counter + (direction == "down") ? 1 : -1;
    }
    // return result.toString();
    return result.map((row) => row.join("")).join("");
  }
}
{
  // reverse a number with sign

  var reverse = function (x) {
    let rev = 0;
    while (x !== 0) {
      let digit = x % 10;
      x = (x / 10) | 0; // truncate towards zero in JS

      if (rev > 214748364 || (rev === 214748364 && digit > 7)) return 0;
      if (rev < -214748364 || (rev === -214748364 && digit < -8)) return 0;

      rev = rev * 10 + digit;
      console.log(rev);
    }

    console.log(Math.pow(2, 31));

    return rev;
  };
  reverse(123456789);
}

{
  // isPalindrome
  console.log(isPalindrome(-121));
  function isPalindrome(num) {
    sum = 0;
    num1 = num;
    while (num > 0) {
      sum = sum * 10;
      let temp = num % 10;
      sum = sum + temp;
      num = Math.floor(num / 10);
    }
    console.log(sum);

    return sum == num1;
  }
}

{
  //
  console.log(isMatch("aa", "a"));
  function isMatch(s = String, p = String) {
    const m = s.length;
    const n = p.length;

    // dp[i][j] = whether s[0..i-1] matches p[0..j-1]
    const dp = Array.from({ length: m + 1 }, () =>
      new Array(n + 1).fill(false),
    );
    console.log(dp);

    dp[0][0] = true; // empty string matches empty pattern

    // handle patterns like a*, a*b*, a*b*c* at the start
    for (let j = 2; j <= n; j++) {
      if (p[j - 1] === "*") {
        dp[0][j] = dp[0][j - 2];
      }
    }

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (p[j - 1] === "." || p[j - 1] === s[i - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else if (p[j - 1] === "*") {
          // case 1: '*' means zero occurrences
          dp[i][j] = dp[i][j - 2];
          // case 2: '*' means one or more of preceding char
          if (p[j - 2] === "." || p[j - 2] === s[i - 1]) {
            dp[i][j] = dp[i][j] || dp[i - 1][j];
          }
        }
      }
    }

    return dp[m][n];
  }
}
{
  input = [6, 3, 7, 13, 4, 8, 21];
  output = [7, 4, 8, 21, 6, 13, -1];
  let result = [];
  swift(input);
  console.log(result);

  function swift(arr1) {
    for (let index = 0; index < arr1.length; index++) {
      const element = arr1[index];
      let greatest = Infinity;
      for (let j = 0; j < arr1.length; j++) {
        const innerj = arr1[j];
        if (innerj > element && innerj < greatest) {
          greatest = innerj;
        }
      }
      result.push(greatest == Infinity ? -1 : greatest);
    }
  }
}

{
  groupBy(
    [
      { name: "John", age: 50 },
      { name: "Jane", age: 30 },
      { name: "Jane", age: 32 },
    ],
    "name",
  );
  function groupBy(input, grp) {
    let result = {};

    for (let index = 0; index < input.length; index++) {
      const element = input[index];
      console.log(element[grp], grp);

      if (result[element[grp]]) {
        result[element[grp]].push(element);
      } else {
        result[element[grp]] = [element];
      }
    }

    return result;
  }
}

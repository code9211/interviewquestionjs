{
    var twoSum = function (nums, target) {


        for (let i = 0; i < nums.length; i++) {
            const outerElement = nums[i];
            for (let j = i + 1; j < nums.length; j++) {
                const innerElement = nums[j];
                if ((innerElement + outerElement) == target) {
                    return [i, j]
                }
            }
        }

    };

    nums = [3, 2, 4], target = 6;

    console.log(twoSum(nums, target))
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

    let l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9]
    // [7, 0, 8]
    //  342 + 465 = 807
    addTwoNumbers(l1, l2)
    function addTwoNumbers(l1, l2) {

        let carry = 0;
        let i = 0
        let result = [];
        while (carry || i < l1.length || l2 < l2.length) {

            let temp1 = l1[i] ?? 0;
            let temp2 = l2[i] ?? 0;
            let sum = temp1 + temp2 + carry;

            result.push(sum % 10);//
            carry = parseInt(sum / 10)
            i++
        }
        return result
    }
}
{
    s = "aab"
    // Output: 3
    // Explanation: The answer is "abc", with the length of 3.
    console.log(lengthOfLongestSubstring(s))
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

    let arr = [3, 52, 34, 5, 1, 6, 7, 3, 4, 80, 7, 1,1,234];
    let fs = arr[0], ss = arr[1];
    secondSmallestNumber(arr)
    function secondSmallestNumber(arr) {
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (fs >= element) {
                fs = element;
            }
            else if (ss >= element) {
                ss = element
            }
            console.log(fs,ss);
        }
        console.log(fs, ss);
    }
}
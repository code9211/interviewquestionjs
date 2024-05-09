let s = "dvdf"

var lengthOfLongestSubstring = function (s) {
    // console.log(s);
    let count = 0;
    let word = ''
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (!word.includes(element) && element != ' ') {
            word = word + element;
            console.log("if", word, element)
            count = word.length > count ? word.length : count
        }
        else if (element == ' ') {
            count = 1
        }
        else {
            count = word.length > count ? word.length : count
            word = element
            // console.log(word, element)
        }
        // console.log(count);
    }
    return count
};
// console.log(lengthOfLongestSubstring(s))
s = "()"
var isValid = function (s) {
    const stack = [];

    for (let index = 0; index < s.length; index++) {

        const current = s[index];
        console.log(current);
        if (current == '{' || current == '(' || current == '[') {
            stack.push(current)
        }
        else {
            let lastpush = stack.pop();

            if (
                (current == '}' && lastpush != '{')
                || (current == ')' && lastpush != '(')
                || (current == ']' && lastpush != '[')) {
                console.log('asdf');
                return false;
            }
        }
    }
    return stack.length == 0

};
// console.log(isValid(s))


let nums = [1, 2, 3, 1]
var containsDuplicate = function (nums) {

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        // if(nums.)
    }
};



let test = [
    {
        "name": "Andhra Pradesh",
        "state": "Hyderabad"
    },
    {
        "name": "Arunachal Pradesh",
        "state": "Itanagar"
    },
    {
        "name": "Assam",
        "state": "Dispur"
    },
    {
        "name": "Bihar",
        "state": "Patna"
    },
    {
        "name": "Chhattisgarh",
        "state": "Raipur"
    },
    {
        "name": "Goa",
        "state": "Panaji"
    },
    {
        "name": "Gujarat",
        "state": "Gandhinagar"
    },
    {
        "name": "Haryana",
        "state": "Chandigarh"
    },
    {
        "name": "Himachal Pradesh",
        "state": "Shimla"
    },
    {
        "name": "Jammu & Kashmir",
        "state": "Srinagar(Summer)/Jammu(Winter)"
    },
    {
        "name": "Jharkhand",
        "state": "Ranchi"
    },
    {
        "name": "Karnataka",
        "state": "Bengaluru"
    },
    {
        "name": "Kerala",
        "state": "Thiruvananthapuram"
    },
    {
        "name": "Madhya Pradesh",
        "state": "Bhopal"
    },
    {
        "name": "Maharashtra",
        "state": "Mumbai"
    },
    {
        "name": "Manipur",
        "state": "Imphal"
    },
    {
        "name": "Meghalaya",
        "state": "Shillong"
    },
    {
        "name": "Mizoram",
        "state": "Aizawl"
    },
    {
        "name": "Nagaland",
        "state": "Kohima"
    },
    {
        "name": "Odisha",
        "state": "Bhubaneswar"
    },
    {
        "name": "Punjab",
        "state": "Chandigarh"
    },
    {
        "name": "Rajasthan",
        "state": "Jaipur"
    },
    {
        "name": "Sikkim",
        "state": "Gangtok"
    },
    {
        "name": "Tamil Nadu",
        "state": "Chennai"
    },
    {
        "name": "Telangana",
        "state": "Hyderabad"
    },
    {
        "name": "Tripura",
        "state": "Agartala"
    },
    {
        "name": "Uttar Pradesh",
        "state": "Lucknow"
    },
    {
        "name": "Uttarakhand",
        "state": "Dehradun"
    },
    {
        "name": "West Bengal",
        "state": "Kolkata"
    }
]


for (let index = 0; index < test.length; index++) {
    const element = test[index];
    element['id'] = index + 1 + ''
}
console.log(JSON.stringify(test))




// array is {1, 1, 2, 3, 5, 5, 7, 9, 9, 9} then it has length 10 and contains a number from 1 to 9. In this case, missing numbers are 4, 6, and 8;


let arr = [1, 1, 2, 3, 5, 5, 7, 9, 9, 9];
for (let index = 1; index < arr[arr.length - 1]; index++) {
    const element = arr[index];
    if(arr.indexOf(index)==-1){
        console.log(index);
    }
}





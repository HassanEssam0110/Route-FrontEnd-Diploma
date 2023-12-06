
const qutsContainer = document.getElementById('qutsContainer');
const fragment = document.createDocumentFragment();


const questionsList = [
    { qut: 'Write a program that allow to user enter number then print it.' },
    { qut: 'Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no.' },
    { qut: 'Write a program that allows the user to insert 2 integers then print the max.' },
    { qut: 'Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.' },
    { qut: 'Write a program that take 3 integers from user then print the max element and the min element.' },
    { qut: 'Write a program that allows the user to insert integer number then check If a number is oven or odd.' },
    { qut: 'Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant.' },
    { qut: 'Write a program that allows user to insert integer then print all numbers between 1 to that’s number.' },
    { qut: 'Write a program that allows user to insert integer then print a multiplication table up to 12.' },
    { qut: 'Write a program that allows to user to insert number then print all even numbers between 1 to this number.' },
    { qut: 'Write a program that take two integers then print the power.' },
    { qut: 'Write a program to enter marks of five subjects and calculate total, average and percentage.' },
    { qut: 'Write a program to input month number and print number of days in that month.' },
    { qut: 'Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade.' },
    { qut: 'Write a program to print total number of days in month, use switch.' },
    { qut: 'Write a program to check whether an alphabet is vowel or consonant, use switch.' },
    { qut: 'Write a program to find maximum between two numbers, use switch.' },
    { qut: 'Write a program to check whether a number is even or odd, use switch.' },
    { qut: 'Write a program to check whether a number is positive or negative or zero, use switch.' },
    { qut: 'Write a program to create Simple Calculator, use switch.' }
]

// ^============= HELPERS ===================
/*======== Handle Qtuestions in Html ========*/
questionsList.forEach((item, index) => {
    const article = document.createElement('article');
    article.classList.add('col');
    article.innerHTML = `<div class="inner  py-2 d-flex justify-content-around align-items-center ">
        <p class="mb-0  qut-width"><i class="icon-forum text-secondary"></i> ${item.qut}</p>
        <button class="btn btn-sm  btn-outline-warning " onclick="question${index + 1}()">Test</button></div>
<div class="resutl"><p id="qOut${index + 1}" class="text-center fw-bold text-info py-2 overflow-x-auto"></p>
<hr class="hr w-75 mx-auto"></div>`

    fragment.appendChild(article);
});
qutsContainer.appendChild(fragment);

/*======== Get input from prompt ========*/
function getInput(type, msg) {
    if (type === 'num') {
        return Number(window.prompt(msg));
    } else {
        return window.prompt(msg);
    }

}

/*======== find number ========*/
function findMax(n1, n2, n3) {
    if (n1 >= n2 && n1 >= n3) {
        return n1;
    } else if (n2 >= n1 && n2 >= n3) {
        return n2;
    } else {
        return n3;
    }
}
function findMin(n1, n2, n3) {
    if (n1 <= n2 && n1 <= n3) {
        return n1;
    } else if (n2 <= n1 && n2 <= n3) {
        return n2;
    } else {
        return n3;
    }
}
/*======== find number use Switch ========*/
function findMaxSwitch(n1, n2) {

    switch (true) {
        case n1 > n2:
            return n1;
        case n2 > n1:
            return n2;
        case n1 === n2:
            return 'equals';
        default:
            return 'Invalid input';
    }

}
/*======== Chek Vowel Characters use if condition========*/
function isVowel(c) {
    var vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
    var found = 'Consonant';
    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] === c) {
            found = 'Vowel';
        }
    }
    return found;
}
/*======== Chek Vowel Characters use switch ========*/
function isVowelSwitch(c) {
    switch (c) {
        case 'A':
        case 'a':
        case 'E':
        case 'e':
        case 'I':
        case 'i':
        case 'O':
        case 'o':
        case 'U':
        case 'u':
            return 'Vowel';
        default:
            return 'Consonant';
    }
}
/*======== find numbers even or odd ========*/
function getNumsOddOrEven(endNum, conditionString) {
    var condition, arr = [];
    if (conditionString !== 'even' && conditionString !== 'odd') {
        alert('error, invalid value must be even or odd');
        return false;
    }
    else {
        condition = conditionString === 'even' ? (i) => i % 2 === 0 : (i) => i % 2 === 1;
        // if (conditionString === 'even') {
        //     condition = (i) => i % 2 === 0;
        // } else {
        //     condition = (i) => i % 2 === 1;
        // }
    }
    for (var index = 1; index <= endNum; index++) {
        if (condition(index)) { arr.push(index) }
    }

    return arr.join(' ');
}
/*======== find numbers even or odd ========*/
function numOddOrEvenSwitch(num) {
    switch (true) {
        case num % 2 === 0:
            return 'even';
        case num % 2 === 1:
            return 'odd';
        default:
            return 'invalid input';
    }
}
/*========  find numbers positive or negative use switch ========*/
function numPositiveOrNegativeSwitch(num) {
    switch (true) {
        case num === 0:
            return 'zero';
        case num < 0:
            return 'Negative';
        case num > 0:
            return 'Positive';
        default:
            return 'invalid input';
    }
}
/*======== find numbers of days in month use if condition ========*/
function daysInMonth(month) {
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        return 31;
    } else if (month === 4 || month === 6 || month === 9 | month === 11) {
        return 30;
    } else if (month === 2) {
        var year = new Date().getFullYear;
        var days = ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? 29 : 28;
        return days;
    } else {
        return "Invalid month number";
    }
}
/*======== find numbers of days in month use if switch ========*/
function totalDaysInMonth(month) {
    switch (month) {
        case 1: // January
        case 3: // March
        case 5: // May
        case 7: // July
        case 8: // August
        case 10: // October
        case 12: // December
            return 31;
        case 4: // April
        case 6: // June
        case 9: // September
        case 11: // November
            return 30;
        case 2: //February
            var year = new Date().getFullYear();
            // Leap year: February has 29 days and Non-leap year: February has 28 days
            var days = ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? 29 : 28;
            return days;
        default:
            return "Invalid month number";
    }
}
/*======== find percentage and Grade from marks ========*/
function getPercentageAndGrades(subjectsArr) {
    var grade = '', totalMarks = 0;
    // Calculate total marks
    subjectsArr.forEach(sub => totalMarks += sub.marks);
    // Calculate percentage
    var percentage = (totalMarks / (subjectsArr.length * 100)) * 100;
    if (percentage <= 100 && percentage >= 90) {
        grade = "A";
    } else if (percentage < 90 && percentage >= 80) {
        grade = "B";
    } else if (percentage < 80 && percentage >= 70) {
        grade = "C";
    } else if (percentage < 70 && percentage >= 60) {
        grade = "D";
    } else if (percentage < 60 && percentage >= 40) {
        grade = "E";
    } else {
        grade = "F";
    }
    return { percentage, grade };
}
/*======== Simple Calculator use switch ========*/
function simpleCalculator(num1, opt, num2) {
    var result;
    switch (opt) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'input invalid value';
            break;
    }
    return result;
}
// !============================  START Questions ==========================================

//  ?==> Q1 Write a program that allow to user enter number then print it
const question1 = () => {
    document.getElementById('qOut1').textContent = `Output: ${getInput("num", "Enter a number")}`;
}

//  ?==> Q2 Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
const question2 = () => {
    var inputNum = getInput("num", 'Enter number can divide by 3 and 4');
    const el = document.getElementById('qOut2');
    if (inputNum % 3 === 0 && inputNum % 4 === 0) {
        el.textContent = `Output: Yes`;
    } else {
        el.textContent = `Output: No`;
    }
}

// ?==> Q3 Write a program that allows the user to insert 2 integers then print the max
const question3 = () => {
    var Num1 = getInput("num", 'Enter first number'), Num2 = getInput("num", 'Enter second number');
    const el = document.getElementById('qOut3');
    if (isNaN(Num1) || isNaN(Num2)) {
        el.textContent = `Output: error, plese enter only numbers`;
    } else {
        el.textContent = Num1 > Num2 ? `Output: ${Num1}` : `Output: ${Num2}`;
    }
}
//  ?==> Q4 Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
const question4 = () => {
    var inputNum = getInput("num", 'Enter number:');
    const el = document.getElementById('qOut4');
    if (inputNum === 0) {
        el.textContent = `Output: Zero`;
    } else if (inputNum < 0) {
        el.textContent = `Output: Negative`;
    } else if (inputNum > 0) {
        el.textContent = `Output: Positive`;
    } else {
        el.textContent = `Output: error, plese enter only numbers`;
    }
}

//  ?==> Q5 Write a program that take 3 integers from user then print the max element and the min element.
const question5 = () => {
    var Num1 = getInput("num", 'Enter first number:'), Num2 = getInput("num", 'Enter second number:'), Num3 = getInput("num", 'Enter third number:');
    var max_num = findMax(Num1, Num2, Num3);
    var min_num = findMin(Num1, Num2, Num3);
    document.getElementById('qOut5').textContent = `Output: Max= ${max_num}, Min= ${min_num}`;
}

// ?==> Q6 Write a program that allows the user to insert integer number then check If a number is oven or odd.
const question6 = () => {
    var inputNum = getInput("num", 'Enter number:');
    const el = document.getElementById('qOut6');
    el.textContent = inputNum % 2 === 0 ? `Output: even` : `Output: odd`;
}

// ?==> Q7 Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant.
const question7 = () => {
    var inputChar = getInput("char", 'Enter char:');
    document.getElementById('qOut7').textContent = `Output: ${isVowel(inputChar)}`;
}

// ?==> Q8 Write a program that allows user to insert integer then print all numbers between 1 to that’s number.
const question8 = () => {
    var inputNum = getInput("num", 'Enter number:'), nums = [];
    for (let i = 1; i <= inputNum; i++) {
        nums.push(i);
    }
    document.getElementById('qOut8').textContent = `Output: ${nums.join(' ')}`;
}

// ?==> Q9 Write a program that allows user to insert integer then print a multiplication table up to 12.
const question9 = () => {
    var inputNum = getInput("num", 'Enter number:'), nums = [];
    for (let i = 1; i <= 12; i++) {
        nums.push(inputNum * i);
    }
    var result = nums.join(' ');
    document.getElementById('qOut9').textContent = `Output: ${result}`;
}

// ?==> Q10 Write a program that allows to user to insert number then print all even numbers between 1 to this number.
const question10 = () => {
    var inputNum = getInput("num", 'Enter number:');
    var result = getNumsOddOrEven(inputNum, 'even');
    document.getElementById('qOut10').textContent = `Output: ${result}`;
}
// ?==> Q11 Write a program that take two integers then print the power.
const question11 = () => {
    var base = getInput("num", 'Enter first number:'), exponent = getInput("num", 'Enter second number:'), result = 1;
    for (let i = 1; i <= exponent; i++) { result *= base; }
    document.getElementById('qOut11').textContent = `Output: ${result}`;
}

// ?==> Q12 Write a program to enter marks of five subjects and calculate total, average and percentage..
const question12 = () => {
    var subjects = [], totla = 0, average = 0, percentage = 0;
    // get subjects 
    for (let s = 1; s <= 5; s++) {
        subjects.push(getInput("num", `Enter Subject ${s} of 5 Subjects :`));
    }
    for (let i = 0; i < subjects.length; i++) {
        totla += subjects[i];
        average = totla / subjects.length;
        percentage = (totla / (subjects.length * 100)) * 100;
    }

    document.getElementById('qOut12').textContent = `Output: totla= ${totla} , average= ${average}, percentage= ${percentage}%`;
}

// ?==> Q13 Write a program to input month number and print number of days in that month..
const question13 = () => {
    var month = getInput('num', 'Enter a month number you need to know days:');
    var days = daysInMonth(month) === "Invalid month number" ? `<span class="text-danger"> Invalid month number</span>` : daysInMonth(month);
    document.getElementById('qOut13').innerHTML = `Output: Days in Month ${days}`;
}

// ?==> Q14 Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade
const question14 = () => {
    var subjectsList = [
        { subName: 'Physics', marks: 0 },
        { subName: 'Chemistry', marks: 0 },
        { subName: 'Biology', marks: 0 },
        { subName: 'Mathematics', marks: 0 },
        { subName: 'Computer', marks: 0 }];

    // Get marks for each subject
    for (let s = 0; s < subjectsList.length; s++) {
        subjectsList[s].marks = getInput("num", `Enter marks for ${subjectsList[s].subName}, ${s + 1} of ${subjectsList.length} subjects :`);
    }

    var gradeObj = getPercentageAndGrades(subjectsList);
    document.getElementById('qOut14').textContent = `Output: percentage= ${gradeObj.percentage}% , grade= ${gradeObj.grade} `;
}

// ?==> Q15 Write a program to print total number of days in month, use swtich.
const question15 = () => {
    var month = getInput('num', 'Enter a month number you need to know days:');
    var days = totalDaysInMonth(month) === "Invalid month number" ? `<span class="text-danger"> Invalid month number</span>` : totalDaysInMonth(month);
    document.getElementById('qOut15').innerHTML = `Output: Days in Month ${days}`;
}

// ?==> Q16 Write a program to check whether an alphabet is vowel or consonant, use swtich.
const question16 = () => {
    var inputChar = getInput("char", 'Enter char:');
    document.getElementById('qOut16').textContent = `Output: ${isVowelSwitch(inputChar)}`;
}

// ?==> Q17 Write a program to find maximum between two numbers, use swtich.
const question17 = () => {
    var Num1 = getInput("num", 'Enter first number:'), Num2 = getInput("num", 'Enter second number:');
    var max_num = findMaxSwitch(Num1, Num2) === 'Invalid input' ? `<span class="text-danger">Invalid input, both values must be numbers</span>` : findMaxSwitch(Num1, Num2);
    document.getElementById('qOut17').innerHTML = `Output: Max= ${max_num}`;
}

// ?==> Q18 Write a program to check whether a number is even or odd, use swtich.
const question18 = () => {
    var inputNum = getInput("num", 'Enter number:');
    document.getElementById('qOut18').textContent = `Output: ${numOddOrEvenSwitch(inputNum)}`;
}

// ?==> Q19 Write a program to check whether a number is positive or negative or zero, use swtich.
const question19 = () => {
    var inputNum = getInput("num", 'Enter number:');
    document.getElementById('qOut19').textContent = `Output: ${(numPositiveOrNegativeSwitch(inputNum))}`;
}

// ?==> Q20 Write a program to create Simple Calculator, use swtich.
const question20 = () => {
    var num1 = getInput("num", 'Enter first number:'), operator = getInput("char", "Enter operator + , - , * , /"), num2 = getInput("num", 'Enter second number:');
    document.getElementById('qOut20').textContent = `Output: ${(simpleCalculator(num1, operator, num2))}`;
}

// &==================== SCROLL REVEAL ANIMATION ====================
const sr = ScrollReveal({
    distance: '70px',
    duration: 1500,
    // delay: 400,
    // reset: true
})
sr.reveal(`.contant`, { delay: 100 })
sr.reveal(`.title`, { delay: 200 })
sr.reveal(`.inner ,.resutl`, { interval: 200 })
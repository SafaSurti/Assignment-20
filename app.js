//                                    CHAPTER NO 38-42:
//                            FUNCTIONS|SWITCH|WHILE..DO.WHILE
//                                      ANSWER NO 1:

// function power(a, b) {
//     let result = 1;
//     for (let i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }
// console.log(power(2, 3)); 
// console.log(power(5, 4)); 
//                                      ANSWER NO 2:

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const year = 2024;
// if (isLeapYear(year)) {
//     console.log(year + " is a leap year.");
// } else {
//     console.log(year + " is not a leap year.");
// }
//                                      ANSWER NO 3:

// function triangleArea(a, b, c) {

//     let S = (a + b + c) / 2;
    
//     let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    
//     return area;
// }
// let a = 5, b = 6, c = 7;
// let area = triangleArea(a, b, c);
// console.log("The area of the triangle is: " + area.toFixed(2));
//                                      ANSWER NO 4:

// function average(marks1, marks2, marks3) {
//     return (marks1 + marks2 + marks3) / 3;
// }
// function percentage(marks1, marks2, marks3, totalMarks) {
//     let obtainedMarks = marks1 + marks2 + marks3;
//     return (obtainedMarks / (totalMarks * 3)) * 100;
// }

// function mainFunction(marks1, marks2, marks3, totalMarks) {
//     let avg = average(marks1, marks2, marks3);
//     let perc = percentage(marks1, marks2, marks3, totalMarks);
//     console.log("Average Marks: " + avg.toFixed(2));
//     console.log("Percentage: " + perc.toFixed(2) + "%");
// }
// let marks1 = 50, marks2 = 80, marks3 = 70;
// let totalMarks = 100;
// mainFunction(marks1, marks2, marks3, totalMarks);

//                                      ANSWER NO 5:

// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i; 
//         }
//     }
//     return -1;
// }
// let str = "javascript";
// let char = "xy";
// let result = customIndexOf(str, char);
// console.log("The index of '" + char + "' is: " + result); 

//                                      ANSWER NO 6:
// function deleteVowels(sentence) {
//     let vowels = /[aeiouAEIOU]/g;

//     let result = sentence.replace(vowels, '');
    
//     return result;
// }

// let sentence = "My name is safa mushtaq.";
// let result = deleteVowels(sentence);
// console.log("Sentence without vowels: " + result);

//                                      ANSWER NO 7:
// function countVowelPairs(sentence) {
//     let vowelPairs = 0; 
//     let vowels = "aeiouAEIOU"; 
//     for (let i = 0; i < sentence.length - 1; i++) {
//         let firstChar = sentence[i];
//         let secondChar = sentence[i + 1];
        
//         switch (firstChar) {
//             case 'a': case 'e': case 'i': case 'o': case 'u':
//             case 'A': case 'E': case 'I': case 'O': case 'U':
            
//                 if (vowels.includes(secondChar)) {
//                     vowelPairs++;
//                 }
//                 break;
//             default:
             
//                 break;
//         }
//     }
    
//     return vowelPairs;
// }
// let sentence = "my name is safa and i like kheer";
// let result = countVowelPairs(sentence);
// console.log("Number of vowel pairs: " + result);

//                                      ANSWER NO 8:
// function kilometersToMeters(kilometers) {
//     return kilometers * 1000; 
// }

// function kilometersToFeet(kilometers) {
//     return kilometers * 3280.84;
// }
// function kilometersToInches(kilometers) {
//     return kilometers * 39370.1; 
// }
// function kilometersToCentimeters(kilometers) {
//     return kilometers * 100000; 
// }
// function convertDistance() {
//     let kilometers = parseFloat(prompt("Enter distance in kilometers:"));

//     let meters = kilometersToMeters(kilometers);
//     let feet = kilometersToFeet(kilometers);
//     let inches = kilometersToInches(kilometers);
//     let centimeters = kilometersToCentimeters(kilometers);

//     console.log(`Distance in meters: ${meters}`);
//     console.log(`Distance in feet: ${feet}`);
//     console.log(`Distance in inches: ${inches}`);
//     console.log(`Distance in centimeters: ${centimeters}`);
// }
// convertDistance();

//                                      ANSWER NO 9:

// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40;
//     const overtimeRate = 12.00; 
//     let overtimeHours = 0;
//     let overtimePay = 0;
//     if (hoursWorked > regularHours) {
//         overtimeHours = hoursWorked - regularHours; 
//         overtimePay = overtimeHours * overtimeRate; 
//     }
//     return overtimePay;
// }
// function main() {
//     let hoursWorked = parseInt(prompt("Enter the total hours worked by the employee:"));

//     if (isNaN(hoursWorked) || hoursWorked < 0) {
//         console.log("Please enter a valid number of hours.");
//         return;
//     }

//     let overtimePay = calculateOvertimePay(hoursWorked);
//     console.log("Overtime Pay: Rs. " + overtimePay.toFixed(2));
// }
// main();
//                                      ANSWER NO 10:
// function calculateNotes(amount) {
    
//     const note100 = 100;
//     const note50 = 50;
//     const note10 = 10;
//     let hundredNotes = Math.floor(amount / note100);
//     amount %= note100; 

//     let fiftyNotes = Math.floor(amount / note50);
//     amount %= note50;
//     let tenNotes = Math.floor(amount / note10);
//     amount %= note10; 
//     return {
//         hundred: hundredNotes,
//         fifty: fiftyNotes,
//         ten: tenNotes
//     };
// }

// function main() {
//     let amount = parseInt(prompt("Enter the amount to withdraw (in hundreds):"));

//     if (isNaN(amount) || amount <= 0) {
//         console.log("Please enter a valid amount.");
//         return;
//     }
//     amount *= 100;

//     let notes = calculateNotes(amount);

//     console.log("Currency notes to be given:");
//     console.log("100 Rs Notes: " + notes.hundred);
//     console.log("50 Rs Notes: " + notes.fifty);
//     console.log("10 Rs Notes: " + notes.ten);
// }

// main();

//                                    CHAPTER NO 43-48:
//                                         EVENTS
//                                      ANSWER NO 1:
// function showAlert() {
//     alert("You clicked the link!");
// }
//                                      ANSWER NO 2:
// function showAlert(imageName) {
//     alert("You clicked on: " + imageName);
// }
//                                      ANSWER NO 3:

// const students = [
//     { id: 0, name: "jhone", age: 10 },
//     { id: 1, name: "Doe", age: 9 },
//     { id: 2, name: "Mark", age: 10 },
//     { id: 3, name: "Jame", age: 8 },
  
// ];

// function displayStudents() {
//     const tableBody = document.getElementById('studentTableBody');
//     students.forEach(student => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${student.id}</td>
//             <td>${student.name}</td>
//             <td>${student.age}</td>
//             <td><button class="delete-button" onclick="deleteRecord(this)">Delete</button></td>
//         `;
//         tableBody.appendChild(row);
//     });
// }
//         function deleteRecord(button) {
//             const row = button.parentElement.parentElement;
//             row.remove(); 
//         }
//         displayStudents();

//          


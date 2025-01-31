console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?

console.log('count from 0 to 5');

for (let i=0; i<=5; i++){ //we need to change the condition for the loop running to be i<=5, this will allow us to count up to and including 5
  console.log(i);
}


// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');

for (let i=3; i<=5; i++){ //we need to change the starting index to three so the loop starts counting at 3 and up to 5 
  console.log(i);
}
// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

for (let i=2; i<=10; i++){ // we change the starting index to two and the conditional to less that or equal to 10
  if (i % 2 === 0){  // we make an if loop that uses the remainder operator to divide the index by two, and if there is a remainder the of any number not 0 then the if loop does not run. Only equal numbers have a remainder of 0
    console.log(i);
  }
}
// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');


// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
let starList = "";
for (let x of stars){
  starList += x + ' ';
}
console.log(starList + ' ');

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let i = 0;
let starListTwo = "";
while(stars[i]){
  starListTwo += stars[i] + ' ';
  i++;
}
console.log(starListTwo);

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
i = 0; // i already globally established as a variable 
while(i <= 5){
  console.log(i);
  i++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
i = 10;
while(i >= 5){
  console.log(i);
  i--;
}
//! Problem 1 Determine the sign of a number.

// let number = 0;
//! RNG Number
let number = Math.floor(Math.random() * 201) - 100;
console.log(number)

if(number > 0) {
    console.log(`${number} is a Positive Number!`)
} else if (number < 0) {
    console.log(`${number} is a Negative Number!`)
} else {
    console.log(`${number} is a Zero!`)
}


//!Problem 3 Eligibility Check 

let age = "H";

if (age >= 65) {
    console.log("Eligible for senior citzen discount.")
} else {
    console.log("Not eligible for senior citzen discount.")
}

let eligible = age >= 65 ? "Eligible" : "Not eligible";
console.log(eligible)

//console.log(isNaN(age))
switch (age >= 65) {
    case true:
        console.log("Ya old.")
        break;
    case false: 
        console.log("Ya a youngin.")
        break;
    default:
        console.log("The Existential wizard.")

}


//! Problem 4 Time based Greeting

let hour = 22;

if (hour >= 5 && hour < 12) {
    console.log("Good Morning!")
} else if (hour >= 12 && hour < 17) {
    console.log("Good Afternoon!")
} else if (hour >= 17 && hour < 21) {
    console.log("Good Evening!")
} else {
    console.log("Good Night!")
}

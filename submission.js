// Inputs: birthYear is a positive integer Number (<= 2026) or a String of digits.
function printAgeIn2026(birthYear){
    let age = 2026 - birthYear;

    // Don't modify these lines.
    console.log("This person will turn " + age + " in 2026.")
    return age;
}

// Inputs: age is a positive integer Number or a String of digits.
function printAgeIn10Years(age){
    let newAge = Number(age) + 10;

    // Don't modify these lines.
    console.log("This person will be " + newAge + " in 10 years.")
    return newAge;
}

// Input: String or Number representing an integer.
function checkIfAdult(age){
    let isAdult = Number(age) >= 18;

    // Leave this part. We haven't learned this syntax yet, but
    // this statement will print "The person is not an adult." if isAdult is False,
    // and "The person is an Adult" if isAdult is true.
    console.log("The person is " + (isAdult ? "" : "not")  + " adult.")
    return isAdult;
}

// Input: any value; returns true only for the Number 0, not "0", null, or undefined.
function checkIfZero(number){
    let isZero = number === 0;

    // Leave this part. We haven't learned this syntax yet, but
    // this statement will print "The input is not zero." if isZero is False,
    // and "The input is zero" if isZero is true.
    console.log("The input is " + (isZero ? "" : "not")  + " 0.")
    return isZero;
}

// Input: first input is a non-empty String; second input is a Number that is not NaN.
function checkIfEquivalent(string, number){
    let isEquivalent = string == number;

    // Leave this part. We haven't learned this syntax yet, but
    // this statement will print "The string is not equivalent to the number." if isEquivalent is False,
    // "The string is equivalent to the number." if isEquivalent is True,
    console.log("The string is " + (isEquivalent ? "" : "not")  + " equivalent to the number.")
    return isEquivalent;
}

//PART 2
// Inputs: unreadCount is a positive integer Number, null, or undefined.
function unreadAlert(unreadCount){
    unreadCount && console.log("You have " + unreadCount + " messages.")
}

// Inputs: unreadCount may be any type.
function unreadAlertValidated(unreadCount){
    typeof unreadCount === "number" && unreadCount > 0 && console.log("You have " + unreadCount + " messages.")
}

// Inputs: unreadCount is a String, Number, null, or undefined.
function unreadAlertStringInput(unreadCount){
    unreadCount != null && Number(unreadCount) > 0 && !Number.isNaN(Number(unreadCount)) && console.log("You have " + unreadCount + " messages.")
}

// Inputs: score is a Number, null, or undefined.
function showScore(score){
    let correctedScore = score ?? "N/A";

    console.log("The score is:" + score)
    return correctedScore;
}

// Inputs: username is a String, including an empty string, or undefined.
function printWelcomeMessage(username){
    let userOrPlaceholder = username || "Mustang";

    console.log("Welcome, " + userOrPlaceholder + "!")
    return userOrPlaceholder;
}
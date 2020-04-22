class Number {

    constructor(value) {
        this.value = value
    }

    // Challenge 1 GoldenRatio

    // Add a new property to Number that is the Golden Ratio
    goldenRatio() {
        return 1.618
    }
    // Stretch: Calculate the golden ratio with math


    // Challenge 2 Number Methods

    // round 
    round(num) {
        return Math.round(num)
    }

    // floor
    floor(num) {
        return Math.floor(num)
    }

    // ceil 
    ceil(num) {
        return Math.ceil(num)
    }

    // Challenge 3 pad(x, y) - pads Number with x 0s before, and y 0s after.
    // Example: 34.801.pad(4,4) -> 0034.8010 (notice the 0s added ont he left and right sides)
    pad(x, y) {
        return "I'll come back to this"
    }

    // Challenge 4 degToRad(n)
    // Strategy: Write a function that takes a number and returns the results of this formula: deg * (Math.PI / 180)
    degToRad(num) {
        return num * (Math.PI / 180)
    }
    // Example: degToRad(45) -> 0.785
    // Stretch Goal: Check for invalid input. If the value input is not a number or is not included the function should throw and error.
    
    // Challenge 5 radToDeg(deg) - Covert radians to degrees.
    // Strategy: Write a function that takes a number and returns calculation from this formula: radians * (180 / Math.PI)
    radToDeg(deg) {
        return deg * (180 / Math.PI)
    }
    // Example: radToDeg(0.785) -> 44.977
    // Stretch Goal: Check for invalid input. If the value input is not a number or is not included the function should throw and error.
    
    // Challenge 6 toDollars(amount) - Formatting money is a common task for software projects. A function could save you time in the future. The goal of this function is to take a numeric value and return a string beginning with a '$' and rounded to two decimal places.
    // Strategy: The Number.toFixed(n) method will do most of the work for you!
    toDollars(amount) {
        return `$ ${amount}`
    }
    // Example: toDollars(3.9) -> $3.90 (Note: pads with a 0)
    // Stretch Goals: Create a currency formatting function that simplifies the use of: Intl.NumberFormat
    // intFormat(amount, countryCode, style)
    // Stretch Goal: Add the Money Class to your Library (from the in class exercise).
    
    // Challenge 7 tax(rate) - Returns the tax amount
    // Example: tax(rate) - returns the amount with tax
    tax(rate) {
        return 'ask Mitchell about this'
    }
    
    // Challenge 8 interest(total, year, rate) - Write a function that calculates the interest over time.
    interest(total, year, rate) {
        return 'Come back to me'
    }
    // Example: https://stackoverflow.com/questions/28325001/how-to-calculate-interest-javascript
    
    // Challenge 9 mortage(principal, numberOfPayments, interestRate).
    mortage(principal, numberOfPayments, interestRate) {
        return 'come back to me'
    }
    // Example: https://stackoverflow.com/questions/17101442/how-to-calculate-mortgage-in-javascrip
    
    // Challenge 10 - Stretch intToHex(int) -> #332211
    // Example: https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hexadecimal-in-javascript
    
    // Challenge 11 - Stretch Random functions
    // random(n) - returns an integer from 0 to n - 1
    // randomRange(min, max) - returns an integer from min to max.
    // randomHexColor() - Returns a random hex color
    // randomRGBColor() - Returns a random hex color
}

let testing = new Number
console.log(testing.toDollars(3.95))
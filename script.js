// Inflation multipliers for historical comparisons
const inflationRates = {
    2023: 1,
    2010: 1.31,
    2000: 1.59,
    1990: 2.06,
    1980: 3.12,
};

// Income brackets for socio-economic classes by year
const incomeBrackets = {
    1980: { lower: 10000, lowerMiddle: 25000, middle: 50000, upperMiddle: 100000 },
    1990: { lower: 15000, lowerMiddle: 35000, middle: 70000, upperMiddle: 150000 },
    2000: { lower: 20000, lowerMiddle: 50000, middle: 100000, upperMiddle: 200000 },
    2010: { lower: 25000, lowerMiddle: 60000, middle: 120000, upperMiddle: 250000 },
    2023: { lower: 35000, lowerMiddle: 65000, middle: 135000, upperMiddle: 300000 },
};

function calculate() {
    const salary = parseFloat(document.getElementById("salary").value);
    const timePeriod = parseInt(document.getElementById("timePeriod").value);
    const reverse = document.getElementById("reverseCheckbox").checked;

    if (isNaN(salary) || salary <= 0) {
        alert("Enter a valid salary.");
        return;
    }

    const multiplier = inflationRates[timePeriod];
    let adjustedValue;

    if (reverse) {
        // Calculate the value of a past salary in today's dollars
        adjustedValue = (salary * multiplier).toFixed(2);
        document.getElementById("adjustedValue").textContent = `A salary of $${salary} in ${timePeriod} is equivalent to $${adjustedValue} today.`;
    } else {
        // Calculate the value of a current salary in the past
        adjustedValue = (salary / multiplier).toFixed(2);
        document.getElementById("adjustedValue").textContent = `Your salary of $${salary} today is equivalent to $${adjustedValue} in ${timePeriod}.`;
    }

    document.getElementById("result").style.display = "block";
    displayClassCategory(salary, timePeriod, reverse);
}

function categorizeClass(salary, year, reverse) {
    const brackets = incomeBrackets[year];

    if (!brackets) return "Unknown";

    // If reverse, the salary represents a value in the past
    if (reverse) salary = salary * inflationRates[year];

    if (salary < brackets.lower) return "Lower Class";
    if (salary < brackets.lowerMiddle) return "Lower Middle Class";
    if (salary < brackets.middle) return "Middle Class";
    if (salary < brackets.upperMiddle) return "Upper Middle Class";
    return "Upper Class";
}

function displayClassCategory(salary, year, reverse) {
    const category = categorizeClass(salary, year, reverse);
    document.getElementById("classCategory").textContent = `Based on your salary, you belong to the ${category}.`;
    document.getElementById("classResult").style.display = "block";
}

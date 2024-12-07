// Inflation multipliers for historical comparisons
const inflationRates = {
    2023: 1,
    2010: 1.31,
    2000: 1.59,
    1990: 2.06,
    1980: 3.12,
};

// Historical affordability data
const affordabilityData = {
    cars: {
        1980: 7000,
        1990: 16000,
        2000: 20000,
        2010: 30000,
        2023: 48000,
    },
    homes: {
        1980: 47200,
        1990: 79100,
        2000: 119600,
        2010: 200000,
        2023: 416100,
    },
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

    if (isNaN(salary) || salary <= 0) {
        alert("Enter a valid salary.");
        return;
    }

    const multiplier = inflationRates[timePeriod];
    const adjustedValue = (salary / multiplier).toFixed(2);

    document.getElementById("adjustedValue").textContent = `Your salary of $${salary} in ${timePeriod} is equivalent to $${adjustedValue} today.`;
    document.getElementById("result").style.display = "block";

    displayBudgetBreakdown(adjustedValue);
    displayAffordability(adjustedValue, timePeriod);
    displayClassCategory(salary, timePeriod);
}

function calculateReverse() {
    const pastSalary = parseFloat(document.getElementById("pastSalary").value);
    const reverseYear = parseInt(document.getElementById("reverseYear").value);

    if (isNaN(pastSalary) || pastSalary <= 0) {
        alert("Enter a valid salary.");
        return;
    }

    const multiplier = inflationRates[reverseYear];
    const adjustedValue = (pastSalary * multiplier).toFixed(2);

    document.getElementById("adjustedValue").textContent = `A salary of $${pastSalary} in ${reverseYear} is equivalent to $${adjustedValue} today.`;
    document.getElementById("result").style.display = "block";

    displayBudgetBreakdown(adjustedValue);
    displayAffordability(adjustedValue, reverseYear);
    displayClassCategory(pastSalary, reverseYear);
}

function displayBudgetBreakdown(salary) {
    const rent = (salary * 0.3).toFixed(2);
    const savings = (salary * 0.2).toFixed(2);
    const transportation = (salary * 0.15).toFixed(2);

    document.getElementById("budgetRent").textContent = `Rent: $${rent}`;
    document.getElementById("budgetSavings").textContent = `Savings: $${savings}`;
    document.getElementById("budgetTransportation").textContent = `Transportation: $${transportation}`;
    document.getElementById("budgetResult").style.display = "block";
}

function displayAffordability(salary, year) {
    const carPrice = affordabilityData.cars[year] || "Unknown";
    const homePrice = affordabilityData.homes[year] || "Unknown";
    const rent = (salary * 0.3).toFixed(2);

    document.getElementById("carAffordability").textContent = `Car: $${carPrice}`;
    document.getElementById("homeAffordability").textContent = `Home: $${homePrice}`;
    document.getElementById("rentAffordability").textContent = `Affordable Rent: $${rent}/month`;
    document.getElementById("affordabilityResult").style.display = "block";
}

function categorizeClass(salary, year) {
    const brackets = incomeBrackets[year];

    if (!brackets) return "Unknown";

    if (salary < brackets.lower) return "Lower Class";
    if (salary < brackets.lowerMiddle) return "Lower Middle Class";
    if (salary < brackets.middle) return "Middle Class";
    if (salary < brackets.upperMiddle) return "Upper Middle Class";
    return "Upper Class";
}

function displayClassCategory(salary, year) {
    const category = categorizeClass(salary, year);
    document.getElementById("classCategory").textContent = `Based on your salary, you belong to the ${category}.`;
    document.getElementById("classResult").style.display = "block";
}

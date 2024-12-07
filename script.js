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
    vacations: {
        1980: 600,
        1990: 1000,
        2000: 1400,
        2010: 2000,
        2023: 2500,
    },
};

function calculate() {
    // Get user input
    const salary = parseFloat(document.getElementById("salary").value);
    const timePeriod = parseInt(document.getElementById("timePeriod").value);

    if (isNaN(salary) || salary <= 0) {
        alert("Please enter a valid salary.");
        return;
    }

    // Get inflation multiplier
    const inflationMultiplier = inflationRates[timePeriod];
    if (!inflationMultiplier) {
        alert("Invalid time period selected.");
        return;
    }

    // Calculate inflation-adjusted salary
    const adjustedValue = (salary / inflationMultiplier).toFixed(2);

    // Display adjusted salary result
    const resultDiv = document.getElementById("result");
    document.getElementById("adjustedValue").textContent = `In ${timePeriod}, your salary of $${salary} would be equivalent to $${adjustedValue} today.`;
    resultDiv.style.display = "block";

    // Affordability calculations
    const carPrice = affordabilityData.cars[timePeriod] || "Unknown";
    const homePrice = affordabilityData.homes[timePeriod] || "Unknown";
    const vacationCost = affordabilityData.vacations[timePeriod] || "Unknown";
    const vacationsPerYear =
        vacationCost !== "Unknown" ? Math.floor(adjustedValue / vacationCost) : "Unknown";

    // Display affordability result
    const affordabilityResult = document.getElementById("affordabilityResult");
    document.getElementById("carAffordability").textContent = `You could afford a car worth approximately $${carPrice}.`;
    document.getElementById("homeAffordability").textContent = `You could afford a home worth approximately $${homePrice}.`;
    document.getElementById("vacationAffordability").textContent = `You could afford approximately ${vacationsPerYear} vacation(s) per year.`;
    affordabilityResult.style.display = "block";
}

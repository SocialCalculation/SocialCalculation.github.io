// Inflation rates or CPI values for comparison
const inflationRates = {
    2023: 1,
    2010: 1.31,
    2000: 1.59,
    1990: 2.06,
    1980: 3.12,
    1970: 6.52,
    1960: 8.63,
};

function calculate() {
    // Input values
    const salary = parseFloat(document.getElementById("salary").value);
    const timePeriod = parseInt(document.getElementById("timePeriod").value);

    if (isNaN(salary) || salary <= 0) {
        alert("Please enter a valid salary or wage.");
        return;
    }

    // Inflation multiplier for the selected period
    const inflationMultiplier = inflationRates[timePeriod];

    if (!inflationMultiplier) {
        alert("Invalid time period selected.");
        return;
    }

    // Adjusted value
    const adjustedValue = (salary / inflationMultiplier).toFixed(2);

    // Display the results
    const resultDiv = document.getElementById("result");
    const adjustedValuePara = document.getElementById("adjustedValue");

    adjustedValuePara.textContent = `In ${timePeriod}, your wage/salary would be equivalent to $${adjustedValue} in today's dollars.`;
    resultDiv.style.display = "block";
}

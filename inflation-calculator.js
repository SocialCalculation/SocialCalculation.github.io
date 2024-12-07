// Inflation multipliers for historical comparisons
const inflationRates = {
    2023: 1,
    2010: 1.31,
    2000: 1.59,
    1990: 2.06,
    1980: 3.12,
};

function calculate() {
    const salary = parseFloat(document.getElementById("salary").value);
    const timePeriod = parseInt(document.getElementById("timePeriod").value);
    const reverse = document.getElementById("reverseCheckbox").checked;

    if (isNaN(salary) || salary <= 0) {
        alert("Please enter a valid salary.");
        return;
    }

    const multiplier = inflationRates[timePeriod];
    let adjustedValue;

    if (reverse) {
        // Reverse calculation: past to present
        adjustedValue = (salary * multiplier).toFixed(2);
        document.getElementById("adjustedValue").textContent = `A salary of $${salary} in ${timePeriod} is equivalent to $${adjustedValue} today.`;
    } else {
        // Forward calculation: present to past
        adjustedValue = (salary / multiplier).toFixed(2);
        document.getElementById("adjustedValue").textContent = `Your salary of $${salary} today is equivalent to $${adjustedValue} in ${timePeriod}.`;
    }

    document.getElementById("result").style.display = "block";
}

// Placeholder data for degree relevance and employment likelihood
const data = {
    "1970": {
        "US": { Tech: { minDegree: "Associates", likelihood: 65 }, Medical: { minDegree: "Bachelors", likelihood: 70 } },
        "Canada": { Tech: { minDegree: "Associates", likelihood: 60 }, Medical: { minDegree: "Bachelors", likelihood: 75 } }
    },
    "1980": {
        "US": { Tech: { minDegree: "Associates", likelihood: 70 }, Medical: { minDegree: "Bachelors", likelihood: 75 } },
        "Canada": { Tech: { minDegree: "Bachelors", likelihood: 65 }, Medical: { minDegree: "Bachelors", likelihood: 78 } }
    },
    "2023": {
        "US": { Tech: { minDegree: "Bachelors", likelihood: 90 }, Medical: { minDegree: "Doctorate", likelihood: 85 } },
        "Canada": { Tech: { minDegree: "Bachelors", likelihood: 85 }, Medical: { minDegree: "Doctorate", likelihood: 88 } }
    },
};

function calculate() {
    const age = parseInt(document.getElementById("age").value);
    const degreeField = document.getElementById("degreeField").value;
    const degreeType = document.getElementById("degreeType").value;
    const gradYear = document.getElementById("gradYear").value;
    const region = document.getElementById("region").value;

    if (!data[gradYear] || !data[gradYear][region] || !data[gradYear][region][degreeField]) {
        alert("No data available for the selected options.");
        return;
    }

    const info = data[gradYear][region][degreeField];
    const relevance = `In ${gradYear}, having a degree in ${degreeField} was most relevant with a ${info.minDegree} degree.`;
    const recommendation = `Recommended minimum degree type: ${info.minDegree}.`;
    const likelihood = `Likelihood of being hired: ${info.likelihood}%.`;

    document.getElementById("relevance").textContent = relevance;
    document.getElementById("recommendation").textContent = recommendation;
    document.getElementById("likelihood").textContent = likelihood;
    document.getElementById("result").style.display = "block";
}

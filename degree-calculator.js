const data = {
    "1970": {
        "US": {
            Tech: { minDegree: "Associates", likelihood: 65 },
            Medical: { minDegree: "Bachelors", likelihood: 70 },
            STEM: { minDegree: "Associates", likelihood: 60 },
            Arts: { minDegree: "Bachelors", likelihood: 50 },
            Business: { minDegree: "Associates", likelihood: 55 },
            Other: { minDegree: "High School", likelihood: 40 },
        },
        "Canada": {
            Tech: { minDegree: "Associates", likelihood: 60 },
            Medical: { minDegree: "Bachelors", likelihood: 75 },
            STEM: { minDegree: "Bachelors", likelihood: 65 },
            Arts: { minDegree: "Bachelors", likelihood: 45 },
            Business: { minDegree: "Associates", likelihood: 50 },
            Other: { minDegree: "High School", likelihood: 35 },
        },
    },
    "1980": {
        "US": {
            Tech: { minDegree: "Associates", likelihood: 70 },
            Medical: { minDegree: "Bachelors", likelihood: 75 },
            STEM: { minDegree: "Bachelors", likelihood: 72 },
            Arts: { minDegree: "Bachelors", likelihood: 55 },
            Business: { minDegree: "Associates", likelihood: 60 },
            Other: { minDegree: "High School", likelihood: 45 },
        },
        "Canada": {
            Tech: { minDegree: "Bachelors", likelihood: 65 },
            Medical: { minDegree: "Bachelors", likelihood: 78 },
            STEM: { minDegree: "Bachelors", likelihood: 68 },
            Arts: { minDegree: "Bachelors", likelihood: 50 },
            Business: { minDegree: "Associates", likelihood: 55 },
            Other: { minDegree: "High School", likelihood: 40 },
        },
    },
    "2000": {
        "US": {
            Tech: { minDegree: "Bachelors", likelihood: 80 },
            Medical: { minDegree: "Masters", likelihood: 85 },
            STEM: { minDegree: "Masters", likelihood: 75 },
            Arts: { minDegree: "Bachelors", likelihood: 60 },
            Business: { minDegree: "Bachelors", likelihood: 65 },
            Other: { minDegree: "High School", likelihood: 50 },
        },
        "Canada": {
            Tech: { minDegree: "Bachelors", likelihood: 75 },
            Medical: { minDegree: "Masters", likelihood: 80 },
            STEM: { minDegree: "Masters", likelihood: 72 },
            Arts: { minDegree: "Bachelors", likelihood: 55 },
            Business: { minDegree: "Bachelors", likelihood: 60 },
            Other: { minDegree: "High School", likelihood: 45 },
        },
    },
    "2010": {
        "US": {
            Tech: { minDegree: "Bachelors", likelihood: 85 },
            Medical: { minDegree: "Masters", likelihood: 80 },
            STEM: { minDegree: "Masters", likelihood: 78 },
            Arts: { minDegree: "Bachelors", likelihood: 65 },
            Business: { minDegree: "Bachelors", likelihood: 70 },
            Other: { minDegree: "High School", likelihood: 55 },
        },
        "Canada": {
            Tech: { minDegree: "Bachelors", likelihood: 82 },
            Medical: { minDegree: "Masters", likelihood: 85 },
            STEM: { minDegree: "Masters", likelihood: 76 },
            Arts: { minDegree: "Bachelors", likelihood: 60 },
            Business: { minDegree: "Bachelors", likelihood: 68 },
            Other: { minDegree: "High School", likelihood: 50 },
        },
    },
    "2023": {
        "US": {
            Tech: { minDegree: "Bachelors", likelihood: 90 },
            Medical: { minDegree: "Doctorate", likelihood: 85 },
            STEM: { minDegree: "Doctorate", likelihood: 88 },
            Arts: { minDegree: "Masters", likelihood: 70 },
            Business: { minDegree: "Bachelors", likelihood: 75 },
            Other: { minDegree: "High School", likelihood: 60 },
        },
        "Canada": {
            Tech: { minDegree: "Bachelors", likelihood: 85 },
            Medical: { minDegree: "Doctorate", likelihood: 88 },
            STEM: { minDegree: "Doctorate", likelihood: 86 },
            Arts: { minDegree: "Masters", likelihood: 68 },
            Business: { minDegree: "Bachelors", likelihood: 72 },
            Other: { minDegree: "High School", likelihood: 55 },
        },
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

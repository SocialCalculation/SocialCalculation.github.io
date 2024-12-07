// Comprehensive data object for all years, regions, and degree fields
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
            Tech: { minDegree: "Doctorate", likelihood: 20 },
            Medical: { minDegree: "Doctorate", likelihood: 35 },
            STEM: { minDegree: "Doctorate", likelihood: 30 },
            Arts: { minDegree: "Doctorate", likelihood: 10 },
            Business: { minDegree: "Doctorate", likelihood: 15 },
            Other: { minDegree: "Doctorate", likelihood: 5 },
        },
        "Canada": {
            Tech: { minDegree: "Doctorate", likelihood: 25 },
            Medical: { minDegree: "Doctorate", likelihood: 40 },
            STEM: { minDegree: "Doctorate", likelihood: 35 },
            Arts: { minDegree: "Doctorate", likelihood: 12 },
            Business: { minDegree: "Doctorate", likelihood: 18 },
            Other: { minDegree: "Doctorate", likelihood: 7 },
        },
    },
};

function calculate() {
    const age = parseInt(document.getElementById("age").value);
    const degreeField = document.getElementById("degreeField").value;
    const degreeType = document.getElementById("degreeType").value;
    const gradYear = document.getElementById("gradYear").value;
    const region = document.getElementById("region").value;

    // Debugging: log input values
    console.log("Inputs:", { age, degreeField, degreeType, gradYear, region });

    // Check if the selected combination exists in the data object
    if (!data[gradYear]) {
        alert("No data available for the selected year.");
        return;
    }
    if (!data[gradYear][region]) {
        alert("No data available for the selected region.");
        return;
    }
    if (!data[gradYear][region][degreeField]) {
        alert("No data available for the selected degree field.");
        return;
    }

    const info = data[gradYear][region][degreeField];
    console.log("Retrieved data:", info);

    // Build the results
    const relevance = `In ${gradYear}, having a degree in ${degreeField} was most relevant with a ${info.minDegree} degree.`;

    let recommendation = `Recommended minimum degree type: ${info.minDegree}.`;
    let likelihood = `Likelihood of being hired: ${info.likelihood}%.`;

    // Special rule for 2023: Very low likelihood unless it's a Doctorate
    if (gradYear === "2023" && degreeType !== "Doctorate") {
        likelihood = `Very low likelihood of being hired unless you have a Doctorate in ${degreeField}.`;
    }

    // Display the results
    document.getElementById("relevance").textContent = relevance;
    document.getElementById("recommendation").textContent = recommendation;
    document.getElementById("likelihood").textContent = likelihood;
    document.getElementById("result").style.display = "block";
}

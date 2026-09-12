function convertTemperature() {

    // Get input value
    let temperature = document.getElementById("temperature").value;

    let unit = document.getElementById("unit").value;

    let error = document.getElementById("error");

    // Clear previous error
    error.textContent = "";

    // Check empty input
    if (temperature === "") {
        error.textContent = "Please enter a temperature value.";
        return;
    }

    temperature = Number(temperature);

    // Check invalid number
    if (isNaN(temperature)) {
        error.textContent = "Please enter a valid number.";
        return;
    }

    // Variables
    let celsius;
    let fahrenheit;
    let kelvin;


    // Celsius input
    if (unit === "celsius") {

        celsius = temperature;

        fahrenheit = (temperature * 9 / 5) + 32;

        kelvin = temperature + 273.15;
    }


    // Fahrenheit input
    else if (unit === "fahrenheit") {

        fahrenheit = temperature;

        celsius = (temperature - 32) * 5 / 9;

        kelvin = celsius + 273.15;
    }


    // Kelvin input
    else if (unit === "kelvin") {

        kelvin = temperature;

        celsius = temperature - 273.15;

        fahrenheit = (celsius * 9 / 5) + 32;
    }


    // Absolute zero validation
    if (kelvin < 0) {

        error.textContent =
            "Temperature cannot be below absolute zero.";

        return;
    }


    // Display results
    document.getElementById("celsius").textContent =
        "Celsius: " + celsius.toFixed(2) + " °C";

    document.getElementById("fahrenheit").textContent =
        "Fahrenheit: " + fahrenheit.toFixed(2) + " °F";

    document.getElementById("kelvin").textContent =
        "Kelvin: " + kelvin.toFixed(2) + " K";
}

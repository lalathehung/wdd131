document.addEventListener('DOMContentLoaded', () => {
    // Footer updates
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    document.getElementById('currentyear').textContent = currentYear;
    document.getElementById('lastModified').textContent = `Last update: ${lastModified}`;

    // Wind chill calculation
    const temperature = 20; // Static temperature in °C
    const windSpeed = 10; // Static wind speed in km/h

    // Display static values
    document.getElementById('temperature').textContent = temperature;
    document.getElementById('wind-speed').textContent = windSpeed;

    // Calculate wind chill if conditions are met
    const windChillElement = document.getElementById('wind-chill');
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill.toFixed(1)} °C`;
    } else {
        windChillElement.textContent = 'N/A';
    }
});

// Wind chill calculation function (Metric: °C, km/h)
function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}
const temperature = 10;
const wind = 5;

function calculateWindChill(temperature, wind) {
  if (temperature >= 10) {
    const windCal = 13.12 + (0.6215 * temperature) - (11.37 * wind ** 0.16) + (0.3965 * temperature * wind ** 0.16) 
    return windCal;
  }
}

const windId = document.querySelector("#windChill");
const windChil = calculateWindChill(temperature, wind);
windId.innerHTML = `Wind Chill:${windChil.toFixed(1)} ⁰C`;

// get the current year of the footer
const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = `©${today.getFullYear()} 💠 Job Gamutambuli 💠 Uganda`;

// get the last modified date
const modified = document.getElementById("lastModified");
modified.innerHTML = `LastModified: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation')
hamButton.addEventListener('click', () => { 
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
});

// This is for getting the current year
const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = `©${today.getFullYear()} 💠 Job Gamutambuli 💠 Uganda`;

// This is the one for the modified date
const modified = document.getElementById("lastModified");
modified.innerHTML = `LastModified: ${document.lastModified}`;

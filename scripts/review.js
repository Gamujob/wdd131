const visitDisplay = document.querySelector('#visitCount');
let numVisits = Number(window.localStorage.getItem('countVisits')) || 0;

if (numVisits !== 0) {
  visitDisplay.textContent = numVisits;
} else {
  visitDisplay.textContent = `This is your first visit.`;
}

numVisits++;

localStorage.setItem('countVisits', numVisits);



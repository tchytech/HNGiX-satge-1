const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = daysOfWeek[new Date().getDay()];
const currentUTCTime = Date.now();


document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDay;
document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;

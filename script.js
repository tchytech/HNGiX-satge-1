document.addEventListener("DOMContentLoaded", function () {

    function getCurrentDayOfWeek() {
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const currentDate = new Date();
      const dayOfWeek = daysOfWeek[currentDate.getDay()];
      return dayOfWeek;
    }

    function getCurrentUTCTime() {
      const currentTime = new Date();
      const hours = currentTime.getUTCHours().toString().padStart(2, '0');
      const minutes = currentTime.getUTCMinutes().toString().padStart(2, '0'); 
      const seconds = currentTime.getUTCSeconds().toString().padStart(2, '0'); 
      return `${hours}:${minutes}:${seconds}`;
    }
  

    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = getCurrentDayOfWeek();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = getCurrentUTCTime();
});

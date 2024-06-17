// Countdown Timer
const countdown = document.getElementById("countdown");
const eventDate = new Date("June 20, 2024 08:00:00").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(interval);
    countdown.innerHTML = "Event Started";
  }
};

const interval = setInterval(updateCountdown, 1000);
updateCountdown();

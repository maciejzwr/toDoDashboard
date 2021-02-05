let nightMode = localStorage.getItem("nightMode");

const dashboard = document.querySelector(".dashboard-container");
const toggle = document.querySelector(".toggle");

const enableNight = () => {
  dashboard.classList.add("theme-night");
  toggle.classList.add("dark-toggle");

  localStorage.setItem("nightMode", "enabled");
};

const disableNight = () => {
  dashboard.classList.remove("theme-night");
  toggle.classList.remove("dark-toggle");

  localStorage.setItem("nightMode", null);
};

if (nightMode === "enabled") {
  enableNight();
}

toggle.addEventListener("click", () => {
  nightMode = localStorage.getItem("nightMode");
  if (nightMode !== "enabled") {
    enableNight();
  } else disableNight();
});

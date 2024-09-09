document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.background = "rgba(0, 0, 0, 0.9)";
    } else {
      header.style.background = "rgba(0, 0, 0, 0.8)";
    }
  });

  // Add quirky AI product icons to hero background
  const heroSection = document.querySelector(".hero");
  const icons = ["🤖", "🍞", "🧊", "💡", "🎮"];

  function createIcon() {
    const icon = document.createElement("span");
    icon.textContent = icons[Math.floor(Math.random() * icons.length)];
    icon.style.position = "absolute";
    icon.style.fontSize = "2rem";
    icon.style.opacity = "0.3";
    icon.style.left = Math.random() * 100 + "vw";
    icon.style.top = Math.random() * 100 + "vh";
    icon.style.animation = `fall ${5 + Math.random() * 10}s linear infinite`;
    heroSection.appendChild(icon);

    setTimeout(() => {
      heroSection.removeChild(icon);
    }, 15000);
  }

  setInterval(createIcon, 2000);
});

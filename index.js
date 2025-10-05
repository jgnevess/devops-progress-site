document.addEventListener("DOMContentLoaded", () => {
  const checks = document.querySelectorAll('input[type="checkbox"]');

  const concluidos = [1, 2, 3, 4];

  checks.forEach((checkbox) => {
    const id = parseInt(checkbox.id, 10);
    checkbox.checked = concluidos.includes(id);

    checkbox.addEventListener('click', e => e.preventDefault());
  });
});

const html = document.documentElement;
const icon = document.getElementById("themeIcon");

document.getElementById("toggleTheme").addEventListener("click", () => {
  const atual = html.getAttribute("data-bs-theme");
  const novo = atual === "dark" ? "light" : "dark";
  html.setAttribute("data-bs-theme", novo);
  icon.className = novo === "dark" ? "bi bi-sun" : "bi bi-moon";
});;

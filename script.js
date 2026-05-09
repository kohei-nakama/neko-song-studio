const header = document.querySelector("[data-header]");

if (header) {
  const syncHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
}

document.querySelectorAll('a[target="_blank"][href^="http"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const opened = window.open(link.href, "_blank", "noopener,noreferrer");

    if (!opened) {
      window.location.href = link.href;
    }
  });
});

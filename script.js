const header = document.querySelector("[data-header]");

if (header) {
  const syncHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
}

const catGameUrl = "cat-game/index.html";

const mountCatGameLink = () => {
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelector(".nav-links");
  const navCta = document.querySelector(".nav-cta");
  const heroSocial = document.querySelector(".hero-social");

  if (!nav || !navLinks || !navCta || document.querySelector("[data-cat-game-link]")) {
    return;
  }

  const style = document.createElement("style");
  style.textContent = `
    .nav-actions {
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
      gap: 10px;
      margin-left: auto;
    }

    .nav-game {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 42px;
      padding: 9px 18px;
      color: var(--ink);
      background: var(--sun);
      border: 1px solid rgba(45, 33, 25, 0.12);
      border-radius: 999px;
      text-decoration: none;
      font-weight: 900;
      transition: transform 180ms ease, background 180ms ease;
    }

    .nav-game:hover,
    .nav-game:focus-visible {
      background: var(--paper-strong);
      transform: translateY(-2px);
    }

    .social-pill.game {
      color: var(--ink);
      background: rgba(223, 241, 231, 0.96);
    }

    @media (max-width: 980px) {
      .nav-actions {
        order: 2;
      }
    }

    @media (max-width: 640px) {
      .nav-actions {
        width: 100%;
        justify-content: stretch;
        gap: 8px;
      }

      .nav-actions .nav-game,
      .nav-actions .nav-cta {
        flex: 1 1 0;
        min-width: 0;
      }
    }
  `;
  document.head.append(style);

  const navGameTextLink = document.createElement("a");
  navGameTextLink.href = catGameUrl;
  navGameTextLink.textContent = "ねこゲーム";
  navGameTextLink.setAttribute("data-cat-game-link", "nav-text");
  navLinks.append(navGameTextLink);

  const actions = document.createElement("div");
  actions.className = "nav-actions";
  navCta.replaceWith(actions);

  const navGameButton = document.createElement("a");
  navGameButton.className = "nav-game";
  navGameButton.href = catGameUrl;
  navGameButton.textContent = "ゲームで遊ぶ";
  navGameButton.setAttribute("data-cat-game-link", "nav-button");

  actions.append(navGameButton, navCta);

  if (heroSocial) {
    const heroGameLink = document.createElement("a");
    heroGameLink.className = "social-pill game";
    heroGameLink.href = catGameUrl;
    heroGameLink.textContent = "ねこゲームで遊ぶ";
    heroGameLink.setAttribute("aria-label", "ねこゲームで遊ぶ");
    heroGameLink.setAttribute("data-cat-game-link", "hero");

    const fortuneLink = heroSocial.querySelector(".fortune");
    if (fortuneLink) {
      fortuneLink.after(heroGameLink);
    } else {
      heroSocial.append(heroGameLink);
    }
  }
};

mountCatGameLink();

document.querySelectorAll('a[target="_blank"][href^="http"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const opened = window.open(link.href, "_blank", "noopener,noreferrer");

    if (!opened) {
      window.location.href = link.href;
    }
  });
});

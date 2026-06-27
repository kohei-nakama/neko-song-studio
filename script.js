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

const loginStorageKey = "nekoSongStudioUser";

const mountLoginUi = () => {
  const nav = document.querySelector(".nav");
  const navCta = document.querySelector(".nav-cta");

  if (!nav || !navCta || document.querySelector("[data-login-open]")) {
    return null;
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

    .login-button,
    .user-chip button,
    .login-close {
      font: inherit;
      cursor: pointer;
    }

    .login-button {
      min-height: 42px;
      padding: 9px 17px;
      color: var(--ink);
      background: rgba(255, 250, 242, 0.82);
      border: 1px solid rgba(45, 33, 25, 0.14);
      border-radius: 999px;
      font-weight: 900;
      transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
    }

    .login-button:hover,
    .login-button:focus-visible {
      background: var(--paper-strong);
      border-color: rgba(233, 120, 53, 0.42);
      transform: translateY(-2px);
    }

    .user-chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-height: 42px;
      padding: 5px 6px 5px 14px;
      color: var(--ink);
      background: rgba(255, 250, 242, 0.9);
      border: 1px solid rgba(63, 127, 111, 0.25);
      border-radius: 999px;
      box-shadow: 0 10px 24px rgba(66, 44, 42, 0.08);
    }

    .user-chip[hidden],
    .login-modal[hidden] {
      display: none;
    }

    .user-chip span {
      max-width: 10rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.88rem;
      font-weight: 900;
    }

    .user-chip button {
      min-height: 32px;
      padding: 6px 11px;
      color: var(--paper-strong);
      background: var(--sage);
      border: 0;
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 900;
    }

    .login-modal {
      position: fixed;
      inset: 0;
      z-index: 50;
      display: grid;
      place-items: center;
      padding: 22px;
    }

    .login-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(45, 33, 25, 0.44);
      backdrop-filter: blur(8px);
    }

    .login-card {
      position: relative;
      width: min(460px, 100%);
      padding: 30px;
      border: 1px solid rgba(45, 33, 25, 0.16);
      border-radius: 28px;
      background: linear-gradient(145deg, rgba(255, 250, 242, 0.98), rgba(255, 243, 226, 0.94)), var(--paper-strong);
      box-shadow: 0 28px 70px rgba(45, 33, 25, 0.28);
    }

    .login-card h2 {
      margin: 0;
      font-size: 2rem;
      line-height: 1.22;
      letter-spacing: 0;
    }

    .login-close {
      position: absolute;
      top: 14px;
      right: 14px;
      width: 40px;
      height: 40px;
      display: grid;
      place-items: center;
      color: var(--ink);
      background: rgba(255, 255, 255, 0.72);
      border: 1px solid rgba(45, 33, 25, 0.14);
      border-radius: 50%;
      font-size: 1.3rem;
      line-height: 1;
    }

    .login-form {
      display: grid;
      gap: 14px;
      margin-top: 22px;
    }

    .login-status {
      min-height: 1.6em;
      margin: 0;
      color: var(--sage);
      font-size: 0.88rem;
      font-weight: 900;
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

      .nav-actions .nav-cta,
      .login-button,
      .user-chip {
        flex: 1 1 0;
        min-width: 0;
      }

      .user-chip {
        justify-content: space-between;
      }

      .user-chip span {
        max-width: 8rem;
      }

      .login-card {
        padding: 24px;
        border-radius: 24px;
      }

      .login-card h2 {
        font-size: 1.72rem;
      }
    }
  `;
  document.head.append(style);

  const actions = document.createElement("div");
  actions.className = "nav-actions";
  actions.setAttribute("data-login-actions", "");

  navCta.replaceWith(actions);
  actions.append(navCta);

  const loginButton = document.createElement("button");
  loginButton.className = "login-button";
  loginButton.type = "button";
  loginButton.setAttribute("data-login-open", "");
  loginButton.textContent = "ログイン";

  const userChip = document.createElement("div");
  userChip.className = "user-chip";
  userChip.setAttribute("data-user-chip", "");
  userChip.hidden = true;

  const userName = document.createElement("span");
  userName.setAttribute("data-user-name", "");
  userName.textContent = "メンバー";

  const logoutButton = document.createElement("button");
  logoutButton.type = "button";
  logoutButton.setAttribute("data-login-logout", "");
  logoutButton.textContent = "ログアウト";

  userChip.append(userName, logoutButton);
  actions.append(loginButton, userChip);

  const modal = document.createElement("div");
  modal.className = "login-modal";
  modal.setAttribute("data-login-modal", "");
  modal.hidden = true;
  modal.innerHTML = `
    <div class="login-backdrop" data-login-close></div>
    <section class="login-card" role="dialog" aria-modal="true" aria-labelledby="login-title">
      <button class="login-close" type="button" aria-label="閉じる" data-login-close>×</button>
      <p class="section-kicker">MEMBER LOGIN</p>
      <h2 id="login-title">猫ソングスタジオにログイン</h2>
      <form class="login-form" data-login-form>
        <label class="form-field">
          お名前
          <input name="name" type="text" autocomplete="name" required>
        </label>
        <label class="form-field">
          メールアドレス
          <input name="email" type="email" autocomplete="email" required>
        </label>
        <button class="request-submit" type="submit">ログイン</button>
        <p class="login-status" data-login-status aria-live="polite"></p>
      </form>
    </section>
  `;
  document.body.append(modal);

  return {
    loginButton,
    loginForm: modal.querySelector("[data-login-form]"),
    loginModal: modal,
    loginStatus: modal.querySelector("[data-login-status]"),
    logoutButton,
    userChip,
    userName,
  };
};

const loginRefs = mountLoginUi();

const readStoredUser = () => {
  try {
    const raw = window.localStorage.getItem(loginStorageKey);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
};

const writeStoredUser = (user) => {
  try {
    window.localStorage.setItem(loginStorageKey, JSON.stringify(user));
    return true;
  } catch (error) {
    return false;
  }
};

const removeStoredUser = () => {
  try {
    window.localStorage.removeItem(loginStorageKey);
  } catch (error) {
    // A failed logout storage cleanup should not block the visible UI state.
  }
};

if (loginRefs) {
  const {
    loginButton,
    loginForm,
    loginModal,
    loginStatus,
    logoutButton,
    userChip,
    userName,
  } = loginRefs;

  const syncLoginUi = () => {
    const user = readStoredUser();

    if (user) {
      loginButton.hidden = true;
      userChip.hidden = false;
      userName.textContent = `${user.name}さん`;
      return;
    }

    loginButton.hidden = false;
    userChip.hidden = true;
    userName.textContent = "メンバー";
  };

  const openLoginModal = () => {
    loginModal.hidden = false;
    loginStatus.textContent = "";
    window.setTimeout(() => {
      const firstInput = loginForm.querySelector("input");
      if (firstInput) {
        firstInput.focus();
      }
    }, 0);
  };

  const closeLoginModal = () => {
    loginModal.hidden = true;
    if (!loginButton.hidden) {
      loginButton.focus();
    }
  };

  syncLoginUi();

  loginButton.addEventListener("click", openLoginModal);

  loginModal.querySelectorAll("[data-login-close]").forEach((target) => {
    target.addEventListener("click", closeLoginModal);
  });

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();

    if (!name || !email) {
      loginStatus.textContent = "入力内容を確認してください。";
      return;
    }

    const saved = writeStoredUser({
      name,
      email,
      signedInAt: new Date().toISOString(),
    });

    if (!saved) {
      loginStatus.textContent = "保存できませんでした。";
      return;
    }

    loginStatus.textContent = "ログインしました。";
    syncLoginUi();
    window.setTimeout(closeLoginModal, 500);
  });

  logoutButton.addEventListener("click", () => {
    removeStoredUser();
    syncLoginUi();
    loginButton.focus();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !loginModal.hidden) {
      closeLoginModal();
    }
  });
}

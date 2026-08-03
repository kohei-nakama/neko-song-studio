const header = document.querySelector('[data-header]');

if (header) {
  const syncHeader = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  syncHeader();
  window.addEventListener('scroll', syncHeader, { passive: true });
}

const catGameUrl = 'cat-game/index.html';

const mountCatGameLink = () => {
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelector('.nav-links');
  const navCta = document.querySelector('.nav-cta');
  const heroSocial = document.querySelector('.hero-social');

  if (!nav || !navLinks || !navCta || document.querySelector('[data-cat-game-link]')) {
    return;
  }

  const style = document.createElement('style');
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

  const navGameTextLink = document.createElement('a');
  navGameTextLink.href = catGameUrl;
  navGameTextLink.textContent = 'ねこゲーム';
  navGameTextLink.setAttribute('data-cat-game-link', 'nav-text');
  navLinks.append(navGameTextLink);

  const actions = document.createElement('div');
  actions.className = 'nav-actions';
  navCta.replaceWith(actions);

  const navGameButton = document.createElement('a');
  navGameButton.className = 'nav-game';
  navGameButton.href = catGameUrl;
  navGameButton.textContent = 'ゲームで遊ぶ';
  navGameButton.setAttribute('data-cat-game-link', 'nav-button');

  actions.append(navGameButton, navCta);

  if (heroSocial) {
    const heroGameLink = document.createElement('a');
    heroGameLink.className = 'social-pill game';
    heroGameLink.href = catGameUrl;
    heroGameLink.textContent = 'ねこゲームで遊ぶ';
    heroGameLink.setAttribute('aria-label', 'ねこゲームで遊ぶ');
    heroGameLink.setAttribute('data-cat-game-link', 'hero');

    const fortuneLink = heroSocial.querySelector('.fortune');
    if (fortuneLink) {
      fortuneLink.after(heroGameLink);
    } else {
      heroSocial.append(heroGameLink);
    }
  }
};

const mountCatGameNews = () => {
  const newsList = document.querySelector('.news-list');
  if (!newsList) return;

  const hasAnnouncement = Array.from(newsList.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'ねこスナックランを追加しました');
  if (hasAnnouncement) return;

  const article = document.createElement('article');
  article.className = 'news-card news-card-featured';
  article.setAttribute('data-cat-game-news', '');
  article.innerHTML = `
    <div class='news-meta'>
      <time datetime='2026-07-05'>2026.07.05</time>
      <span>GAME</span>
    </div>
    <h3>ねこスナックランを追加しました</h3>
    <p>
      魚を集めてスコアを伸ばすミニゲーム「ねこスナックラン」を公開しました。
      Easy / Normal / Hard の3つのモードで遊べます。
      <a href='cat-game/index.html'>ゲームで遊ぶ</a>
    </p>
  `;
  newsList.prepend(article);
};

mountCatGameLink();
mountCatGameNews();

document.querySelectorAll('a[target=_blank][href^=http]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const opened = window.open(link.href, '_blank', 'noopener,noreferrer');

    if (!opened) {
      window.location.href = link.href;
    }
  });
});

const originalSongForm = document.querySelector('[data-original-song-form]');

if (originalSongForm) {
  const confirmation = document.querySelector('[data-request-confirmation]');
  const summaryList = document.querySelector('[data-summary-list]');
  const formStatus = document.querySelector('[data-form-status]');
  const confirmationMessage = document.querySelector('[data-confirmation-message]');
  const confirmationStatus = document.querySelector('[data-confirmation-status]');
  const copySubmissionButton = document.querySelector('[data-copy-submission]');
  const downloadSubmissionButton = document.querySelector('[data-download-submission]');
  const editSubmissionButton = document.querySelector('[data-edit-submission]');
  const monitorStatusTitle = document.querySelector('[data-monitor-status-title]');
  const monitorStatusText = document.querySelector('[data-monitor-status-text]');
  const receptionPaused = document.querySelector('[data-reception-paused]');
  const monitorClosed = document.querySelector('[data-monitor-closed]');
  const submissionStorageKey = 'nekoSongOriginalSongDemoSubmissions';
  const originalSongSubmissionConfig = {
    // TODO: 本番運用時は Googleフォーム、Formspree、Google Apps Script などのPOST先を設定する
    endpoint: '',
    // TODO: 本番運用時は送信先側で受付件数を管理し、この値へ反映する
    acceptedCount: null,
    enableLocalDemo: false,
    monitorLimit: 3,
  };
  let latestSubmission = null;
  const fieldLabels = {
    requestId: '受付番号',
    createdAt: '受付日時',
    ownerName: '飼い主さんのお名前またはニックネーム',
    email: '連絡先メールアドレス',
    catName: '猫ちゃんのお名前',
    age: '年齢',
    sex: '性別',
    breed: '猫種',
    personality: '猫ちゃんの性格',
    memory: '一番印象に残っている思い出',
    favoriteFood: '好きな食べ物',
    favoritePlace: 'お気に入りの場所',
    messageToCat: '猫ちゃんに伝えたい言葉',
    wordsForSong: '曲に入れたい言葉',
    mood: '希望する曲の雰囲気',
    plan: '希望プラン',
    otherRequests: 'その他の希望',
    publishPermission: '完成作品の紹介可否',
    termsAgreement: '利用規約・注意事項への同意',
  };

  const createRequestId = () => {
    const datePart = new Date().toISOString().slice(0, 10).replaceAll('-', '');
    const randomPart = Math.random().toString(36).slice(2, 7).toUpperCase();
    return `NSS-${datePart}-${randomPart}`;
  };

  const readDemoSubmissions = () => {
    try {
      const submissions = JSON.parse(localStorage.getItem(submissionStorageKey) || '[]');
      return Array.isArray(submissions) ? submissions : [];
    } catch {
      return [];
    }
  };

  const getAcceptedCount = () => {
    if (Number.isFinite(originalSongSubmissionConfig.acceptedCount)) {
      return originalSongSubmissionConfig.acceptedCount;
    }

    return originalSongSubmissionConfig.enableLocalDemo ? readDemoSubmissions().length : 0;
  };

  const getRemainingSlots = () =>
    Math.max(originalSongSubmissionConfig.monitorLimit - getAcceptedCount(), 0);

  const isReceptionReady = () =>
    Boolean(originalSongSubmissionConfig.endpoint) || originalSongSubmissionConfig.enableLocalDemo;

  const isMonitorClosed = () => getRemainingSlots() <= 0;

  const setFormDisabled = (disabled) => {
    originalSongForm.querySelectorAll('input, textarea, select, button').forEach((field) => {
      field.disabled = disabled;
    });
  };

  const renderMonitorState = ({ focusPaused = false, focusClosed = false, keepConfirmation = false } = {}) => {
    const ready = isReceptionReady();
    const remainingSlots = getRemainingSlots();
    const closed = remainingSlots <= 0;

    if (!ready) {
      if (monitorStatusTitle) {
        monitorStatusTitle.textContent = '受付準備中';
      }

      if (monitorStatusText) {
        monitorStatusText.textContent = '安全な送信先の設定が完了するまで、フォーム入力は停止しています。';
      }

      originalSongForm.hidden = true;
      setFormDisabled(true);

      if (receptionPaused) {
        receptionPaused.hidden = false;
      }

      if (monitorClosed) {
        monitorClosed.hidden = true;
      }

      if (confirmation) {
        confirmation.hidden = true;
      }

      if (focusPaused && receptionPaused) {
        receptionPaused.focus({ preventScroll: true });
        receptionPaused.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      return;
    }

    if (receptionPaused) {
      receptionPaused.hidden = true;
    }

    if (monitorStatusTitle) {
      monitorStatusTitle.textContent = closed
        ? 'モニター受付は終了しました'
        : `残り受付枠：${remainingSlots}名`;
    }

    if (monitorStatusText) {
      monitorStatusText.textContent = closed
        ? `先着${originalSongSubmissionConfig.monitorLimit}名に達したため、現在は受付終了画面を表示しています。`
        : `先着${originalSongSubmissionConfig.monitorLimit}名限定です。残り${remainingSlots}名まで受付できます。`;
    }

    originalSongForm.hidden = closed;
    setFormDisabled(closed);

    if (monitorClosed) {
      monitorClosed.hidden = !closed;
    }

    if (closed && confirmation && !keepConfirmation) {
      confirmation.hidden = true;
    }

    if (closed && focusClosed && monitorClosed) {
      monitorClosed.focus({ preventScroll: true });
      monitorClosed.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const collectSubmission = () => {
    const formData = new FormData(originalSongForm);
    const values = Object.fromEntries(
      Object.keys(fieldLabels).map((name) => [name, String(formData.get(name) || '').trim()])
    );

    return {
      ...values,
      requestId: createRequestId(),
      createdAt: new Date().toLocaleString('ja-JP', { dateStyle: 'medium', timeStyle: 'short' }),
      storageMode: originalSongSubmissionConfig.endpoint ? 'configured-endpoint' : 'demo-local',
    };
  };

  const submitOriginalSongRequest = async (submission) => {
    if (!originalSongSubmissionConfig.endpoint) {
      return {
        savedLocally: originalSongSubmissionConfig.enableLocalDemo
          ? saveDemoSubmission(submission)
          : false,
      };
    }

    const response = await fetch(originalSongSubmissionConfig.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submission),
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const result = await response.json().catch(() => ({}));

    if (Number.isFinite(result.acceptedCount)) {
      originalSongSubmissionConfig.acceptedCount = result.acceptedCount;
    }

    if (result.closed === true) {
      originalSongSubmissionConfig.acceptedCount = originalSongSubmissionConfig.monitorLimit;
    }

    return {
      savedLocally: false,
      result,
    };
  };

  const saveDemoSubmission = (submission) => {
    try {
      const previous = readDemoSubmissions();
      previous.unshift(submission);
      localStorage.setItem(submissionStorageKey, JSON.stringify(previous.slice(0, 20)));
      return true;
    } catch {
      return false;
    }
  };

  const submissionToText = (submission) =>
    Object.entries(fieldLabels)
      .map(([name, label]) => {
        const value = submission[name];
        return value ? `${label}: ${value}` : '';
      })
      .filter(Boolean)
      .join('\n');

  const renderSubmissionSummary = (submission) => {
    summaryList.innerHTML = '';

    Object.entries(fieldLabels).forEach(([name, label]) => {
      const value = submission[name];
      if (!value) return;

      const term = document.createElement('dt');
      term.textContent = label;

      const description = document.createElement('dd');
      description.textContent = value;

      summaryList.append(term, description);
    });
  };

  const downloadSubmission = (submission) => {
    const blob = new Blob([JSON.stringify(submission, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${submission.requestId}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  originalSongForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!isReceptionReady()) {
      if (formStatus) {
        formStatus.textContent = '現在は受付準備中です。安全な送信先の設定後に受付を開始します。';
      }
      renderMonitorState({ focusPaused: true });
      return;
    }

    if (isMonitorClosed()) {
      if (formStatus) {
        formStatus.textContent = '先着3名のモニター受付は終了しました。';
      }
      renderMonitorState({ focusClosed: true });
      return;
    }

    if (!originalSongForm.checkValidity()) {
      if (formStatus) {
        formStatus.textContent = '未入力の必須項目があります。表示された項目を確認してください。';
      }
      originalSongForm.reportValidity();
      return;
    }

    if (!confirmation || !summaryList) {
      return;
    }

    latestSubmission = collectSubmission();
    let submissionResult;

    try {
      submissionResult = await submitOriginalSongRequest(latestSubmission);
    } catch {
      if (formStatus) {
        formStatus.textContent = '送信できませんでした。時間をおいてもう一度お試しください。';
      }
      return;
    }

    const remainingSlots = getRemainingSlots();
    const reachedLimit = remainingSlots <= 0;
    renderSubmissionSummary(latestSubmission);
    confirmation.hidden = false;

    if (confirmationMessage) {
      confirmationMessage.textContent = reachedLimit
        ? `以下の内容で受付しました。これで先着${originalSongSubmissionConfig.monitorLimit}名に達したため、申込フォームは受付終了画面に切り替わりました。`
        : originalSongSubmissionConfig.endpoint
        ? '以下の内容で受付しました。確認後、メールでご連絡します。'
        : '以下の内容でデモ受付しました。現在、このページから外部には送信されません。';
    }

    if (formStatus) {
      formStatus.textContent = originalSongSubmissionConfig.endpoint
        ? `受付番号 ${latestSubmission.requestId} を作成しました。残り受付枠は${remainingSlots}名です。`
        : submissionResult.savedLocally
        ? `デモ受付番号 ${latestSubmission.requestId} を作成し、このブラウザ内に保存しました。残り受付枠は${remainingSlots}名です。`
        : `デモ受付番号 ${latestSubmission.requestId} を作成しました。ブラウザ保存は利用できませんでした。`;
    }

    renderMonitorState({ keepConfirmation: true });
    confirmation.focus({ preventScroll: true });
    confirmation.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  if (copySubmissionButton) {
    copySubmissionButton.addEventListener('click', async () => {
      if (!latestSubmission) return;

      try {
        await navigator.clipboard.writeText(submissionToText(latestSubmission));
        if (confirmationStatus) {
          confirmationStatus.textContent = '受付内容をコピーしました。';
        }
      } catch {
        if (confirmationStatus) {
          confirmationStatus.textContent = 'コピーできませんでした。JSON保存をお試しください。';
        }
      }
    });
  }

  if (downloadSubmissionButton) {
    downloadSubmissionButton.addEventListener('click', () => {
      if (!latestSubmission) return;
      downloadSubmission(latestSubmission);
      if (confirmationStatus) {
        confirmationStatus.textContent = '受付内容のJSONファイルを保存しました。';
      }
    });
  }

  if (editSubmissionButton) {
    editSubmissionButton.addEventListener('click', () => {
      originalSongForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const firstInput = originalSongForm.querySelector('input, textarea, select');
      if (firstInput) {
        firstInput.focus({ preventScroll: true });
      }
    });
  }

  renderMonitorState();
}

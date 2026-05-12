const STUDIO_URL = "https://kohei-nakama.github.io/neko-song-studio/";
const FORTUNE_URL = `${STUDIO_URL}neko-uranai.html`;
const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@nekosong_kouhei";
const X_PROFILE_URL = "https://x.com/nakama_kohei";
const X_INTENT_URL = "https://twitter.com/intent/tweet";
const STORAGE_KEY = "nekoUranaiProfile";

const catTypes = [
  {
    name: "まねき猫",
    emoji: "😺",
    message: "人との縁をふわっと呼び込む日。ありがとうを先に置くと流れがよくなります。",
  },
  {
    name: "黒猫",
    emoji: "🐈‍⬛",
    message: "直感が冴える日。少し不思議に感じた選択ほど、今のあなたに似合います。",
  },
  {
    name: "白猫",
    emoji: "🤍",
    message: "気持ちを整えるほど運が澄んでいく日。机やスマホ画面を少し軽くしてみて。",
  },
  {
    name: "三毛猫",
    emoji: "🐱",
    message: "いろんな魅力が自然に出る日。迷ったら、楽しいほうを一口だけ試しましょう。",
  },
  {
    name: "茶トラ",
    emoji: "🧡",
    message: "あたたかい勢いが味方の日。気になっていた連絡や用事に着手する好機です。",
  },
  {
    name: "サバトラ",
    emoji: "🐈",
    message: "観察力が光る日。周りをよく見るほど、次の一手がすっきり決まります。",
  },
  {
    name: "キジトラ",
    emoji: "🌿",
    message: "足元を固める日。小さな習慣の積み重ねが、あとで大きな安心に変わります。",
  },
  {
    name: "長毛猫",
    emoji: "☁️",
    message: "ゆったり構えるほど魅力が伝わる日。焦らず、丁寧な言葉を選んで吉。",
  },
  {
    name: "子猫",
    emoji: "🍼",
    message: "新しいことに甘えてよい日。知らないことを知らないと言える強さがあります。",
  },
  {
    name: "眠り猫",
    emoji: "💤",
    message: "休むほど運が戻る日。詰め込みすぎず、余白を作ることが今日の近道です。",
  },
  {
    name: "忍者猫",
    emoji: "🥷",
    message: "静かな集中が武器になる日。目立たない準備が、あとでちゃんと効いてきます。",
  },
  {
    name: "王様猫",
    emoji: "👑",
    message: "自分のペースを大切にしたい日。堂々と選ぶ姿に、周りも安心してついてきます。",
  },
  {
    name: "甘えんぼ猫",
    emoji: "🫶",
    message: "素直な気持ちが伝わりやすい日。小さな甘えは、関係をやわらかくします。",
  },
  {
    name: "科学者猫",
    emoji: "🔭",
    message: "試してみるほど発見がある日。気になったことは、ひとつだけ深掘りしてみて。",
  },
  {
    name: "旅する猫",
    emoji: "🧳",
    message: "いつもと違う道にヒントがある日。小さな寄り道が気分を入れ替えてくれます。",
  },
  {
    name: "祭り猫",
    emoji: "🏮",
    message: "にぎやかな空気が味方の日。楽しい予定や会話に、運の入口があります。",
  },
  {
    name: "応援猫",
    emoji: "📣",
    message: "誰かを励ます声が、自分にも返ってくる日。明るい一言を先に届けましょう。",
  },
];

const luckyColors = [
  "ミルクホワイト",
  "ひだまりオレンジ",
  "ミントグリーン",
  "夜空ブラック",
  "さくらピンク",
  "カフェラテベージュ",
  "鈴のゴールド",
  "雨あがりブルー",
  "肉球ピンク",
  "毛布ブラウン",
  "月あかりシルバー",
  "若草グリーン",
];

const luckyFoods = [
  "焼きたてトースト",
  "クリームソーダ",
  "鮭おにぎり",
  "プリン",
  "ミルクティー",
  "カレー",
  "チーズケーキ",
  "たまごサンド",
  "ホットココア",
  "バナナ",
  "抹茶アイス",
  "ナポリタン",
];

const luckyActions = [
  "静かに一歩進む",
  "朝いちばんに窓を開ける",
  "気になる曲を最後まで聴く",
  "バッグの中を整える",
  "短いメッセージを送る",
  "5分だけ散歩する",
  "あたたかい飲み物で休む",
  "今日の予定をひとつ減らす",
  "好きな色を身につける",
  "小さな親切を先にする",
  "夜は早めに画面を閉じる",
  "思いつきをメモする",
];

const dailyWords = [
  "爪を研ぐように、準備もリズムよく。",
  "丸くなる時間が、次のジャンプを作ります。",
  "気まぐれに見える選択にも、ちゃんと理由があります。",
  "今日は背伸びより、しなやかさを大切に。",
  "鈴の音くらい小さな合図を見逃さないで。",
  "よいご縁は、やわらかい声のほうへ寄ってきます。",
  "眠る前の自分に、やさしい一言を置いてください。",
  "ひなたを探すように、心地よい場所を選びましょう。",
  "急がない返事が、関係をあたためることもあります。",
  "今日は完璧より、かわいげのある前進で十分です。",
  "静かな集中は、思った以上に遠くまで届きます。",
  "あなたの好きは、ちゃんと今日の道しるべです。",
];

const nekoNinjaStreamingLinks = [
  {
    label: "Apple Music",
    url: "https://music.apple.com/jp/album/%E3%83%8D%E3%82%B3%E5%BF%8D%E8%80%85-single/1891265005",
  },
  {
    label: "Spotify",
    url: "https://open.spotify.com/track/2QS5tsBOAJFI41axMPDWZD?si=Y-8i1S11R7CDhsNTdiLSRw",
  },
  {
    label: "YouTube Music",
    url: "https://music.youtube.com/channel/UCDWZI7p2WOO-w00rtP6CKkQ?si=VKP1KS6DE42R7_QW",
  },
  {
    label: "Amazon Music",
    url: "https://music.amazon.co.jp/albums/B0GW8LS2RV?ref=dm_sh_L1YtPNEgkKqeNAVwYoi6ZciY6",
  },
];

const cuteSong = {
  title: "ネコバナナ",
  theme: "かわいい系の猫",
  description: "言葉の響きだけでも楽しい、かわいい全振りの猫ソングです。気分を少し軽くしたい日にどうぞ。",
  youtubeUrl: "https://www.youtube.com/@nekosong_kouhei/search?query=%E3%83%8D%E3%82%B3%E3%83%90%E3%83%8A%E3%83%8A",
  streamingUrl: "",
  streamingLinks: [],
  status: "available",
  requestMessage: "",
};

const healingSong = {
  title: "夜に聴きたい癒し系の猫ソング",
  theme: "休息と癒し",
  description: "眠る前や、少し疲れた日に似合う猫ソングです。今日の余白をやさしく取り戻してくれます。",
  youtubeUrl: "https://www.youtube.com/@nekosong_kouhei/search?query=%E7%99%92%E3%81%97",
  streamingUrl: "",
  streamingLinks: [],
  status: "available",
  requestMessage: "",
};

const songCatalogByCatType = {
  忍者猫: {
    title: "ネコ忍者",
    theme: "静かな集中とチャンス",
    description: "静かにチャンスを狙うあなたにぴったりの、少しミステリアスでかっこいい猫ソングです。",
    youtubeUrl: YOUTUBE_CHANNEL_URL,
    streamingUrl: nekoNinjaStreamingLinks[0].url,
    streamingLinks: nekoNinjaStreamingLinks,
    status: "available",
    requestMessage: "",
  },
  眠り猫: healingSong,
  甘えんぼ猫: {
    title: "夜だけ甘えんぼになる猫",
    theme: "夜の素直さ",
    description: "夜になると少し素直になる猫の、やさしくて甘いショートソング。人間関係運をあたためたい日にぴったりです。",
    youtubeUrl: "https://youtu.be/XkligCLwXvM",
    streamingUrl: "",
    streamingLinks: [],
    status: "available",
    requestMessage: "",
  },
  科学者猫: {
    title: "科学者と猫",
    theme: "学びと発見",
    description: "AIやロケット工学の学びを、猫の歌で楽しく届けるシリーズ。好奇心が動く日におすすめです。",
    youtubeUrl: "https://youtu.be/eM5e73EmU8s",
    streamingUrl: "",
    streamingLinks: [],
    status: "available",
    requestMessage: "",
  },
  子猫: {
    title: "子どもの日ねこの歌",
    theme: "未来への応援",
    description: "未来の子どもたちを猫がそっと応援する、季節の物語。新しい一歩を踏み出す日に似合います。",
    youtubeUrl: "https://www.youtube.com/@nekosong_kouhei/search?query=%E5%AD%90%E3%81%A9%E3%82%82%E3%81%AE%E6%97%A5",
    streamingUrl: "",
    streamingLinks: [],
    status: "available",
    requestMessage: "",
  },
  応援猫: {
    title: "子どもの日ねこの歌",
    theme: "未来への応援",
    description: "誰かを励ましたい気分の日に。未来へ向かう背中を、猫がそっと押してくれる一曲です。",
    youtubeUrl: "https://www.youtube.com/@nekosong_kouhei/search?query=%E5%AD%90%E3%81%A9%E3%82%82%E3%81%AE%E6%97%A5",
    streamingUrl: "",
    streamingLinks: [],
    status: "available",
    requestMessage: "",
  },
  白猫: cuteSong,
  三毛猫: cuteSong,
  茶トラ: cuteSong,
  サバトラ: healingSong,
  キジトラ: healingSong,
  長毛猫: healingSong,
  まねき猫: {
    title: "まねき猫の福ふくソング",
    theme: "幸運とご縁",
    description: "このテーマの猫ソングはまだ制作中です。ご縁を呼び込む明るい曲になりそうです。",
    youtubeUrl: YOUTUBE_CHANNEL_URL,
    streamingUrl: "",
    streamingLinks: [],
    status: "missing",
    requestMessage: "まねき猫をテーマにした猫ソングを聴いてみたいです！",
  },
  王様猫: {
    title: "王様猫のごきげん行進曲",
    theme: "堂々としたマイペース",
    description: "このテーマの猫ソングはまだ制作中です。ゆったり堂々と歩く王様猫の曲、きっと似合います。",
    youtubeUrl: YOUTUBE_CHANNEL_URL,
    streamingUrl: "",
    streamingLinks: [],
    status: "missing",
    requestMessage: "王様猫をテーマにした猫ソングを聴いてみたいです！",
  },
  黒猫: {
    title: "黒猫ミステリーナイト",
    theme: "直感と夜の不思議",
    description: "このテーマの猫ソングはまだ制作中です。夜道をすっと歩く黒猫の世界、コメントで育ててください。",
    youtubeUrl: YOUTUBE_CHANNEL_URL,
    streamingUrl: "",
    streamingLinks: [],
    status: "missing",
    requestMessage: "黒猫をテーマにした猫ソングを聴いてみたいです！",
  },
  旅する猫: {
    title: "旅する猫のロードソング",
    theme: "寄り道と小さな冒険",
    description: "このテーマの猫ソングはまだ制作中です。旅先で出会う景色と猫の物語、いつか聴いてみたいテーマです。",
    youtubeUrl: YOUTUBE_CHANNEL_URL,
    streamingUrl: "",
    streamingLinks: [],
    status: "missing",
    requestMessage: "旅する猫をテーマにした猫ソングを聴いてみたいです！",
  },
  祭り猫: {
    title: "祭り猫のおどりうた",
    theme: "にぎやかさと祝福",
    description: "このテーマの猫ソングはまだ制作中です。鈴や太鼓が似合う、楽しい猫ソングになりそうです。",
    youtubeUrl: YOUTUBE_CHANNEL_URL,
    streamingUrl: "",
    streamingLinks: [],
    status: "missing",
    requestMessage: "祭り猫をテーマにした猫ソングを聴いてみたいです！",
  },
};

const form = document.querySelector("#fortune-form");
const nicknameInput = document.querySelector("#nickname");
const birthMonthInput = document.querySelector("#birth-month");
const favoriteCatInput = document.querySelector("#favorite-cat");
const resultSection = document.querySelector("#result");
const retryButton = document.querySelector("#retry-button");
const shareButton = document.querySelector("#share-button");
const copyRequestButton = document.querySelector("#copy-request-button");
const formMessage = document.querySelector("#form-message");

let currentResult = null;

function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function hashString(value) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function numberFromSeed(seed, salt) {
  return hashString(`${seed}:${salt}`);
}

function pickFrom(list, seed, salt) {
  return list[numberFromSeed(seed, salt) % list.length];
}

function scoreFrom(seed, salt) {
  return (numberFromSeed(seed, salt) % 5) + 1;
}

function stars(score) {
  return `${"★".repeat(score)}${"☆".repeat(5 - score)}`;
}

function loadSavedProfile() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return;
    nicknameInput.value = saved.nickname || "";
    birthMonthInput.value = saved.birthMonth || "";
    favoriteCatInput.value = saved.favoriteCat || "";
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function saveProfile(profile) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch {
    // localStorageが使えない環境でも、占い結果の表示は止めない。
  }
}

function showFormMessage(message, target) {
  formMessage.textContent = message;
  if (target) {
    target.focus();
  }
}

function clearFormMessage() {
  formMessage.textContent = "";
}

function getValidatedProfile() {
  const nickname = nicknameInput.value.trim();
  const birthMonth = birthMonthInput.value;

  if (!nickname) {
    showFormMessage("ニックネームを入力してください。", nicknameInput);
    return null;
  }

  if (!birthMonth) {
    showFormMessage("生まれ月を選んでください。", birthMonthInput);
    return null;
  }

  clearFormMessage();
  return {
    nickname,
    birthMonth,
    favoriteCat: favoriteCatInput.value,
  };
}

function getCatByName(catName) {
  return catTypes.find((cat) => cat.name === catName);
}

function getSongForCat(catName) {
  return songCatalogByCatType[catName] || cuteSong;
}

function createResult(profile) {
  const normalizedName = profile.nickname.trim().toLocaleLowerCase("ja-JP");
  const seed = [
    getLocalDateKey(),
    normalizedName,
    profile.birthMonth,
    profile.favoriteCat || "おまかせ",
  ].join("|");
  const favoriteCat = getCatByName(profile.favoriteCat);
  const shouldUseFavorite = favoriteCat && numberFromSeed(seed, "favorite-cat-bias") % 4 === 0;
  const cat = shouldUseFavorite ? favoriteCat : pickFrom(catTypes, seed, "cat-type");

  return {
    nickname: profile.nickname.trim(),
    cat,
    scores: {
      total: scoreFrom(seed, "total"),
      work: scoreFrom(seed, "work"),
      money: scoreFrom(seed, "money"),
      relationship: scoreFrom(seed, "relationship"),
    },
    luckyColor: pickFrom(luckyColors, seed, "color"),
    luckyFood: pickFrom(luckyFoods, seed, "food"),
    luckyAction: pickFrom(luckyActions, seed, "action"),
    dailyWord: pickFrom(dailyWords, seed, "word"),
    song: getSongForCat(cat.name),
  };
}

function renderStreamingLinks(song) {
  const links = document.querySelector("#streaming-links");
  links.textContent = "";

  if (!song.streamingLinks.length) {
    links.classList.add("is-hidden");
    return;
  }

  song.streamingLinks.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.target = "_blank";
    anchor.rel = "noopener";
    anchor.textContent = `${link.label}で聴く`;
    links.append(anchor);
  });

  links.classList.remove("is-hidden");
}

function buildXIntent(text) {
  const encodedText = encodeURIComponent(text);
  const encodedUrl = encodeURIComponent(FORTUNE_URL);
  return `${X_INTENT_URL}?text=${encodedText}&url=${encodedUrl}`;
}

function createRequestText(result) {
  const requestMessage = result.song.requestMessage || `${result.cat.name}をテーマにした猫ソングを聴いてみたいです！`;
  return [
    `今日のネコ占いで「${result.cat.name}」でした🐾`,
    requestMessage,
    "#ネコ占い #猫ソングスタジオ",
  ].join("\n");
}

function renderRequestPanel(result) {
  const requestPanel = document.querySelector("#request-panel");
  const requestMessage = document.querySelector("#request-message");
  const requestTextPreview = document.querySelector("#request-text-preview");
  const requestXLink = document.querySelector("#request-x-link");
  const requestYoutubeLink = document.querySelector("#request-youtube-link");
  const copyFeedback = document.querySelector("#copy-feedback");

  if (result.song.status !== "missing") {
    requestPanel.classList.add("is-hidden");
    return;
  }

  const requestText = createRequestText(result);
  requestMessage.textContent = `「${result.cat.name}の歌が聴きたい！」と思ったら、ぜひコメントで教えてください。あなたの一言が、次の猫ソングのテーマになるかもしれません。`;
  requestTextPreview.textContent = requestText;
  requestXLink.href = buildXIntent(requestText);
  requestYoutubeLink.href = result.song.youtubeUrl || YOUTUBE_CHANNEL_URL;
  copyFeedback.textContent = "";
  requestPanel.classList.remove("is-hidden");
}

function renderResult(result) {
  const isMissingSong = result.song.status === "missing";
  const songPanel = document.querySelector("#song-panel");
  const availableActions = document.querySelector("#song-available-actions");
  const youtubeSongLink = document.querySelector("#youtube-song-link");

  document.querySelector("#result-emoji").textContent = result.cat.emoji;
  document.querySelector("#cat-type").textContent = result.cat.name;
  document.querySelector("#cat-message").textContent = result.cat.message;
  document.querySelector("#score-total").textContent = stars(result.scores.total);
  document.querySelector("#score-work").textContent = stars(result.scores.work);
  document.querySelector("#score-money").textContent = stars(result.scores.money);
  document.querySelector("#score-relationship").textContent = stars(result.scores.relationship);
  document.querySelector("#lucky-color").textContent = result.luckyColor;
  document.querySelector("#lucky-food").textContent = result.luckyFood;
  document.querySelector("#lucky-action").textContent = result.luckyAction;
  document.querySelector("#daily-word").textContent = result.dailyWord;
  document.querySelector("#song-heading").textContent = isMissingSong
    ? "このネコタイプの曲は、まだありません"
    : "今日のあなたに合う猫ソングはこちら";
  document.querySelector("#song-name").textContent = `「${result.song.title}」`;
  document.querySelector("#song-theme").textContent = result.song.theme;
  document.querySelector("#song-description").textContent = result.song.description;

  songPanel.classList.toggle("song-panel-missing", isMissingSong);
  availableActions.classList.toggle("is-hidden", isMissingSong);
  youtubeSongLink.href = result.song.youtubeUrl || YOUTUBE_CHANNEL_URL;

  renderStreamingLinks(result.song);
  renderRequestPanel(result);

  resultSection.classList.remove("is-hidden");
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function createShareText(result) {
  const songLine = result.song.status === "available"
    ? `おすすめ猫ソング：「${result.song.title}」`
    : `「${result.cat.name}」の猫ソング、聴いてみたい`;

  return [
    `今日の私は「${result.cat.name}」でした🐾`,
    `総合運：${stars(result.scores.total)}`,
    `ラッキー行動：${result.luckyAction}`,
    songLine,
    "#ネコ占い #猫ソングスタジオ",
  ].join("\n");
}

function openXShare(result) {
  window.open(buildXIntent(createShareText(result)), "_blank", "noopener");
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const profile = getValidatedProfile();
  if (!profile) return;

  saveProfile(profile);
  currentResult = createResult(profile);
  renderResult(currentResult);
});

retryButton.addEventListener("click", () => {
  resultSection.classList.add("is-hidden");
  nicknameInput.focus();
  document.querySelector(".form-card").scrollIntoView({ behavior: "smooth", block: "start" });
});

shareButton.addEventListener("click", () => {
  if (currentResult) {
    openXShare(currentResult);
  }
});

copyRequestButton.addEventListener("click", async () => {
  if (!currentResult) return;

  const copyFeedback = document.querySelector("#copy-feedback");
  try {
    await copyText(createRequestText(currentResult));
    copyFeedback.textContent = "リクエスト文をコピーしました。";
  } catch {
    copyFeedback.textContent = "コピーできませんでした。文面を選択してコピーしてください。";
  }
});

document.querySelector("#x-profile-link").href = X_PROFILE_URL;
loadSavedProfile();

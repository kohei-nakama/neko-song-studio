const STUDIO_URL = "https://kohei-nakama.github.io/neko-song-studio/";
const FORTUNE_URL = `${STUDIO_URL}neko-uranai.html`;
const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@nekosong_kouhei";
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

const songs = [
  {
    title: "ひなたぼっこのララバイ",
    note: "ゆっくり休みたい日にぴったりの猫ソング。",
  },
  {
    title: "月あかりのニャイトパレード",
    note: "少し背中を押してほしい夜に。",
  },
  {
    title: "ミルク色のメロディ",
    note: "やさしい気分を取り戻したいときに。",
  },
  {
    title: "しっぽで刻むスウィング",
    note: "軽やかに動き出したい日に。",
  },
  {
    title: "路地裏キャットウォーク",
    note: "自分らしく歩きたい朝に。",
  },
  {
    title: "鈴の音ポップコーン",
    note: "小さな幸運を集めたい日に。",
  },
  {
    title: "ふわふわ毛布のコード",
    note: "気持ちをほぐしたい午後に。",
  },
  {
    title: "星降るキャットカフェ",
    note: "誰かと一緒に聴きたい一曲。",
  },
  {
    title: "黒猫ステップ",
    note: "直感を信じたい日に。",
  },
  {
    title: "王様の昼寝",
    note: "自分のペースを守りたいときに。",
  },
  {
    title: "三毛猫ハーモニー",
    note: "にぎやかな気持ちを整える曲。",
  },
  {
    title: "忍び足のリズム",
    note: "集中したい作業前に。",
  },
];

const form = document.querySelector("#fortune-form");
const nicknameInput = document.querySelector("#nickname");
const birthMonthInput = document.querySelector("#birth-month");
const favoriteCatInput = document.querySelector("#favorite-cat");
const resultSection = document.querySelector("#result");
const retryButton = document.querySelector("#retry-button");
const shareButton = document.querySelector("#share-button");
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

function createResult(profile) {
  const normalizedName = profile.nickname.trim().toLocaleLowerCase("ja-JP");
  const seed = [
    getLocalDateKey(),
    normalizedName,
    profile.birthMonth,
    profile.favoriteCat || "おまかせ",
  ].join("|");

  const cat = pickFrom(catTypes, seed, "cat-type");
  const total = scoreFrom(seed, "total");
  const work = scoreFrom(seed, "work");
  const money = scoreFrom(seed, "money");
  const relationship = scoreFrom(seed, "relationship");
  const song = pickFrom(songs, seed, "song");

  return {
    nickname: profile.nickname.trim(),
    cat,
    scores: {
      total,
      work,
      money,
      relationship,
    },
    luckyColor: pickFrom(luckyColors, seed, "color"),
    luckyFood: pickFrom(luckyFoods, seed, "food"),
    luckyAction: pickFrom(luckyActions, seed, "action"),
    dailyWord: pickFrom(dailyWords, seed, "word"),
    song,
  };
}

function renderResult(result) {
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
  document.querySelector("#song-name").textContent = `${result.song.title}：${result.song.note}`;

  document.querySelector("#youtube-channel-link").href = YOUTUBE_CHANNEL_URL;
  document.querySelector("#studio-song-link").href = STUDIO_URL;

  resultSection.classList.remove("is-hidden");
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function createShareText(result) {
  return [
    `今日の私は「${result.cat.name}」でした🐾`,
    `総合運：${stars(result.scores.total)}`,
    `ラッキー行動：${result.luckyAction}`,
    "猫ソングはYouTubeチャンネルへ",
    "#ネコ占い #猫ソングスタジオ",
  ].join("\n");
}

function openXShare(result) {
  const text = encodeURIComponent(createShareText(result));
  const url = encodeURIComponent(FORTUNE_URL);
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank", "noopener");
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

loadSavedProfile();

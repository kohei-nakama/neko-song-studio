const STUDIO_URL = "https://kohei-nakama.github.io/neko-song-studio/";
const FORTUNE_URL = `${STUDIO_URL}neko-uranai.html`;
const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@nekosong_kouhei";
const X_INTENT_URL = "https://twitter.com/intent/tweet";
const STORAGE_KEY = "nekoUranaiSimpleProfile";

const cats = [
  { name: "まねき猫", emoji: "😺", message: "小さなご縁を、ふわっと幸運に変える日です。", song: "cheer", prompt: "福を呼ぶ鈴を鳴らす" },
  { name: "黒猫ミステリー", emoji: "🐈‍⬛", message: "直感を信じると、面白い発見に出会えそうです。", song: "ninja", prompt: "夜の秘密をそっと教える" },
  { name: "白猫ヒーリング", emoji: "🤍", message: "やさしい空気が、あなたと周りの心を整えます。", song: "healing", prompt: "疲れた心をふわりと包む" },
  { name: "三毛猫ポップ", emoji: "🐱", message: "遊び心をひとさじ加えると、今日が明るくなります。", song: "cute", prompt: "カラフルな足あとで踊る" },
  { name: "茶トラ応援団", emoji: "🧡", message: "勢いのある一歩が、思った以上に遠くまで届きます。", song: "cheer", prompt: "がんばる人の背中を押す" },
  { name: "すやすや眠り猫", emoji: "💤", message: "休む時間も大切な予定。ゆっくり整えて大丈夫です。", song: "healing", prompt: "月の毛布で眠りへ誘う" },
  { name: "忍者猫", emoji: "🥷", message: "静かな集中が光る日。ひとつずつ進めると吉です。", song: "ninja", prompt: "忍び足でチャンスをつかむ" },
  { name: "祭り猫", emoji: "🏮", message: "笑顔と楽しい声が、今日の運をにぎやかにします。", song: "cute", prompt: "太鼓に合わせて踊る" },
  { name: "旅する猫", emoji: "🧳", message: "いつもと違う道に、うれしい寄り道が待っています。", song: "cheer", prompt: "地図にない町を歩く" },
  { name: "科学者猫", emoji: "🔭", message: "なぜ？と思った瞬間が、今日いちばんのひらめきです。", song: "science", prompt: "星空を実験室に変える" },
  { name: "王様猫", emoji: "👑", message: "自分のペースを守るほど、堂々と魅力が伝わります。", song: "cute", prompt: "お気に入りの椅子でくつろぐ" },
  { name: "甘えんぼナイト猫", emoji: "🌙", message: "素直なひとことが、心の距離を近づけてくれます。", song: "night", prompt: "夜だけ少し素直になる" },
  { name: "月見猫", emoji: "🌕", message: "静かに空を見上げると、気持ちの答えが見つかりそうです。", song: "night", prompt: "月明かりに願いごとをする" },
  { name: "本屋猫", emoji: "📚", message: "気になる言葉の中に、今日のヒントが隠れています。", song: "science", prompt: "本棚のすきまで物語を探す" },
  { name: "喫茶店猫", emoji: "☕", message: "ひと息つく時間から、よいアイデアが生まれます。", song: "healing", prompt: "喫茶店でのんびり雨を眺める" },
  { name: "宇宙猫", emoji: "🚀", message: "大きめの想像を楽しむと、可能性がぐんと広がります。", song: "science", prompt: "宇宙船で星をめぐる" },
  { name: "雨宿り猫", emoji: "☂️", message: "少し立ち止まることで、ちょうどいい流れに戻れます。", song: "healing", prompt: "雨音をリズムに変える" },
  { name: "おしゃべり猫", emoji: "🎤", message: "気軽な会話から、うれしいニュースがやってきそうです。", song: "cute", prompt: "にゃん語で楽しく歌う" },
  { name: "職人猫", emoji: "🧶", message: "丁寧に仕上げたひとつが、大きな自信につながります。", song: "ninja", prompt: "こつこつ素敵なものを作る" },
  { name: "ひなたぼっこ猫", emoji: "☀️", message: "心地よい場所を選ぶだけで、ごきげん運が上向きます。", song: "healing", prompt: "ひなたでしっぽを揺らす" },
];

const fortuneRanks = [
  "大吉ネコ", "福ふくネコ", "ひらめきネコ", "ご縁ネコ", "冒険ネコ", "ごきげんネコ",
  "のんびりネコ", "集中ネコ", "ときめきネコ", "おやつネコ", "寄り道ネコ", "すやすやネコ",
];

const fortuneMessages = [
  "今日は、気になったことを小さく始めると運が動きます。",
  "急がず、心地よい順番で進むとうまくいきそうです。",
  "何気ないひとことが、誰かの心を明るくします。",
  "思いつきをメモしておくと、あとで宝物になりそうです。",
  "いつも選ばないほうに、楽しい発見が待っています。",
  "好きな音楽を1曲聴くと、気分の流れが整います。",
  "ちょっとした片づけが、新しい福を呼び込みます。",
  "完璧よりも、かわいげのある一歩が今日の正解です。",
  "温かい飲み物と深呼吸が、よい判断を連れてきます。",
  "誰かにありがとうを伝えると、うれしい運が戻ってきます。",
  "今日は自分のペースを守るほど、するりとうまくいきます。",
  "遠回りに見える寄り道が、素敵な景色につながります。",
  "小さな笑いを見つけると、運気が軽やかになります。",
  "静かな時間を少し作ると、答えが自然に浮かびます。",
  "やってみたい気持ちを大切に。最初の一歩に追い風があります。",
  "無理をせず休むことが、今日いちばん賢い選択です。",
  "懐かしいものに触れると、新しいアイデアが生まれそうです。",
  "お気に入りを身近に置くと、ごきげんが長続きします。",
  "いつもより少しだけ丁寧にすると、よい結果につながります。",
  "夕方から運気が上向き。楽しみをひとつ残しておきましょう。",
  "目の前のひとつに集中すると、思った以上に進みます。",
  "素直な気持ちを言葉にすると、やさしい返事が届きそうです。",
  "空を見上げる時間が、今日の心に余白を作ってくれます。",
  "迷ったら、ちょっと楽しいほうを選んでみてください。",
];

const luckyActions = [
  "好きな曲を1曲聴く", "いつもと違う道を通る", "机の上を少し整える", "温かい飲み物を飲む",
  "空を見上げる", "誰かを一言ほめる", "5分だけ目を閉じる", "気になることをメモする",
  "おやつをゆっくり味わう", "背筋を伸ばして歩く", "写真を1枚撮る", "ありがとうを伝える",
  "新しい言葉をひとつ調べる", "いつもより早めに休む", "小さな用事をひとつ終える", "鏡の前でにっこりする",
];

const luckyColors = [
  "ひだまりオレンジ", "ミルクホワイト", "夜空ブラック", "肉球ピンク", "鈴のゴールド", "雨あがりブルー",
  "若草グリーン", "月あかりシルバー", "さくらピンク", "ミントグリーン", "毛布ブラウン", "ぶどうパープル",
  "レモンイエロー", "空色ブルー", "いちごレッド", "カフェラテベージュ",
];

const luckyFoods = [
  "焼きたてトースト", "鮭おにぎり", "プリン", "ミルクティー", "カレー", "チーズケーキ", "たまごサンド", "ホットココア",
  "バナナ", "抹茶アイス", "ナポリタン", "クリームソーダ", "ドーナツ", "お味噌汁", "いちご", "オムライス",
];

const promptStyles = [
  "やさしいポップソング", "ちょっと不思議なジャズ", "元気いっぱいのロック", "眠る前の子守唄", "鈴が鳴る和風ソング",
  "かわいいダンスナンバー", "夜に似合う静かなバラード", "みんなで歌えるお祭りソング", "風を感じるロードソング", "物語みたいなミュージカル曲",
];

const promptEnds = [
  "「今日はきっと、いい日だにゃ」", "「ゆっくり行けば、見つかるにゃ」", "「しっぽを立てて、もう一歩」",
  "「きみのとなりで歌うにゃん」", "「月まで届く、にゃんの声」", "「寄り道だって、宝物」",
  "「すやすや明日を待とう」", "「福は足あとについてくる」", "「にゃんとかなるさ、笑おうよ」", "「小さな勇気をポケットに」",
];

const songs = {
  cute: { title: "ネコバナナ", description: "言葉の響きだけでも楽しい、かわいい全振りの猫ソングです。", url: "https://www.youtube.com/@nekosong_kouhei/search?query=%E3%83%8D%E3%82%B3%E3%83%90%E3%83%8A%E3%83%8A" },
  healing: { title: "夜に聴きたい癒し系の猫ソング", description: "ひと息つきたい日に似合う、やさしい猫ソングです。", url: "https://www.youtube.com/@nekosong_kouhei/search?query=%E7%99%92%E3%81%97" },
  cheer: { title: "元気が出る応援歌", description: "もう一歩進みたい日に、明るいリズムで背中を押してくれます。", url: "https://youtu.be/t1rMK4Rj--0" },
  ninja: { title: "ネコ忍者", description: "静かにチャンスを狙う、少しミステリアスでかっこいい猫ソングです。", url: YOUTUBE_CHANNEL_URL },
  science: { title: "科学者と猫", description: "好奇心が動き出す、学びと発見の猫ソングです。", url: "https://youtu.be/eM5e73EmU8s" },
  night: { title: "夜だけ甘えんぼになる猫", description: "夜になると少し素直になる猫の、やさしくて甘いショートソングです。", url: "https://youtu.be/XkligCLwXvM" },
};

const form = document.querySelector("#fortune-form");
const nicknameInput = document.querySelector("#nickname");
const birthMonthInput = document.querySelector("#birth-month");
const favoriteCatInput = document.querySelector("#favorite-cat");
const formMessage = document.querySelector("#form-message");
const resultSection = document.querySelector("#result");

let currentProfile = null;
let currentResult = null;
let drawNumber = 0;

function hashString(value) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function getDateKey(date = new Date()) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

function getDateLabel(date = new Date()) {
  return date.toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric", weekday: "short" });
}

function pick(list, seed, salt) {
  return list[hashString(`${seed}|${salt}`) % list.length];
}

function stars(seed, salt) {
  const score = (hashString(`${seed}|${salt}`) % 4) + 2;
  return `${"★".repeat(score)}${"☆".repeat(5 - score)}`;
}

function loadProfile() {
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
    // 保存できない環境でも占いは続ける。
  }
}

function getProfile() {
  const nickname = nicknameInput.value.trim();
  if (!nickname) {
    formMessage.textContent = "ニックネームを入力してください。";
    nicknameInput.focus();
    return null;
  }
  if (!birthMonthInput.value) {
    formMessage.textContent = "生まれ月を選んでください。";
    birthMonthInput.focus();
    return null;
  }
  if (!favoriteCatInput.value) {
    formMessage.textContent = "好きな猫タイプを選んでください。";
    favoriteCatInput.focus();
    return null;
  }
  formMessage.textContent = "";
  return { nickname, birthMonth: birthMonthInput.value, favoriteCat: favoriteCatInput.value };
}

function createResult(profile, draw) {
  const baseSeed = [getDateKey(), profile.nickname.toLocaleLowerCase("ja-JP"), profile.birthMonth, profile.favoriteCat].join("|");
  const baseCatIndex = hashString(`${baseSeed}|cat`) % cats.length;
  const cat = cats[(baseCatIndex + draw * 7) % cats.length];
  const seed = `${baseSeed}|draw:${draw}|${cat.name}`;
  const style = pick(promptStyles, seed, "prompt-style");
  const chorus = pick(promptEnds, seed, "prompt-end");
  const prompt = `「${cat.prompt}猫」の${style}。サビの一言は${chorus}。`;
  return {
    profile, cat, rank: pick(fortuneRanks, seed, "rank"), message: pick(fortuneMessages, seed, "message"),
    action: pick(luckyActions, seed, "action"), color: pick(luckyColors, seed, "color"), food: pick(luckyFoods, seed, "food"),
    moodScore: stars(seed, "mood-score"), ideaScore: stars(seed, "idea-score"), friendScore: stars(seed, "friend-score"),
    song: songs[cat.song], prompt,
  };
}

function renderResult(result) {
  document.querySelector("#fortune-date").textContent = getDateLabel();
  document.querySelector("#result-emoji").textContent = result.cat.emoji;
  document.querySelector("#result-nickname").textContent = result.profile.nickname;
  document.querySelector("#cat-type").textContent = result.cat.name;
  document.querySelector("#cat-message").textContent = result.cat.message;
  document.querySelector("#fortune-rank").textContent = result.rank;
  document.querySelector("#fortune-message").textContent = result.message;
  document.querySelector("#score-mood").textContent = result.moodScore;
  document.querySelector("#score-idea").textContent = result.ideaScore;
  document.querySelector("#score-friend").textContent = result.friendScore;
  document.querySelector("#lucky-action").textContent = result.action;
  document.querySelector("#lucky-color").textContent = result.color;
  document.querySelector("#lucky-food").textContent = result.food;
  document.querySelector("#song-name").textContent = `「${result.song.title}」`;
  document.querySelector("#song-description").textContent = result.song.description;
  document.querySelector("#youtube-song-link").href = result.song.url;
  document.querySelector("#song-prompt").textContent = result.prompt;
  document.querySelector("#copy-feedback").textContent = "";
  resultSection.classList.remove("is-hidden");
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function buildShareText(result) {
  return [
    `${result.profile.nickname}の今日のネコは「${result.cat.name}」でした🐾`, `今日のネコ運：${result.rank}`,
    `ラッキー行動：${result.action}`, `おすすめ猫ソング：「${result.song.title}」`, "#ネコ占い #猫ソングスタジオ",
  ].join("\n");
}

function buildRequestText(result) {
  return [`今日のネコ占いで「${result.cat.name}」でした🐾`, `猫ソングお題：${result.prompt}`, "この曲、聴いてみたいです。"].join("\n");
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
  const profile = getProfile();
  if (!profile) return;
  currentProfile = profile;
  drawNumber = 0;
  saveProfile(profile);
  currentResult = createResult(profile, drawNumber);
  renderResult(currentResult);
});

document.querySelector("#reroll-button").addEventListener("click", () => {
  if (!currentProfile) return;
  drawNumber += 1;
  currentResult = createResult(currentProfile, drawNumber);
  renderResult(currentResult);
});

document.querySelector("#retry-button").addEventListener("click", () => {
  resultSection.classList.add("is-hidden");
  document.querySelector(".form-card").scrollIntoView({ behavior: "smooth", block: "start" });
  nicknameInput.focus();
});

document.querySelector("#share-button").addEventListener("click", () => {
  if (!currentResult) return;
  const url = `${X_INTENT_URL}?text=${encodeURIComponent(buildShareText(currentResult))}&url=${encodeURIComponent(FORTUNE_URL)}`;
  window.open(url, "_blank", "noopener");
});

document.querySelector("#copy-button").addEventListener("click", async () => {
  if (!currentResult) return;
  const feedback = document.querySelector("#copy-feedback");
  try {
    await copyText(buildRequestText(currentResult));
    feedback.textContent = "猫ソングお題をコピーしました。";
  } catch {
    feedback.textContent = "コピーできませんでした。";
  }
});

loadProfile();

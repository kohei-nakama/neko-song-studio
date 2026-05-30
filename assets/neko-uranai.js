const STUDIO_URL = "https://kohei-nakama.github.io/neko-song-studio/";
const FORTUNE_URL = `${STUDIO_URL}neko-uranai.html`;
const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@nekosong_kouhei";
const X_PROFILE_URL = "https://x.com/nakama_kohei";
const X_INTENT_URL = "https://twitter.com/intent/tweet";
const STORAGE_KEY = "nekoUranaiProfile";

const catTypes = [
  {
    key: "maneki",
    name: "まねき猫タイプ",
    shortName: "まねき猫",
    coreName: "まねき猫",
    emoji: "😺",
    message:
      "あなたは、人とのご縁や小さな幸運をふわっと呼び込むまねき猫タイプ。明るいあいさつや感謝の言葉から、運の入口が開きやすいタイプです。",
  },
  {
    key: "kuro",
    name: "黒猫ミステリータイプ",
    shortName: "黒猫",
    coreName: "黒猫",
    emoji: "🐈‍⬛",
    message:
      "あなたは、静かな時間にアイデアが生まれる黒猫ミステリータイプ。直感が鋭く、夜や物語性のある世界観と相性が良いタイプです。",
  },
  {
    key: "shiro",
    name: "白猫ヒーリングタイプ",
    shortName: "白猫",
    coreName: "白猫",
    emoji: "🤍",
    message:
      "あなたは、まわりの空気をやさしく整える白猫ヒーリングタイプ。無理に急がず、澄んだ気持ちで選ぶほど魅力が伝わります。",
  },
  {
    key: "mike",
    name: "三毛猫ポップタイプ",
    shortName: "三毛猫",
    coreName: "三毛猫",
    emoji: "🐱",
    message:
      "あなたは、いろんな表情で場を明るくする三毛猫ポップタイプ。かわいさ、ひらめき、軽やかな遊び心を自然に混ぜられる人です。",
  },
  {
    key: "chatra",
    name: "茶トラ応援タイプ",
    shortName: "茶トラ",
    coreName: "茶トラ",
    emoji: "🧡",
    message:
      "あなたは、前向きな勢いで誰かの背中を押せる茶トラ応援タイプ。挑戦中の気持ちを、明るいリズムに変える力があります。",
  },
  {
    key: "nemuri",
    name: "眠り猫リラックスタイプ",
    shortName: "眠り猫",
    coreName: "眠り猫",
    emoji: "💤",
    message:
      "あなたは、休むことで本来の力が戻る眠り猫リラックスタイプ。余白、安心、やさしい音に包まれるほど運が整います。",
  },
  {
    key: "ninja",
    name: "忍者猫集中タイプ",
    shortName: "忍者猫",
    coreName: "忍者猫",
    emoji: "🥷",
    message:
      "あなたは、静かな集中でチャンスをつかむ忍者猫集中タイプ。目立たない準備や観察が、あとでちゃんと効いてきます。",
  },
  {
    key: "matsuri",
    name: "祭り猫ハッピータイプ",
    shortName: "祭り猫",
    coreName: "祭り猫",
    emoji: "🏮",
    message:
      "あなたは、笑いとにぎやかさで空気をあたためる祭り猫ハッピータイプ。楽しい会話や小さなお祝いから運が動きます。",
  },
  {
    key: "tabi",
    name: "旅する猫アドベンチャータイプ",
    shortName: "旅する猫",
    coreName: "旅する猫",
    emoji: "🧳",
    message:
      "あなたは、知らない道にわくわくを見つける旅する猫アドベンチャータイプ。自由な寄り道や新しい景色が心を広げます。",
  },
  {
    key: "scientist",
    name: "科学者猫ひらめきタイプ",
    shortName: "科学者猫",
    coreName: "科学者猫",
    emoji: "🔭",
    message:
      "あなたは、試して発見する科学者猫ひらめきタイプ。考えすぎも、好奇心のライトを当てると素敵なアイデアに変わります。",
  },
  {
    key: "king",
    name: "王様猫マイペースタイプ",
    shortName: "王様猫",
    coreName: "王様猫",
    emoji: "👑",
    message:
      "あなたは、自分のペースを堂々と守れる王様猫マイペースタイプ。急がない選択が、周りにも安心感を届けます。",
  },
  {
    key: "amae",
    name: "甘えんぼ猫ナイトタイプ",
    shortName: "甘えんぼ猫",
    coreName: "甘えんぼ猫",
    emoji: "🫶",
    message:
      "あなたは、夜になるほど素直さが光る甘えんぼ猫ナイトタイプ。やさしい一言や近い距離感が、関係をふんわり育てます。",
  },
];

const typeByKey = Object.fromEntries(catTypes.map((cat) => [cat.key, cat]));

const favoriteCatBias = {
  まねき猫: "maneki",
  黒猫: "kuro",
  白猫: "shiro",
  三毛猫: "mike",
  茶トラ: "chatra",
  サバトラ: "ninja",
  キジトラ: "scientist",
  長毛猫: "king",
  子猫: "amae",
  眠り猫: "nemuri",
  忍者猫: "ninja",
  王様猫: "king",
  甘えんぼ猫: "amae",
  科学者猫: "scientist",
  旅する猫: "tabi",
  祭り猫: "matsuri",
  応援猫: "chatra",
};

const birthMonthBias = {
  1: "maneki",
  2: "shiro",
  3: "mike",
  4: "chatra",
  5: "tabi",
  6: "amae",
  7: "matsuri",
  8: "king",
  9: "scientist",
  10: "ninja",
  11: "kuro",
  12: "nemuri",
};

const scoreRules = {
  currentMood: {
    癒されたい: { shiro: 3, nemuri: 3, amae: 1 },
    元気がほしい: { chatra: 4, mike: 2, matsuri: 1 },
    眠りたい: { nemuri: 5, shiro: 2, amae: 1 },
    笑いたい: { matsuri: 4, mike: 3, chatra: 1 },
    開運したい: { maneki: 5, matsuri: 1 },
    不思議な気分: { kuro: 5, scientist: 2, ninja: 1 },
    集中したい: { ninja: 5, scientist: 3 },
    旅に出たい: { tabi: 5, kuro: 1, king: 1 },
  },
  desiredGift: {
    癒し: { shiro: 4, nemuri: 3 },
    勇気: { chatra: 4, ninja: 2, tabi: 1 },
    笑い: { matsuri: 4, mike: 3 },
    開運: { maneki: 5, matsuri: 1 },
    集中: { ninja: 4, scientist: 3 },
    ときめき: { mike: 3, amae: 3, shiro: 1 },
    安心: { nemuri: 4, shiro: 3, amae: 2 },
    冒険: { tabi: 5, kuro: 2 },
  },
  favoriteTime: {
    朝: { shiro: 3, maneki: 2, chatra: 2 },
    昼: { chatra: 2, mike: 2, scientist: 2 },
    夕方: { mike: 2, tabi: 2, king: 2 },
    夜: { kuro: 4, amae: 3, nemuri: 2 },
    深夜: { kuro: 5, ninja: 3, nemuri: 2 },
  },
  catAction: {
    すやすや眠る: { nemuri: 5, shiro: 2 },
    "だらーんとする": { king: 4, nemuri: 3 },
    元気に走る: { chatra: 4, tabi: 3 },
    甘える: { amae: 5, shiro: 2 },
    じっと見守る: { ninja: 4, kuro: 2, shiro: 1 },
    こっそり冒険する: { tabi: 4, kuro: 3, ninja: 2 },
    祭りで踊る: { matsuri: 5, mike: 2 },
    福を招く: { maneki: 5, shiro: 1 },
  },
  musicMood: {
    やさしいポップ: { shiro: 3, mike: 2, amae: 2 },
    和風: { maneki: 3, ninja: 3, matsuri: 2 },
    ジャズ: { kuro: 4, king: 2, amae: 1 },
    ロック: { chatra: 4, tabi: 2 },
    子守唄: { nemuri: 5, shiro: 3 },
    祭り: { matsuri: 5, maneki: 2 },
    ミステリアス: { kuro: 4, ninja: 3, scientist: 2 },
    かわいいダンス: { mike: 4, matsuri: 3, amae: 2 },
  },
  personality: {
    マイペース: { king: 5, nemuri: 2 },
    甘えんぼ: { amae: 5, shiro: 2 },
    挑戦中: { chatra: 4, tabi: 3, ninja: 1 },
    考えすぎ: { scientist: 3, kuro: 3, nemuri: 2 },
    自由人: { tabi: 5, king: 2 },
    努力家: { ninja: 4, maneki: 2, chatra: 2 },
    直感型: { kuro: 5, scientist: 2 },
    盛り上げ役: { matsuri: 5, mike: 3 },
  },
};

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

const luckyActionsByType = {
  maneki: ["玄関を少し整える", "ありがとうを先に伝える", "小さな願いを声に出す"],
  kuro: ["夜に短いメモを書く", "直感で選んだ曲を聴く", "暗めの静かな場所で深呼吸する"],
  shiro: ["机やスマホ画面を軽くする", "白いものを身につける", "予定に余白をひとつ作る"],
  mike: ["気になることを一口だけ試す", "かわいいものをひとつ保存する", "楽しい返事を先に送る"],
  chatra: ["気になっていた用事に着手する", "背筋を伸ばして歩く", "誰かを一言励ます"],
  nemuri: ["夜は早めに画面を閉じる", "あたたかい飲み物で休む", "5分だけ目を閉じる"],
  ninja: ["通知を切って15分集中する", "目立たない準備を進める", "静かに一歩だけ進む"],
  matsuri: ["明るい曲を1曲流す", "小さなお祝いを作る", "笑える話題をひとつ選ぶ"],
  tabi: ["いつもと違う道を通る", "行きたい場所をひとつ調べる", "短い寄り道をする"],
  scientist: ["思いつきをメモする", "なぜ？をひとつ調べる", "試したいことを小さく実験する"],
  king: ["自分のペースで予定を組む", "急がない返事を選ぶ", "お気に入りの場所で休む"],
  amae: ["素直な一言を送る", "甘いものを少し楽しむ", "近い人に頼ってみる"],
};

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

const dailyFortunes = [
  {
    label: "大吉ネコ",
    text: "今日はしっぽが高く上がる日。小さな行動が、思ったより大きなごほうびを連れてきます。",
  },
  {
    label: "中吉ネコ",
    text: "ゆっくり整えるほど運がなじむ日。焦らず、気分のいい順番で進めてみてください。",
  },
  {
    label: "ひらめきネコ",
    text: "ふと浮かんだ言葉やメロディにヒントがあります。忘れる前に、短く残しておくと吉。",
  },
  {
    label: "ご縁ネコ",
    text: "人とのやりとりに小さな福があります。返事やあいさつは、いつもより少しやわらかく。",
  },
  {
    label: "休息ネコ",
    text: "がんばる前に一度丸くなる日。休むことが、今日のいちばん賢い作戦になります。",
  },
  {
    label: "冒険ネコ",
    text: "いつもと違う景色が背中を押します。小さな寄り道を、今日の合図にしてみましょう。",
  },
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
  description:
    "言葉の響きだけでも楽しい、かわいい全振りの猫ソングです。気分を少し軽くしたい日にどうぞ。",
  youtubeUrl: "https://www.youtube.com/@nekosong_kouhei/search?query=%E3%83%8D%E3%82%B3%E3%83%90%E3%83%8A%E3%83%8A",
  streamingLinks: [],
  status: "available",
};

const healingSong = {
  title: "夜に聴きたい癒し系の猫ソング",
  theme: "休息と癒し",
  description:
    "眠る前や、少し疲れた日に似合う猫ソングです。今日の余白をやさしく取り戻してくれます。",
  youtubeUrl: "https://www.youtube.com/@nekosong_kouhei/search?query=%E7%99%92%E3%81%97",
  streamingLinks: [],
  status: "available",
};

const cheerSong = {
  title: "元気が出る応援歌",
  theme: "前向きな応援",
  description:
    "前向きな言葉と跳ねるリズムで、もう一歩進みたい日に背中を押してくれる猫ソングです。",
  youtubeUrl: "https://youtu.be/t1rMK4Rj--0",
  streamingLinks: [],
  status: "available",
};

const songCatalogByType = {
  maneki: {
    title: "まねき猫の福ふくソング",
    theme: "幸運とご縁",
    description:
      "このテーマの猫ソングはまだ制作中です。ご縁を呼び込む明るい曲になりそうです。",
    youtubeUrl: YOUTUBE_CHANNEL_URL,
    streamingLinks: [],
    status: "missing",
  },
  kuro: {
    title: "黒猫ミステリーナイト",
    theme: "直感と夜の不思議",
    description:
      "このテーマの猫ソングはまだ制作中です。夜道をすっと歩く黒猫の世界、コメントで育ててください。",
    youtubeUrl: YOUTUBE_CHANNEL_URL,
    streamingLinks: [],
    status: "missing",
  },
  shiro: healingSong,
  mike: cuteSong,
  chatra: cheerSong,
  nemuri: healingSong,
  ninja: {
    title: "ネコ忍者",
    theme: "静かな集中とチャンス",
    description:
      "静かにチャンスを狙うあなたにぴったりの、少しミステリアスでかっこいい猫ソングです。",
    youtubeUrl: YOUTUBE_CHANNEL_URL,
    streamingLinks: nekoNinjaStreamingLinks,
    status: "available",
  },
  matsuri: {
    title: "祭り猫のおどりうた",
    theme: "にぎやかさと祝福",
    description:
      "このテーマの猫ソングはまだ制作中です。鈴や太鼓が似合う、楽しい猫ソングになりそうです。",
    youtubeUrl: YOUTUBE_CHANNEL_URL,
    streamingLinks: [],
    status: "missing",
  },
  tabi: {
    title: "旅する猫のロードソング",
    theme: "寄り道と小さな冒険",
    description:
      "このテーマの猫ソングはまだ制作中です。旅先で出会う景色と猫の物語、いつか聴いてみたいテーマです。",
    youtubeUrl: YOUTUBE_CHANNEL_URL,
    streamingLinks: [],
    status: "missing",
  },
  scientist: {
    title: "科学者と猫",
    theme: "学びと発見",
    description:
      "AIやロケット工学の学びを、猫の歌で楽しく届けるシリーズ。好奇心が動く日におすすめです。",
    youtubeUrl: "https://youtu.be/eM5e73EmU8s",
    streamingLinks: [],
    status: "available",
  },
  king: {
    title: "王様猫のごきげん行進曲",
    theme: "堂々としたマイペース",
    description:
      "このテーマの猫ソングはまだ制作中です。ゆったり堂々と歩く王様猫の曲、きっと似合います。",
    youtubeUrl: YOUTUBE_CHANNEL_URL,
    streamingLinks: [],
    status: "missing",
  },
  amae: {
    title: "夜だけ甘えんぼになる猫",
    theme: "夜の素直さ",
    description:
      "夜になると少し素直になる猫の、やさしくて甘いショートソング。人間関係運をあたためたい日にぴったりです。",
    youtubeUrl: "https://youtu.be/XkligCLwXvM",
    streamingLinks: [],
    status: "available",
  },
};

const timeTitlePrefixes = {
  朝: "朝ひかる",
  昼: "おひさま",
  夕方: "夕焼け",
  夜: "夜ふかし",
  深夜: "真夜中",
};

const actionTitleEnds = {
  すやすや眠る: "すやすや子守唄",
  "だらーんとする": "だらーん日和",
  元気に走る: "ジャンプパレード",
  甘える: "となりに来てね",
  じっと見守る: "見守りノート",
  こっそり冒険する: "ひみつ会議",
  祭りで踊る: "おどり太鼓",
  福を招く: "福ふくダンス",
};

const moodConcepts = {
  癒されたい: "少し疲れた心をやわらかくほどく",
  元気がほしい: "もう一歩進みたい背中を押す",
  眠りたい: "眠る前の心を静かに包む",
  笑いたい: "思わず口元がゆるむ",
  開運したい: "小さな福を呼び込む",
  不思議な気分: "夜の物語にそっと入り込む",
  集中したい: "静かな集中へ連れていく",
  旅に出たい: "知らない景色へ心を連れ出す",
};

const musicStylePhrases = {
  やさしいポップ: "やさしいポップ",
  和風: "鈴の鳴る和風",
  ジャズ: "少しジャズ",
  ロック: "軽やかなロック",
  子守唄: "ゆったり子守唄",
  祭り: "太鼓が似合う祭り",
  ミステリアス: "静かでミステリアス",
  かわいいダンス: "かわいいダンス",
};

const moodStylePhrases = {
  癒されたい: "やさしくあたたかい",
  元気がほしい: "前向きで弾む",
  眠りたい: "静かで眠れる",
  笑いたい: "くすっと笑える",
  開運したい: "明るく縁起がいい",
  不思議な気分: "不思議で物語っぽい",
  集中したい: "落ち着いて集中できる",
  旅に出たい: "風を感じる冒険気分",
};

const desireClosers = {
  癒し: "最後はほっとする",
  勇気: "最後は前向き",
  笑い: "最後は笑顔",
  開運: "最後は福が来る",
  集中: "最後はすっと整う",
  ときめき: "最後は胸が少し弾む",
  安心: "最後は安心できる",
  冒険: "最後は新しい一歩",
};

const chorusHooks = {
  maneki: "にゃんと福が鳴るほうへ、しっぽを立てて歩こう",
  kuro: "にゃんにも言わない夜のこと、黒猫だけが知っている",
  shiro: "まっしろな朝に深呼吸、きみの心もふわり",
  mike: "みけみけステップ、笑顔の色をまぜていこう",
  chatra: "茶トラのジャンプで大丈夫、もう一歩なら行けるよ",
  nemuri: "すやすや眠れば明日の月が、やさしく迎えにくる",
  ninja: "忍び足でも進んでる、静かな爪が光ってる",
  matsuri: "にゃんにゃん太鼓で福が来る、笑えば今日はお祭りだ",
  tabi: "地図にない道を行こう、旅する猫が先に立つ",
  scientist: "ひらめきひとつをポケットに、星まで実験してみよう",
  king: "王様猫は急がない、好きな歩幅で風を切る",
  amae: "夜だけ少し甘えていいよ、月もとなりで聞いている",
};

const form = document.querySelector("#fortune-form");
const nicknameInput = document.querySelector("#nickname");
const birthMonthInput = document.querySelector("#birth-month");
const favoriteCatInput = document.querySelector("#favorite-cat");
const currentMoodInput = document.querySelector("#current-mood");
const desiredGiftInput = document.querySelector("#desired-gift");
const favoriteTimeInput = document.querySelector("#favorite-time");
const catActionInput = document.querySelector("#cat-action");
const musicMoodInput = document.querySelector("#music-mood");
const personalityInput = document.querySelector("#personality");
const resultSection = document.querySelector("#result");
const retryButton = document.querySelector("#retry-button");
const requestRetryButton = document.querySelector("#request-retry-button");
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

function getLocalDateLabel(date = new Date()) {
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  });
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
    currentMoodInput.value = saved.currentMood || "";
    desiredGiftInput.value = saved.desiredGift || "";
    favoriteTimeInput.value = saved.favoriteTime || "";
    catActionInput.value = saved.catAction || "";
    musicMoodInput.value = saved.musicMood || "";
    personalityInput.value = saved.personality || "";
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

function requireSelect(input, message) {
  if (input.value) return true;
  showFormMessage(message, input);
  return false;
}

function getValidatedProfile() {
  const nickname = nicknameInput.value.trim();

  if (!nickname) {
    showFormMessage("ニックネームを入力してください。", nicknameInput);
    return null;
  }

  if (!requireSelect(birthMonthInput, "生まれ月を選んでください。")) return null;
  if (!requireSelect(currentMoodInput, "今の気分を選んでください。")) return null;
  if (!requireSelect(desiredGiftInput, "今日ほしいものを選んでください。")) return null;
  if (!requireSelect(favoriteTimeInput, "好きな時間帯を選んでください。")) return null;
  if (!requireSelect(catActionInput, "好きな猫の行動を選んでください。")) return null;
  if (!requireSelect(musicMoodInput, "好きな音楽の雰囲気を選んでください。")) return null;
  if (!requireSelect(personalityInput, "今の自分に近い性格を選んでください。")) return null;

  clearFormMessage();
  return {
    nickname,
    birthMonth: birthMonthInput.value,
    favoriteCat: favoriteCatInput.value,
    currentMood: currentMoodInput.value,
    desiredGift: desiredGiftInput.value,
    favoriteTime: favoriteTimeInput.value,
    catAction: catActionInput.value,
    musicMood: musicMoodInput.value,
    personality: personalityInput.value,
  };
}

function addScores(scores, weights, amount = 1) {
  Object.entries(weights || {}).forEach(([key, value]) => {
    scores[key] += value * amount;
  });
}

function decideCatType(profile) {
  const scores = Object.fromEntries(catTypes.map((cat) => [cat.key, 0]));

  addScores(scores, scoreRules.currentMood[profile.currentMood]);
  addScores(scores, scoreRules.desiredGift[profile.desiredGift]);
  addScores(scores, scoreRules.favoriteTime[profile.favoriteTime]);
  addScores(scores, scoreRules.catAction[profile.catAction]);
  addScores(scores, scoreRules.musicMood[profile.musicMood]);
  addScores(scores, scoreRules.personality[profile.personality]);

  if (favoriteCatBias[profile.favoriteCat]) {
    scores[favoriteCatBias[profile.favoriteCat]] += 2;
  }

  if (birthMonthBias[profile.birthMonth]) {
    scores[birthMonthBias[profile.birthMonth]] += 1;
  }

  const highestScore = Math.max(...Object.values(scores));
  const topKeys = Object.keys(scores).filter((key) => scores[key] === highestScore);
  const tieSeed = `${profile.nickname.trim().toLocaleLowerCase("ja-JP")}|${profile.birthMonth}`;
  const pickedKey = topKeys[numberFromSeed(tieSeed, "type-tie-breaker") % topKeys.length];
  return typeByKey[pickedKey];
}

function createDailyFortune(profile, cat, dateKey) {
  const seed = [dateKey, profile.nickname.trim().toLocaleLowerCase("ja-JP"), profile.birthMonth, cat.key].join("|");
  const fortune = pickFrom(dailyFortunes, seed, "daily-fortune");

  return {
    label: fortune.label,
    message: `${fortune.text} ${cat.shortName}らしく、${pickFrom(luckyActionsByType[cat.key], seed, "type-action")}と流れがよくなります。`,
    scores: {
      total: scoreFrom(seed, "total"),
      work: scoreFrom(seed, "work"),
      money: scoreFrom(seed, "money"),
      relationship: scoreFrom(seed, "relationship"),
    },
    luckyColor: pickFrom(luckyColors, seed, "color"),
    luckyFood: pickFrom(luckyFoods, seed, "food"),
    luckyAction: pickFrom(luckyActionsByType[cat.key], seed, "action"),
    dailyWord: pickFrom(dailyWords, seed, "word"),
  };
}

function getSongForType(catKey) {
  return songCatalogByType[catKey] || cuteSong;
}

function buildXIntent(text) {
  const encodedText = encodeURIComponent(text);
  const encodedUrl = encodeURIComponent(FORTUNE_URL);
  return `${X_INTENT_URL}?text=${encodedText}&url=${encodedUrl}`;
}

function createNewSongIdea(profile, cat) {
  const prefix = timeTitlePrefixes[profile.favoriteTime];
  const end = actionTitleEnds[profile.catAction];
  const title = `${prefix}${cat.coreName}の${end}`;
  const concept = `${profile.favoriteTime}に${moodConcepts[profile.currentMood]}人へ、${cat.coreName}が${profile.catAction}ようにそっと寄り添う${profile.musicMood}の猫ソング。`;
  const style = `${profile.favoriteTime}、${musicStylePhrases[profile.musicMood]}、${moodStylePhrases[profile.currentMood]}、${desireClosers[profile.desiredGift]}。`;
  const hook = chorusHooks[cat.key];
  const youtubeComment = [
    `今日のネコ占いで「${cat.name}」でした🐾`,
    `新曲案は「${title}」！`,
    "この曲、聴いてみたいです。",
  ].join("\n");
  const xPost = [
    `今日のネコ占いで「${cat.name}」でした🐾`,
    `新曲案：「${title}」`,
    `サビ案：${hook}`,
    "#ネコ占い #猫ソングスタジオ",
  ].join("\n");
  const copyText = [
    `新曲タイトル：「${title}」`,
    `本質ネコタイプ：${cat.name}`,
    `コンセプト：${concept}`,
    `曲調：${style}`,
    `サビの一言案：${hook}`,
    "",
    "YouTubeコメント用リクエスト文：",
    youtubeComment,
    "",
    "X投稿用文面：",
    xPost,
  ].join("\n");

  return {
    title,
    concept,
    style,
    hook,
    youtubeComment,
    xPost,
    copyText,
  };
}

function createResult(profile) {
  const date = new Date();
  const dateKey = getLocalDateKey(date);
  const cat = decideCatType(profile);
  const daily = createDailyFortune(profile, cat, dateKey);
  const song = getSongForType(cat.key);
  const newSong = createNewSongIdea(profile, cat);

  return {
    dateLabel: getLocalDateLabel(date),
    nickname: profile.nickname.trim(),
    profile,
    cat,
    daily,
    song,
    newSong,
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

function renderRequestPanel(result) {
  const requestMessage = document.querySelector("#request-message");
  const requestTextPreview = document.querySelector("#request-text-preview");
  const requestXLink = document.querySelector("#request-x-link");
  const requestYoutubeLink = document.querySelector("#request-youtube-link");
  const copyFeedback = document.querySelector("#copy-feedback");

  requestMessage.textContent =
    "診断結果から、あなた専用の新しい猫ソング案が生まれました。気に入ったら、YouTubeコメントやXでリクエストできます。";
  document.querySelector("#new-song-title").textContent = `「${result.newSong.title}」`;
  document.querySelector("#new-song-concept").textContent = result.newSong.concept;
  document.querySelector("#new-song-style").textContent = result.newSong.style;
  document.querySelector("#new-song-hook").textContent = `「${result.newSong.hook}」`;
  requestTextPreview.textContent = result.newSong.youtubeComment;
  requestXLink.href = buildXIntent(result.newSong.xPost);
  requestYoutubeLink.href = YOUTUBE_CHANNEL_URL;
  copyFeedback.textContent = "";
}

function renderResult(result) {
  const isMissingSong = result.song.status === "missing";
  const songPanel = document.querySelector("#song-panel");
  const availableActions = document.querySelector("#song-available-actions");
  const youtubeSongLink = document.querySelector("#youtube-song-link");

  document.querySelector("#result-emoji").textContent = result.cat.emoji;
  document.querySelector("#fortune-date").textContent = result.dateLabel;
  document.querySelector("#cat-type").textContent = result.cat.name;
  document.querySelector("#cat-message").textContent = result.cat.message;
  document.querySelector("#daily-fortune-title").textContent = `今日のネコ運：${result.daily.label}`;
  document.querySelector("#daily-fortune-message").textContent = result.daily.message;
  document.querySelector("#score-total").textContent = stars(result.daily.scores.total);
  document.querySelector("#score-work").textContent = stars(result.daily.scores.work);
  document.querySelector("#score-money").textContent = stars(result.daily.scores.money);
  document.querySelector("#score-relationship").textContent = stars(result.daily.scores.relationship);
  document.querySelector("#lucky-color").textContent = result.daily.luckyColor;
  document.querySelector("#lucky-food").textContent = result.daily.luckyFood;
  document.querySelector("#lucky-action").textContent = result.daily.luckyAction;
  document.querySelector("#daily-word").textContent = result.daily.dailyWord;
  document.querySelector("#song-heading").textContent = isMissingSong
    ? "既存のおすすめ猫ソング候補"
    : "既存のおすすめ猫ソング";
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
    : `おすすめテーマ：「${result.song.title}」`;

  return [
    `私の本質ネコタイプは「${result.cat.name}」でした🐾`,
    `今日のネコ運：${result.daily.label}`,
    `ラッキー行動：${result.daily.luckyAction}`,
    songLine,
    `新曲案：「${result.newSong.title}」`,
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

function retryFortune() {
  resultSection.classList.add("is-hidden");
  nicknameInput.focus();
  document.querySelector(".form-card").scrollIntoView({ behavior: "smooth", block: "start" });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const profile = getValidatedProfile();
  if (!profile) return;

  saveProfile(profile);
  currentResult = createResult(profile);
  renderResult(currentResult);
});

retryButton.addEventListener("click", retryFortune);
requestRetryButton.addEventListener("click", retryFortune);

shareButton.addEventListener("click", () => {
  if (currentResult) {
    openXShare(currentResult);
  }
});

copyRequestButton.addEventListener("click", async () => {
  if (!currentResult) return;

  const copyFeedback = document.querySelector("#copy-feedback");
  try {
    await copyText(currentResult.newSong.copyText);
    copyFeedback.textContent = "新曲案をコピーしました。";
  } catch {
    copyFeedback.textContent = "コピーできませんでした。文面を選択してコピーしてください。";
  }
});

document.querySelector("#x-profile-link").href = X_PROFILE_URL;
loadSavedProfile();

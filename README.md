# 猫ソングスタジオ ネコ占い

猫ソングスタジオの参加型コンテンツとして、スマホで遊べる静的Webアプリ「ネコ占い」を追加しています。

## 追加機能

- `index.html` を公開中の猫ソングスタジオHP相当の構成にし、下部の `MESSAGE / 猫ソングのリクエスト投稿` フォームをネコ占い導線へ置き換え
- `neko-uranai.html` で「ネコ占い｜今日のあなたは何ネコ？」を表示
- `request-section-neko-uranai.html` に、猫ソングスタジオ本体の「猫ソングのリクエスト投稿」部分と差し替えやすいHTML断片を追加
- ニックネーム、生まれ月、好きな猫タイプから今日のネコタイプを診断
- 12種類の猫タイプ、運勢、ラッキー要素、今日のひとこと、おすすめ猫ソングを表示
- 今日の日付と入力内容を使ったseed方式で、同じ日は同じ結果を表示
- X投稿用のシェアテキストを生成
- 猫ソングスタジオHPとYouTubeチャンネルへの導線を設置
- 入力内容は外部送信せず、この端末の `localStorage` にのみ保存。保存できない環境でも占いは動作

## ファイル構成

```text
.
├── index.html
├── neko-uranai.html
├── request-section-neko-uranai.html
├── script.js
├── styles.css
└── assets
    ├── main-visual.jpg
    ├── neko-uranai.css
    ├── neko-uranai.js
    └── neko-song-logo.jpg
```

## 猫ソングスタジオ本体への差し替え

`index.html` では、公開中の猫ソングスタジオHP下部の `MESSAGE / 猫ソングのリクエスト投稿` フォームを、ネコ占いへの参加導線に置き換え済みです。

別の本体HTMLへ部分適用する場合は、そのフォーム部分を `request-section-neko-uranai.html` の内容に置き換え、同じ階層に `neko-uranai.html` と `assets/` を配置してください。

本体サイトとは別リポジトリで公開する場合は、断片内のリンクを公開後の絶対URLに変更してください。

## ローカル確認

ブラウザで `neko-uranai.html` を直接開くと動作確認できます。サーバー、ログイン、DBは不要です。

任意の静的サーバーで確認する場合は、このディレクトリを公開ルートにして次のURLを開いてください。

```text
http://localhost:8000/neko-uranai.html
```

## GitHub Pagesでの公開

このリポジトリをGitHubへpushし、GitHub Pagesの公開元をリポジトリルートに設定してください。

公開後のURL例:

```text
https://<user-name>.github.io/<repository-name>/neko-uranai.html
```

猫ソングスタジオ本体への導線は次のURLに設定しています。

```text
https://kohei-nakama.github.io/neko-song-studio/
```

## 今後の改善案

- 猫ソングスタジオ本体に実在するYouTube、Spotify、Apple Music、Amazon Musicリンクがある場合、おすすめ曲ごとに直接リンクする
- 結果カードを画像として保存できる機能を追加する
- 季節イベントや記念日に合わせて猫タイプ、ラッキー要素、曲の候補を増やす
- アクセス解析を使う場合も、個人情報を保存しない設計を維持する

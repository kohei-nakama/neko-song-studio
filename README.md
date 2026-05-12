# 猫ソングスタジオ 今日の1曲ネコ占い

猫ソングスタジオの参加型コンテンツとして、スマホで遊べる静的Webアプリ「今日の1曲ネコ占い」を追加・改善しています。

## 追加機能

- トップページの目立つ位置に「今日の1曲ネコ占い」導線を追加
- NEWS欄にネコ占い改善のお知らせを追加
- 作品一覧に「癒し」「元気」「かわいい」「学び」「季節」「かっこいい」などの気分タグを追加
- `neko-uranai.html` で、今日のネコタイプ・運勢・ラッキー要素・おすすめ猫ソングを表示
- 猫タイプごとにYouTube曲またはYouTube検索/チャンネルへ誘導
- 対応曲がない猫タイプでは、新曲リクエスト導線を表示
- Xでリクエスト文を投稿するボタンと、リクエスト文をコピーするボタンを追加
- 今日の日付と入力内容を使ったseed方式で、同じ日は同じ結果を表示
- 入力内容は外部送信せず、この端末の `localStorage` にのみ保存。保存できない環境でも占いは動作

## 曲データの場所

猫タイプと曲の紐づけは `assets/neko-uranai.js` の `songCatalogByCatType` にまとめています。

曲を追加する場合は、対象の猫タイプに次の形式でデータを追加・変更してください。

```js
王様猫: {
  title: "王様猫のごきげん行進曲",
  theme: "堂々としたマイペース",
  description: "おすすめ理由をここに書きます。",
  youtubeUrl: "https://www.youtube.com/@nekosong_kouhei",
  streamingUrl: "",
  streamingLinks: [],
  status: "missing",
  requestMessage: "王様猫をテーマにした猫ソングを聴いてみたいです！",
}
```

公開済みの曲は `status: "available"`、未制作テーマは `status: "missing"` にしてください。

## ローカル確認

ブラウザで `neko-uranai.html` を直接開くと動作確認できます。サーバー、ログイン、DBは不要です。

任意の静的サーバーで確認する場合は、このディレクトリを公開ルートにして次のURLを開いてください。

```text
http://localhost:8000/
http://localhost:8000/neko-uranai.html
```

## GitHub Pagesでの公開

GitHub Pagesの公開元をリポジトリルートに設定してください。

公開URL:

```text
https://kohei-nakama.github.io/neko-song-studio/
https://kohei-nakama.github.io/neko-song-studio/neko-uranai.html
```

## 今後の改善案

- YouTubeの曲URLが増えたら、猫タイプごとの直接リンクを増やす
- 結果カードを画像として保存できる機能を追加する
- 季節イベントや記念日に合わせて猫タイプ、ラッキー要素、曲の候補を増やす
- 気分タグで作品を絞り込める簡易フィルターを追加する

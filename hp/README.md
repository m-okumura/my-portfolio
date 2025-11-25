# AIXWEB - AI × Web 受託開発サービス

AIXWEBは、最新のAI技術とWeb開発のノウハウを掛け合わせた、次世代の受託開発サービスのランディングページです。

## 🚀 特徴

- **モダンなデザイン**: Tailwind CSSとFramer Motionを使用した美しいアニメーション
- **レスポンシブ対応**: モバイル・タブレット・デスクトップに完全対応
- **高速**: Vite + Reactによる高速なビルドと最適化
- **TypeScript**: 型安全な開発環境

## 🛠 技術スタック

- **フロントエンド**: React 18 + TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React
- **ビルドツール**: Vite
- **開発言語**: TypeScript

## 📦 セットアップ

### 前提条件

- Node.js 18.x 以上
- npm または yarn

### インストール

```bash
# プロジェクトルートで依存関係をインストール（既にインストール済みの場合はスキップ）
npm install

# hpディレクトリに移動
cd hp

# 開発サーバーを起動
npm run dev
```

### ビルド

```bash
# 本番用ビルド
npm run build

# ビルド結果をプレビュー
npm run preview
```

## 📁 プロジェクト構造

```
hp/
├── components/         # Reactコンポーネント
│   ├── Header.tsx     # ヘッダー・ナビゲーション
│   ├── Hero.tsx       # ヒーローセクション
│   ├── Services.tsx   # サービス紹介
│   ├── Features.tsx   # 特徴・強み
│   ├── Portfolio.tsx  # 制作実績
│   ├── Process.tsx    # 制作フロー
│   ├── Pricing.tsx    # 料金プラン
│   ├── Contact.tsx    # お問い合わせフォーム
│   └── Footer.tsx     # フッター
├── App.tsx            # メインアプリケーション
├── main.tsx           # エントリーポイント
├── index.css          # グローバルスタイル
├── index.html         # HTMLテンプレート
├── vite.config.ts     # Vite設定
└── README.md          # このファイル
```

## 🎨 カスタマイズ

### カラーテーマの変更

`index.css` と各コンポーネントのグラデーション設定を編集してください。

### コンテンツの変更

各コンポーネント内のテキストや画像URLを変更することで、簡単にカスタマイズできます。

### セクションの追加・削除

`App.tsx` でコンポーネントのインポートと配置を変更してください。

## 🌐 デプロイ

### Vercel

```bash
# Vercelにデプロイ
vercel
```

### Netlify

```bash
# ビルド
npm run build

# distフォルダをNetlifyにドラッグ&ドロップ
```

## 📝 お問い合わせフォームの設定

現在、フォームはデモモードで動作しています。実際に使用する場合は、`Contact.tsx` の `handleSubmit` 関数を実際のAPIエンドポイントに接続してください。

例：
```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

## 🔧 開発モード

```bash
# 開発サーバーを起動（ホットリロード有効）
npm run dev

# ポート3001で起動
# http://localhost:3001/hp/
```

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🤝 サポート

質問や問題がある場合は、お気軽にお問い合わせください。

---

Made with ❤️ and AI


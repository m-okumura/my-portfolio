# ポートフォリオサイト

モダンで美しいポートフォリオサイトです。React、TypeScript、Tailwind CSS、Framer Motionを使用して構築されています。

## 特徴

- 🎨 モダンで美しいUIデザイン
- 📱 完全レスポンシブデザイン
- ⚡ 高速なパフォーマンス（Vite使用）
- 🎭 スムーズなアニメーション（Framer Motion）
- 🎯 TypeScriptによる型安全性
- 🌈 Tailwind CSSによるスタイリング

## セクション

- **Hero**: 魅力的なヒーローセクション
- **About**: 自己紹介とスキルレベル
- **Skills**: 技術スキルの詳細表示
- **Projects**: プロジェクトのポートフォリオ
- **Contact**: お問い合わせフォームと連絡先情報

## セットアップ

### 必要な環境

- Node.js 18以上
- npm または yarn

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開いてください。

### ビルド

```bash
npm run build
```

### プレビュー

```bash
npm run preview
```

## カスタマイズ

### 個人情報の更新

以下のファイルを編集して、あなたの情報に置き換えてください：

- `src/components/Hero.tsx` - ヒーローセクションのテキスト
- `src/components/About.tsx` - 自己紹介の内容
- `src/components/Skills.tsx` - スキルリスト
- `src/components/Projects.tsx` - プロジェクト情報
- `src/components/Contact.tsx` - 連絡先情報

### カラーテーマの変更

`tailwind.config.js` の `primary` カラーを変更することで、サイト全体のカラーテーマを変更できます。

## デプロイ

### Vercelへの自動デプロイ（推奨）

1. [Vercel](https://vercel.com)にアクセスしてアカウントを作成（GitHubアカウントでログイン推奨）

2. Vercelダッシュボードで「Add New Project」をクリック

3. GitHubリポジトリ `m-okumura/my-portfolio` を選択

4. プロジェクト設定（自動検出されるはず）：
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. 「Deploy」をクリック

これで、`main`ブランチにプッシュするたびに自動的にデプロイされます。

詳細は [DEPLOY.md](./DEPLOY.md) を参照してください。

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - 型安全性
- **Vite** - ビルドツール
- **Tailwind CSS** - スタイリング
- **Framer Motion** - アニメーション
- **Lucide React** - アイコン

## ライセンス

MIT


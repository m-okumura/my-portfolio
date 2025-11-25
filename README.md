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

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - 型安全性
- **Vite** - ビルドツール
- **Tailwind CSS** - スタイリング
- **Framer Motion** - アニメーション
- **Lucide React** - アイコン

## GitHub Pagesへのデプロイ

このプロジェクトはGitHub Actionsを使用して自動的にGitHub Pagesにデプロイされます。

### デプロイ手順

1. GitHubリポジトリの設定を開く
   - リポジトリの **Settings** → **Pages** に移動

2. Sourceを設定
   - **Source** を **GitHub Actions** に設定

3. コードをプッシュ
   - `main`ブランチにプッシュすると、自動的にビルドとデプロイが実行されます

4. デプロイの確認
   - Actionsタブでデプロイの進行状況を確認できます
   - デプロイが完了すると、`https://m-okumura.github.io/my-portfolio/` でアクセスできます

### 手動デプロイ（オプション）

```bash
# ビルド
npm run build

# distフォルダの内容をgh-pagesブランチにデプロイ
# （gh-pagesパッケージを使用する場合）
```

## ライセンス

MIT


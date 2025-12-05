# 🌐 サイト公開ガイド

このポートフォリオサイトをインターネットに公開する方法を3つ紹介します。

## 🚀 方法1: Vercel（推奨・最も簡単）

**メリット:**
- ✅ 設定が最も簡単
- ✅ GitHubと連携で自動デプロイ
- ✅ 無料でカスタムドメイン対応
- ✅ 高速なCDN配信
- ✅ プレビューURL自動生成

### 手順

1. **Vercelにアカウント作成**
   - https://vercel.com にアクセス
   - GitHubアカウントでログイン

2. **プロジェクトをインポート**
   - 「Add New Project」をクリック
   - GitHubリポジトリ `my-portfolio` を選択
   - Framework Preset: **Vite** を選択
   - Root Directory: **./** を確認
   - Build Command: `npm run build` を確認
   - Output Directory: `dist` を確認
   - 「Deploy」をクリック

3. **完了！**
   - 数分でデプロイ完了
   - `https://your-project-name.vercel.app` でアクセス可能
   - カスタムドメインも無料で設定可能

4. **自動デプロイ設定**
   - GitHubにpushするたびに自動でデプロイされます
   - プルリクエストごとにプレビューURLも自動生成

---

## 📦 方法2: GitHub Pages

**メリット:**
- ✅ GitHubリポジトリと統合
- ✅ 無料
- ✅ `github.io` ドメインで公開

### 手順

1. **gh-pagesパッケージをインストール**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **package.jsonにデプロイスクリプトを追加**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **GitHub Pagesの設定**
   - GitHubリポジトリの「Settings」→「Pages」
   - Source: 「Deploy from a branch」を選択
   - Branch: `gh-pages` と `/(root)` を選択
   - 「Save」をクリック

4. **デプロイ実行**
   ```bash
   npm run deploy
   ```

5. **公開URL**
   - `https://m-okumura.github.io/my-portfolio/` でアクセス可能

---

## 🌊 方法3: Netlify

**メリット:**
- ✅ 簡単な設定
- ✅ GitHubと連携で自動デプロイ
- ✅ 無料でカスタムドメイン対応
- ✅ フォーム機能も利用可能

### 手順

1. **Netlifyにアカウント作成**
   - https://www.netlify.com にアクセス
   - GitHubアカウントでログイン

2. **プロジェクトをデプロイ**
   - 「Add new site」→「Import an existing project」
   - GitHubリポジトリを選択
   - Build command: `npm run build`
   - Publish directory: `dist`
   - 「Deploy site」をクリック

3. **完了！**
   - 数分でデプロイ完了
   - `https://your-project-name.netlify.app` でアクセス可能

---

## ⚙️ 設定の違い

### Vercel/Netlifyで公開する場合

`vite.config.ts` の `base` を `/` に変更してください：

```typescript
base: '/',
```

### GitHub Pagesで公開する場合

`vite.config.ts` の `base` を `/my-portfolio/` のままにしてください：

```typescript
base: '/my-portfolio/',
```

---

## 🎯 推奨

**Vercel** を推奨します。理由：
- 設定が最も簡単
- 自動デプロイが便利
- パフォーマンスが優秀
- 無料プランでも十分

---

## 📝 注意事項

- 画像ファイルは `src/assets/` に配置してください（Viteの推奨方法）
- ビルド前に `npm run build` でエラーがないか確認してください
- デプロイ後、数分待ってからアクセスしてください


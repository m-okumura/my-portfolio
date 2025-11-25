# GitHub Pagesへのデプロイ手順

このドキュメントでは、プロジェクトをGitHub Pagesにデプロイする方法を説明します。

## 🚀 デプロイコマンド

以下のコマンドを実行するだけで、自動的にビルドとデプロイが行われます：

```bash
npm run deploy
```

このコマンドは以下を実行します：
1. TypeScriptのコンパイル
2. Viteでのビルド
3. `gh-pages`ブランチへの自動デプロイ

## 📝 初回デプロイの準備

### 1. 変更をコミット

まず、変更をGitにコミットします：

```bash
git add .
git commit -m "Add GitHub Pages deployment configuration"
git push origin main
```

### 2. GitHub Pagesの設定

1. GitHubのリポジトリページにアクセス: https://github.com/m-okumura/my-portfolio
2. 「Settings」タブをクリック
3. 左サイドバーの「Pages」をクリック
4. 「Source」で「Deploy from a branch」を選択
5. 「Branch」で「gh-pages」ブランチと「/(root)」を選択
6. 「Save」をクリック

### 3. デプロイ実行

```bash
npm run deploy
```

## 🌐 公開URL

デプロイが完了すると、以下のURLでアクセスできます：

- **メインサイト**: https://m-okumura.github.io/my-portfolio/
- **HP（AIXWEB）**: https://m-okumura.github.io/my-portfolio/hp/

## 🔄 更新方法

サイトを更新する場合は、以下の手順を実行します：

```bash
# 1. 変更を行う
# 2. 変更をコミット
git add .
git commit -m "Update site"
git push origin main

# 3. デプロイ
npm run deploy
```

## 📂 デプロイされるファイル

- `dist/` フォルダの内容が `gh-pages` ブランチにデプロイされます
- `.nojekyll` ファイルも含まれ、Jekyllの処理をスキップします

## ⚙️ 設定ファイル

### vite.config.ts
```typescript
base: '/my-portfolio/'
```

この設定により、すべてのアセットパスが正しく解決されます。

### package.json
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

## 🐛 トラブルシューティング

### デプロイが失敗する場合

1. **ビルドエラー**: まず `npm run build` を実行して、ビルドが成功するか確認
2. **権限エラー**: GitHubへのpush権限を確認
3. **ブランチエラー**: `gh-pages` ブランチが正しく作成されているか確認

### ページが表示されない場合

1. GitHub Pagesの設定が正しいか確認
2. 数分待ってから再度アクセス（デプロイには時間がかかる場合があります）
3. ブラウザのキャッシュをクリア

### アセットが読み込まれない場合

1. `vite.config.ts` の `base` 設定を確認
2. コンソールでパスエラーを確認

## 📱 ローカルプレビュー

デプロイ前にローカルでビルド結果を確認できます：

```bash
# ビルド
npm run build

# プレビュー
npm run preview
```

## 🎯 HPサイト（AIXWEB）のみをビルド

AIXWEBサイトのみをビルドする場合：

```bash
cd hp
npm run build
```

---

**注意**: 初回デプロイ後、GitHubが `gh-pages` ブランチを認識するまで数分かかる場合があります。


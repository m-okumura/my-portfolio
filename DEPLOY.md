# 自動デプロイ設定ガイド

このポートフォリオサイトをVercelに自動デプロイする方法です。

## 方法1: Vercel GitHub統合（推奨・最も簡単）

1. [Vercel](https://vercel.com)にアクセスしてアカウントを作成（GitHubアカウントでログイン推奨）

2. Vercelダッシュボードで「Add New Project」をクリック

3. GitHubリポジトリ `m-okumura/my-portfolio` を選択

4. プロジェクト設定：
   - Framework Preset: `Vite`
   - Build Command: `npm run build`（自動検出されるはず）
   - Output Directory: `dist`（自動検出されるはず）
   - Install Command: `npm install`（自動検出されるはず）

5. 「Deploy」をクリック

これで、`main`ブランチにプッシュするたびに自動的にデプロイされます。

## 方法2: GitHub Actionsを使用（既に設定済み）

GitHub Actionsワークフローが既に設定されています。以下の手順でシークレットを設定してください：

1. GitHubリポジトリの「Settings」→「Secrets and variables」→「Actions」に移動

2. 以下のシークレットを追加：

   ### VERCEL_TOKEN
   - Vercelダッシュボード → Settings → Tokens
   - 新しいトークンを作成してコピー

   ### VERCEL_ORG_ID
   - Vercel CLIで `vercel link` を実行するか
   - Vercel APIで取得: `curl https://api.vercel.com/v1/teams -H "Authorization: Bearer YOUR_TOKEN"`

   ### VERCEL_PROJECT_ID
   - プロジェクトを作成後、プロジェクト設定ページのURLから取得
   - または `vercel link` で `.vercel/project.json` に保存される

3. `main`ブランチにプッシュすると自動的にデプロイされます

## 方法3: Vercel CLIを使用

```bash
# Vercel CLIをインストール
npm i -g vercel

# ログイン
vercel login

# プロジェクトをリンク
vercel link

# デプロイ
vercel --prod
```

## デプロイ後の確認

デプロイが完了すると、VercelからURLが提供されます（例: `https://my-portfolio-xxx.vercel.app`）

カスタムドメインも設定可能です。

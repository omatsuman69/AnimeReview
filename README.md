# AnimeReview

これは、Next.js, shadcn/ui, Prisma, PostgreSQL を使用して構築されたアニメレビューサイトのサンプルアプリケーションです。

## 概要

v0.devで作成されたモックUIをベースに、Docker上で動作するデータベース連携アプリケーションとして開発されました。ユーザーはアニメのタイトルを閲覧し、レビューを読んだり投稿したりすることができます。

## 技術スタック

-   **フレームワーク**: Next.js (App Router)
-   **UI**: React, TypeScript, shadcn/ui, Tailwind CSS
-   **ORM**: Prisma
-   **データベース**: PostgreSQL
-   **コンテナ**: Docker, Docker Compose

## セットアップ手順

### 前提条件

-   [Docker](https://www.docker.com/get-started) と [Docker Compose](https://docs.docker.com/compose/install/) がインストールされていること。
-   [Node.js](https://nodejs.org/ja) (v20.x or later) と [pnpm](https://pnpm.io/ja/installation) がインストールされていること。

### インストールと起動

1.  **リポジトリをクローン**

    ```bash
    git clone https://github.com/omatsuman69/AnimeReview.git
    cd AnimeReview
    ```

2.  **依存関係をインストール**

    ```bash
    pnpm install
    ```

3.  **環境変数を設定**

    `.env.example` ファイルをコピーして `.env` ファイルを作成します。（このプロジェクトでは `prisma init` で自動生成済みです）
    `.env` ファイルには、データベース接続用のURLが以下のように設定されています。

    ```
    DATABASE_URL="postgresql://postgres:password@localhost:5432/animereview?schema=public"
    ```

4.  **Dockerコンテナを起動**

    以下のコマンドを実行して、Next.jsアプリケーションとPostgreSQLデータベースのコンテナをバックグラウンドで起動します。

    ```bash
    docker-compose up -d --build
    ```

    初回起動時は、Dockerイメージのダウンロードとビルドに数分かかることがあります。

5.  **データベースマイグレーション**

    コンテナが起動したら、Prismaを使ってデータベースにテーブルを作成します。

    ```bash
    pnpm exec prisma migrate dev
    ```

6.  **初期データを投入**

    動作確認のために、ダミーデータをデータベースに投入します。

    ```bash
    pnpm exec prisma db seed
    ```

7.  **アプリケーションにアクセス**

    ブラウザで `http://localhost:3000` を開きます。

## APIエンドポイント

### 全アニメタイトルを取得

-   **Method**: `GET`
-   **Endpoint**: `/api/anime`
-   **cURL サンプル**:
    ```bash
    curl http://localhost:3000/api/anime
    ```

### 特定タイトルのレビューを取得

-   **Method**: `GET`
-   **Endpoint**: `/api/anime/{id}/reviews`
-   **cURL サンプル** (ID: 1 の場合):
    ```bash
    curl http://localhost:3000/api/anime/1/reviews
    ```

### レビューを投稿

-   **Method**: `POST`
-   **Endpoint**: `/api/anime/{id}/reviews`
-   **cURL サンプル** (ID: 1 のアニメに、ID: 1 のユーザーがレビューを投稿):
    ```bash
    curl -X POST http://localhost:3000/api/anime/1/reviews \
    -H "Content-Type: application/json" \
    -d '{
      "rating": 5,
      "comment": "最高でした！",
      "userId": 1
    }'
    ```

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
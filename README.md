## 『共論』について

### ユーザーが抱える課題
 意見が分かれる議題についてどっち派かを問い投票させるアプリはあるが、なぜそう思うのかを深く議論するアプリはなかった。

### 解決方法
 議題に対して『〇〇は赤』『××は青』という風にコメントができる。コメントをすると赤が何人、青が何人というふうにグラフで表示される。
 投票して終わりではなく、そこから赤チームと青チームに分かれて両サイドに議論をしてもらう。
  
### 機能
* ログイン機能(ゲストログイン可)
* 意見や質問の投稿や削除機能(CRUD機能)
* 投稿に対するコメント機能(賛成反対に応じて色分けができる)
* フォロー機能
* コメント一覧の上にある色付きのコメントマークをクリックするとその色のコメントのみ表示
* 新規のコメントがつくとユーザー登録する際に入力したメールアドレスに通知メールが送られる。

### 使用技術
#### バックエンド
* Ruby 2.6.6
* Rails 6.0.3
* RSpec
#### フロントエンド
* HTML
* CSS(SCSS)
* JavaScript(jQuery)
#### インフラ
* Nginx
* AWS
 * EC2
 * VPC
 * Route53
 * MySQL
 * ALB
 * ACM
* Nginx
* Unicorn

### 主要なGem
* devise (認証)
* kaminari (ページネーション)
* ransack (検索)
* rspec-rails (テスト)

### ER図

![ER図](https://user-images.githubusercontent.com/66545944/150345430-523c6404-3b9a-4124-93a8-aa3ea599a78a.png)

## 『共論』について

### ユーザーが抱える課題
 質問や議論などのコミュニケーションをとる上で意見が賛成と反対どちらかに偏ってしまい、その人が言いたかった「ここはいいけどこれはダメ」が伝わりにくいのではないか。

### 解決方法
 意見によって色付けをし賛成や評価する意見を青色、反対や訂正を求める意見を赤色、どちらでもない意見を黄色にし、一つの意見の中に含まれる「ここはいいけどこれはダメ」「〇〇には賛成だけど××には反対」という意見を見やすくする。
  
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
* chartkick (グラフ)

![ER図](https://user-images.githubusercontent.com/66545944/150345430-523c6404-3b9a-4124-93a8-aa3ea599a78a.png)

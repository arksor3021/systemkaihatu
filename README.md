## AWSでEC2インスタンスを作成する

EC2インスタンスができたらシェルでssh接続
```
ssh ec2-user@{EC2インスタンスのパブリック IPv4 DNS} -i {pemファイルのパス}
```
## vimをインストール
```
sudo yum install vim -y
```

## screenをインストール
```
sudo yum install screen -y
```

## Dockerをインストール
```
sudo yum install -y docker
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -a -G docker ec2-user
```
反映させるためにシェルを閉じる。
開いているウィンドウを`exit`で全て抜ける。


## Docker Compose インストール
```
sudo mkdir -p /usr/local/lib/docker/cli-plugins/
sudo curl -SL https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-linux-x86_64 -o /usr/local/lib/docker/cli-plugins/docker-compose
sudo chmod +x /usr/local/lib/docker/cli-plugins/docker-compose
```
インストールできたか`docker compose version`で確認

ディレクトリを作成してcompose.ymlを書く
```
mkdir dockertest
cd dockertest
vim compose.yml
```
[compose.yml](https://github.com/arksor3021/systemkaihatu/blob/main/compose.yml)

## nginxの設定
nginxのディレクトリ作成
```
mkdir nginx
mkdir nginx/conf.d
```

設定ファイルの作成
```
vim nginx/conf.d/default.conf
```
[nginx/conf.d/default.conf](https://github.com/arksor3021/systemkaihatu/blob/main/nginx/conf.d/default.conf)


## Dockerfile作成
```
vim Dockerfile
```

[Dockerfile](https://github.com/arksor3021/systemkaihatu/blob/main/Dockerfile)
編集できたら`docker compose build`して`docker compose up`する


## MySQLサーバーに接続
screenを起動して`docker compose up`しておく
もう一つscreenを起動してからMySQLサーバーに接続する
```
docker compose exec mysql mysql techc
```

投稿を保存するためのテーブルを作る
```
CREATE TABLE `bbs_entries` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `body` TEXT NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `image_filename` TEXT DEFAULT NULL

);
```
できたら`exit`で抜ける。


## 公開の準備

公開用のディレクトリの作成

```
mkdir public
```

公開する掲示板のファイル作成
```
vim public/bbs.php
```
[bbs.php](https://github.com/arksor3021/systemkaihatu/blob/main/public/bbs.php)
```
vim public/style.css
```
[public/style.css](https://github.com/arksor3021/systemkaihatu/blob/main/public/style.css)
```
vim public/script.js
```
[public/script.js](https://github.com/arksor3021/systemkaihatu/blob/main/public/script.js)


`http://{EC2インスタンスのパブリック IPv4 DNS}/bbs.php`で閲覧できる










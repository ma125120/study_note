## 下载

## 配置
my.ini
``` ini
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8
[mysqld]
# 设置3306端口
port = 3306 
# 设置mysql的安装目录
basedir=G:\Install_Applications\Program Files\mysql-8.0.11
# 设置mysql数据的存放目录
datadir=G:\Install_Applications\Program Files\mysql-8.0.11\data
# 允许最大连接数
max_connections=200
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB 
```

## 安装

### 安装服务
``` powershell
mysqld install
```

### 初始化
``` powershell
mysqld --initialize --console
```
注意： 此时控制台会出现密码，之后需要该初始密码进行登录


## 修改密码
```sql
mysql -u root -p
-- 输入初始密码，进入数据库后执行下述语句修改密码
ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';
```

如果 ```ER_NOT_SUPPORTED_AUTH_MODE```错误
```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
```
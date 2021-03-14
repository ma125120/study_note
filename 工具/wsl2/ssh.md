```mcd
sudo apt-get install openssh-server

# 查看安装的服务
dpkg -l | grep ssh

# 启动
sudo /etc/init.d/ssh start
# sudo service ssh start

# 修改配置文件
sudo chmod 777 /etc/ssh/sshd_config

vim /etc/ssh/sshd_config
# 开启密码登录 PasswordAuthentication yes

# 重启ssh服务
sudo /etc/init.d/ssh stop
sudo /etc/init.d/ssh start
```
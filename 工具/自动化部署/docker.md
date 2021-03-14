```cmd
# 开机自启
sudo systemctl enable docker
```
```cmd
# 创建组
sudo groupadd docker

# 当前用户加入组docker
sudo gpasswd -a ${USER} docker

# 重启docker 
sudo service docker restart

# 添加访问和执行权限
sudo chmod a+rw /var/run/docker.sock
```
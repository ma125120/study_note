# github加速

1. 查找域名对应的ip地址，并修改hosts文件
```
nslookup github.global.ssl.fastly.Net

nslookup github.com
```
2. 修改hosts文件

* Windows上的hosts文件路径在 ```C:\Windows\System32\drivers\etc\hosts```

* Linux、mac的hosts文件路径在/etc/hosts中```sudo vim /etc/hosts```

```
github.com 13.229.188.59
github.global.ssl.fastly.Net 151.101.229.194
```
3. 刷新DNS缓存

Linux：
```
sudo /etc/init.d/networking restart
```

Windows：
```
ipconfig /flushdns
```
Mac：
```
sudo killall -HUP mDNSResponder
```

# 查找线路最快的IP
https://www.ipaddress.com

```
git config --global http.postBuffer 10485760
```

# google hosts
https://github.com/googlehosts/hosts/blob/master/hosts-files/hosts
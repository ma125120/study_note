## 国内镜像源
"http://hub-mirror.c.163.com"

## 安装jenkins

```cmd
docker pull jenkins/jenkins
docker run -d --name jk -p 3080:8080 -v E:/soft/docker/jenkins:/var/jenkins_home jenkins/jenkins
```

## 安装 nginx

```cmd
docker pull nginx
docker run -d --name nginx -p 80:80 -v ./html:/usr/share/nginx/html nginx
```

## gitee
https://gitee.com/help/articles/4193#article-header9

## 执行shell
```cmd
npm -v
nrm -V
rm -rf /tmp/html.tar.gz
mkdir -p /tmp/static/
tar -zcvf /tmp/html.tar.gz -C /var/jenkins_home/workspace/static . --exclude="*.git"
mv /tmp/html.tar.gz /var/jenkins_home/workspace/static/
```

## send files
```cmd
docker rm -f static_web

tar -xvf ~/html.tar.gz -C ~/

cd ~
docker-compose up -d --build

rm -rf  ~/html.tar.gz
```
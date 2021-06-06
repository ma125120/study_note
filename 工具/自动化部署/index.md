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
tar -zcvf /tmp/html.tar.gz --exclude="*.git" -C /var/jenkins_home/workspace/static . 
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
<!-- 
function Foo() {
     getName = function(){ 
        console.log(1); 
     };
     return this;
}
Foo.getName = function() { 
    console.log(2);
};
Foo.prototype.getName = function(){ 
    console.log(3);
};
var getName = function() { 
    console.log(4);
};
function getName(){ 
    console.log(5);
}

Foo.getName(); // 
getName(); // 
Foo().getName(); // 
getName(); // 
new (Foo.getName)(); //
(new Foo()).getName(); //

var list1 = [
  {
    "id": 1,
    "parentId": 0
  },
  {
    "id": 2,
    "parentId": 0
  },
  {
    "id": 3,
    "parentId": 1
  },
    {
        "id": 4,
        "parentId": 3
    }
]

var toTree1 = list => {
    const res = []
    const map = {}
    
    list.forEach(v => {
        if (!v.parentId) {
            if (!map[v.id]) {
                res.push(v)
                map[v.id] = v
            } else {
                res.push({
                    ...v,
                    ...map[v.id]
                })
            }
        } else {
            if (!map[v.id]) {
             map[v.parentId] = map[v.parentId] || {}
            map[v.parentId].children = map[v.parentId].children || []
            map[v.parentId].children.push(v)
            map[v.id] = v
            } else {
                map[v.id] = {
                    ...map[v.id],
                    ...v,
                }
                
            }
            
            
        }
    })
    
    return res
}

toTree1(list1) -->
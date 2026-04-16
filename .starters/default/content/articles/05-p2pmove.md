---
title: Zerotier/FRP迁移的记录文档
description: Zerotier/FRP迁移的记录文档
cover: "https://img.mxai.eu.cc/imgs/cover_1776321204820_1776321204.jpg"
date: 2024-07-14
---



# P2pmove

Zerotier/FRP迁移的记录文档

## 1. 安装zerotier

```bash
docker pull keynetworks/ztncui
```

```bash
docker run -d --name zt-ui -v /home/docker/zt-ui/zerotier-one:/var/lib/zerotier-one -v /home/docker/zt-ui/ztncui/etc:/opt/key-networks/ztncui/etc -p 4000:4000 -p 3180:3180 -p 9993:9993 -p 9993:9993/udp -e MYADDR=公网ip -e HTTP_PORT=4000 -e HTTP_ALL_INTERFACES=yes -e ZTNCUI_PASSWD=admin123 --restart=always 4bb2
```

```bash
docker cp patch.sh zt-ui:/tmp
docker cp mkmoonworld-x86_64 zt-ui:/tmp
docker exec -it zt-ui bash /tmp/patch.sh && docker restart zt-ui
```

## 2. 安装xray

直接访问xray官网

## 3. 安装frps

```bash
vim /etc/systemd/system/frps.service
```

```ini
[Unit]
Description = frp server
After = network.target syslog.target
Wants = network.target

[Service]
Type = simple
# 启动frps的命令，需修改为您的frps的安装路径
ExecStart = /opt/frp/frps -c /opt/frp/frps.ini

[Install]
WantedBy = multi-user.target
```

```bash
systemctl daemon-reload
```

## 4. 配置Nginx

```nginx
server
{
listen 80;
server_name p2p.witque.cn;

location /{
proxy_pass http://127.0.0.1:4000;
proxy_redirect off;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Host $http_host;
proxy_set_header X-NginX-Proxy true;
}

location /api{
proxy_pass http://127.0.0.1:7500/api;
}

location /static {
return 301 $request_uri/frp/;
}

location /frp/{
proxy_pass http://127.0.0.1:7500/static/;
}

}
```

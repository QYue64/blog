---
title: All In One 方案变更
description: All In One 方案变更
cover: "https://img.mxai.eu.cc/imgs/cover_1776321104590_1776321104.jpg"
date: 2024-09-23
---


# All In One 方案变更

- 群晖引导 100.raw (考虑转换后直接用，通过增加硬盘后迁移盘数据，存储池切换)
- Centos 101.raw (考虑导出文件重新部署，能在宿主机搞定的直接宿主机)
- IStoreOS 102.raw （不重要，最后处理，最好转换直接用，看看能不能下掉这个方案）
- Windows 103.raw （提取文件，直接不要了）

## 迁移镜像准备

## 迁移技术支持内容

- PVE重新挂载磁盘解决只读问题 `mount -o remount rw /`
- PVE挂载移动硬盘 `mount /dev/sdc1 /opt/onvme`

## 迁移文件存放地

### 100-群晖-迁移备份内容

- 备份100.raw `cp -R /var/lib/pve/local-btrfs/images/100 /opt/onvme`
- 保留现有两块机械数据硬盘
- 增加两块新的机械硬盘

新方案

- 使用Hyper-V部署SA6400
- Windows命令直通PCIE转SATA卡 参考

### 101-Centos-迁移备份内容

- 不再备份整个虚拟机的镜像
- 备份整个 /opt 目录下的内容
- 备份Docker容器相关
- 备份nginx配置

镜像下载

```
docker pull whyour/qinglong:latest
docker pull dushixiang/next-terminal:latest
docker pull dushixiang/guacd:latest
docker pull xhofe/alist
```

Docker 容器列表

- mysql:latest

```bash
docker run \
 --name mysql \
 -p 3306:3306 \
 -v /opt/mysql_data/:/var/lib/mysql \
 --restart=always \
 -e MYSQL_ROOT_PASSWORD=witque666 \
 -d mysql
```

- postgres:latest

```bash
docker run -d \
 --name postgres \
 --restart=always \
 -p 5432:5432 \
 -e POSTGRES_PASSWORD=Witque666.. \
 -v /opt/postgres:/var/lib/postgresql/data \
 postgres
```

- neosmemo/memos:latest v0.21.0

```bash
docker run -d \
 --name memos \
 --restart=always \
 --publish 5230:5230 \
 --volume /opt/memos:/var/opt/memos \
 neosmemo/memos:latest --driver postgres --dsn 'postgresql://postgres:Witque666..@172.17.0.1:5432/memos?sslmode=disable'
```

- xhofe/alist:latest

```bash
docker run -d --restart=always -v /opt/alist:/opt/alist/data -p 5235:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="alist" xhofe/alist:latest
docker exec -it alist ./alist admin set NEW_PASSWORD
```

- portainer/portainer-ee

```bash
docker run -d --restart=always --name="portainer" -p 5245:9000 -p 5246:9443 -v /var/run/docker.sock:/var/run/docker.sock -v /opt/portainer/data:/data -v /opt/portainer/portainer-ee:/public portainer/portainer-ee
```

- Next Terminal

安装 guacd

```bash
docker run --restart=always --name guacd -d \
 -v /opt/next-terminal/data:/usr/local/next-terminal/data \
 dushixiang/guacd:latest
```

安装 next-terminal

```bash
docker run --restart=always --name next-terminal -d \
 --link guacd \
 -p 5240:8088 \
 -v /opt/next-terminal/data:/usr/local/next-terminal/data \
 -v /etc/localtime:/etc/localtime \
 -e DB=sqlite \
 -e GUACD_HOSTNAME=guacd \
 -e GUACD_PORT=4822 \
 dushixiang/next-terminal:latest
```

- 青龙面板部署

```bash
docker run -dit \
 -v /opt/ql/data:/ql/data \
 -p 5260:5700 \
 --name qinglong \
 --restart always \
 whyour/qinglong:latest
```

### 102-IStoreOs-迁移备份内容

- 备份102.raw `cp -R /var/lib/pve/local-btrfs/images/102 /opt/onvme`

### 103-Windows-迁移备份内容

- 备份Minecraft `C:\Users\Administrator\Desktop\bedrock-server-1.21.20.03`
- 备份PalWorld 链接：https://pan.quark.cn/s/f9382557d40f 提取码：d2Ft

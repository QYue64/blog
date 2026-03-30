---
title: Docker 笔记
description: 小雀 Docker 笔记整理归纳
cover: https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/wap720/006PuDzUgy1ht19c4fa4hj31z418ghdt.jpg
date: 2024-08-16
---

# Docker 笔记

## Docker 简介

Docker 是一个开源的容器化平台，它允许开发者将应用及其依赖环境打包到一个轻量级、可移植的容器中，然后可以在任何支持 Docker 的机器上运行。Docker 使用 Linux 容器（LXC）技术，但提供了比传统容器更加易用的工作流和用户界面。

## Docker 的主要特点

**轻量级**：Docker 容器共享宿主机的内核，不需要像虚拟机那样模拟整个操作系统。

**可移植性**：容器可以在任何安装了 Docker 的机器上运行，无需担心环境差异。

**自动化部署**：Docker 通过 Dockerfile 来自动化构建容器镜像，简化部署流程。

**版本控制和组件重用**：Docker Hub 和其他注册中心可以用来分享和存储容器镜像。

**微服务架构**：Docker 容器非常适合微服务架构，每个服务可以独立部署和扩展。

## Docker 安装

Docker 的安装过程会根据你使用的操作系统而有所不同。以下是在一些常见操作系统上安装 Docker 的基本步骤：

### 对于 Ubuntu/Debian 系统：

更新软件包列表：

```bash
sudo apt-get update
```

安装 Docker 的依赖项：

```bash
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```

添加 Docker 的官方 GPG 密钥：

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

设置 Docker 稳定版仓库：

```bash
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

安装 Docker Engine：

```bash
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

验证安装：

```bash
sudo docker run hello-world
```

## 常用 Docker 命令

### 容器管理

```bash
# 查看运行中的容器
docker ps

# 查看所有容器（包括已停止的）
docker ps -a

# 启动容器
docker start <container_id>

# 停止容器
docker stop <container_id>

# 重启容器
docker restart <container_id>

# 删除容器
docker rm <container_id>
```

### 镜像管理

```bash
# 查看本地镜像
docker images

# 拉取镜像
docker pull <image_name>

# 删除镜像
docker rmi <image_id>

# 构建镜像
docker build -t <image_name> .
```

### 网络管理

```bash
# 查看网络
docker network ls

# 创建网络
docker network create <network_name>

# 连接容器到网络
docker network connect <network_name> <container_id>
```

## Docker Compose

Docker Compose 是用于定义和运行多容器 Docker 应用程序的工具。

### 安装 Docker Compose

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/$(curl -s https://api.github.com/repos/docker/compose/releases/latest | jq -r .tag_name)/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### 常用命令

```bash
# 启动所有服务
docker-compose up -d

# 停止所有服务
docker-compose down

# 查看服务状态
docker-compose ps

# 查看日志
docker-compose logs -f
```

## 实践建议

1. **使用多阶段构建**来减小镜像大小
2. **使用 `.dockerignore`** 排除不必要的文件
3. **定期清理**未使用的镜像、容器和卷
4. **使用命名卷**而不是绑定挂载来持久化数据
5. **遵循最小权限原则**，避免以 root 用户运行容器

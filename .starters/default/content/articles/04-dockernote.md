---
title: Docker 笔记
description: 小雀 Docker 笔记整理归纳
cover: https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/wap720/006PuDzUgy1ht19c4fa4hj31z418ghdt.jpg
date: 2024-08-16
---


# Docker笔记

## Docker简介

Docker 是一个开源的容器化平台，它允许开发者将应用及其依赖环境打包到一个轻量级、可移植的容器中，然后可以在任何支持Docker的机器上运行。Docker 使用 Linux 容器（LXC）技术，但提供了比传统容器更加易用的工作流和用户界面。

### Docker的主要特点

- **轻量级**：Docker 容器共享宿主机的内核，不需要像虚拟机那样模拟整个操作系统。
- **可移植性**：容器可以在任何安装了Docker的机器上运行，无需担心环境差异。
- **自动化部署**：Docker 通过 Dockerfile 来自动化构建容器镜像，简化部署流程。
- **版本控制和组件重用**：Docker Hub 和其他注册中心可以用来分享和存储容器镜像。
- **微服务架构**：Docker 容器非常适合微服务架构，每个服务可以独立部署和扩展。

## Docker安装

### 对于 Ubuntu/Debian 系统

更新软件包列表：

```bash
sudo apt-get update
```

安装 Docker 的依赖项：

```bash
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
```

添加 Docker 的官方 GPG 密钥：

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

添加 Docker 仓库：

```bash
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```

再次更新软件包列表：

```bash
sudo apt-get update
```

安装 Docker CE（社区版）：

```bash
sudo apt-get install -y docker-ce
```

### 对于 CentOS/RHEL 系统

安装所需的软件包：

```bash
sudo yum install -y yum-utils
```

设置 Docker 仓库：

```bash
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

安装 Docker CE：

```bash
sudo yum install docker-ce docker-ce-cli containerd.io
```

### 对于 Fedora 系统

```bash
sudo dnf -y install docker-ce docker-ce-cli containerd.io
```

### 对于 openSUSE 系统

```bash
sudo zypper install docker-ce
```

### 对于 Arch Linux 系统

```bash
sudo pacman -Syu docker
```

### 对于 Windows 或 macOS

从 Docker 官网下载 Docker Desktop 版本，然后按照安装向导进行安装。

### 通用步骤

启动 Docker 服务：

```bash
sudo systemctl start docker
```

验证 Docker 是否正确安装：

```bash
sudo docker run hello-world
```

将用户添加到 docker 组：

```bash
sudo usermod -aG docker your-username
```

## Docker使用场景

- 持续集成和持续部署（CI/CD）
- 本地开发环境
- 应用部署
- 微服务架构
- 多环境一致性
- 资源利用和隔离
- 快速扩展和弹性

### Docker 的特点和用途

- 容器化平台
- 快速部署
- 跨平台
- 版本控制和组件重用
- 单机使用

### Kubernetes 的特点和用途

- 容器编排平台
- 集群管理
- 服务发现和负载均衡
- 自动部署和回滚
- 存储和网络管理

### Docker 与 Kubernetes 的关系

- **互补性**：Docker 可以作为 Kubernetes 中的容器运行时，但 Kubernetes 支持多种容器运行时，如 containerd、CRI-O 等。
- **集成**：Docker 容器可以被 Kubernetes 管理，利用 Kubernetes 的编排能力来部署、扩展和管理 Docker 容器。
- **生态**：Docker 生态系统中的许多工具和实践可以与 Kubernetes 集成，形成完整的云原生技术栈。

## Docker和虚拟机的区别

| 特性 | Docker 容器 | 虚拟机 |
|---|---|---|
| 操作系统级别 | 应用级别 | 操作系统级别 |
| 启动速度 | 几乎瞬间 | 数分钟 |
| 资源占用 | 共享宿主机内核 | 独立分配内存和存储 |
| 性能开销 | 接近原生 | 较高 |
| 可移植性 | 更好 | 依赖虚拟机管理程序 |
| 隔离性 | 较低 | 较强 |

## Docker基本使用

运行容器：

```bash
docker run -d -p 80:80 --name webserver nginx
```

查看容器列表：

```bash
docker ps
```

停止容器：

```bash
docker stop webserver
```

查看容器日志：

```bash
docker logs webserver
```

进入容器：

```bash
docker exec -it webserver /bin/bash
```

构建镜像：

```bash
docker build -t myimage .
```

推送镜像到 Docker Hub：

```bash
docker push myusername/myimage
```

## 常用的 docker run 参数

| 参数 | 说明 |
|---|---|
| -d | 以守护进程模式运行容器（后台运行） |
| --name | 为容器指定一个名称 |
| -e / --env | 设置环境变量 |
| -P | 启用端口的随机分配 |
| -p / --publish | 端口映射 |
| -v / --volume | 挂载卷 |
| --mount | 更高级的挂载语法 |
| -w / --workdir | 指定工作目录 |
| --restart | 设置容器的重启策略 |
| --rm | 容器退出时自动清理 |
| --network | 指定容器连接的网络 |
| --cpus | 限制容器可以使用的 CPU 数量 |
| --memory / -m | 设置内存限制 |
| --gpus | 指定容器可以使用的 GPU 设备 |
| --privileged | 以特权模式运行容器 |
| --read-only | 使容器的根文件系统为只读模式 |
| --entrypoint | 覆盖容器的默认入口点 |
| -t / --tty | 分配一个伪终端 |
| -i / --interactive | 保持 STDIN 打开 |

示例：

```bash
docker run -d --name my_container -p 8080:80 -v my_volume:/path/in/container some-image
```

## Docker 网络

### 网络类型

- **桥接网络（Bridge）**：默认网络类型，适合大多数容器间通信需求。
- **覆盖网络（Overlay）**：用于跨主机的容器通信，常用于多节点的 Docker 集群。
- **主机网络（Host）**：容器共享主机的网络命名空间。
- **无网络（None）**：容器没有分配网络，完全隔离。
- **Macvlan 网络**：允许容器拥有独立的 MAC 地址。
- **插件网络**：第三方插件提供的网络类型。

### 创建网络

```bash
docker network create --driver bridge my-bridge-network
```

配置子网和网关：

```bash
docker network create \
  --driver bridge \
  --subnet 192.168.1.0/24 \
  --gateway 192.168.1.1 \
  my-bridge-network
```

连接容器到网络：

```bash
docker run -d --name my-container --network my-bridge-network my-image
```

将已有容器连接到网络：

```bash
docker network connect my-bridge-network my-existing-container
```

断开容器与网络的连接：

```bash
docker network disconnect my-bridge-network my-container
```

查看网络详情：

```bash
docker network inspect my-bridge-network
```

删除网络：

```bash
docker network rm my-bridge-network
```

使用覆盖网络：

```bash
docker network create --driver overlay --attachable my-overlay-network
```

## Dockerfile

Dockerfile 是一个文本文件，包含了一系列的指令和参数，用于定义如何构建一个 Docker 镜像。

### 常用指令

| 指令 | 说明 | 示例 |
|---|---|---|
| FROM | 基础镜像 | `FROM ubuntu:20.04` |
| RUN | 执行命令 | `RUN apt-get update && apt-get install -y curl` |
| CMD | 容器默认执行的命令 | `CMD ["python", "app.py"]` |
| EXPOSE | 暴露端口 | `EXPOSE 80` |
| ENV | 设置环境变量 | `ENV PATH /usr/local/nginx/bin:$PATH` |
| ADD | 添加文件 | `ADD source_file.txt /dest/path/` |
| COPY | 复制文件 | `COPY source_file.txt /dest/path/` |
| ENTRYPOINT | 配置容器的入口点 | `ENTRYPOINT ["python"]` |
| VOLUME | 创建挂载点 | `VOLUME /data` |
| USER | 指定用户 | `USER root` |
| WORKDIR | 工作目录 | `WORKDIR /app` |
| ARG | 构建参数 | `ARG VERSION=latest` |
| LABEL | 元数据 | `LABEL maintainer="name@example.com"` |
| STOPSIGNAL | 停止信号 | `STOPSIGNAL SIGTERM` |

### Dockerfile 示例

```dockerfile
# 使用官方 Python 运行时作为父镜像
FROM python:3.8-slim

# 设置工作目录
WORKDIR /app

# 将本地代码复制到容器中
COPY . /app

# 安装任何必要的依赖
RUN pip install --no-cache-dir -r requirements.txt

# 声明运行时需要暴露的端口
EXPOSE 5000

# 定义容器启动时执行的命令
CMD ["python", "./app.py"]
```

## Docker卷（Volume）管理

### 卷的概念

卷（Volume）是一个目录，Docker 容器可以将其挂载到容器内部作为数据持久化存储。卷独立于容器生命周期，即使容器被删除，卷中的数据依然保留。

### 常用操作

创建卷：

```bash
docker volume create my-volume
```

列出卷：

```bash
docker volume ls
```

检查卷：

```bash
docker volume inspect my-volume
```

挂载卷到容器：

```bash
docker run -d --name my-container -v my-volume:/path/in/container some-image
```

使用 --mount 语法：

```bash
docker run -d --name my-container --mount source=my-volume,target=/path/in/container some-image
```

只读挂载：

```bash
docker run -d --name my-container -v my-volume:/path/in/container:ro some-image
```

删除卷：

```bash
docker volume rm my-volume
```

## Docker常用命令

### 镜像相关

- `docker images`：列出本地主机上的镜像
- `docker pull IMAGE_NAME[:TAG]`：拉取指定的镜像
- `docker push IMAGE_NAME[:TAG]`：推送镜像到注册中心
- `docker rmi IMAGE_ID`：删除本地镜像
- `docker build -t IMAGE_NAME[:TAG] PATH`：构建镜像
- `docker login`：登录 Docker 注册中心
- `docker logout`：登出 Docker 注册中心
- `docker tag IMAGE_NAME[:TAG] NEW_IMAGE_NAME[:NEW_TAG]`：给镜像打上新的标签
- `docker inspect IMAGE_NAME[:TAG]`：获取镜像或容器的元数据

### 容器相关

- `docker run`：运行一个容器
- `docker start CONTAINER_ID`：启动已停止的容器
- `docker stop`：停止正在运行的容器
- `docker restart`：重启容器
- `docker rm`：删除容器
- `docker ps`：列出正在运行的容器（-a 显示所有）
- `docker logs`：获取容器的日志
- `docker exec`：在运行的容器中执行命令
- `docker attach`：附加到正在运行的容器

### 网络相关

- `docker network ls`：列出 Docker 网络
- `docker network create`：创建新网络
- `docker network rm`：删除网络
- `docker network inspect`：查看网络详情

### 卷相关

- `docker volume create`：创建新卷
- `docker volume ls`：列出卷
- `docker volume rm`：删除卷
- `docker volume inspect`：获取卷详细信息

### 系统管理

- `docker info`：显示 Docker 系统信息
- `docker version`：显示 Docker 版本信息
- `docker prune`：清理未使用的资源
- `docker system df`：显示 Docker 系统的空间使用情况
- `docker stats`：实时显示容器的性能数据
- `docker top`：查看容器内运行的进程
- `docker cp`：在容器和本地之间复制文件

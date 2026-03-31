---
title: Linux Service/Systemctl 服务配置
description: service服务的配置
cover: https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/wap720/006PuDzUgy1ht194aaoemj32yo1o0x6p.jpg
date: 2024-06-14
---


# Linux Service/Systemctl 服务配置

Python 服务配置：

```ini
[Unit]
Description= Qyue Api
After=network.target

[Service]
Type=simple
WorkingDirectory= /opt/api/bin
ExecStart= python3 api.py
ExecReload=/bin/kill -HUP $MAINPID
Restart=on-failure
KillMode=process
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

Java 服务配置：

```ini
[Unit]
Description= 说明

[Service]
Type=simple
WorkingDirectory= 执行路径
ExecStart= java -jar ***.jar
ExecReload=/bin/kill -HUP $MAINPID
Restart=on-failure
KillMode=process
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

原文链接：https://blog.csdn.net/csdn_zhangjinyu/article/details/122585191

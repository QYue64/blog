---
title: Linux Service/Systemctl 服务配置
description: service服务的配置
cover: "https://hailuo-image-algeng-data.oss-cn-wulanchabu.aliyuncs.com/image_inference_output%2Ftalkie%2Fprod%2Fimg%2F2026-04-14%2Fa6bddd67-739e-43da-a0b9-8ef7f495596c_aigc.jpeg?Expires=1776267627&OSSAccessKeyId=LTAI5tB2SwrRwAtD23etQUbC&Signature=uSgUFyh3IOE0Y%2FpoDVhXE7osu0o%3D"
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

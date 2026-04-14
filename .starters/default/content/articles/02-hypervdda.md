---
title: Hyper-v 直通和卸载命令
description: Hyper-v 直通和卸载命令
cover: "https://hailuo-image-algeng-data.oss-cn-wulanchabu.aliyuncs.com/image_inference_output%2Ftalkie%2Fprod%2Fimg%2F2026-04-14%2Fd2430bd2-4183-4fde-996d-1f42f051c13e_aigc.jpeg?Expires=1776267546&OSSAccessKeyId=LTAI5tB2SwrRwAtD23etQUbC&Signature=u0VuYI5AJlxU1%2Fo2G83v1o52tOI%3D"
date: 2024-09-23
---




# Hyper-v 直通和卸载命令

"PCIROOT(0)#PCI(0600)#PCI(0000)"

### 下线设备

```powershell
Dismount-VMHostAssignableDevice -Force -LocationPath "位置路径"
```

### 分配设备给虚拟机

```powershell
Add-VMAssignableDevice -VMName "SA6400" -LocationPath "位置路径"
```

### 查看设备

```powershell
Get-VMAssignableDevice -VMName "SA6400"
```

### 卸载命令

```powershell
Remove-VMAssignableDevice -LocationPath "位置路径" -VMName "虚拟机名称"
```

### 重新挂载

```powershell
Mount-VMHostAssignableDevice -LocationPath "位置路径"
```

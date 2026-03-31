---
title: Hyper-v 直通和卸载命令
description: Hyper-v 直通和卸载命令
cover: https://image.baidu.com/search/down?url=https://tvax4.sinaimg.cn/wap720/006PuDzUgy1ht19cibhfxj32yo1o0b29.jpg
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

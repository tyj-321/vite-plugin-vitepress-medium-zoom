# pnpm依赖包管理



### pnpm简介

[`pnpm`](https://github.com/pnpm/pnpm)指的是`performant npm`(高性能的npm)，作为一个`javascript`的包管理安装工具，它能节约磁盘空间，并快速安装

### 使用

1、安装

```shell
npm install pnpm
```

2、初始化

```shell
pnpm init
```

3、下载依赖

```shell
pnpm install
```

### 优化磁盘空间的原理

pnpm使用软硬链接来管理`node_modules`目录，从而实现了不同项目中的依赖包的复用性，从而减少每次安装依赖包的时间和减少磁盘空间

- 硬链接(hard link)，如下图，当文件A和文件B都指向磁盘中的某一段数据的存储空间地址，则此时两个文件之间则建立硬链接关系

![硬链接](../imgs/use-pnpm/硬链接.png)

- 软链接(symbol link)，如下图，当文件A指向磁盘中的某一段数据的存储空间地址，文件B又指向文件A，此时两个文件之间则建立软链接关系

![软链接](../imgs/use-pnpm/软链接.png)
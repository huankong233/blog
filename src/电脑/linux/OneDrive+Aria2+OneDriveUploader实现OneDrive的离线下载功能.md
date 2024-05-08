---
title: OneDrive的离线下载
author: huan_kong
createTime: 2022/01/15 11:06:42
permalink: /article/300avy1y/
tags:
  - 电脑
  - linux
---

## 1.安装 `Aira2`

```sh
wget git.io/aria2.sh
```

## 2.安装 `OneDriveUploader`

### 2.1 下载程序

```sh
# 64位系统下载
wget https://raw.githubusercontent.com/MoeClub/OneList/master/OneDriveUploader/amd64/linux/OneDriveUploader -P /usr/local/bin/
# 32位系统下载
wget https://raw.githubusercontent.com/MoeClub/OneList/master/OneDriveUploader/i386/linux/ OneDriveUploader -P /usr/local/bin/
# arm架构下载
wget https://raw.githubusercontent.com/MoeClub/OneList/master/OneDriveUploader/arm/linux/OneDriveUploader -P /usr/local/bin/
```

安装完成后, 运行添加运行权限

```sh
chmod +x /usr/local/bin/OneDriveUploader
```

### 2.2 获取 Token

```sh
# 国际版, 个人版(家庭版)
https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=78d4dc35-7e46-42c6-9023-2d39314433a5&amp;response_type=code&amp;redirect_uri=http://localhost/onedrive-login&amp;response_mode=query&amp;scope=offline_access%20User.Read%20Files.ReadWrite.All

# 中国版(世纪互联)
https://login.chinacloudapi.cn/common/oauth2/v2.0/authorize?client_id=dfe36e60-6133-48cf-869f-4d15b8354769&amp;response_type=code&amp;redirect_uri=http://localhost/onedrive-login&amp;response_mode=query&amp;scope=offline_access%20User.Read%20Files.ReadWrite.All
```

记录跳转的连接

### 2.3 初始化程序

在浏览器地址栏中获取以 `http://loaclhost` 开头的整个 `url` 内容

替换掉命令中的 `url` 三个字母, 每次产生的 `url` 只能用一次

提示 `Init config file: '/path/to/auth.json'` 则成功

```sh
# 国际版
OneDriveUploader -a "url"
# 个人版(家庭版)
OneDriveUploader -ms -a "url"
# 中国版(世纪互联)
OneDriveUploader -cn -a "url"
```

## 3.配置自动上传

进入目录 `/root/.aria2c` 打开文件 `clean.sh` 编辑内容为:

```sh
GID="$1";
FileNum="$2";
File="$3";
MaxSize="15728640";
Thread="3";  #默认3线程, 自行修改, 服务器配置不好的话, 不建议太多
Block="20";  #默认分块20m, 自行修改
RemoteDIR="";  #上传到Onedrive的路径, 默认为根目录, 如果要上传到MOERATS目录, ""里面请填成MOERATS
LocalDIR="/root/downloads/";  #Aria2下载目录, 记得最后面加上/
Uploader="/usr/local/bin/OneDriveUploader";  #上传的程序完整路径, 默认为本文安装的目录
Config="/root/auth.json";  #初始化生成的配置auth.json绝对路径, 参考第3步骤生成的路径


if [[ -z $(echo "$FileNum" |grep -o '[0-9]*' |head -n1) ]]; then FileNum='0'; fi
if [[ "$FileNum" -le '0' ]]; then exit 0; fi
if [[ "$#" != '3' ]]; then exit 0; fi

function LoadFile(){
  if [[ ! -e "${Uploader}" ]]; then return; fi
  IFS_BAK=$IFS
  IFS=$'\n'
  tmpFile="$(echo "${File/#$LocalDIR}" |cut -f1 -d'/')"
  FileLoad="${LocalDIR}${tmpFile}"
  if [[ ! -e "${FileLoad}" ]]; then return; fi
  ItemSize=$(du -s "${FileLoad}" |cut -f1 |grep -o '[0-9]*' |head -n1)
  if [[ -z "$ItemSize" ]]; then return; fi
  if [[ "$ItemSize" -ge "$MaxSize" ]]; then
    echo -ne "\033[33m${FileLoad} \033[0mtoo large to spik.\n";
    return;
  fi
  ${Uploader} -c "${Config}" -t "${Thread}" -b "${Block}" -s "${FileLoad}" -r "${RemoteDIR}"
  if [[ $? == '0' ]]; then
    rm -rf "${FileLoad}";
  fi
  IFS=$IFS_BAK
}
LoadFile;
```

然后用 `bash` 先测试一下, 如果没有输出就表示成功了, 要是报错提示 `\r` 什么的

就安装一下 `dos2unix`

## 4.dos2unix安装

```sh
yum -y install dos2unix
```

安装完成后,运行

```sh
dos2unix clean.sh
```

然后再用 `bash` 测试一下即可.
这时就可以打开我们的 `Aira2` 的可视化窗口下载一个应用试试看了~

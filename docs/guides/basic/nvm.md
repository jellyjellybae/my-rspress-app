# node-版本管理
今天折腾了一下node版本管理。
 使用nvm进行版本管理,但是在实行命令的过程中出现了很多错误。

```bash
➜  ~ node -v
v16.20.0
➜  ~ nvm ls
  
  ->       system
  iojs -> N/A (default)
  node -> stable (-> N/A) (default)
  unstable -> N/A (default)
➜  ~ nvm install latest
	Version 'latest' not found - try `nvm ls-remote` to browse available versions.
```

在nvm github上找到的命令

```bash
#To get the latest LTS version of node and migrate your existing installed packages, use
nvm install 'lts/*' --reinstall-packages-from=current
```

```bash
➜  ~ nvm ls
         v16.20.1
  ->     v18.16.1
           system
  default -> lts/* (-> v18.16.1)
  iojs -> N/A (default)
  unstable -> N/A (default)
  node -> stable (-> v18.16.1) (default)
  stable -> 18.16 (-> v18.16.1) (default)
  lts/* -> lts/hydrogen (-> v18.16.1)
  lts/argon -> v4.9.1 (-> N/A)
  lts/boron -> v6.17.1 (-> N/A)
  lts/carbon -> v8.17.0 (-> N/A)
  lts/dubnium -> v10.24.1 (-> N/A)
  lts/erbium -> v12.22.12 (-> N/A)
  lts/fermium -> v14.21.3 (-> N/A)
  lts/gallium -> v16.20.1
  lts/hydrogen -> v18.16.1
```

这条语句同时会把之前安装过的版本也移植到nvm,但是个人还是重新用nvm装了之前的版本
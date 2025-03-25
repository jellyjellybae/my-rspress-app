# 通过home brew安装MongoDB

1.打开[官网](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)
前提是已经安装了home brew
打开终端
对照官网的内容遵循指令安装
1.安装相关工具
```
brew tap mongodb/brew
```
2.更新brew
```
brew update
```
3.安装community
```
brew install mongodb-community@6.0
```
可以通过mongod --version 查看版本号码
```
➜  ~ mongod --version
db version v6.0.1
Build Info: {
    "version": "6.0.1",
    "gitVersion": "32f0f9c88dc44a2c8073a5bd47cf779d4bfdee6b",
    "modules": [],
    "allocator": "system",
    "environment": {
        "distarch": "x86_64",
        "target_arch": "x86_64"
    }
}
```

4.开启关闭服务
```
brew services start mongodb-community@6.0
```
5.查看端口
这时用的指令是
```
mongosh
```
以往是mongo

回车后会显示默认端口的内容
关闭服务
```
brew services stop mongodb-community@6.0
```
关闭后链接就失效了**connect ECONNREFUSED**
```
➜  ~ mongosh
Current Mongosh Log ID:	632465f5d158450de05f617c
Connecting to:		mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4
MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017
```
6.强制关闭
```
➜  ~ mongosh
Current Mongosh Log ID:	632454212e
Connecting to:		mongodb://127.0.0.1:27017/?d
.
.
.
test> db.adminCommand({shutdown:1})
MongoNetworkError: connection 1 to 127.0.0.1:27017 closed
test> exit()
```
7.修改端口
比如我们修改为 27020
此语句的详细可查看官网
config 的位置如果电脑是**M1 chip**就是
```
mongod --config /opt/homebrew/etc/mongod.conf --fork --port XXXXX
```

```
➜  ~ mongod --config /usr/local/etc/mongod.conf --fork --port 27020
about to fork child process, waiting until server is ready for connections.
forked process: 16335
child process started successfully, parent exiting
```
想要查看这个端口的相关内容不要用 mongosh
要用 
```
mongosh --port 27020
```

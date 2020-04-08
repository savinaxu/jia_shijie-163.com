# 面试基础

1. 在terminal里面，创建一个面试基础的folder， 然后在terminal里面打 
```
git clone https://github.com/savinaxu/pre-interview.git
```
2. clone好之后，在terminal里面cd到这个刚刚clone好的folder
```
cd pre-interview
```
3. 然后在terminal里面打

Window系统：`npm install -g jest`

Mac系统： `sudo npm install -g jest`

打完之后terminal会问你要密码，输入你电脑密码然后按enter

这个步骤是帮你下载并安装jest到你电话里面

4. 安装好之后,cd到exercises folder
```
cd exercises
```
然后再在terminal里面打`jest`,你就能够运行tests了

如果你想单独运行某个folder里面的tests，用reviersestring作为例子，你可以打
```
jest reversestring/test.js --watch
```

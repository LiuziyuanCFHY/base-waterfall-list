# component

KRN React Native Library Template

## 安装

```sh
yarn add component
```

## 开发

在 `src` 目录写库的源代码，然后在 `example` 目录写调试的示例代码用于调试，运行 `yarn start` 命令启动调试，跑示例代码

## 构建

本地运行 `yarn prepare` 进行构建，构建完成后会生成 `lib` 目录

## 发布

当开发差不多的时候，需要进行发布到 npm，发布流程如下：

### 登陆 npm

要确保本地已经登录快手源的 npm 平台，登陆步骤参考：[登陆操作手册](https://docs.corp.kuaishou.com/d/home/fcACsY1CghZYwaoBJUd5vI-C_)

> 使用 `npm config get registry` 命令查看 npm 源是否为 `https://npm.corp.kuaishou.com`

> 使用 `npm set registry https://npm.corp.kuaishou.com && yarn config set registry https://npm.corp.kuaishou.com` 命令设置 npm 源为快手源

### 更新版本号

发布之前我们需要更新 npm 包的版本号，有以下方式可以更新：

- 使用 npm version [major/minor/patch/自定义版本号] 命令升级版本号，此命令会创建一次 commit，方便以后追溯，要保证运行前本地的所有代码已经提交。这里使用 `npm version major` 会更新一个大版本号，例如从 `1.0.0` -> `2.0.0`；`npm version minor` 会更新一个中版本号，例如 `1.0.0` -> `1.1.0`；`npm version patch` 会更新一个小版本号，例如 `1.0.0` -> `1.0.1`；使用 `npm version 1.0.1-alpha.1` 会直接更新到自定义的版本号；

- 直接修改 `package.json` 中的 `version` 字段（不推荐）

### 发布到 npm

版本号更新完成后可以执行发布了，我们使用 `npm publish`，直接执行会发布到最新版本，即 latest 标签上，用户执行 `yarn add [package]` 会安装到。

如果我们希望发布 alpha 版本或 beta 版本，那么我们可以使用 `npm publish --tag alpha` 或 `npm publish --tag beta`，此时如果用户想要安装这个版本，就需要 `yarn add [package]@alpha` 或 `yarn add [package]@beta` 才能安装到。

## License

MIT

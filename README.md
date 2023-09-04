# @sxwy/cli

前端项目脚手架

## 技术栈

- 运行环境：Node >= 16
- 开发框架：TypeScript + Babel
- 依赖管理：Yarn

## 项目结构

```shell
├── .husky                            # git hooks 执行脚本
├── .vscode                           # vscode 配置
├── es                                # bebal 编译文件
├── example                           # 测试用例
├── src                               # 源代码
│   ├── index.ts                      # 入口
├── .babelrc.cjs                      # babel 配置
├── .cicd                             # cicd 触发文件
├── .commitlintrc.cjs                 # commitlint 配置
├── .editorconfig                     # 编辑器配置
├── .eslintignore                     # eslint 忽略配置
├── .eslintrc.cjs                     # eslint 配置
├── .gitignore                        # git 忽略配置
├── .lintstagedrc.cjs                 # git 提交校验配置
├── .npmrc                            # npm 配置
├── .nvmrc                            # nvm 配置
├── .prettierignore                   # prettier 忽略配置
├── .prettierrc.cjs                   # prettier 配置
├── .releaserc.cjs                    # release 配置
├── .stylelintignore                  # stylelint 忽略配置
├── .stylelintrc.cjs                  # stylelint 配置
├── CHANGELOG.md                      # 版本变更记录
├── LICENSE                           # 许可证
├── package.json                      # 项目配置
├── README.md                         # 开发说明
├── tsconfig.json                     # typescript 配置
├── tsconfig.types.json               # typescript 类型配置
└── yarn.lock                         # 项目版本锁
```

## 开发规范

请严格遵循 [前端开发规范](https://sxwy.github.io/standard/)

## 开发说明

- 运行 SDK
  ```shell
  yarn
  yarn dev
  ```

## 发布说明

- 发布 npm 需合并到 beta/master 分支，请参照 [前端版本管理](https://sxwy.github.io/standard/rules/project/version.html) 中的基础库版本，再执行以下命令

  ```shell
  yarn release
  ```

## 相关链接

- [使用文档](http://10.107.147.97:38000/standard/rules/project/template.html#脚手架)

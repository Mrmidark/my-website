# 管理系统

包含档案管理、财务公开和问题反馈的网站系统。

## 功能

- **档案管理** - 管理系统档案（需登录）
- **财务公开** - 查看财务收支（需登录）
- **问题反馈** - 提交问题和建议（公开）

## 本地开发

```bash
npm install
npm run dev
```

打开 http://localhost:3000

## 登录方式

1. **密码登录** - 测试密码: `admin123`
2. **GitHub登录** - 需配置环境变量

## 部署到 Vercel

1. 将代码推送到 GitHub
2. 访问 https://vercel.com 导入项目
3. 配置环境变量（如需GitHub登录）:

```
AUTH_GITHUB_ID=你的GitHub OAuth App ID
AUTH_GITHUB_SECRET=你的GitHub OAuth App Secret
AUTH_SECRET=随机字符串（至少32字符）
```

4. 点击部署

## 生成 AUTH_SECRET

```bash
openssl rand -base64 32
```

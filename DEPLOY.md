# 个人品牌网站 — GitHub Pages 部署配置

## 一、部署前准备

### 1. 替换占位符
在部署前，需要替换以下占位符为真实信息：

| 占位符 | 位置 | 替换为 |
|---|---|---|
| `[Your Name]` | 已替换为 Eros Ye | ✅ 已完成 |
| `[your-linkedin]` | western-media-strategy.md | LinkedIn个人链接 |
| `[your-email]` | contact.html | 联系邮箱 |

### 2. 一键替换命令（部署前运行）
```bash
cd website
# 替换名字（把 YOUR_NAME 换成真实名字）
find . -name "*.html" -exec sed -i 's/\[Your Name\]/YOUR_NAME/g' {} \;
```

## 二、GitHub Pages 部署步骤

### Step 1: 创建 GitHub 仓库
1. 登录 github.com
2. 新建仓库，命名为: `YOUR_USERNAME.github.io`
3. 设置为 Public

### Step 2: 推送代码
```bash
cd /workspace/personal-brand-system/website
git init
git add .
git commit -m "Initial commit - personal brand website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

### Step 3: 启用 GitHub Pages
1. 进入仓库 Settings → Pages
2. Source 选择 "Deploy from a branch"
3. Branch 选择 "main" → "/ (root)"
4. 保存，等待1-2分钟

### Step 4: 验证
访问 `https://YOUR_USERNAME.github.io` 确认网站正常

## 三、后续绑定自定义域名（可选）

1. 购买域名（推荐 Namecheap / GoDaddy / 阿里云万网）
2. 在仓库 Settings → Pages → Custom domain 填入域名
3. 在域名DNS添加CNAME记录指向 `YOUR_USERNAME.github.io`
4. 启用 HTTPS

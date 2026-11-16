@echo off
chcp 936 >nul
cd /d "%~dp0"
title 上传代码到 GitHub
echo.
echo ================================================
echo   把本站代码上传到 GitHub
echo   仓库：magixboy-maker/mass-transfer-site
echo ================================================
echo.
git remote remove origin >nul 2>nul
git remote add origin https://github.com/magixboy-maker/mass-transfer-site.git
echo 远程地址已设为：
echo   https://github.com/magixboy-maker/mass-transfer-site.git
echo.
echo --------------------------------------------------
echo 接下来会弹出 GitHub 登录窗口，按下面做：
echo   1. 如果要求登录：输入 GitHub 账号和密码
echo   2. 如果显示授权页面：点绿色 Authorize / Continue
echo   3. 授权完把弹窗关掉，这个黑窗口会自己往下跑
echo --------------------------------------------------
echo.
pause
echo.
echo 正在上传，请稍等（代码约 500 个文件，第一次会慢一点）...
echo.
git push -u origin main
echo.
echo ================================================
echo 成功标志：出现 branch 'main' set up to track ...
echo 失败常见原因：仓库名不对，或仓库里已经有文件
echo ================================================
pause

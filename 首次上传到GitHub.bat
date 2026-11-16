@echo off
chcp 936 >nul
cd /d "%~dp0"
title 首次上传到 GitHub
echo.
echo ================================================
echo   把本站代码首次上传到你的 GitHub 仓库
echo   前提：已经在 GitHub 上建好空仓库 mass-transfer-site
echo ================================================
echo.
set /p GHUSER=请输入你的 GitHub 用户名（例如 jacklee）:
if "%GHUSER%"=="" goto err
echo.
git remote remove origin >nul 2>nul
git remote add origin https://github.com/%GHUSER%/mass-transfer-site.git
echo 远程地址已设为： https://github.com/%GHUSER%/mass-transfer-site.git
echo.
echo 下一步会弹出 GitHub 登录窗口，浏览器里登录并授权即可。
pause
git push -u origin main
echo.
echo ------------------------------------------------
echo 成功标志：出现 "branch 'main' set up to track" 字样
echo 失败常见原因：仓库名不是 mass-transfer-site，或仓库不是空的
echo ------------------------------------------------
pause
exit /b 0
:err
echo 用户名不能为空。
pause

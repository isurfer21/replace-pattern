@echo off
setlocal
for %%I in ("%~f0") do set "ScriptPath=%%~dpI"
rem echo %ScriptPath%
deno run --allow-read --allow-write "%ScriptPath%\replace-pattern.js" %*
endlocal